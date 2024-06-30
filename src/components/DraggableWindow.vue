<!-- src/components/DraggableWindow.vue -->
<template>
    <div
      class="draggable-wrapper"
      :style="{ width: `${width}px`, height: `${height}px`, top: `${top}px`, left: `${left}px`, zIndex: zIndex }"
      @mousedown.prevent="bringToFront"
    >
      <div class="window">
        <div class="window-header" @mousedown="initDrag">
          <span class="window-title">{{ app.name }}</span>
          <button @click="closeWindow">X</button>
        </div>
        <div class="window-content">
          <component :is="appComponent" @photo-dimensions="updateWindowSize" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PhotoGallery from './PhotoGallery.vue';
  import LinkWindow from './LinkWindow.vue';
  
  export default {
    props: {
      app: Object,
      zIndex: Number,
    },
    data() {
      return {
        width: this.app.name === 'Photo Gallery' ? 300 : 300,
        height: this.app.name === 'Photo Gallery' ? 425 : 200,
        top: 100,
        left: 100,
        isDragging: false,
        dragStartX: 0,
        dragStartY: 0,
      };
    },
    computed: {
      appComponent() {
        if (this.app.name === 'Photo Gallery') {
          return PhotoGallery;
        } else if (this.app.name === 'Link Parfait') {
          return LinkWindow;
        } 
        else {
          return {
            template: `<div>{{ app.name }} is open!</div>`,
          };
        }
      },
    },
    methods: {
      closeWindow() {
        this.$emit('close-window', this.app);
      },
      initDrag(event) {
        this.isDragging = true;
        this.dragStartX = event.clientX - this.left;
        this.dragStartY = event.clientY - this.top;
        document.addEventListener('mousemove', this.onDrag);
        document.addEventListener('mouseup', this.stopDrag);
      },
      onDrag(event) {
        if (this.isDragging) {
          this.left = event.clientX - this.dragStartX;
          this.top = event.clientY - this.dragStartY;
        }
      },
      stopDrag() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.onDrag);
        document.removeEventListener('mouseup', this.stopDrag);
      },
      bringToFront() {
        this.$emit('bring-to-front', this.app);
      },
      updateWindowSize({ width, height }) {
        this.width = Math.max(width, this.width);
        this.height = Math.max(height, this.height);
      },
    },
  };
  </script>
  
  <style scoped>
  .draggable-wrapper {
    position: absolute;
    z-index: 1000;
  }
  
  .window {
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-color: rgb(255, 195, 228);;
    cursor: move;
  }
  
  .window-title {
    flex: 1; /* Allow the title to grow to take available space */
    text-align: center; /* Center align the title text */
  }
  
  .window-content {
    padding: 10px;
  }
  </style>
  