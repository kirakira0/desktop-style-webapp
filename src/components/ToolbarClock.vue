<!-- src/components/Clock.vue -->
<template>
    <div class="clock">
      <div>{{ currentTime }}</div>
      <div class="date">{{ currentDate }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToolbarClock',
    props: {
      timeZone: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        currentTime: this.formatTime(new Date()),
        currentDate: this.formatDate(new Date()),
      };
    },
    created() {
      this.updateTime();
    },
    methods: {
    formatTime(date) {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: this.timeZone,
      };
      return new Intl.DateTimeFormat('en-GB', options).format(date);
    },
    formatDate(date) {
      const day = String(date.getUTCDate()).padStart(2, '0');
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = String(date.getUTCFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    },
    updateTime() {
      setInterval(() => {
        const now = new Date();
        this.currentTime = this.formatTime(now);
        this.currentDate = this.formatDate(now);
      }, 1000);
    },
  },
};
</script>
  
  <style scoped>
  .clock {
    color: white;
    margin: 0 10px;
    font-size: 0.8em;
    font-family: 'Arial', sans-serif;
    text-align: center;
  }
  .date {
    font-size: 0.8em; /* Smaller font size for the date */
  }
  </style>
  