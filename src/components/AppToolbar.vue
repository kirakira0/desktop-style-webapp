<!-- src/components/AppToolbar.vue -->
<template>
  <div class="app-toolbar">
    <div class="right-side">
      <Clock />
    </div>
  </div>
</template>

<script>
import Clock from './ToolbarClock.vue';

export default {
  name: 'AppToolbar',
  components: {
    Clock,
  },
};
</script>

<style scoped>
.app-toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #31b3ff;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align items to the right */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.right-side {
  display: flex;
  align-items: center;
  margin-right: 15px; /* Adjust right margin as needed */
}

span {
  color: white;
  margin-left: 5px;
  margin-right: 15px;
}
</style>
