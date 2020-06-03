<template>
  <div class="pbg">
    <h1>产品列表</h1>
    <ul class="goods_type_list clearfix">
      <li v-for="sku in skus" :key=sku.id>
        <a :href="sku.image"><img :src="sku.default_image_url"></a>
        <h4><a :href="sku.image">{{sku.name}}</a></h4>
        <div class="operate">
            <span class="prize">￥{{sku.price}}</span>
            <span>{{sku.comments}}评价</span>
        </div>
      </li>
    </ul>
    <p v-if="error_flag">
        <el-alert
          :title="error_msg"
          type="error"
          center
          show-icon>
        </el-alert>
    </p>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'ProductList',
  data () {
    return {
      skus: [],
      error_msg: '',
      error_flag: false
    }
  },
  methods: {
    getproduct () {
      // axios.post('/api/productlist', {}, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
      this.$api.productList().then(res => {
        this.skus = res
      }).catch(error => {
        // alert(error)
        this.error_msg = error
        this.error_flag = true
      })
    }
  },
  created () {
    this.getproduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 20px;
}
.pbg{
  background-color:floralwhite;
  margin: 0 auto 80px;
  text-align: left;
}

</style>
