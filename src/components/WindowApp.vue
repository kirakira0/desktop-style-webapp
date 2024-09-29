<template>
  <div class="window" :style="{ top: positionY + 'px', left: positionX + 'px' }" @mousedown="focusWindow">
    <div class="title-bar" @mousedown="startDrag">
      <span class="title">{{ app.name }}</span> <!-- Add a class for title styling -->
      <button class="close-button" @click="closeWindow">X</button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app'],
  data() {
    return {
      isDragging: false,
      initialX: 0,
      initialY: 0,
      positionX: 100,  // Starting X position
      positionY: 100,  // Starting Y position
    };
  },
  methods: {
    closeWindow() {
      this.$emit('close-app', this.app);
    },
    startDrag(event) {
      this.isDragging = true;
      this.initialX = event.clientX - this.positionX;
      this.initialY = event.clientY - this.positionY;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    drag(event) {
      if (this.isDragging) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const windowWidth = this.$el.offsetWidth;
        const windowHeight = this.$el.offsetHeight;

        let newPositionX = event.clientX - this.initialX;
        let newPositionY = event.clientY - this.initialY;

        // Constrain to screen boundaries
        if (newPositionX < 0) newPositionX = 0;
        if (newPositionY < 0) newPositionY = 0;
        if (newPositionX + windowWidth > viewportWidth) newPositionX = viewportWidth - windowWidth;
        if (newPositionY + windowHeight > viewportHeight) newPositionY = viewportHeight - windowHeight;

        this.positionX = newPositionX;
        this.positionY = newPositionY;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    focusWindow() {
      this.$emit('focus-app', this.app);
    },
  },
};
</script>

<style scoped>
.window {
  width: 400px;  /* Adjust width as needed */
  height: 300px; /* Adjust height as needed */
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
  z-index: 100;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden; /* Ensure overflow is hidden */
}

.title-bar {
  background-color: #FFC3E4;  /* Updated header color */
  color: white;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: move;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.title {
  flex-grow: 1; /* Allow the title to take up available space */
  text-align: center; /* Center the title */
}

.close-button {
  background: none;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 2px 8px;
}

.content {
  max-height: calc(100% - 30px); /* Adjust for title bar height */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 10px;
}
</style>
