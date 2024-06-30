<!-- src/components/PhotoGallery.vue -->
<template>
    <div class="photo-gallery">
      <button @click="prevPhoto" class="nav-arrow left-arrow">❮</button>
      <img :src="require(`@/assets/photos/${photos[currentPhoto]}`)" alt="Photo" class="photo" />
      <button @click="nextPhoto" class="nav-arrow right-arrow">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [
          'gallery2.jpg',
          'gallery0.jpg',
          'gallery1.jpg',
          'gallery3.jpg',
        ],
        currentPhoto: 0
      };
    },
    methods: {
      prevPhoto() {
        this.currentPhoto = (this.currentPhoto > 0) ? this.currentPhoto - 1 : this.photos.length - 1;
      },
      nextPhoto() {
        this.currentPhoto = (this.currentPhoto < this.photos.length - 1) ? this.currentPhoto + 1 : 0;
      },
    },
  };
  </script>
  
  <style>
  .photo-gallery {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .photo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .nav-arrow {
    position: absolute;
    bottom: -75px;
    background: rgb(255, 195, 228);
    color: #fff;
    border: none;
    font-size: 2em;
    cursor: pointer;
  }
  
  .left-arrow {
    left: 5px;
  }
  
  .right-arrow {
    right: 5px;
  }
  </style>
  