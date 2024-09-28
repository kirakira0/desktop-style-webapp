<template>
    <div class="youtube-window">
      <iframe
        class="youtube-video"
        :src="videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YouTubeWindow',
    data() {
      return {
        videoUrl: 'https://www.youtube.com/embed/yjJpKT_M0LA?start=8', // Correct embed URL with start time
      };
    },
    methods: {
      closeWindow() {
        this.$emit('close-window', { name: 'YouTube' });
      },
    },
  };
  </script>
  
  <style scoped>
  .youtube-window {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }
  
  .youtube-video {
    width: 100%;
    height: 100%;
  }
  </style>
  