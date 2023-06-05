<template>
  <div>
    <div class="sreach">
      <svg
        t="1668340200250"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1866"
        width="200"
        height="200"
        @click="$router.go(-1)"
      >
        <path
          d="M896.597333 298.24a170.666667 170.666667 0 0 0-170.666666-170.666667h-170.666667a170.666667 170.666667 0 0 0-170.666667 170.666667 42.666667 42.666667 0 0 0 85.333334 0 85.333333 85.333333 0 0 1 85.333333-85.333333h170.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v426.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-170.666667a85.333333 85.333333 0 0 1-85.333333-85.333333 42.666667 42.666667 0 0 0-85.333334 0 170.666667 170.666667 0 0 0 170.666667 170.666666h170.666667a170.666667 170.666667 0 0 0 170.666666-170.666666v-426.666667z m-298.666666 213.333333a42.666667 42.666667 0 0 0-42.666667-42.666666h-298.666667v-128l-170.666666 170.666666 170.666666 170.666667v-128h298.666667a42.666667 42.666667 0 0 0 42.666667-42.666667z"
          fill="#000000"
          p-id="1867"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="NIKO"
        v-model="keyWord"
        @keydown.enter="keyDown"
      />
    </div>
    <div class="history">
      <p>历史</p>
      <span v-for="(item, index) in keyWordList" :key="index" @click="clickSearchMusic(item)">
        {{ item }}
      </span>
      <svg
        t="1668426051814"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2961"
        width="200"
        height="200"
        @click="deleteNameHistory"
      >
        <path d="M96 128h832v64H96z" fill="#54C3F1" p-id="2962"></path>
        <path
          d="M672 160h-64V96a32 32 0 0 0-32-32h-128a32 32 0 0 0-32 32v64H352V96a96 96 0 0 1 96-96h128a96 96 0 0 1 96 96zM160 256h64v640H160zM800 256h64v640h-64zM288 1024a128 128 0 0 1-128-128h64a64 64 0 0 0 64 64zM736 1024v-64a64 64 0 0 0 64-64h64a128 128 0 0 1-128 128zM288 960h448v64H288zM320 256h64v608H320zM480 256h64v608h-64zM640 256h64v608h-64z"
          fill="#54C3F1"
          p-id="2963"
        ></path>
      </svg>
    </div>
    <ul>
        <li v-for="(song, index) in searchMusic" :key="song.id">
          <span>{{ index + 1 }}</span>
          <div class="info" @click="updateMusic(song)">
            <div class="top">{{ song.al.name }}</div>
            <div class="bottom">
              <span  v-for="(ar) in song.ar" :key="ar.id">{{ ar.name }}</span>
            </div>
          </div>
          <svg
            t="1668148505055"
            class="icon"
            id="svg1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1247"
            width="200"
            height="200"
            :class="{show:song.mv!==0}"
          >
            <path
              d="M601.7024 602.5216m-212.7872 0a212.7872 212.7872 0 1 0 425.5744 0 212.7872 212.7872 0 1 0-425.5744 0Z"
              fill="#FF8080"
              p-id="1248"
            ></path>
            <path
              d="M387.9936 655.6672c-13.8752 0-27.6992-3.6352-40.3456-10.9568-25.2416-14.592-40.3456-40.704-40.3456-69.8368V455.2704c0-29.1328 15.0528-55.2448 40.3456-69.8368 25.2416-14.592 55.3984-14.592 80.64 0l103.6288 59.8016c25.2416 14.592 40.3456 40.704 40.3456 69.8368s-15.104 55.2448-40.3456 69.8368l-103.6288 59.8016a80.0512 80.0512 0 0 1-40.2944 10.9568z m0.1536-229.9904c-6.8096 0-12.1856 2.5088-14.8992 4.0448-4.4032 2.56-14.7456 10.1376-14.7456 25.4976v119.6544c0 15.36 10.2912 22.9376 14.7456 25.4976 4.4544 2.56 16.1792 7.68 29.44 0l103.6288-59.8016c13.312-7.68 14.7456-20.3776 14.7456-25.4976s-1.4336-17.8176-14.7456-25.4976L402.688 429.7728c-5.1712-3.0208-10.1888-4.096-14.5408-4.096z"
              fill="#512C56"
              p-id="1249"
            ></path>
            <path
              d="M910.5408 317.0304c-23.9104-13.824-52.48-13.824-76.4416 0l-55.3472 31.9488c-5.4272-75.6224-68.6592-135.5264-145.664-135.5264H231.5776c-80.5888 0-146.1248 65.536-146.1248 146.1248v311.04c0 80.5888 65.536 146.1248 146.1248 146.1248h401.5104c77.0048 0 140.2368-59.904 145.664-135.5264l55.3472 31.9488c11.9808 6.912 25.088 10.3424 38.1952 10.3424s26.2656-3.4304 38.1952-10.3424c23.9104-13.824 38.1952-38.5536 38.1952-66.2016V383.232c0.1024-27.648-14.1824-52.3776-38.144-66.2016z m-182.528 353.5872c0 52.3264-42.5472 94.9248-94.9248 94.9248H231.5776c-52.3264 0-94.9248-42.5984-94.9248-94.9248V359.5776c0-52.3264 42.5984-94.9248 94.9248-94.9248h401.5104c52.3264 0 94.9248 42.5472 94.9248 94.9248v311.04z m169.5744-23.7056c0 13.1584-8.8064 19.6608-12.5952 21.8624s-13.824 6.5536-25.2416 0l-80.5376-46.4896V407.8592l80.5376-46.4896c11.3664-6.5536 21.4528-2.2016 25.2416 0 3.7888 2.2016 12.5952 8.704 12.5952 21.8624v263.68z"
              fill="#512C56"
              p-id="1250"
            ></path>
          </svg>
          <svg
            t="1668148524993"
            class="icon"
            id="svg2"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1403"
            width="200"
            height="200"
          >
            <path
              d="M648.448 663.0912m-212.7872 0a212.7872 212.7872 0 1 0 425.5744 0 212.7872 212.7872 0 1 0-425.5744 0Z"
              fill="#FF8080"
              p-id="1404"
            ></path>
            <path
              d="M702.976 896.9728H326.0416c-87.5008 0-158.72-71.2192-158.72-158.72V291.6864c0-87.5008 71.2192-158.72 158.72-158.72h376.9344c87.5008 0 158.72 71.2192 158.72 158.72v446.5664c0 87.552-71.2192 158.72-158.72 158.72zM326.0416 184.1664c-59.2896 0-107.52 48.2304-107.52 107.52v446.5664c0 59.2896 48.2304 107.52 107.52 107.52h376.9344c59.2896 0 107.52-48.2304 107.52-107.52V291.6864c0-59.2896-48.2304-107.52-107.52-107.52H326.0416z"
              fill="#512C56"
              p-id="1405"
            ></path>
            <path
              d="M663.552 383.232H369.408c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h294.144c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6zM663.552 540.5696H369.408c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h294.144c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6zM487.0656 703.488H369.408c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h117.6576c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
              fill="#512C56"
              p-id="1406"
            ></path>
          </svg>

        </li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import {reqSearchMusic} from '../api/home'
