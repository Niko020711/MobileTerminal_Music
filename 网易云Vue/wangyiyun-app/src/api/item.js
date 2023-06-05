import request from './request.js'

// 歌单详情
export const reqMusicItemInfo = function(id)
{
    return request({
        url: `/playlist/detail?id=${id}`,
        method: 'get'
    })
}

// 获取歌单中所有歌曲
export const reqMusicItemAllMusic = function(data)
{
    return request({
        url: `/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`,
        method: 'get'
    })
}

// 获取歌词
export const reqMusicLyrics = function(id)
{
    return request({
        url: `/lyric?id=${id}`,
        method: 'get'
    })
}

// 获取相似歌单
export const reqSimilarPlaylist = function(id)
{
    return request({
        url: `/related/playlist?id=${id}`,
        method: 'get'
    })
}