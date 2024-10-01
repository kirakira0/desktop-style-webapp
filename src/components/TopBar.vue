<template>
    <div class="top-bar">
      <div class="time-left">{{ losAngelesTime }}</div>
      <div class="time-right">{{ tokyoTime }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        losAngelesTime: '',
        tokyoTime: ''
      };
    },
    mounted() {
      this.updateTimes();
      setInterval(this.updateTimes, 1000); // Update every second
    },
    methods: {
      updateTimes() {
        // Los Angeles time (Pacific Time)
        const laOptions = {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        this.losAngelesTime = new Intl.DateTimeFormat('en-US', laOptions).format(new Date());
  
        // Tokyo time (Japan Time)
        const tokyoOptions = {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        this.tokyoTime = new Intl.DateTimeFormat('ja-JP', tokyoOptions).format(new Date());
      }
    }
  };
  </script>
  
  <style scoped>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 1000; /* Ensure it's on top */
    font-size: 14px;
  }
  
  .time-left, .time-right {
    display: inline-block;
  }
  
  .time-left {
    text-align: left;
  }
  
  .time-right {
    text-align: right;
  }
  </style>
  