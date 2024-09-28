<!-- src/components/ToolbarClock.vue -->
<template>
  <div class="clock">
    <div class="time">{{ time }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: 'ToolbarClock',
  data() {
    return {
      time: '',
      date: '',
    };
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.time = now.toLocaleTimeString([], { hour12: false });
      this.date = now.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
    },
  },
};
</script>

<style scoped>
.clock {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align text to the right */
  color: white;
}

.time {
  font-size: 22px;
}

.date {
  font-size: 16px; 
}

</style>
