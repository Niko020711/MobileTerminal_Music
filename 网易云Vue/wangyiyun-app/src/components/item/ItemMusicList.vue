<template>
  <div>
    <div class="musicList">
      <div class="topInfo">
        <div class="left">
          <svg
            t="1668145545429"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1108"
            width="200"
            height="200"
          >
            <path
              d="M519.1168 958.8736c-238.1824 0-431.9232-193.7408-431.9232-431.9232s193.7408-431.9232 431.9232-431.9232 431.9232 193.7408 431.9232 431.9232-193.792 431.9232-431.9232 431.9232z m0-802.4064c-204.288 0-370.4832 166.1952-370.4832 370.4832s166.1952 370.4832 370.4832 370.4832 370.4832-166.1952 370.4832-370.4832-166.1952-370.4832-370.4832-370.4832z"
              fill="#283033"
              p-id="1109"
            ></path>
            <path
              d="M471.8592 695.1936c-11.9808 0-23.9616-3.1744-34.8672-9.472-21.8624-12.5952-34.8672-35.1744-34.8672-60.416V428.544c0-25.2416 13.056-47.8208 34.8672-60.416 21.8624-12.5952 47.9232-12.5952 69.7856 0l170.3936 98.3552c21.8624 12.5952 34.8672 35.1744 34.8672 60.416s-13.056 47.8208-34.8672 60.416l-170.3936 98.4064a69.41184 69.41184 0 0 1-34.9184 9.472z m0-274.9952c-1.6896 0-3.072 0.5632-4.1984 1.1776-1.8944 1.0752-4.1472 3.2256-4.1472 7.2192v196.7616c0 3.9936 2.2528 6.0928 4.1472 7.2192 1.8944 1.0752 4.864 1.9968 8.3456 0l170.3936-98.4064c3.4304-1.9968 4.1472-5.0176 4.1472-7.2192s-0.7168-5.2224-4.1472-7.2192L476.0064 421.376c-1.4848-0.8704-2.8672-1.1776-4.1472-1.1776z"
              fill="#E92385"
              p-id="1110"
            ></path>
          </svg>
          <span @click="checkSimilarPlayList">查看相似歌单<span>(共{{limit}}首)</span></span>
        </div>
        <div class="right">
          <svg
            t="1668145733661"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1122"
            width="200"
            height="200"
          >
            <path
              d="M292.2496 933.9904c-18.7392 0-37.3248-5.888-53.1968-17.408-28.1088-20.4288-41.9328-54.4256-36.0448-88.6784l31.1296-181.6064a29.2352 29.2352 0 0 0-8.3968-25.856L93.7472 491.8272c-24.8832-24.2688-33.6896-59.8528-22.9376-92.928 10.752-33.0752 38.7584-56.6784 73.1648-61.696l182.3744-26.5216a29.34784 29.34784 0 0 0 22.016-15.9744l81.5616-165.2224c15.36-31.1808 46.5408-50.5344 81.3056-50.5344 34.7648 0 65.8944 19.3536 81.3056 50.5344l81.5616 165.2224a29.26592 29.26592 0 0 0 21.9648 15.9744l182.3744 26.5216c34.4064 5.0176 62.4128 28.6208 73.1648 61.696 10.752 33.0752 1.9456 68.6592-22.9376 92.928l-131.9424 128.6144a29.09696 29.09696 0 0 0-8.3968 25.856l31.1296 181.6064c5.888 34.2528-7.936 68.2496-36.0448 88.6784s-64.7168 23.04-95.4368 6.912l-163.1232-85.76a29.32736 29.32736 0 0 0-27.1872 0l-163.1232 85.76a91.17696 91.17696 0 0 1-42.2912 10.496z m218.9312-793.6c-11.3664 0-21.1456 6.0928-26.2144 16.2816L403.456 321.8944a90.624 90.624 0 0 1-68.2496 49.6128l-182.3744 26.5216c-11.264 1.6384-20.0704 9.0624-23.6032 19.8656-3.5328 10.8032-0.768 22.016 7.3728 29.952l131.9424 128.6144a90.624 90.624 0 0 1 26.0608 80.2304l-31.1296 181.6064c-1.9456 11.2128 2.4064 21.8624 11.6224 28.5696 9.216 6.656 20.6848 7.5264 30.7712 2.2016L469.0432 783.36a90.7264 90.7264 0 0 1 84.3776 0l163.1232 85.76c10.0352 5.2736 21.5552 4.4544 30.7712-2.2016 9.216-6.656 13.568-17.3568 11.6224-28.5696l-31.1296-181.6064c-5.0176-29.44 4.7104-59.392 26.0608-80.2304L885.76 447.7952c8.1408-7.936 10.9056-19.1488 7.3728-29.952-3.5328-10.8032-12.3392-18.2272-23.6032-19.8656l-182.3744-26.5216a90.624 90.624 0 0 1-68.2496-49.6128L537.3952 156.672c-5.0176-10.1888-14.7968-16.2816-26.2144-16.2816z"
              fill="#6FB1F9"
              p-id="1123"
            ></path>
            <path
              d="M511.232 723.6096c-33.6896 0-67.3792-12.8-93.0304-38.4512a30.72 30.72 0 0 1 0-43.4176 30.72 30.72 0 0 1 43.4176 0c27.3408 27.3408 71.8336 27.3408 99.1744 0a30.72 30.72 0 0 1 43.4176 0 30.72 30.72 0 0 1 0 43.4176c-25.6512 25.6-59.3408 38.4512-92.9792 38.4512z"
              fill="#6FB1F9"
              p-id="1124"
            ></path>
          </svg>
          <span>收藏({{subscribedCount}})</span>
        </div>
      </div>
      <ul>
        <li v-for="(song, index) in songs" :key="song.id">
          <span>{{ index + 1 }}</span>
          <div class="info" @click="playMusic(index)">
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
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import {reqSimilarPlaylist} from '../../api/item'
export default {
  name: "ItemMusicList",
  props: ["songs", "subscribedCount",'limit'],
  data() {
    return {};
  },
  computed: {
    ...mapState(['clickPlayListId','similarPlayList']),
  },
  methods: {
    ...mapMutations(["updataPlayList","updataIndex",'updataSimilarPlayList']),
    playMusic(index)
    {
      this.updataPlayList(this.songs);
      this.updataIndex(index);
    },
    async checkSimilarPlayList()
    {
      console.log(this.clickPlayListId);
      let result = await reqSimilarPlaylist(this.clickPlayListId);
      console.log(result);    
      if(result.data.code === 200)
      {
        this.updataSimilarPlayList(result.data.playlists)
      }
      // 跳转到相似歌单页面
      this.$router.push('/SimilarPlayList')
    },

  }
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  // height: 12rem;
  background-color: white;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin-top: 0.4rem;
  border-top: 0.002rem solid transparent;
  .topInfo {
    width: 100%;
    height: 0.8rem;
    margin-top: 0.2rem;
    div {
      display: inline-block;
    }
    .left {
      float: left;
      height: 100%;
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.2rem;
      }
      span {
        font-size: 0.32rem;
        span {
          font-size: 0.28rem;
          color: cadetblue;
        }
      }
    }
    .right {
      height: 100%;
      float: right;
      margin-right: 0.3rem;
      display: flex;
      align-items: center;
      padding: 0.1rem;
      background-color: rgb(248, 7, 7);
      border-radius: 0.4rem;
      span {
        display: inline-block;
        margin-left: 0.2rem;
        color: white;
      }
      svg {
        fill: white;
      }
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
}
</style>