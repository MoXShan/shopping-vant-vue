<template>
<div class="tabs-top">
  <button
    v-for="(item, index) in tabsTop"
    :key="index"
    :class="['tab-top-button', { active: currentTabTop === item.name }]"
    @click="changeTabsTop(item)">
    {{ item.name }}
  </button>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentTabTop: '多点超市',
      tabsTop: [
        { name: '多点超市' },
        { name: '全球精选' },
      ],
    }
  },
  methods: {
    changeTabsTop(item) {
      this.currentTabTop = item.name
      this.$emit('currentCategory', item.name)
    },
  },
}
</script>
<style lang="scss" scoped>
.tabs-top {
  text-align: center;
  .tab-top-button {
    font-size: 22px;
    background-color: #fff;
    padding: 15px 80px;
    cursor: pointer;
    border: 2px solid #A8715D;
    color: #F1772A;
    &:nth-child(1) {
      border-right: none;
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
    &:nth-child(2) {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
    &:hover {
      color: #fff;
      background-color: #EA6216;
    }
  }
  .tab-top-button.active {
    background-color: #EA6216;
    color: #fff;
  }
}
</style>
