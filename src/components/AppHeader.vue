<template>
  <nav class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <a v-if="!isLoggedIn" class="ui item" @click="login">Log In</a>
      <div v-else class="right menu">
        <router-link class="item" to="/">Gallery</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a class="item" @click="logout">Log Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'AppHeader',
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      ...mapActions(['login','logout'])
    }
  }
</script>
