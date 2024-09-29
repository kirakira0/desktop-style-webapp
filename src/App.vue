<template>
  <div id="app">
    <TaskBar :icons="apps" @open-app="openApp" />
    
    <!-- Loop over opened apps and dynamically select the component -->
    <component
      v-for="app in openedApps"
      :key="app.id"
      :is="app.component || 'WindowApp'"
      :app="app"
      @close-app="closeApp"
    />
  </div>
</template>

<script>
import TaskBar from './components/TaskBar.vue';
import WindowApp from './components/WindowApp.vue';  // Default window component
import PerformanceSchedule from './components/PerformanceSchedule.vue';  // Custom component for Performance Schedule

export default {
  components: {
    TaskBar,
    WindowApp,
    PerformanceSchedule,  // Register the custom component
  },
  data() {
    return {
      apps: [
        { id: 1, name: 'Performance Schedule', icon: 'calendar_month', component: 'PerformanceSchedule' },
        { id: 2, name: 'Photo Gallery', icon: 'photo_library' },
        { id: 3, name: 'Music Video', icon: 'music_video' },
        { id: 4, name: 'Shop', icon: 'shop' },
        { id: 5, name: 'Links', icon: 'link' },
        { id: 6, name: 'About', icon: 'favorite_border' },
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
