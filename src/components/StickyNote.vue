<!-- src/components/StickyNote.vue -->
<template>
    <div class="sticky-note">
      <h2 class="sticky-note-title">♡♡♡ Schedule ♡♡♡</h2>
      <table class="events-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{ event.date }}</td>
            <td>{{ event.name }}</td>
            <td>{{ event.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StickyNote',
    data() {
      return {
        events: [
          { id: 1, date: '2024-07-06', name: 'anime idaho', location: 'boise, id' },
          { id: 2, date: '2024-07-07', name: 'anime idaho', location: 'boise, id' },
          { id: 3, date: '2024-08-03', name: 'tba', location: 'tba' },
          { id: 4, date: '2024-08-03', name: 'tba', location: 'tba' },
          { id: 5, date: '2024-08-04', name: 'tba', location: 'tba' },
          { id: 6, date: '2024-09-07', name: 'tba', location: 'tba' },
          { id: 7, date: '2024-10-11', name: 'northwest idol fest', location: 'seattle, wa' },
          { id: 8, date: '2024-10-12', name: 'northwest idol fest', location: 'seattle, wa' },
          { id: 9, date: '2024-10-13', name: 'northwest idol fest', location: 'seattle, wa' },
          // Add more events as needed 
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sticky-note {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #ffffff;
    color:  #FF0B89;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
  }
  
  .sticky-note-title {
    margin-top: 0;
    font-size: 18px;
    text-align: center;
  }
  
  .events-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px; /* Adjusted font size */
  }
  
  .events-table th, .events-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #FF0B89;
  }
  
  .events-table th {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .events-table td {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>
  