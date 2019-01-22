<template>
<div class="notice-top-down">
  <div class="left">多点头条</div>
  <div :style="{ height: height * lineNum + 'px'}" class="right" id ="right-container">
    <ul class="right-list" :style = "{ 'transform': transform }" :class="{ right_list_unanim:num === 0 }">
      <li class="right-once" v-for="(item,index) in contentArr" :key="index" :style="{ height: height+'px' }">
        <span>{{ item }}</span>
        <span>>></span>
      </li>
      <li class="right-once" v-for="(item,index) in contentArr" :key="index+contentArr.length" :style="{ height: height+'px'} ">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  props: {
    height: {
      default: 40,
      type: Number,
    },
    lineNum: {
      default: 5,
      type: Number,
    },
  },
  data() {
    return {
      contentArr: [
        '推荐！办腾讯大王卡，首充50元得150元',
        '实惠！每周二浦发银行信用卡微信买单满50减20元',
        '移动手机积分退换多点优惠券，最高省100元',
        '全新活动！招行借记卡满20立减10元，戳',
        '省钱！选民生银行信用卡买单，满20立减10元',
        '惊喜！建行APP龙支付买单，满50最高减20元',
      ],
      num: 0,
    }
  },
  computed: {
    transform() {
      return `translateY(-${this.num * this.height}px)`
    },
  },
  created() {
    setInterval(() => {
      if (this.num !== this.contentArr.length) {
        this.num++
      } else {
        this.num = 0
      }
    }, 3000)
  },
}
</script>
<style lang="scss" scoped>
.notice-top-down {
  margin: 0px 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: red;
  display: flex;
  .left {
    padding-right: 40px;
    border-right: 1px solid #ccc;
    margin-right: 40px;
  }
  .right {
    overflow: hidden;
  }
  .right-container{
    display: inline-block;
    position: relative;
  }
  .right-list{
    transition: 1s linear;
  }
  .right_list_unanim{
    transition: none
  }
}
</style>
