<template>
<div class="search-result">
  <search-title></search-title>
  <div v-for="(item, index) in searchList" :key="index">
    <flex class="flex" :item="item"></flex>
  </div>
</div>
</template>
<script>
import SearchTitle from './SearchTitle'
import Flex from '@/components/layout/Flex'
import wareSearch from '../../../../../mock/productList.json'

export default {
  components: {
    SearchTitle,
    Flex,
  },
  data() {
    return {

    }
  },
  computed: {
    searchList() {
      return wareSearch.data.wareList
    },
  },
  mounted() {
    console.log('wareSearch', wareSearch)
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.search-result {
  padding: 20px 40px;
  .flex {
    margin-top: 40px;
  }
}
</style>
