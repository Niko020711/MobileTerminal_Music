function remSize()
{
    // 获取屏幕的宽度
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;

    // 过大
    if(deviceWidth >= 750)
    {
        deviceWidth = 750;
    }

    // 过小
    if(deviceWidth <= 320)
    {
        deviceWidth = 320;
    }

    // 我们以750px为设计稿，除以7.5，那么1rem=100px
    // 以Iphone678为基础，375px为宽度，所以1rem=50px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    // 将body中字体大小设置为0.3rem，也就是15px
    document.querySelector('body').style.fontSize = 0.3 + 'rem';
}

remSize();

// 当窗口发生变化时，就会调用事件引起适配
window.onresize = function()
{
    remSize();
}