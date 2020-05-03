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
import axios from 'axios'
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
      axios.post('/api/productlist', {}, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
        this.skus = res.data
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
.goods_type_list{
  margin: 10px auto 0;
}

.goods_type_list li{
  width:196px;
  float:left;
  margin-bottom:10px;
  list-style: none
}

.goods_type_list li img{width:160px;height:160px;display:block;margin:10px auto;}
.goods_type_list li h4{width:160px;margin:0 auto;}
.goods_type_list li h4 a{font-weight:normal;color:#666;display:block;width:160px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}

.operate{
  width:160px;
  margin:10px auto;
  position:relative
}
.goods_type_list .operate .prize{color:#da260e; font-size:14px;}
.goods_type_list .operate .unit{color:#999;padding-left:5px;}
/* .goods_type_list .operate{
  display:inline-block;
  width:15px;
  height:15px;
  background:url(../static/image/1.jpeg);
  position:absolute;
  right:0;
  top:3px
} */

/* 清除浮动 */
.clearfix:before,.clearfix:after{content:"";display:table}
.clearfix:after{clear:both;}
.clearfix{zoom:1}

</style>
