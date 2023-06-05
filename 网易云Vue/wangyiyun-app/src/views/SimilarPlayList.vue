<template>
  <div class="playlist">
    <div class="top">
        <svg @click="$router.go(-1)" t="1669449733191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1383" width="200" height="200"><path d="M814.933333 213.333333C648.533333 46.933333 375.466667 46.933333 209.066667 213.333333 42.666667 379.733333 42.666667 648.533333 209.066667 819.2c166.4 166.4 435.2 166.4 601.6 0 170.666667-170.666667 170.666667-439.466667 4.266666-605.866667z m-200.533333 486.4c12.8 12.8 12.8 34.133333 0 46.933334-4.266667 4.266667-12.8 8.533333-21.333333 8.533333s-17.066667-4.266667-21.333334-8.533333l-192-204.8c-12.8-12.8-12.8-29.866667 0-42.666667l192-204.8c12.8-12.8 34.133333-12.8 46.933334 0 12.8 12.8 12.8 34.133333 0 46.933333l-170.666667 183.466667 166.4 174.933333z" p-id="1384" fill="#8a8a8a"></path></svg>
        <h3>相似歌单</h3>
    </div>
    <div class="bottom">
        <ul>
            <li v-for="music,index in similarPlayList" :key="music.id">
                <img :src="music.coverImgUrl" height="120" width="120">
                <div class="info">
                    <h3>{{music.name}}</h3>
                    <h4>{{music.creator.nickname}}</h4>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    mounted()
    {
        this.updateFooterShow(false);
    },
    methods: {
        ...mapMutations(['updateFooterShow'])
    },
    computed: {
        ...mapState(['similarPlayList'])
    }
}
</script>

<style lang="less" scoped>
    .playlist{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            height: 1.4rem;
            display: flex;
            align-items: center;
            svg{
                height: 1rem;
                width: 1rem;
            }
            h3{
                margin-left: .8rem;
                font-size: .4rem;
            }
        }
        ul{
            width: 100%;
            li{
                padding-left: .2rem;
                padding-right: .2rem;
                display: flex;
                align-items: center;
                margin-top: .4rem;
                img{
                    border-radius: .4rem;
                }
                .info{
                    margin-left: .2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h3{
                        margin-bottom: .3rem;
                    }
                    h4{
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
</style>