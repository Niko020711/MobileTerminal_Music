<template>
  <div class="footer">
    <div class="footerLeft" @click="showPop(true)">
      <img :src="playlist[playListIndex].al.picUrl" width="50" height="50" />
      <div class="fontInfo">
        <h3>{{ playlist[playListIndex].al.name }}</h3>
        <span>左右滑动可听更多歌曲哦!</span>
      </div>
    </div>
    <div class="footerRight">
      <svg
        t="1668154972282"
        class="icon"
        id="svg1"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1236"
        width="200"
        height="200"
        @click="playAudio"
        v-if="show"
      >
        <path
          d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 51.2a375.466667 375.466667 0 1 0 0 750.933334 375.466667 375.466667 0 0 0 0-750.933334zM409.6 332.8l307.2 179.2-307.2 179.2V332.8z"
          fill="#333333"
          p-id="1237"
        ></path>
      </svg>
      <svg
        t="1668161565746"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2801"
        width="200"
        height="200"
        id="svg3"
        @click="playAudio" 
        v-else
      >
        <path
          d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
          p-id="2802"
        ></path>
      </svg>
      <svg
        t="1668154979421"
        class="icon"
        id="svg2"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1394"
        width="200"
        height="200"
      >
        <path
          d="M819.2 716.8V768H204.8v-51.2h614.4z m0-256V512H204.8v-51.2h614.4z m0-256V256H204.8V204.8h614.4z"
          fill="#333333"
          p-id="1395"
        ></path>
      </svg>
    </div>
    <Audio
      ref="audio"
      @timeupdate="updateTime"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playListIndex].id}.mp3`"
    ></Audio>
    <van-popup
    v-model="detailShow"
    position="right"
    @click-close-icon="closePop"
    :style="{ height: '100%',width: '100%' }"
    >
    <MusicDetail :musicInfo="playlist[playListIndex]" :playAudio="playAudio" :show="show" :addDuration="addDuration"></MusicDetail>
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapState, } from "vuex";
import MusicDetail from '../components/item/MusicDetail.vue'
export default {
  name: "Footer",
  updated()
  {
    this.$store.dispatch('getMusicLyics',this.playlist[this.playListIndex].id)
    // console.dir(this.$refs.audio,9999909090909);
    this.addDuration();
  },
  components: {
    MusicDetail
  },
  computed: {
    ...mapState(["playlist","show","playListIndex","detailShow",'lyrics']),
   
  },
  methods: {
    playAudio()
    {
      if(this.$refs.audio.paused)
        {
            this.$refs.audio.play();
            this.updataAudio(false);
        }
        else
        {
            this.$refs.audio.pause();
            this.updataAudio(true);
        }
    },
    showPop(tag)
    {
      this.updataDetailShow(tag);
    },
    closePop()
    {
      this.updataDetailShow(false);
    },
    ...mapMutations(["updataAudio","updataDetailShow",'updataMusicCurrentTime','updataDuration']),
    // 拿到歌曲播放的当前时间
    updateTime()
    {
      this.updataMusicCurrentTime(this.$refs.audio.currentTime);
    },
    addDuration()
    {
      this.updataDuration(this.$refs.audio.duration);
    }
  },
  watch: {
    playListIndex()
    {
      this.$refs.audio.autoplay = true;    //下标发生改变就自动播放音乐
      // 如果图标是暂停的，更改为播放
      if(this.$refs.audio.paused)
      {
        this.updataAudio(false);
      }
    },
    // 如果不监听playlist，那么当刷新后点击歌单中的第一首歌时，并不会播放
    // 因为默认的index就是0，所以仅监听index是不够的，还需要监听list
    // 一旦发生改变，那么改变图标，并自动播放
    playlist()
    {
      if(this.show)
      {
        this.$refs.audio.autoplay = true;
        this.updataAudio(false);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  background-color: white;
  width: 100%;
  // height: 1.4rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #999;
  padding: .2rem 0 .2rem 0;
  .footerLeft {
    flex: 60%;
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      margin-left: 0.24rem;
    }
    .fontInfo {
      margin-left: 0.3rem;
      span {
        display: inline-block;
        margin-top: 0.16rem;
        font-size: 0.22rem;
      }
    }
  }
  .footerRight {
    #svg1,
    #svg2 {
      margin-right: 0.3rem;
      width: 0.8rem;
      height: 0.8rem;
    }
    #svg3{
      margin-right: 0.36rem;
      margin-bottom: .06rem;
      width: 0.66rem;
      height: 0.66rem;
    }
  }
}
</style>