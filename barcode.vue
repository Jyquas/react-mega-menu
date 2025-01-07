<template>
  <div>
    <h2>Regula Barcode Scanner</h2>
    <video ref="videoElement" autoplay playsinline></video>
    <button @click="startScan">Start Scanning</button>

    <div v-if="barcodeData">
      <h3>Scanned Barcode Data:</h3>
      <pre>{{ barcodeData }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as regula from "@regulaforensics/document-reader-webclient";

export default {
  setup() {
    const barcodeData = ref(null);
    const videoElement = ref(null);
    let stream = null;
    let captureCanvas = document.createElement("canvas");

    const API_KEY = import.meta.env.VITE_REGULA_API_KEY;

    const startScan = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        videoElement.value.srcObject = stream;
      } catch (error) {
        console.error("Camera access error:", error);
      }
    };

    const captureFrame = async () => {
      if (!videoElement.value) return;

      captureCanvas.width = videoElement.value.videoWidth;
      captureCanvas.height = videoElement.value.videoHeight;
      const context = captureCanvas.getContext("2d");
      context.drawImage(videoElement.value, 0, 0, captureCanvas.width, captureCanvas.height);

      const imageBlob = await new Promise((resolve) => captureCanvas.toBlob(resolve, "image/png"));
      if (imageBlob) {
        processBarcode(imageBlob);
      }
    };

    const processBarcode = async (image) => {
      try {
        const imageArrayBuffer = await image.arrayBuffer();
        const request = new regula.ProcessRequest({
          images: [new Uint8Array(imageArrayBuffer)], // Correct way to pass images
          processParams: {
            scenario: regula.Scenario.FULL_AUTH, // Set the scenario correctly
          },
        });

        const response = await regula.recognize(API_KEY, request);
        console.log("Recognition Response:", response);
        if (response.text) {
          barcodeData.value = response.text;
        } else {
          barcodeData.value = "No barcode detected.";
        }
      } catch (error) {
        console.error("Barcode recognition error:", error);
      }
    };

    onMounted(() => {
      setInterval(() => {
        if (stream) captureFrame();
      }, 3000);
    });

    return {
      barcodeData,
      startScan,
      videoElement,
    };
  },
};
</script>

<style scoped>
video {
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid #ccc;
}
</style>
