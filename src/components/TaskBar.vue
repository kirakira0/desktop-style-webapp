<template>
    <div class="taskbar">
      <div v-for="icon in icons" :key="icon.id" class="icon" @click="openApp(icon)">
        <span class="material-icons icon-symbol">{{ icon.icon }}</span>
        <!-- Conditionally render the dot if the app is open -->
        <div v-if="isAppOpen(icon)" class="open-dot"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['icons', 'openedApps'],
    methods: {
      openApp(icon) {
        this.$emit('open-app', icon);
      },
      isAppOpen(icon) {
        // Check if the app is in the openedApps array
        return this.openedApps.some(app => app.id === icon.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .taskbar {
    position: fixed;
    bottom: 20px;  /* Adjusts the vertical distance from the bottom */
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFC3E4;  /* Updated background color */
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 25px;  /* Rounds the edges */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: width 0.3s ease;
    z-index: 1000;  /* Keeps the taskbar on top */
  }
  
  .icon {
    position: relative; /* So the dot can be positioned absolutely */
    width: 40px;  /* Width of the icon square */
    height: 40px;  /* Height of the icon square */
    background-color: white;  /* Background color of the icon */
    border-radius: 10px;  /* Rounds the edges */
    display: flex;
    justify-content: center;  /* Centers the icon horizontally */
    align-items: center;  /* Centers the icon vertically */
    margin: 0 5px;  /* Spacing between icons */
    cursor: pointer;  /* Change cursor to pointer */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* Add slight shadow */
    font-size: 24px;  /* Font size for the icon */
  }
  
  .icon-symbol {
    line-height: 40px;  /* Center the icon vertically */
  }
  
  .open-dot {
    position: absolute;
    top: -4px;  /* Shift the dot upwards slightly */
    right: -4px;  /* Shift the dot to the right slightly */
    width: 14px;  /* Increase the size of the dot */
    height: 14px; /* Increase the size of the dot */
    background-color: #00c3ff;  /* Updated dot color */
    border-radius: 50%;
  }
  </style>
  