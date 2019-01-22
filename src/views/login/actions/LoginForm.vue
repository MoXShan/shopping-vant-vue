<template>
<div class="loginForm">
  <div class="login-form-title">
    <div class="title-name" :class="{ title: isPhoneSignin }" @click="loginMethods">手机快捷登录</div>
    <div class="title-name" :class="{ title: !isPhoneSignin }" @click="loginMethods">账号密码登录</div>
  </div>
  <div class="line"></div>
  <!-- 验证码 -->
  <div class="phone-login login" v-if="isPhoneSignin">
    <van-cell-group name="form">
      <van-field
        v-model="username"
        clearable
        placeholder="请输入账号">
        <van-icon
          slot="left-icon"
          ref="usernameIcon"
          name="label-o"
          :class="{ 'van-icon-color': username }" />
      </van-field>
      <van-field
        v-model="phoneCode"
        type="text"
        clearable
        left-icon="completed"
        placeholder="验证码">
        <van-icon
          slot="left-icon"
          ref="phoneCodeIcon"
          name="completed"
          :class="{ 'van-icon-color': phoneCode }" />
        <span slot="button" class="code-button" @click="getPhoneCode">{{ phoneCodeText }}</span>
      </van-field>
    </van-cell-group>
  </div>
  <!-- 密码 -->
  <div class="username-login login" v-else>
    <van-cell-group name="form">
      <van-field
        v-model="username"
        clearable
        placeholder="请输入用户名">
        <van-icon
          slot="left-icon"
          ref="usernameIcon"
          name="label-o"
          :class="{ 'van-icon-color': username }" />
      </van-field>
      <van-field
        v-model="password"
        :type="passwordType"
        clearable
        placeholder="请输入密码">
        <van-icon
          slot="left-icon"
          name="completed"
          ref="phoneCodeIcon"
          :class="{ 'van-icon-color': password }" />
        <van-icon @click="changeEye" slot="icon" name="closed-eye" size="20px" v-if="isClosedEye" />
        <van-icon @click="changeEye" slot="icon" name="eye-o" size="20px" color="#E0640E" v-else />
      </van-field>
    </van-cell-group>
    <div class="forgetPassword" @click="goForgetPassword">忘记密码</div>
  </div>
  <van-button :class="{ 'bgc': username && (password || phoneCode) }" @click="submitLogin">登录</van-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      phoneCode: '',
      isPhoneSignin: true,
      sendPhoneCount: null,
      sendInterval: null,
      isClosedEye: true,
      iconActiveColor: '#E0640E',
    }
  },
  computed: {
    phoneCodeText() {
      if (this.sendPhoneCount === null) {
        return '获取验证码'
      }
      if (this.sendPhoneCount <= 0) {
        return '重新获取'
      }
      return `${this.sendPhoneCount}s`
    },
    passwordType() {
      return this.isClosedEye ? 'password' : 'text'
    },
  },
  methods: {
    goForgetPassword() {
      this.$router.push('/forget-password')
    },
    changeEye() {
      this.isClosedEye = !this.isClosedEye
    },
    // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    // Instead, use a data or computed property based on the prop's value. Prop being mutated: "color"
    // changeUsernameIconColor() {
    //   console.log('this.$refs.usernameIcon', this.$refs.usernameIcon.$el)
    //   this.$refs.usernameIcon.color = this.iconActiveColor
    // },
    // changePhoneCodeIconColor() {
    //   this.$refs.phoneCodeIcon.style.color = this.iconActiveColor
    // },
    loginMethods() {
      this.isPhoneSignin = !this.isPhoneSignin
      this.$emit('changePhoneSignin', this.isPhoneSignin)
    },
    startCountdown() {
      this.stopCountdown()
      this.sendPhoneCount = 60
      this.sendInterval = setInterval(() => {
        this.sendPhoneCount -= 1
        if (this.sendPhoneCount === 0) {
          clearInterval(this.sendInterval)
          this.sendInterval = null
        }
      }, 1000)
    },
    stopCountdown() {
      if (this.sendInterval) {
        clearInterval(this.sendInterval)
        this.sendInterval = null
      }
      this.sendPhoneCount = 0
    },
    async getPhoneCode() {
      try {
        // 检测 form 表单
        // 检测电话号码
        await this.startCountdown()
      } catch (error) {
        this.stopCountdown()
        console.log(error)
      }
    },
    submitLogin() {
      // 登录
      console.log('username', this.username)
      console.log('password', this.password)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.loginForm {
  padding: 30px;
  .login-form-title {
    padding: 60px 50px 0px;
    display: flex;
    justify-content: space-around;
    font-size: 35px;
    color: #ccc;
  }
  .title-name {
    padding: 0 30px 20px;
  }
  .title {
    color: $c;
    border-bottom: 1px solid $c;
  }
  .line {
    border: 2px solid #ccc;
    margin: 0 30px 40px;
  }
  .van-cell-group {
    background-color: #F5F5F5;
  }
  /deep/ .van-icon {
    margin-right: 20px;
    line-height: 140px;
  }
  .van-field {
    text-align: center;
    padding: 10px 20px 0 40px;
    height: 140px;
    line-height: 140px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    font-size: 40px;
    &:last-child {
      border-bottom: none;
    }
  }
  .code-button {
    vertical-align: middle;
    color: $c;
    padding: 40px 20px 20px 40px;
    border-left: 2px solid #ccc;
  }
  .van-button {
    margin-top: 80px;
    width: 100%;
    height: 120px;
    font-size: 40px;
    background-color: #ccc;
    color: #fff;
  }
  .bgc {
    background-color: $c;
  }
  .van-icon-color {
    color: $c;
  }
  .forgetPassword {
    padding-top: 20px;
    color: #858585;
    text-align: right;
  }
}
</style>
