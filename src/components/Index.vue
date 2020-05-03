<template>
  <div class="button-click">
    <el-button @click="show3 = !show3">Click Me</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box"><router-link to='/hello'>Hello</router-link></div>
          <div class="transition-box"><router-link to='/aboutus'>About Us</router-link></div>
          <div class="transition-box"><router-link to='/login'>Login</router-link></div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show3: false
    }
  },
  methods: {
  }
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
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 10px 0px;
  box-sizing: border-box;
  margin-right: 20px;
}
button {
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
  color: #fff;
}
</style>
