<template>
<van-swipe :autoplay="3000" class="banner" indicator-color="white">
  <van-swipe-item v-for="(image, index) in images" :key="index" :style="image"></van-swipe-item>
</van-swipe>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          backgroundColor: '#39a9ed',
        },
        {
          backgroundColor: 'rgb(79, 161, 185)',
        },
        {
          backgroundColor: 'rgb(194, 91, 189)',
        },
        {
          backgroundColor: 'rgb(158, 194, 91)',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 380px;
  /deep/ .van-swipe__indicator {
    width: 16px;
    height: 16px;
  }
}
</style>
