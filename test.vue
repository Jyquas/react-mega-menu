<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, ref, watch } from 'vue';
import {
  EventActions,
  defineComponents,
  type CameraSnapshotDetailType,
  type DocumentReaderCaptureWebComponent,
} from '@regulaforensics/vp-frontend-document-components';

defineComponents(); // Ensure web components are defined

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const elementRef = ref<DocumentReaderCaptureWebComponent | null>(null);
const selectedFile = ref<File | null>(null);

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
};

const buttonStyle: CSSProperties = {
  padding: '10px 30px',
  color: 'white',
  fontSize: '16px',
  borderRadius: '2px',
  backgroundColor: '#bd7dff',
  border: '1px solid #bd7dff',
  cursor: 'pointer',
};

const listener = async (event: CustomEvent<CameraSnapshotDetailType>) => {
  if (event.detail.action === EventActions.PROCESS_FINISHED) {
    const status = event.detail.data?.status;
    if (status !== 1 || !event.detail.data?.response) return;

    const imageBase64 = event.detail.data.response.image;
    console.log("Captured Image:", imageBase64);

    await uploadImage(imageBase64);
  }

  if (event.detail?.action === EventActions.CLOSE) {
    isOpen.value = false;
  }
};

// Function to handle file selection and convert to Base64
const handleFileUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    selectedFile.value = input.files[0];

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === "string") {
        console.log("Uploaded Image Base64:", reader.result);
        await uploadImage(reader.result);
      }
    };
    reader.readAsDataURL(selectedFile.value);
  }
};

// Function to send the image to an API
const uploadImage = async (imageBase64: string) => {
  try {
    const response = await fetch("https://your-api.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageBase64 }),
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    console.log("Upload successful:", await response.json());
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('camera-snapshot', listener as EventListener);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('camera-snapshot', listener as EventListener);
  }
});

watch(isOpen, (newVal) => {
  if (newVal && elementRef.value) {
    elementRef.value.settings = {
      startScreen: true,
      changeCameraButton: true,
    };
  }
});
</script>

<template>
  <div :style="containerStyle" ref="containerRef">
    <camera-snapshot v-if="isOpen" ref="elementRef"></camera-snapshot>

    <button v-if="!isOpen" :style="buttonStyle" @click="isOpen = true">
      Open Camera
    </button>

    <input type="file" accept="image/*" @change="handleFileUpload" />

    <p v-if="selectedFile">Selected file: {{ selectedFile.name }}</p>
  </div>
</template>
