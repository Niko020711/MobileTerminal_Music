<template>
  <div class="topNav">
    <svg
      t="1667997322627"
      class="icon"
      id="svg1"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1372"
      width="200"
      height="200"
    >
      <path
        d="M819.2 716.8V768H204.8v-51.2h614.4z m0-256V512H204.8v-51.2h614.4z m0-256V256H204.8V204.8h614.4z"
        fill="#333333"
        p-id="1373"
      ></path>
    </svg>
    <div class="content">
      <span @click="$router.push('/UserInfo')">我的</span>
      <span>发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <svg
      t="1668058676471"
      class="icon"
      id="svg2"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1226"
      width="200"
      height="200"
      @click="$router.push('/Sreach')"
    >
      <path
        d="M888.618667 850.005333l-130.56-139.648a353.194667 353.194667 0 0 0 82.005333-226.688C840.106667 287.573333 680.362667 128 484.010667 128 287.744 128 128 287.573333 128 483.669333c0 196.138667 159.744 355.712 356.053333 355.712a353.962667 353.962667 0 0 0 147.370667-31.872 27.306667 27.306667 0 1 0-22.656-49.792c-39.253333 17.834667-81.194667 26.88-124.757333 26.88-166.101333 0-301.226667-134.954667-301.226667-300.928 0-165.930667 135.125333-300.928 301.226667-300.928 166.144 0 301.269333 134.997333 301.269333 300.928 0 78.122667-29.824 152.149333-83.925333 208.426667a27.349333 27.349333 0 0 0 0.725333 38.698667c0.853333 0.768 1.92 1.066667 2.816 1.792 0.768 1.066667 1.152 2.346667 2.090667 3.328l141.653333 151.424a27.221333 27.221333 0 0 0 38.656 1.28 27.306667 27.306667 0 0 0 1.322667-38.613334z"
        fill="#333333"
        p-id="1227"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "TapNav",
};
</script>

<style lang="less" scoped>
.topNav {
  height: .8rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  #svg1,
  #svg2 {
    margin-top: .12rem;
  }
  #svg1{
    margin-left: -0.3rem;
  }
  #svg2{
    margin-right: -0.3rem;
  }
  .content {
    height: 100%;
    width: 60%;
    display: flex;
    span{
      flex: 25%;
      line-height: .8rem;
      margin-left: .4rem;
      font-size: 0.35rem;
    }
    .big{
      font-weight: 700;
    }
  }
}
</style>