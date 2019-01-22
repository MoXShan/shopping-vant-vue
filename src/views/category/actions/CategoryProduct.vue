<template>
<div class="shopping-duodian">
  <div class="leftTabs">
    <ul
      v-for="(item, index) in categoryProductTabsList"
      :key="index">
      <template v-if="item.store.name === currentTabTop">
        <template v-for="(innerItem, innerIndex) in item.categoryList">
          <li :key="innerIndex" class="category-item">
            <div
              :class="[ innerIndex === categoryListIndex ? 'active-category-list' : '' ]"
              class="category-item-name"
              @click="onCategoryList(innerIndex)">
              {{ innerItem.categoryName }}
            </div>
            <template v-for="(circleItem, circleIndex) in innerItem.childCategoryList">
              <li
                :key="circleIndex"
                v-if="(innerIndex === categoryListIndex) && isExpandChildCategoryList"
                class="childCategory-item"
                :class="[ circleIndex === childCategroyIndex ? 'active-childCategory' : '' ]"
                @click="onChildCategoryList(circleIndex)">
                <span
                  class="childCategory-item-name"
                  :class="[ circleIndex === childCategroyIndex ? 'active-childCategory-list' : '' ]"
                  >{{ circleItem.categoryName }}</span>
              </li>
            </template>
          </li>
        </template>
      </template>
    </ul>
  </div>
  <div class="rightProduct">
    <template v-for="(item, index) in categoryProductList">
      <flex :key="index" :item="item"></flex>
    </template>
    <div class="text">没有更多商品了......</div>
  </div>
</div>
</template>
<script>
import Flex from '@/components/layout/Flex'
import productList from '../../../../mock/productList.json'
import categoryProductTabs from '../../../../mock/categoryProductTabs.json'


export default {
  props: {
    currentTabTop: String,
  },
  components: {
    Flex,
  },
  data() {
    return {
      isExpandChildCategoryList: false,
      categoryListIndex: 0,
      childCategroyIndex: 0,
    }
  },
  computed: {
    categoryProductList() {
      return productList.data.wareList
    },
    categoryProductTabsList() {
      return categoryProductTabs.data.wareCategory
    },
  },
  methods: {
    onCategoryList(innerIndex) {
      this.isExpandChildCategoryList = !this.isExpandChildCategoryList
      this.categoryListIndex = innerIndex
    },
    onChildCategoryList(circleIndex) {
      this.childCategroyIndex = circleIndex
    },
  },
}
</script>
<style lang="scss" scoped>
.shopping-duodian {
  display: flex;
  margin-top: 20px;
  border-top: 3px solid #ccc;
  .leftTabs {
    width: 30%;
    color: #5F5F5F;
    text-align: center;
    height: 100vh;
    overflow: auto;
    .category-item {
      padding-top: 20px;
      background-color: #F5F5F5;
      border-right: 1px solid #ccc;
      .category-item-name {
        height: 80px;
        line-height: 80px;
        background-color: #F5F5F5;
        border-right: 1px solid #ccc;
      }
      .active-category-list {
        color: #F1772A;
      }
      .childCategory-item {
        font-size: 14px;
        padding-top: 20px;
        height: 80px;
        line-height: 80px;
        background-color: #fff;
        border-right: 1px solid #ccc;
        &:last-child {
          height: 100px;
        }
        .childCategory-item-name {
          padding-left: 20px;
          height: 14px;
          line-height: 14px;
        }
      }
      .active-childCategory {
        border-right: none;
      }
      .active-childCategory-list {
        color: #F06D1D;
        border-left: 3px solid #F06D1D;
      }
    }
  }
  .rightProduct {
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 300px;
    width: 70%;
    .text {
      text-align: center;
      color: #efefef;
    }
  }
}
</style>
