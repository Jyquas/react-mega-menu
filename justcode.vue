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
import { defineComponent, ref, onMounted } from "vue";
import { ProcessRequest, Recognize } from "@regulaforensics/document-reader-webclient";

export default defineComponent({
  name: "BarcodeScanner",
  setup() {
    const barcodeData = ref(null);
    const videoElement = ref(null);

    let stream = null;
    let captureCanvas = document.createElement("canvas");

    const startScan = async () => {
      try {
        // Access user camera
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        videoElement.value.srcObject = stream;
      } catch (error) {
        console.error("Camera access error:", error);
      }
    };

    const captureFrame = async () => {
      if (!videoElement.value) return;

      // Capture an image from the video feed
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
      const request = new ProcessRequest({ processImage: true });
      request.images = [new Uint8Array(await image.arrayBuffer())];

      try {
        const response = await Recognize("YOUR_API_KEY", request); // Replace with your API key
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
      }, 3000); // Capture every 3 seconds
    });

    return {
      barcodeData,
      startScan,
      videoElement,
    };
  },
});
</script>

<style scoped>
video {
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid #ccc;
}
</style>
