<template>
  <div>
    <TopNav></TopNav>
    <Swiper></Swiper>
    <DayCommon></DayCommon>
    <MusicList></MusicList>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import Swiper from '../components/home/Swiper.vue'
import DayCommon from '@/components/home/DayCommon.vue';
import MusicList from '@/components/home/MusicList.vue';
export default {
    name: 'home', 
    components: {
      TopNav,
      Swiper,
      DayCommon,
      MusicList
    }
}
</script>

<style>

</style>