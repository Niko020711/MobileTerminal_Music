import Vue from 'vue'
import Vuex from 'vuex'
import {reqMusicLyrics} from '../api/item'
import {reqLogin,reqRecentPlay,reqVisitorLogin} from '../api/home.js'
Vue.use(Vuex);
const state = {
    playlist: [
        {
            al: {
                id: 35139,
                name :"追梦痴子心",
                pic: 19061133579343590,
                picUrl :"https://p1.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg",
                pic_str: "19061133579343591"
            },
            id: 484058025,
        },
    ],
    playListIndex: 0,    //播放下标
    show: true,       //控制播放按钮
    detailShow: false,      //控制弹出层显示
    lyrics: {
        lyric: `[00:00.000] 作曲 : Skan Kai
        [00:52.74](M.I.M.E)
        [00:53.83]Found a little bit of light, tryna find my heart
        [00:55.22]Funny when I'm bright, gotta lifestyle dark
        [00:56.79]Hundy when I write, get a tight flow spark
        [00:58.42]With a physco chart, playing dice go start
        [01:00.05]Oh who are you, better know yourself
        [01:01.61]Know your soul gotta know your wealth
        [01:03.32]Slow your role, getta a hold don't melt
        [01:05.07]And don't you fall, when it feel like hell
        [01:06.46]Oh who am I, M.I.M.E I'm not the one you wanna **** with
        [01:10.08]Late nights messin' up my sleep so I'm flustered
        [01:13.18]Taking out aggression with my pen because I trust it
        [01:16.55]Writing tryna get myself a lam color custard
        [01:19.59]For the game
        [01:20.35]Leave 'em hanging by his chain
        [01:21.87]Click bang, feel enraged
        [01:23.39]Feel it fire in my brain. Feel insane
        [01:25.60]End the story, feel the flame
        [01:27.37]45 to the brain, praying lord please help
        [01:31.06]No Glory
        [01:56.60]No glory, I M.I.M.E I'm not the one you wanna **** with
        [02:01.15]Late nights messin' up my sleep so I'm flustered
        [02:04.50]Taking out aggression with my pen because I trust it
        [02:07.64]Writing tryna get myself a lam color custard
        [02:35.29]No Glory
        [02:42.48](Drama B)
        [02:48.53]Remember
        [02:49.64]I used to be that kid that everyday would get rejected
        [02:52.74]Y'all got my story the glory was painted on a song
        [02:55.65]I'm mortified but feel immortal
        [02:58.00]This pen to this paper always open up different portals
        [03:01.03]It's I and me, it's me and I'm by myself I'm down to ride
        [03:05.12]Taking on the tides, size of tsunamis touchin' the sky
        [03:07.88]I get a quick scan, it's time to move
        [03:10.72]Leavin' everything else behind I got something to prove
        [03:14.47]I'm just running away
        [03:16.05]No, I ain't running away
        [03:17.31]I got memories saved
        [03:18.98]Oh I'm just finding my place
        [03:21.15]Where I belong to
        [03:23.38]Barely glory in my soul
        [03:26.39]Eyy I'm riding away yeah
        [03:29.18]I'm finding my place yeah
        [03:30.89]I gotta escape yeah
        [03:32.42]It's what I gotta do
        [03:33.62]See you on the other side
        [03:35.13]See you on the other side
        [03:36.44]See you on the other side
        [03:38.65]We all know
        [03:40.18]No I ain't running running running yeah
        [03:42.12]I'm coming coming coming yeah
        [03:43.92]Knocking all these demons that been tryna run up on me yeah
        [03:46.84]Oh I keep on fighting
        [03:48.76]They keep coming coming coming yeah
        [03:50.19]I'ma keep keep on fighting till I'm gone
        [03:51.93]I need the glory`
        
    },         //歌词
    // 歌曲当前播放到什么时间
    currentTime: 0,
    // 歌曲总时长
    duration: 0,
    // 用户是否登录
    isLogin: false,
    // 底部组件是否显示
    FooterIsShow: true,
    // 登录信息
    LoginInfo: {
        code: '200'
    },
    // 最近播放的歌曲数
    recentLimit: 20,
    // 当前点击的歌单id
    clickPlayListId: 0,
    // 相似歌单详情
    similarPlayList: [{name:1}]
};
const mutations = {
    updataSimilarPlayList(state,value)
    {   
        state.similarPlayList = value;
    },
    updataClickPlayListId(state,value)
    {
        state.clickPlayListId = value;
    },
    updataIsLogin(state,value)
    {
        state.isLogin = value;
    },
    updateFooterShow(state,value)
    {
        state.FooterIsShow = value;
    },
    pushPlayList(state,value)
    {
        state.playlist.push(value);
    },
    updataAudio(state,value)
    {
        state.show = value;
    },
    updataPlayList(state,value)
    {
        state.playlist = value;
    },
    updataIndex(state,value)
    {
        state.playListIndex = value;
    },
    updataDetailShow(state,value)
    {
        state.detailShow = value;
    },
    updataMusicLyics(state,value)
    {
        state.lyrics = value;
    },
    updataMusicCurrentTime(state,value)
    {
        state.currentTime = value;
    },
    updataDuration(state,value)
    {
        state.duration = value;
    },
    updateLoginInfo(state,value)
    {
        state.LoginInfo = value;
    }
};
const actions = {
    async getMusicLyics({commit},value)
    {
        let result = await reqMusicLyrics(value);
        // console.log(result)
        if(result.status === 200)
        {
            commit('updataMusicLyics',result.data.lrc)
        }
    },
    async loginUser(value)
    {
        let result = await reqLogin(value);
        console.log(result);
    },
    async VisitorLogin()
    {
        let result = await reqVisitorLogin();
        console.log(result)
        if(result.data.code === 200)
        {
            this.commit('updateLoginInfo',result.data);
            return 'ok';
        }
        else
        {
            return new Promise.reject('no');
        }
    },
};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})