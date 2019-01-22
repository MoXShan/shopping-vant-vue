<template>
<div class="search-page">
  <search-title @showPullSelect="showPullSelect"></search-title>
  <div class="pull-down" :style="{ display: isShowPullSelect ? '' : 'none'}">
    <span class="arrow-pull"></span>
    <ul>
      <li v-for="(item, index) in pullSelect" :key="index" @click="pullValue(item)">{{ item }}</li>
    </ul>
  </div>
  <div class="hot-search">
    <div>热门搜索</div>
    <ul class="hot-search-item">
      <li
        v-for="(item, index) in hotSelect"
        :key="index"
        :style="{ color: item.isColor ? 'red' : '#000' }"
        @click="onHotSelect(item.text)">{{ item.text }}</li>
    </ul>
  </div>
  <div class="history-search">
    <div>历史搜索</div>
    <ul class="history-search-item" @click="closed($event)">
      <li
        v-for="(item, index) in historySelect"
        :key="index">
        <span class="text">{{ item.text }}</span>
        <span class="closed">&times;</span>
      </li>
    </ul>
    <div class="delete" @click="deleted($event)">清除搜索历史</div>
  </div>
</div>
</template>
<script>
import SearchTitle from './SearchTitle'

export default {
  components: {
    SearchTitle,
  },
  data() {
    return {
      isShowPullSelect: false,
      pullSelect: [
        '全部',
        '多点超市',
        '全球精选',
      ],
      hotSelect: [
        { text: '面包', isColor: false },
        { text: '面粉', isColor: false },
        { text: '雀巢超品日', isColor: true },
        { text: '酸奶', isColor: false },
        { text: '大米', isColor: false },
        { text: '牛奶', isColor: false },
        { text: '饺子', isColor: false },
        { text: '进口面膜', isColor: true },
      ],
      historySelect: [
        { text: '面包' },
        { text: '面包' },
        { text: '面包' },
      ],
    }
  },
  computed: {
    value() {
      return this.urlValue
    },
  },
  methods: {
    showPullSelect() {
      this.isShowPullSelect = !this.isShowPullSelect
    },
    pullValue(item) {
      this.selectValue = item
      this.isShowPullSelect = false
    },
    onHotSelect(text) {
      this.$refs.select.value = text
      // 调取后端接口 搜索结果 变界面
      this.$refs.selectTitle.search()
    },
    closed(event) {
      const child = event.path[1]
      child.parentNode.removeChild(child)
    },
    deleted(event) {
      this.historySelect = []
      const child = event.target
      child.parentNode.removeChild(child)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_mixin.scss';

.search-page {
  padding: 30px;
  // 下拉选项
  .pull-down {
    // display: none;
    width: 180px;
    height: 200px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .7);
    position: absolute;
    top: 100px;
    left: 120px;
    color: #fff;
    li {
      padding-left: 20px;
      width: 100%;
      line-height: 65px;
      border-bottom: 1px solid #000;
    }
    .arrow-pull {
      position: absolute;
      top: -24px;
      left: 10px;
      @include arrow(12px, rgba(0, 0, 0, .7), bottom);
    }
  }

  // 热门搜索
  .hot-search {
    width: 100%;
    margin-top: 30px;
    color: #ccc;
    padding-left: 10px;
    margin: 20px 0px;
    .hot-search-item {
      padding-top: 20px;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        height: 65px;
        padding: 10px 30px;
        margin-right: 20px;
        margin-bottom: 20px;
        border: 3px solid #ccc;
        border-radius: 30px;
      }
    }
  }

  // 历史搜索
  .history-search {
    color: #ccc;
    .history-search-item {
      margin-top: 20px;
      color: #000;
      li {
        height: 65px;
        line-height: 65px;
        padding: 0px 20px;
        border-top: 1px solid #ccc;
        position: relative;
        .text {
          position: absolute;
          top: 0px;
          left: 0px;
        }
        .closed {
          position: absolute;
          top: 0px;
          right: 0px;
        }
      }
    }
    .delete {
      padding-top: 20px;
      color: red;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
