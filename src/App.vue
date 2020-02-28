<template>
  <div id="app">
    <h1>Paint in CSS</h1>
    <div class="nav">
      <router-link to="/">Cat</router-link> |
      <router-link to="/info">Info</router-link>
    </div>
    <router-view/>
    <div class="footer">Made with <Heart/> in Cologne</div>
  </div>
</template>

<script>
import Heart from './components/Heart.vue';

export default {
  components: {
    Heart
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: Amatic;
    font-display: swap;
    src: url('./assets/fonts/AmaticSC-Regular.ttf');
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: Amatic,sans-serif;
    font-size: 1.2em;
    text-align: center;

    background-color: $midnight-express;
    color: $zircon;

    *:focus {
      outline: none;
    }

    h1 {
      font-size: 2.5em;
      font-weight: bold;
    }

    h2 {
      font-size: 2em;
    }

    a {
      font-size: 1.5em;
      color: $moon-yellow;

      &.router-link-exact-active {
        color: $persian-red;
      }
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav {
      padding: 30px;
    }

    .footer {
      margin-top: auto;
      padding: 30px 0;
    }
  }

</style>