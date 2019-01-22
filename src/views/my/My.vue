<template>
<div class="my">
  <div class="img">
    <van-icon name="setting-o" size="30px" class="setting-o"/>
    <van-icon name="fire-o" size="30px" class="fire-o" />
  </div>
  <my-login :myDataItem="myDataItem"></my-login>
  <my-property :myDataItem="myDataItem"></my-property>
  <my-privilege :myDataItem="myDataItem"></my-privilege>
</div>
</template>
<script>
import mydata from '../../../mock/myData.json'
import MyLogin from './actions/MyLogin'
import MyProperty from './actions/MyProperty'
import MyPrivilege from './actions/MyPrivilege'

export default {
  components: {
    MyLogin,
    MyProperty,
    MyPrivilege,
  },
  computed: {
    myDataItem() {
      return mydata.data
    },
  },
}
</script>
<style lang="scss" scoped>
.my {
  height: 100vh;
  overflow: auto;
  background-color: #efefef;
  .img {
    background-color: #fff;
    height: 100px;
    padding: 40px;
    .setting-o {
      float: left;
    }
    .fire-o {
      float: right;
    }
  }
}
</style>
