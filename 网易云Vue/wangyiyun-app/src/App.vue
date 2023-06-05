<template>
  <div class="a">
    <router-view></router-view>
    <Footer v-show="$store.state.FooterIsShow"></Footer>
  </div>
</template>

<script>
import Footer from './views/Footer'
import store from './store/index'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .icon{
    width: 0.6rem;
    height: 0.6rem;
  }
  .a{
    height: 100%;
    width: 100%;
    }
</style>
