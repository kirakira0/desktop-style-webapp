<template>
  <div id="app">
    <TaskBar :icons="apps" @open-app="openApp" />
    <WindowApp
      v-for="app in openedApps"
      :key="app.id"
      :app="app"
      @close-app="closeApp"
    />
  </div>
</template>

<script>
import TaskBar from './components/TaskBar.vue';
import WindowApp from './components/WindowApp.vue';

export default {
  components: {
    TaskBar,
    WindowApp,
  },
  data() {
    return {
      apps: [
        { id: 1, name: 'File', icon: 'folder' },
        { id: 2, name: 'Notes', icon: 'note' },
      ],
      openedApps: [],
    };
  },
  methods: {
    openApp(icon) {
      const appToOpen = this.apps.find(app => app.icon === icon.icon);
      if (appToOpen && !this.openedApps.includes(appToOpen)) {
        this.openedApps.push(appToOpen);
      } else {
        console.error('App not found or already open:', icon);
      }
    },
    closeApp(app) {
      this.openedApps = this.openedApps.filter(a => a.id !== app.id);
    },
  },
};
</script>
