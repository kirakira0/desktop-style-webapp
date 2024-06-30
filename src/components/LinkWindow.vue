<!-- src/components/LinkWindow.vue -->
<template>
    <div class="link-window">
      <div class="link-icons">
        <div v-for="link in links" :key="link.name" class="link-item">
          <div class="icon-placeholder"></div>
          <div class="link-name">{{ link.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LinkWindow',
    data() {
      return {
        links: [
          { name: 'Ko-fi', url: 'https://ko-fi.com' },
          { name: 'YouTube', url: 'https://youtube.com' },
          { name: 'Instagram', url: 'https://instagram.com' },
          { name: 'Shop', url: 'https://shop.com' },
          // Add more links as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .link-window {
    width: 300px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
  
  .link-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .link-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
  
  .icon-placeholder {
    width: 50px;
    height: 50px;
    background-color: lightgray;
    margin-bottom: 5px;
  }
  
  .link-name {
    font-size: 12px;
    text-align: center;
  }
  </style>
  