<template>
  <div class="button-click">
    <el-button @click="show3 = !show3" class="buttonAttr">Click Me</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box"><router-link to='/hello'>Hello</router-link></div>
          <div class="transition-box"><router-link to='/aboutus'>About Us</router-link></div>
          <div class="transition-box"><router-link to='/login'>Login</router-link></div>
        </div>
      </el-collapse-transition>
    </div>
    <el-button type="primary" :icon="weathericon" class="wheatherIcon buttonAttr" @click="dialogVisible = true">天气</el-button>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :showClose="showClo"
      width="50%">
      <span>天气：{{mes.weather}} {{mes.temp}}°</span><br ><hr>
      <!-- <span>温度：{{mes.temp}}°</span><br ><hr> -->
      <span>降水概率：{{mes.SD}}</span><br ><hr>
      <span>风向：{{mes.WD}}，等级：{{mes.WS}}</span><hr>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'index',
  data () {
    return {
      show3: false,
      dialogVisible: false,
      showClo: false,
      mes: '',
      weathericon: 'el-icon-sunny',
      title: ''
    }
  },
  mounted () {
    this.wheatherData()
  },
  methods: {
    wheatherData () {
      this.$api.weatherData()
      .then(res => {
        this.writeCurrentDate()
        this.mes = res.weatherinfo
        let weather = this.mes.weather
        if (weather === '多云' | weather.indexOf('阴') !== -1) {
            this.weathericon = 'el-icon-cloudy'
        } else if (weather.indexOf('雨') !== -1) {
            this.weathericon = 'el-icon-light-rain'
        } else {
            this.weathericon = 'el-icon-sunny'
        }
      })
      .catch(error => {
        alert(error)
      })
    },
    writeCurrentDate () {
      let dateTime = new Date()
      // this.title = '注意天气变化 ' + dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate() + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds()
      this.title = '注意天气变化 ' + dateTime.Format('yyyy-MM-dd HH:mm:ss')
      setTimeout(this.writeCurrentDate, 1000)
    }
    // handleClose (done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done()
    //     })
    //     .catch(_ => {})
    // }
  }
}
/* eslint no-extend-native: ["error", { "exceptions": ["Date"] }] */
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-click {
  /* text-align: right; */
  margin: 100px auto;
}
.transition-box {
  margin-bottom: 5px;
  width: 100px;
  border-radius: 4px;
  background-color: rgb(211, 236, 248);
  text-align: center;
  color: #fff;
  padding: 10px 0px;
  box-sizing: border-box;
  margin-right: 20px;
}
.buttonAttr {
  width: 100px;
  height: 40px;
}
.transition-box:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
el-button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
a {
  text-decoration: none;
  color: #000;
}
.wheatherIcon {
  position: relative;
  top: -260px;
  float: right;
}
</style>
