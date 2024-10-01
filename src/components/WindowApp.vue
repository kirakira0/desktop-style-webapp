<template>
  <div
    class="window"
    :style="{ top: currentPositionY + 'px', left: currentPositionX + 'px', zIndex: zIndex }"
    @mousedown="focusWindow"
  >
    <div class="title-bar" @mousedown.stop="focusWindow" @mousedown="startDrag">
      <span class="title">{{ app.name }}</span>
      <button class="close-button" @click="closeWindow">X</button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app', 'positionX', 'positionY', 'zIndex'],
  data() {
    return {
      isDragging: false,
      initialX: 0,
      initialY: 0,
      currentPositionX: this.positionX || 100,
      currentPositionY: this.positionY || 100,
    };
  },
  methods: {
    closeWindow() {
      this.$emit('close-app', this.app);
    },
    startDrag(event) {
      this.isDragging = true;
      this.initialX = event.clientX - this.currentPositionX;
      this.initialY = event.clientY - this.currentPositionY;
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

        if (newPositionX < 0) newPositionX = 0;
        if (newPositionY < 0) newPositionY = 0;
        if (newPositionX + windowWidth > viewportWidth) newPositionX = viewportWidth - windowWidth;
        if (newPositionY + windowHeight > viewportHeight) newPositionY = viewportHeight - windowHeight;

        this.currentPositionX = newPositionX;
        this.currentPositionY = newPositionY;
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
  width: 400px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
}

.title-bar {
  background-color: #FFC3E4;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: move;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 30px;
  user-select: none;
}

.title {
  flex-grow: 1;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  user-select: none;
}

.close-button {
  position: absolute;
  right: 10px;
  background: none;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 2px 8px;
  user-select: none;
}

.content {
  max-height: calc(100% - 40px);
  overflow-y: auto;
  padding: 10px;
}
</style>