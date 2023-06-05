<template>
  <div class="musicDetail">
    <img :src="musicInfo.al.picUrl" class="bigImg" />
    <div class="detailTop">
      <svg
        t="1668240622208"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1532"
        width="200"
        height="200"
        id="svg1"
        @click="backHome"
      >
        <path
          d="M793.92 285.44l-58.816-58.88L449.664 512l285.44 285.44 58.88-58.88L567.296 512l226.56-226.56zM306.88 256v512h83.2V256h-83.2z"
          fill="#ffffff"
          fill-opacity=".9"
          p-id="1533"
        ></path>
      </svg>
      <div class="info">
        <div class="runHorse">
          <h3 :style="{ animationDuration: move.length * 0.1 + 2 + 's' }">
            {{ musicInfo.al.name }}
          </h3>
        </div>
        <span v-for="(au, index) in musicInfo.ar" :key="au.id">{{
          au.name
        }}</span
        >>
      </div>
      <svg
        t="1668240676725"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1838"
        width="200"
        height="200"
        id="svg2"
      >
        <path
          d="M635.648 342.912a148.288 148.288 0 1 0-32.256-55.296l-215.04 125.44a148.288 148.288 0 1 0 0 201.152l215.04 125.376a148.288 148.288 0 1 0 32.32-55.232l-215.04-125.376a148.224 148.224 0 0 0 0-90.624l214.976-125.44z m108.928-184.96a84.288 84.288 0 1 1 0 168.64 84.288 84.288 0 0 1 0-168.576zM351.232 469.632a32.192 32.192 0 0 0 1.92 3.392 83.904 83.904 0 0 1-1.92 84.864 84.224 84.224 0 1 1 0-88.32z m309.12 315.52c0-13.952 3.328-27.072 9.28-38.656a33.28 33.28 0 0 0 4.544-7.744 84.224 84.224 0 0 1 154.752 46.4 84.288 84.288 0 0 1-168.64 0z"
          fill="#ffffff"
          fill-opacity=".9"
          p-id="1839"
        ></path>
      </svg>
    </div>
    <div
      class="musicContent"
      v-show="isDetailShow"
      @click="isDetailShow = false"
    >
      <svg
        t="1668244606507"
        class="icon"
        id="svg"
        viewBox="0 0 1142 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="15236"
        width="200"
        height="200"
      >
        <path
          d="M1053.73800438 959.55994675l-147.59929682-147.59929675c2.38063313-2.38063313 2.38063313-7.14190205 0-9.52253522l-132.12517606-170.21531948c14.2838041-15.47412067 13.09348491-39.28045734-1.19031658-53.56426146l-405.89806869-405.89806606 47.61267856-47.61267594c9.5225352-9.5225352 9.5225352-23.80633927 0-33.32887452-9.5225352-9.5225352-23.80633927-9.5225352-33.32887452 0l-76.18028148 76.18028154-94.03503799-94.0350353 38.09014078-38.09014079c9.5225352-9.5225352 9.5225352-23.80633927 0-33.3288745-8.33221863-8.33221863-24.99665588-8.33221863-33.32887185 0l-154.74119883 154.74119882c-4.76126891 4.76126891-7.14190205 10.71285178-7.14190206 16.66443724s2.38063313 11.90316831 7.14190206 16.66443726c4.76126891 4.76126891 10.71285178 7.14190205 16.66443721 7.14190208s11.90316831-2.38063313 16.66443465-7.14190208l38.09014337-38.09014073 94.03503536 94.0350353-72.60933183 72.60933184c-9.5225352 9.5225352-9.5225352 23.80633927 0 33.32887445 4.76126891 4.76126891 10.71285178 7.14190205 16.66443722 7.14189942s11.90316831-2.38063313 16.66443728-7.14189942l44.04172363-44.04172622 405.89806872 405.89806609c7.14190205 7.14190205 16.66443725 11.90316831 27.37728897 11.9031683 9.5225352 0 19.04507036-3.57094966 26.18697248-9.52253517l170.21531681 132.12517872c1.19031655 1.19031655 3.57094966 1.19031655 4.76126891 1.19031658s3.57094966-1.19031655 4.76126629-2.38063312l147.59929936 147.5992967c4.76126891 4.76126891 10.71285178 7.14190205 16.66443461 7.1419021s11.90316831-2.38063313 16.66443728-7.1419021c11.90316831-10.71285178 11.90316831-26.18697243 2.38063316-35.70950758z"
          p-id="15237"
        ></path>
      </svg>
      <div class="black"></div>
      <div class="white"></div>
      <img :src="musicInfo.al.picUrl" :class="animation" />
    </div>
    <div class="MusicLyrics" v-show="!isDetailShow" ref="music">
      <!-- 歌词的高亮效果要求：时间大于当前歌词的开始时间（time属性），小于当前歌词next属性（也就是下一句歌词的开始时间） -->
      <p
        ref="lrc"
        v-for="(item, index) in lrc"
        :key="index"
        :class="{active:(currentTime * 1000 >= item.time && currentTime * 1000 <= item.next)}"
      >
        {{ item.lrc }}
      </p>
    </div>
    <div class="detailBottom">
      <div class="top">
        <svg
          t="1668252228839"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1532"
          width="200"
          height="200"
        >
          <path
            d="M610.688 408.32l-98.56-199.68-98.56 199.68-220.48 32L352.64 595.84l-37.632 219.52 197.12-103.68 197.12 103.68-37.632-219.52 159.488-155.52-220.352-32z m319.36-18.24a19.2 19.2 0 0 1 10.688 32.768l-200.384 195.328 47.36 275.84a19.2 19.2 0 0 1-27.904 20.224l-247.68-130.24-247.68 130.24a19.2 19.2 0 0 1-27.904-20.224l47.296-275.84-200.384-195.328a19.2 19.2 0 0 1 10.624-32.768l276.928-40.256 123.84-250.88a19.2 19.2 0 0 1 34.432 0l123.904 250.88 276.928 40.256z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="1533"
          ></path>
        </svg>
        <svg
          t="1668252262526"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1742"
          width="200"
          height="200"
        >
          <path
            d="M480 544V960h64V544h298.048l-108.288 108.224 45.248 45.312 162.88-162.88a32 32 0 0 0 0-45.312l-162.88-162.88-45.248 45.312L842.048 480H544V64h-64v416H182.144l108.224-108.224L245.12 326.4 82.24 489.344a32 32 0 0 0 0 45.312l162.88 162.88 45.248-45.248L182.144 544H480z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="1743"
          ></path>
        </svg>
        <svg
          t="1668252276572"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1948"
          width="200"
          height="200"
        >
          <path
            d="M263.104 139.52a448 448 0 1 1 497.792 744.96A448 448 0 0 1 263.104 139.52zM352 352v320h320v-320h-320z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="1949"
          ></path>
        </svg>
        <svg
          t="1668252289310"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2158"
          width="200"
          height="200"
        >
          <path
            d="M448 336H256v-64h192v64z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2159"
          ></path>
          <path
            d="M96 160A32 32 0 0 1 128 128h768a32 32 0 0 1 32 32l0.064 288a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32V160z m64.064 256h704V192h-704v224zM256 752h192v-64H256v64z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2160"
          ></path>
          <path
            d="M96.064 576a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32V576z m64 256h704V608h-704V832z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2161"
          ></path>
        </svg>
        <svg
          t="1668252302835"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2370"
          width="200"
          height="200"
        >
          <path
            d="M512 576a177.92 177.92 0 1 0 0-355.84A177.92 177.92 0 0 0 512 576z m0-64a113.92 113.92 0 1 1 0-227.84A113.92 113.92 0 0 1 512 512z"
            fill="#ffffff"
            opacity=".9"
            p-id="2371"
          ></path>
          <path
            d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896z m319.68-235.2C734.464 670.528 626.24 640 512 640c-114.304 0-222.4 30.464-319.68 84.8a384 384 0 1 1 639.424 0z m-40.448 50.752A382.912 382.912 0 0 1 512 896c-110.08 0-209.28-46.272-279.232-120.448C318.72 729.472 412.992 704 512 704c99.008 0 193.28 25.472 279.232 71.552z"
            fill="#ffffff"
            opacity=".9"
            p-id="2372"
          ></path>
        </svg>
      </div>
      <div class="progress">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
      </div>
      <div class="bottom">
        <svg
          t="1668252349251"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2581"
          width="200"
          height="200"
        >
          <path
            d="M269.248 320l105.408-105.344-45.248-45.312-160 160a32 32 0 0 0 0 45.312l160 160 45.248-45.312L269.248 384H640a192 192 0 0 1 0 384H320v64h320a256 256 0 1 0 0-512H269.248z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2582"
          ></path>
        </svg>
        <svg
          t="1668252362441"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2787"
          width="200"
          height="200"
          @click="goPlay(-1)"
        >
          <path
            d="M256 896H192V128h64v768zM329.536 538.88a32 32 0 0 1 0-53.76L782.656 192a32 32 0 0 1 49.344 26.88v586.24a32 32 0 0 1-49.408 26.88l-453.12-293.12zM768 746.368V277.632L405.76 512 768 746.368z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2788"
          ></path>
        </svg>
        <svg
          t="1668252371705"
          class="icon"
          v-if="show"
          @click="playAudio"
          id="svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2993"
          width="200"
          height="200"
        >
          <path
            d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0z m-257.024 14.592L416.64 691.84a16.832 16.832 0 0 1-25.216-14.592V346.688c0-12.992 14.016-21.12 25.216-14.592l286.336 165.312a16.832 16.832 0 0 1 0 29.184z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="2994"
          ></path>
        </svg>
        <svg
          t="1668254598609"
          class="icon"
          v-else
          @click="playAudio"
          id="svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3615"
          width="200"
          height="200"
        >
          <path
            d="M960 512A448 448 0 1 1 64 512a448 448 0 0 1 896 0zM384 320v384h64V320H384z m256 0H576v384h64V320z"
            fill="#000000"
            fill-opacity=".9"
            p-id="3616"
          ></path>
        </svg>
        <svg
          t="1668252378066"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3203"
          width="200"
          height="200"
          @click="goPlay(1)"
        >
          <path
            d="M768 128h64v768h-64V128zM694.464 485.12a32 32 0 0 1 0 53.76L241.344 832A32 32 0 0 1 192 805.12V218.88A32 32 0 0 1 241.408 192l453.12 293.12zM256 277.632v468.736L618.24 512 256 277.632z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="3204"
            ref="pp"
          ></path>
        </svg>
        <svg
          t="1668252390032"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3409"
          width="200"
          height="200"
        >
          <path
            d="M896 288H128v-64h768v64zM896 544H128v-64h768v64zM128 800h768v-64H128v64z"
            fill="#ffffff"
            fill-opacity=".9"
            p-id="3410"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["musicInfo", "playAudio", "show",'addDuration'],
  data() {
    return {
      move: this.musicInfo.al.name,
      // 控制是歌词还是磁盘显示
      isDetailShow: true,
      num:0
    };
  },
  mounted() {
    this.addDuration();
  },
  methods: {
    ...mapMutations(["updataDetailShow", "updataAudio", "updataIndex"]),
    backHome() {
      this.isDetailShow = true;
      this.updataDetailShow(false);
    },
    // 上下首的播放
    goPlay(num) {
      let index = this.playListIndex + num;
      // console.log(this.playlist)
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index > this.playlist.length) {
        index = 0;
      }
      this.updataIndex(index);
    },
  },
  computed: {
    currentTime() {
      return this.currentTime;
    },
    animation() {
      if (this.show === true) {
        return "rote_stop";
      } else {
        return "rote_active";
      }
    },
    ...mapState(["lyrics", "currentTime", "playListIndex", "playlist",'duration']),
    lrc() {
      let arr;
      console.log(this.lyrics)
      if (this.lyrics.lyric ) {
        arr = this.lyrics.lyric.split(/[(\r\n)\r\n]+/).map((item) => {
          // 时
          let min = item.slice(1, 3);
          // 分
          let sec = item.slice(4, 6);
          // 秒
          let mill = item.slice(7, 10);
          // 歌词
          let lrc = item.slice(11, item.length);
          // 当前歌词在何时开始
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          return { min, sec, mill, lrc, time };
        });
      }
      // 设置歌词滚动应该有的时间属性
      arr.forEach((item, index) => {
        // 如果是最后一句歌词，那么就不应该有下一句歌词的开始时间
        if (index === arr.length - 1) {
          item.next = 0;
        } else {
          // 设置next属性，值为下一句歌词的开始时间
          item.next = arr[index + 1].time;
        }
      });
      return arr;
    },
  },
  watch: {
    // 监听当前歌曲播放时长
    currentTime(newValue) {
      // 找出带有active样式名的p标签
      this.$nextTick(()=>
      {
        let newArr = [
          this.$refs.lrc.filter((item) => {
            if (item._prevClass) {
              return item;
            }
          }),
        ];

        // console.log(this.$refs.music.scrollTop);
        // 如果高亮标签对顶的距离超过了260，那么将滚动条减去260，以此来维持高亮标签的固定
        if (newArr && newArr[0][0].offsetTop > 260) {
 
          this.$refs.music.scrollTop = newArr[0][0].offsetTop - 260;
        }
      })
      // 如果进度条到了最后，那么播放下一首
      if(newValue === this.duration)
      {
        if(this.playListIndex === this.playlist.length-1)
        {
          this.playListIndex = 0;
          // 因为监听了playListIndex，如果没变化就不会播放，最开始的默认列表只有一首歌，所以不调用播放的话，就不会有循环播放的效果
          this.playAudio();
        }
        else
        {
          this.updataIndex(this.playListIndex+1);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes move {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.musicDetail {
  width: 100%;
  .bigImg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(80px);
  }
  .detailTop {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.12rem 0 0.12rem 0;
    #svg1,
    #svg2 {
      flex: 10%;
      width: 1rem;
      height: 1rem;
    }
    .info {
      flex: 60%;
      margin-left: 0.2rem;
      .runHorse {
        width: 3rem;
        overflow: hidden;
        h3 {
          white-space: nowrap;
          // overflow: hidden;
          // text-overflow: ellipsis;
          font-size: 0.36rem;
          color: white;
          animation: move 3s infinite linear alternate;
        }
      }
      span {
        display: inline-block;
        margin-left: 0.1rem;
        font-size: 0.28rem;
      }
    }
  }
  .musicContent {
    position: relative;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.6rem;
    #svg {
      position: absolute;
      height: 2.5rem;
      width: 2.5rem;
      top: 0;
      left: 62%;
      transform: translateX(-50%);
      // transform-origin: 0,0;
      // transform: rotate(-10deg);
      // transition: all 2s;
    }
    .black {
      position: absolute;
      width: 4.6rem;
      height: 4.6rem;
      // background-image: linear-gradient(to left right,black,rgb(88, 86, 86));
      background-color: black;
      border-radius: 50%;
      top: 2.6rem;
    }
    .white {
      position: absolute;
      width: 3rem;
      height: 3rem;
      background-color: white;
      border-radius: 50%;
      top: 3.4rem;
    }
    img {
      position: absolute;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      top: 3.4rem;
      animation: rate 10s linear infinite;
    }
    .rote_active {
      animation-play-state: running;
    }
    .rote_stop {
      animation-play-state: paused;
    }
  }
  .detailBottom {
    width: 100%;
    .top {
      width: 100%;
      display: flex;
      justify-content: center;
      .icon {
        flex: 25%;
      }
    }
    .progress {
      margin-top: 0.4rem;
      width: 100%;
      margin-bottom: 0.2rem;
      .range{
        width: 100%;
      }
    }
    .bottom {
      margin-bottom: 0.2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        flex: 25%;
      }
      #svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }
  .MusicLyrics {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.32rem;
    overflow: scroll;
    p {
      color: rgb(188, 193, 197);
      margin-top: 0.4rem;
      white-space: nowrap;
      font-size: 0.3rem;
      // text-align: left;
    }
    .active {
      font-size: 0.4rem;
      color: aliceblue;
    }
  }
}
</style>