<template>
<ul class="activeItem">
  <li v-for="(item, index) in activeItem" :key="index" class="item">
    <div class="img" :style="{ 'background-color': item.color }"></div>
    <div class="text">{{ item.text }}</div>
  </li>
</ul>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      activeItem: [
        { color: '#66c6f2', text: '蔬菜每日鲜' },
        { color: 'rgb(194, 91, 189)', text: '进店必买' },
        { color: '#39a9ed', text: '肉蛋禽' },
        { color: 'rgb(79, 161, 185)', text: '母婴天地' },
        { color: 'rgb(158, 194, 91)', text: '年终福利' },
        { color: '#66c6f2', text: '早晚市' },
        { color: '#39a9ed', text: '品牌汇' },
        { color: 'rgb(79, 161, 185)', text: '领券中心' },
        { color: 'rgb(194, 91, 189)', text: '支付优惠' },
        { color: '#66c6f2', text: '直采品牌' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.activeItem {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .item {
    width: 16%;
    text-align: center;
    margin-right: 4%;
    margin-bottom: 5%;
    &:nth-child(5) {
      margin-right: 0px !important;
    }
    &:nth-child(10) {
      margin-right: 0px !important;
    }
    .img {
      height: 100px;
    }
    .text {

    }
  }
}
</style>
