<template>
  <div class='aboutus'>
    {{msg}}
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getAboutUs () {
      // axios.get('/api/aboutus').then(res => {
      this.$api.aboutUs().then(res => {
        this.msg = res
      })
    }
  },
  created () {
    this.getAboutUs()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutus {
  background-color: snow;
  margin: 0 auto 80px;
}
</style>
