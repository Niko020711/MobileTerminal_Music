<template>
  <div class="login">
    <h2>欢迎登录</h2>
    <div>
        <input type="text" placeholder="输入电话号码" v-model="PhoneWord">
        <input type="password" placeholder="输入密码" v-model="PassWord">
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>

export default {
    data() {
        return {
            PhoneWord: '',
            PassWord: ''
        }
    },
    methods: {
        async login()
        {
            // this.$store.dispatch('loginUser',{PhoneWord:this.PhoneWord,PassWord:this.PassWord});
            // 由于这里派发了actions，而且在actions中异步请求了数据，那么在actions中需要有返回值
            // 而在这里需要用async和await来接收actions中的返回值
            // 如果actions中没有返回值，且在这里不接收，那么需要点击两次才会响应
            // 因为第一次修改了code，第二次才会检测到code的存在，从而成功
            await this.$store.dispatch('VisitorLogin');
            // console.log(this.$store.state.LoginInfo.code)
            if(this.$store.state.LoginInfo.code === 200)
            {
                this.$store.commit('updataIsLogin',true);
                this.$router.push('/UserInfo').catch(()=>{});
            }
            this.PhoneWord = '';
            this.PassWord = '';
        }
    }
}
</script>

<style lang="less" scoped>
    .login{
        width: 100%;
        height: 13rem;
        background-color: aquamarine;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            font-size: 1rem;
            margin-top: .6rem;
        }
        div{
            margin-top: .6rem;
            input{
                display: block;
                height: .8rem;
                width: 6rem;
                margin-top: .8rem;
            }
        }
        button{
            display: block;
            margin-top: .8rem;
            width: 2rem;
            height: 1rem;
        }
    }
</style>