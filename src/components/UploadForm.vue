<template>
  <div class="dropper">
    <input 
      type="file" 
      @change="uploadImages($event.target.files)" 
      multiple
      accept="image/*"
    />
    <span>Drop image here to upload it</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
  .dropper {
    align-items: center;
    border: 2px dashed #ddd;
    border-radius: 4px;
    display: flex;
    height: 30vh;
    justify-content: center;
    position: relative;
  }

  .dropper:hover {
    background-color: #eee;
  }
  
  .dropper input {
    height: 30vh;
    opacity: 0;
    position: absolute;
    width: 100%;
  }
</style>