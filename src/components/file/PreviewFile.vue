<template>
  <div class='previewf'>
    {{msg}}
    <!-- <iframe class="prism-player" :src="pdfUrl" width="100%" height="100%"></iframe> -->
    <pdf v-for="i in numPages" :key="i" :src="pdfUrl" :page="i" style="display: inline-block; width: 100%"> </pdf>
    <!-- <pdf :src="pdfUrl"></pdf> -->
    <!-- <pdf src='./test33.pdf'></pdf> -->
  </div>
</template>

<script>
import axios from 'axios'
// import CryptoJS from 'crypto-js'
// import JSEncrypt from 'jsencrypt'
import pdf from 'vue-pdf'
// var loadingTask = pdf.createLoadingTask('data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK')
var loadingTask = pdf.createLoadingTask('/api/file/preview')
export default {
  name: 'PreviewFile',
  components: {pdf},
  data () {
    return {
      msg: '',
      key: '',
      iv: '',
      numPages: null,
      pdfUrl: loadingTask
    }
  },
  mounted () {
    this.pdfUrl.then(pdf => {
      this.numPages = pdf.numPages
    }).catch(error => {
      alert(error)
    })
  },
  methods: {
    getFileMess () {
      axios.get('/api/file/preview').then(res => {
        this.msg = res.data
        this.key = res.data.key
        this.iv = res.data.iv
        let message = res.headers
        // let deMessage = this.aesDecrypt(message)
        let contentType = message['']
        let fileName = message.content_disposition
        console.log(fileName)
        this.fileDownload(this.msg, '', contentType)
      }).catch(error => {
        alert(error)
      })
    }
  },
  created () {
    // this.getFileMess()
    // var enm = this.aesEncrypt('Hannah')
    // var dem = this.aesDecrypt(enm)
    // console.log(enm)
    // console.log(dem)
    // var enm = this.rsaEncrypt('HannahHannah')
    // var dem = this.rsaDecrypt(enm)
    // console.log(enm)
    // console.log(dem)
    // this.getUrl()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.previewf {
  background-color: snow;
  margin: 0 auto 80px;
}
</style>
