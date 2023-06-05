import request from "./request";

// 获取轮播图数据
export const reqBannerList = function()
{
    return request({
        url: '/banner?type=2',
        method:'get'
    })
}

// 获取推荐歌单
export const reqMusicList = function(limit)
{
    return request({
        url: `/personalized?limit=${limit}`,
        method: 'get'
    })
}

// 搜索
export const reqSearchMusic = function(searchWord)
{
    return request({
        url: `/search?keywords=${searchWord}`,
        method: 'get'
    })
}

// 手机登录
export const reqLogin = function(data)
{
    return request({
        url: `/login/cellphone?phone=${data.PhoneWord}&password=${data.PassWord}`,
        method: 'get'
    })
}

// 游客登录
export const reqVisitorLogin = function()
{
    return request({
        url: '/register/anonimous',
        method: 'get'
    })
}

// 获取最近播放歌曲
export const reqRecentPlay = function(limit)
{
    return request({
        url: `/record/recent/song?limit=${limit}`,
        method: 'get'
    })
}