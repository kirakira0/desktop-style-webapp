<!-- src/components/AppToolbar.vue -->
<template>
  <div class="app-toolbar">
    <div class="left-side">
      <Clock timeZone="Asia/Tokyo" />
      <span>Japan</span>
    </div>
    <div class="app-icons">
      <div
        v-for="(app, index) in openApps"
        :key="index"
        class="app-icon"
        @click="openApp(app)"
      >
        <img :src="app.icon" alt="App Icon" class="icon-image" />
      </div>
    </div>
    <div class="right-side">
      <Clock timeZone="America/Los_Angeles" />
      <span>California</span>
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
  props: {
    openApps: Array
  },
  methods: {
    openApp(app) {
      this.$emit('open-app', app);
    },
  },
};
</script>

<style scoped>
.app-toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(255, 195, 228);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.left-side,
.right-side {
  display: flex;
  align-items: center;
}

.app-icons {
  display: flex;
  align-items: center;
}

.app-icon {
  margin: 0 10px;
  padding: 10px;
  color: white;
  cursor: pointer;
}

.icon-image {
  width: 24px;
  height: 24px;
}

span {
  color: white;
  margin-left: 5px;
  margin-right: 15px;
}
</style>
