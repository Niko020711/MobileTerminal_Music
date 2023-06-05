<template>
  <div class="box">
    <div class="topTitle">
        <span class="span1">发现好歌单</span>
        <span class="span2">查看更多</span>
    </div>
    <div class="bottomContent">
        <van-swipe :loop="false" :width="150" class="my-swiper" :show-indicators="false">
            
            <van-swipe-item class="swiper-item" @click="routeMusicItem(music.id)" v-for="music,index in musicList" :key="music.id">
                <!-- <router-link :to="{path: '/MusicItem',query:{id: music.id}}"> -->
                    <img :src="music.picUrl">
                    <h3>{{music.name}}</h3>
                    <div class="num">
                        <svg t="1668070189888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="200" height="200"><path d="M513.8432 510.9248m-436.2752 0a436.2752 436.2752 0 1 0 872.5504 0 436.2752 436.2752 0 1 0-872.5504 0Z" fill="#C0EFFF" p-id="1289"></path><path d="M513.8432 510.9248m-321.4848 0a321.4848 321.4848 0 1 0 642.9696 0 321.4848 321.4848 0 1 0-642.9696 0Z" fill="#6FCBF6" p-id="1290"></path><path d="M195.584 555.8272a318.2592 276.5824 0 1 0 636.5184 0 318.2592 276.5824 0 1 0-636.5184 0Z" fill="#68BEF3" p-id="1291"></path><path d="M205.1584 600.6784a308.6848 231.68 0 1 0 617.3696 0 308.6848 231.68 0 1 0-617.3696 0Z" fill="#5CAAF0" p-id="1292"></path><path d="M221.952 645.5808a291.8912 186.7776 0 1 0 583.7824 0 291.8912 186.7776 0 1 0-583.7824 0Z" fill="#4F94EB" p-id="1293"></path><path d="M258.2016 705.792a255.6416 126.6176 0 1 0 511.2832 0 255.6416 126.6176 0 1 0-511.2832 0Z" fill="#3A8CE6" p-id="1294"></path><path d="M479.5904 641.8432c-9.984 0-20.0192-2.6112-29.1328-7.8848-18.2272-10.5472-29.1328-29.3888-29.1328-50.432V438.3232c0-21.0432 10.9056-39.8848 29.1328-50.432 18.2272-10.5472 39.9872-10.5472 58.2144 0l125.7472 72.6016c18.2272 10.5472 29.1328 29.3888 29.1328 50.432s-10.9056 39.8848-29.1328 50.432l-125.7472 72.6016c-9.1136 5.2224-19.0976 7.8848-29.0816 7.8848z m3.2256-197.9392v134.0416l116.0704-67.0208L482.816 443.904z m120.8832 69.7856z" fill="#FFFFFF" p-id="1295"></path></svg>
                        <span>{{handleNum(music.playCount)}}</span>
                    </div>
                <!-- </router-link> -->
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import {reqMusicList} from '../../api/home'
export default {
    name: 'MusicList',
    data() {
      return {
        limit: 10,
        musicList: []
      }
    },
    mounted()
    {
      this.getMusicList();
    },
    methods: {
      ...mapMutations(['updataClickPlayListId']),
      async getMusicList()
      {
        let result = await reqMusicList(this.limit);
        console.log(11111,result);
        if(result.status === 200)
        {
          this.musicList = result.data.result;
        }
      },
    //   处理播放量
      handleNum(num)
      {
        if(num >= 100000000)
        {
            return (num/100000000).toFixed(1) + '亿';
        }
        else if(num >= 10000)
        {
            return (num/10000).toFixed(1) + '万';
        }
      },
    //   编程路由跳转
      routeMusicItem(id)
      {
        this.$router.push({
            path: '/MusicItem',
            query: {
                id: id
            }
        })
        console.log(id);
        this.updataClickPlayListId(id);
      }
    }
}
</script>

<style lang="less" scoped>
    .box{
        // border-bottom: .002rem solid transparent;
        .topTitle{
        margin-top: .4rem;
        width: 100%;
        height: .8rem;
        .span1{
            float: left;
            font-size: .44rem;
            margin-left: .12rem;
            font-weight: 700;
            display: inline-block;
            margin-left: .12rem;
        }
        .span2{
            float: right;
            margin-right: .2rem;
            display: inline-block;
            height: .58rem;
            font-size: .34rem;
            line-height: .32rem;
            text-align: center;
            padding: .16rem;
            border: 1px solid rgb(120, 119, 119);
            border-radius: .26rem;
        }
    }
    .bottomContent{
        width: 100%;
        height: 4rem;
        margin-top: .2rem;
        .my-swiper{
            height: 100%;
            width: 100%;
            margin-top: .2rem;
            .swiper-item{
                position: relative;
                margin-right: .2rem;
                &:first-child{
                    margin-left: .2rem;
                }
                img{
                    width: 100%;
                    height: 70%;
                    border-radius: .4rem;
                }
                h3{
                    font-weight: 400;
                    font-size: .3rem;
                }
                .num{
                    position: absolute;
                    right: .2rem;
                    top: .2rem;
                    height: .4rem;
                    .icon{
                        width: .4rem;
                        height: .4rem;
                    }
                    span{
                        display: inline-block;
                        font-size: .32rem;
                        height: 100%;
                        line-height: .4rem;
                        margin-bottom: .3rem;
                        color: aliceblue;
                    }
                }
            }
        }
    }
    }
</style>