<template>
<div class="search-title">
  <van-icon name="arrow-left" size="20px" />
  <span class="shopping" @click="pullOnSelect">
    {{ selectValue }}
    <span class="arrow"></span>
  </span>
  <input type="text" placeholder="美通卡充值" ref="select" :value="value">
  <span @click="search()" ref="selectTitle">搜索</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      selectValue: '多点超市',
    }
  },
  computed: {
    value() {
      return '搜索'
    },
    productNumAll() {
      return this.$store.state.productNumAll
    },
  },
  methods: {
    pullOnSelect() {
      this.$emit('showPullSelect')
    },
    search() {
      this.$router.push({ name: 'SearchResult' })
      // 后端接口
      // this.value 携带给后端
      console.log(this.$refs.select.value)
      // 后端返回数据 前端改变界面
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_mixin.scss';

.search-title {
  position: relative;
  height: 100px;
  margin-bottom: 2px;
  // 返回
  .van-icon {
    position: relative;
    top: 10px;
    margin-right: 20px;
  }
  // 选择
  .shopping {
    position: absolute;
    top: 20px;
    left: 100px;
    .arrow {
      @include arrow(12px, #000, top);
      position: absolute;
      top: 14px;
      left: 125px;
    }
  }
  // 输入
  input {
    width: 80%;
    font-size: 20px;
    height: 80px;
    background-color: #eee;
    border-radius: 40px;
    margin-right: 30px;
    border: none;
    padding-left: 22%;
  }
}
</style>
