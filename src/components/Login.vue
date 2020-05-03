<template>
  <div class="login">
    <form action="">
      <div class='input_mes'>
        <label class="label_input">用户名：</label>
        <input type="text" placeholder="请输入昵称" v-model="formMess.account" class='input_nicket'>
      </div>
      <div class='input_mes'>
        <label class="label_input">密码：</label>
        <input type="password" placeholder="请输入密码" v-model="formMess.passw" class='input_nicket'>
      </div>
      <div class='button_login'>
        <label class="label_input"></label>
        <button @click="onSubMit" class='button_inside'>提交</button>
        <button @click="onCancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      formMess: {
        'account': '',
        'passw': ''
      }
    }
  },
  methods: {
    onSubMit () {
      axios.post('/api/login', this.formMess, {'headers': {'X-CSRFToken': this.getCookie('csrf_token'), 'withCredentials': true}}).then(res => {
        this.$router.push('/productlist')
      }).catch(error => {
        alert(error)
      })
    },
    onCancel () {
      this.$router.push('/')
    }
    // getCookie (name) {
    //   let cname = name + '='
    //   let cookies = document.cookie.split(';')
    //   for (let i = 0; i < cookies.length; i++) {
    //     let tmpC = cookies[i]
    //     while (tmpC.charAt(0) === '') {
    //       tmpC = tmpC.substring(1)
    //     }
    //     if (tmpC.indexOf(cname) !== -1) {
    //       return tmpC.substring(cname.length, tmpC.length)
    //     }
    //   }
    //   return ''
    // }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  text-align: center;
  margin: 180px auto;
}
.input_nicket{
  width: 20%;
  height: 40px;
  text-align: left;
}
.label_input{
  display: inline-block;
  width: 80px;
  font-style: normal;
  text-align: justify;
}
.button_login {
  margin: 20px auto;
}
.button_inside {
  margin: 0 4% 0 3%;
}
.input_mes {
  padding: 5px;
}
</style>
