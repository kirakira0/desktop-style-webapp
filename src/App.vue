<!-- src/App.vue -->
<template>
  <div id="app">
    <AppToolbar :open-apps="openApps" @open-app="openApp" />
    <StickyNote />
    <!-- Desktop Icons -->
    <div class="desktop-icons">
      <div
        v-for="icon in desktopIcons"
        :key="icon.name"
        class="desktop-icon"
        @click="openApp(icon.app)"
      >
        <img :src="icon.icon" alt="App Icon" class="icon-image" />
        <div class="icon-label">{{ icon.name }}</div>
      </div>
    </div>
    <div v-for="(app, index) in openApps" :key="app.name">
      <DraggableWindow
        :app="app"
        :zIndex="index + 1"
        @close-window="closeApp"
        @bring-to-front="bringAppToFront"
      />
    </div>
  </div>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue';
import DraggableWindow from './components/DraggableWindow.vue';
import StickyNote from './components/StickyNote.vue';

export default {
  name: 'App',
  components: {
    AppToolbar,
    DraggableWindow,
    StickyNote,
  },
  data() {
    return {
      openApps: [],
      openedAppNames: [], // Track opened app names
      desktopIcons: [
        { name: 'Photo Gallery', icon: require('./assets/icons/photos.png'), app: { name: 'Photo Gallery', icon: require('./assets/icons/photos.png') } },
        { name: 'Link Window', icon: require('./assets/icons/photos.png'), app: { name: 'Link Window', icon: require('./assets/icons/photos.png') } },
        // Add more icons for other apps as needed
      ],
    };
  },
  methods: {
    openApp(app) {
      if (!this.openedAppNames.includes(app.name)) {
        this.openApps.push(app);
        this.openedAppNames.push(app.name);
      } else {
        // Optionally bring the existing app to the front
        const existingAppIndex = this.openApps.findIndex((a) => a.name === app.name);
        if (existingAppIndex !== -1) {
          this.bringAppToFront(this.openApps[existingAppIndex]);
        }
      }
    },
    closeApp(app) {
      this.openApps = this.openApps.filter((a) => a !== app);
      this.openedAppNames = this.openedAppNames.filter((name) => name !== app.name);
    },
    bringAppToFront(app) {
      this.openApps = this.openApps.filter((a) => a !== app);
      this.openApps.push(app);
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
  position: relative;
}

.desktop-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Gap between icons */
}

.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icon-image {
  width: 60px; /* Adjust size of icon image */
  height: 60px; /* Adjust size of icon image */
}

.icon-label {
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
  color: black;
}
</style>
