<template>
  <WindowApp :app="app" class="performance-schedule">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Event Name</th>
          <th>Location</th>
          <th>Live <br /> Performance?</th>
          <th>Meet <br /> & Greet?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in scheduleData" :key="index">
          <td>{{ row.date }}</td>
          <td>{{ row.eventName }}</td>
          <td>{{ row.location }}</td>
          <td class="centered">
            <span v-if="row.live === 'yes'" class="checkmark">&#10004;</span>
            <span v-else class="exmark">&#10008;</span>
          </td>
          <td class="centered">
            <span v-if="row.meetAndGreet === 'yes'" class="checkmark">&#10004;</span>
            <span v-else class="exmark">&#10008;</span>
          </td>
        </tr>
      </tbody>
    </table>
  </WindowApp>
</template>

<script>
import WindowApp from './WindowApp.vue';
import scheduleData from '@/data/schedule.csv'; // Import the CSV file directly

export default {
  props: ['app'],
  components: {
    WindowApp,
  },
  data() {
    return {
      scheduleData: [],
    };
  },
  mounted() {
    this.loadCSV();
  },
  methods: {
    loadCSV() {
      this.scheduleData = scheduleData.map(row => ({
        date: row.Date,
        eventName: row['Event Name'],
        location: row['Location'],
        live: row['Live Performance'].toLowerCase(),
        meetAndGreet: row['Meet and Greet'].toLowerCase(),
      }));
      console.log('Loaded Schedule Data:', this.scheduleData);
    },
  },
};
</script>

<style scoped>
.performance-schedule {
  /* Make the window larger */
  width: 800px;  /* Adjust width as necessary */
  height: auto;  /* Adjust height automatically based on content */
}

table {
  width: 100%;
  height: 100%;  /* Fill the available height */
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 4px;  /* Reduced padding for smaller text */
  font-size: 0.8em;  /* Smaller text size */
}

th {
  background-color: #FFC3E4;
}

.centered {
  text-align: center;  /* Center the checkmarks/exmarks */
}

.checkmark {
  color: pink;
  font-size: 1.2em;  /* Adjust checkmark size */
}

.exmark {
  color: lightskyblue;
  font-size: 1.2em;  /* Adjust exmark size */
}

td:nth-child(1) {
  width: 50px; 
}

td:nth-child(2) {
  width: 100px; 
}

/* Make the middle column less wide */
td:nth-child(3) {
  width: 90px; 
}

/* Make the last two columns less wide */
td:nth-child(4),
td:nth-child(5) {
  width: 60px; 
}
</style>