export default {
  data() {
    return {
      keyWordList: [],
      keyWord: "",
      searchMusic: []
    };
  },
  mounted() {
    // 历史记录一般都需要在localStorage中
    this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
  },
  methods: {
    ...mapMutations(['pushPlayList']),
    async keyDown() {
      if(this.keyWord !== '')
      {
        // 先将数组中加入输入的值，然后判断在set中判断是否有重复的值
        this.keyWordList.unshift(this.keyWord);
        // 在set中不会有重复的value      去重
        this.keyWordList = [...new Set(this.keyWordList)];
        // 限制长度，如果大于10，则去掉最开始搜索的值
        if(this.keyWordList.length > 10)
        {
            this.keyWordList.splice(this.keyWordList.length-1,1);
        }
        localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
        let result = await reqSearchMusic(this.keyWord);
        console.log(result)
        if(result.status === 200)
        {
            this.searchMusic = result.data.result.songs;
        }
      }
      this.keyWord = "";
    },
    deleteNameHistory()
    {
        localStorage.removeItem('keyWordList');
        this.keyWordList = [];
    },
    async clickSearchMusic(item)
    {
        let result = await reqSearchMusic(item);
        console.log(result)
        if(result.status === 200)
        {
            this.searchMusic = result.data.result.songs;
        }
    },
    // 点击搜索出的歌曲播放
    updateMusic(item)
    {
        this.$store.commit('pushPlayList',item);
        this.$store.commit('updataIndex',this.$store.state.playlist.length-1);
    }
  },
};
</script>

<style lang="less" scoped>
.sreach {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  input {
    margin-left: 0.6rem;
    border: 0;
    border-bottom: 1px solid black;
    display: inline-block;
    height: 0.6rem;
    width: 5rem;
  }
  svg {
    margin-left: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
  }
}
.history {
  width: 100%;
  p {
    display: inline-block;
    font-weight: 700;
    font-size: 0.36rem;
    padding: 0.12rem;
    margin-left: 0.1rem;
  }
  span {
    display: inline-block;
    color: aliceblue;
    background-color: brown;
    font-size: 0.32rem;
    padding: 0.1rem;
    border-radius: 0.3rem;
    margin-left: 0.16rem;
    margin-top: .08rem;
  }
  svg {
    float: right;
    margin-right: 0.4rem;
    margin-top: 0.2rem;
  }
}
ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 0.8rem;
      .show{
        visibility: hidden;
      }
      span {
        flex: 10%;
        margin-left: 0.2rem;
      }
      .info {
        flex: 70%;
        .top {
          font-size: 0.36rem;
          font-weight: 700;
        }
        .bottom {
          span{
            color: cadetblue;
            float: left;
          }
        }
      }
        #svg1,
        #svg2 {
          width: 0.8rem;
          height: 0.8rem;
          margin-right: 0.3rem;
        }
        #svg1 {
          margin-left: 0.2rem;
        }
      
    }
  }
</style>