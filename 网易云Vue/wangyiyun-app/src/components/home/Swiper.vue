<template>
  <div>
    <van-swipe :autoplay="3000" class="my-swiper" lazy-render>
      <van-swipe-item v-for="(image, index) in images.banners" :key="index" class="swiper-item">
        <img :src="image.pic" class="swiper-image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reqBannerList } from '@/api/home';
export default {
    name: 'swiper',
    data() {
      return {
        images: [],
   }
  },
  mounted()
  {
    this.getBannerList();
  },
  methods: {
    async getBannerList()
    {
      let result = await reqBannerList();
      console.log(result)
      if(result.status === 200)
      {
        this.images = result.data;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .my-swiper{
    width: 96%;
    margin: .2rem auto;
    border-radius: .4rem;
    .swiper-item
    {
      .swiper-image{
        width: 100%;
        height: 3rem;
      }
    }
  }
</style>