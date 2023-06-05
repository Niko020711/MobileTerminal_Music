<template>
  <div>
    <TopItemInfo :playList="playList" ></TopItemInfo>
    <ItemMusicList :songs="songs" :subscribedCount="playList.subscribedCount" :limit="limit"></ItemMusicList>
  </div>
</template>

<script>
import {reqMusicItemInfo,reqMusicItemAllMusic} from '../api/item'
import TopItemInfo from '../components/item/TopItemInfo'
import ItemMusicList from '@/components/item/ItemMusicList.vue'
export default {
    name: 'MusicItem',
    data() {
        return {
            limit: 20,
            playList: {},
            songs: [],
            offset: 0
        }
    },
    components: {
        TopItemInfo,
        ItemMusicList
    },
    mounted()
    {
        this.getMusicInfo();
        this.getMusicList();
    },
    methods: {
        // 获取歌单信息
        async getMusicInfo()
        {
            let result = await reqMusicItemInfo(this.$route.query.id);
            console.log(result)
            if(result.status === 200)
            {
                this.playList = result.data.playlist;
            }
        },
        // 获取歌单歌曲
        async getMusicList()
        {
            let data = {
                id: this.$route.query.id,
                limit: this.limit,
                offset: this.offset
            }
            let result = await reqMusicItemAllMusic(data);
            console.log(result,1111);
            if(result.status === 200)
            {
                this.songs = result.data.songs;
            }
        }
    }
}
</script>

<style>

</style>