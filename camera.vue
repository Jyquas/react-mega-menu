<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, ref, watch } from 'vue';
import {
  EventActions,
  defineComponents,
  type CameraSnapshotDetailType,
  type DocumentReaderCaptureWebComponent,
} from '@regulaforensics/vp-frontend-document-components';

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const elementRef = ref<DocumentReaderCaptureWebComponent | null>(null);

const containerStyle: CSSProperties = {
  display: 'flex',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
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

const listener = (data: CustomEvent<CameraSnapshotDetailType>) => {
  if (data.detail.action === EventActions.PROCESS_FINISHED) {
    const status = data.detail.data?.status;
    const isFinishStatus = status === 1;

    if (!isFinishStatus || !data.detail.data?.response) return;
    console.log(data.detail.data.response);
  }

  if (data.detail?.action === EventActions.CLOSE) {
    isOpen.value = false;
  }
};

onMounted(() => {
  defineComponents();
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
    <button v-else :style="buttonStyle" @click="isOpen = true">Open component</button>
  </div>
</template>
