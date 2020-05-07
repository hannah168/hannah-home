<template>
  <el-container style="height: 100%; margin-bottom: 65px">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <!-- <template slot="title"><i class="el-icon-message"></i>导航一</template> -->
          <template slot="title"><img src='/static/image/file.png' class='img_border'>产品</template>
          <!-- <el-menu-item-group> -->
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="1-1"  @click="getproduct">产品列表</el-menu-item>
            <el-menu-item index="1-2">产品图像</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><img src='/static/image/picture.png' class='img_border'>图像</template>
          <!-- <el-menu-item-group title="分组1"> -->
            <el-submenu index="2-1">
              <template slot="title">动画</template>
              <el-menu-item index="2-1-1" @click="getAnimeXiamu('xiamu')">夏目友人帐</el-menu-item>
            </el-submenu>
          <!-- </el-menu-item-group> -->
          <el-submenu index="2-2">
            <template slot="title">韩剧</template>
            <el-menu-item index="2-2-1" @click="getKoreanGuiguai('guiguai')">鬼怪</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <img src='/static/image/fix.png' class='img_border' style="margin-bottom: -4px">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>操作</span>
      </el-header>
      <p v-if="error_flag">
          <el-alert
            :title="error_msg"
            type="error"
            center
            show-icon>
          </el-alert>
      </p>
      <el-main>
        <div v-if="index_f === '1-1'">
          <el-table :data="tableData">
            <el-table-column prop="id" label="编码" width="70%">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="price" label="价格">
            </el-table-column>
            <el-table-column prop="comments" label="评价">
            </el-table-column>
            <el-table-column prop="default_image_url" label="图像">
            </el-table-column>
            <el-table-column prop="image" label="图片">
            </el-table-column>
          </el-table>
        </div>
        <div v-if="index_f === '2-1-1'" class="picwordbg">
          <ul class="goods_type_list clearfix">
            <li v-for="sku in tableData" :key=sku.id>
              <a :href="sku.image"><img :src="sku.image"></a>
              <h4><a :href="sku.image">{{sku.name}}</a></h4>
              <div class="operate">
                  <span>{{sku.comments}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="index_f === '2-2-1'" class="picwordbg">
          <el-table :data="tableData">
            <el-table-column prop="id" label="编码" width="70%">
            </el-table-column>
            <el-table-column prop="name" label="歌手">
            </el-table-column>
            <el-table-column prop="songsName" label="歌曲">
            </el-table-column>
            <!-- <el-table-column prop="image" label="图片">
              {{prop}}
            </el-table-column> -->
            <el-table-column label="">
              <img src="isStore ? /static/image/stopIcon.png : /static/image/startIcon.png" style="width: 20px"/>
            </el-table-column>
          </el-table>
          <!-- <div v-for="Data in tableData" :key=Data.id>
              <div style="float: left">
                <h3>{{Data.name}}</h3>
                <h4>{{Data.songsName}}</h4>
              </div>
              <div style="float: left" @click="changeStart">
                <img :src="isStore ? Data.stopIcon : Data.startIcon" style="width: 30px"/>
              </div>
          </div> -->
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Product',
  data () {
    return {
      tableData: [],
      error_msg: '',
      error_flag: false,
      index_f: '1-1',
      isStore: false,
      progress: '0%'
    }
  },
  // mounted: function () {
  //   this.checkMp3()
  // },
  // watch: {
  //   'isStore': function () {
  //     console.log(this.isStore, 'isStore--watch')
  //   }
  // },
  methods: {
    getproduct () {
      axios.post('/api/productlist', {}, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
        this.tableData = res.data
        this.index_f = '1-1'
      }).catch(error => {
        // alert(error)
        this.error_msg = error
        this.error_flag = true
      })
    },
    getAnimeXiamu (name) {
      axios.post('/api/anime/xiamu', {'name': name}, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
        this.tableData = res.data
        this.index_f = '2-1-1'
      }).catch(error => {
        // alert(error)
        this.error_msg = error
        this.error_flag = true
      })
    },
    getKoreanGuiguai (name) {
      axios.post('/api/korean/guiguai', {'name': name}, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
        this.tableData = res.data
        this.index_f = '2-2-1'
      }).catch(error => {
        // alert(error)
        this.error_msg = error
        this.error_flag = true
      })
    },
    changeStart () {
      const musicMp3 = document.getElementById('musicMp3')
      this.changeProgress()
      if (this.isStore) {
        musicMp3.play()
      } else {
        musicMp3.pause()
      }
      this.isStore = !this.isStore
    },
    changeProgress () {
      const musicMp3 = document.getElementById('musicMp3')
      const timer = setInterval(() => {
        const numbers = musicMp3.currentTime / musicMp3.duration
        let perNumber = (numbers * 100).toFixed(2)
        if (perNumber >= 100) {
          this.isStore = true
          this.progress = 0
          clearInterval(timer)
        }
        perNumber += '%'
        this.progress = perNumber
      }, 30)
    }
  },
  created () {
    this.getproduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './src/assets/scss/global';
.picwordbg {
  background-color: white;
  padding-top: 15px;
  height: 100%;
  display: grid;
}
.x-media-name h3 h4{
  background: black;
}
.x-media {
  display: flex;
}
.el-main {
  padding: 6px
}
.el-header {
  background-color: rgb(238, 241, 246);
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-table::before {
  height: 0px;
}
.img_border {
  width: 18px;
  height: 18px;
  margin-right: 6px
}
.goods_type_list{
  margin: 10px auto 0;
}

.goods_type_list li{
  width:33%;
  float:left;
  margin-bottom:10px;
  list-style: none;
  font-family: cursive;
}

.goods_type_list li img {
  /* width:160px; */
  height:160px;
  /* display:block; */
  /* margin:10px auto; */
}
.goods_type_list li h4 {
  /* width:160px; */
  margin:0 auto;
}
.goods_type_list li h4 a{font-weight:normal;color:#666;display:block;width:160px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}

.operate{
  /* width:160px; */
  margin:10px auto;
  position:relative
}
.goods_type_list .operate .prize{color:#da260e; font-size:14px;}
.goods_type_list .operate .unit{color:#999;padding-left:5px;}

/* 清除浮动 */
.clearfix:before,.clearfix:after{content:"";display:table}
.clearfix:after{clear:both;}
.clearfix{zoom:1}
// .x-footer{
//   // position: fixed;
//   background-color: white;
//   // width: 100%;
//   // display: inline;
//   justify-content: space-between;
//   // bottom: 0;
//   left: 50%;
//   // padding: 20px;
//   .x-meida{
//     // display: inline;
//     .x-meida-img{
//       width: 88px;
//       height: 88px;
//       overflow: hidden;
//       @include border-radius(5px);
//       > img{
//         width:100%;
//       }
//     }
//   .x-media-name{
//     padding: 10px 20px;
//     color: #000;
//     text-align: left;
//   //   > h3{
//   //   }
//   }
// }
// .x-media-btn{
//   width: 56px;
//   height: 56px;
//   @include border-radius(50%);
//   // border: 3px solid #ff0000;
//   padding: 10px;
//   align-self: center;
//   // audio{
//   //   display: none;
//   // }
//   > img{
//     width: 100%;
//   }
//   }
//   .x-media-menu{
//     display: inline-flex;
//     width: 43px;
//     height: 43px;
//     align-self: center;
//     > img{
//       width: 100%;
//     }
//   }
// }
.mediaDiv {
  display: inline-block;
  // float: left;
  height: 100px;
}
// .x-mp3-progress{
//   width: 100%;
//   position: absolute;
//   height: 6px;
//   overflow: hidden;
//   bottom: 0;
//   left: 0;
//   .x-now-progress{
//     position: relative;
//     @extend %transition;
//     height: 6px;
//     background-color: orange;
//     position: relative;
//     transition: all .3s ease-in-out;
//     -ms-transition: all .3s ease-in-out;
//     -moz-transition: all .3s ease-in-out;
//     -webkit-transition: all .3s ease-in-out;
//   }
// }
</style>
