<template>
  <div id="app">
    <TaskBar :icons="apps" :openedApps="openedApps" @open-app="openApp" />

    <component
      v-for="app in openedApps"
      :key="app.id"
      :is="app.component || 'WindowApp'"
      :app="app"
      :position-x="app.positionX"
      :position-y="app.positionY"
      :z-index="app.zIndex"
      @close-app="closeApp"
      @focus-app="focusApp(app)"
    />
  </div>
</template>

<script>
import TaskBar from './components/TaskBar.vue';
import WindowApp from './components/WindowApp.vue';
import PerformanceSchedule from './components/PerformanceSchedule.vue';
import TopBar from './components/TopBar.vue';

export default {
  components: {
    TaskBar,
    TopBar,
    WindowApp,
    PerformanceSchedule,
  },
  data() {
    return {
      apps: [
        { id: 1, name: 'Performance Schedule', icon: 'calendar_month', component: 'PerformanceSchedule', positionX: 100, positionY: 100, zIndex: 1 },
        { id: 2, name: 'Photo Gallery', icon: 'photo_library', positionX: 200, positionY: 150, zIndex: 1 },
        { id: 3, name: 'Music Video', icon: 'music_video', positionX: 300, positionY: 200, zIndex: 1 },
        { id: 4, name: 'Shop', icon: 'shop', positionX: 400, positionY: 250, zIndex: 1 },
        { id: 5, name: 'Links', icon: 'link', positionX: 500, positionY: 300, zIndex: 1 },
        { id: 6, name: 'About', icon: 'favorite_border', positionX: 600, positionY: 350, zIndex: 1 },
      ],
      openedApps: [],
      highestZIndex: 1, // This will keep track of the highest z-index
    };
  },
  methods: {
    openApp(icon) {
      const appToOpen = this.apps.find(app => app.icon === icon.icon);
      if (appToOpen && !this.openedApps.some(a => a.id === appToOpen.id)) {
        // Push the app and set its zIndex to the current highest value
        appToOpen.zIndex = ++this.highestZIndex;
        this.openedApps.push({ ...appToOpen });
      } else {
        console.error('App not found or already open:', icon);
      }
    },
    closeApp(app) {
      this.openedApps = this.openedApps.filter(a => a.id !== app.id);
    },
    focusApp(app) {
      app.zIndex = ++this.highestZIndex; // Bring the clicked app to the front
    },
  },
};
</script>

<style>
* {
  margin: 0;
}

#app {
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url('@/assets/desktopBG.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
}

html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>
