<template>
  <div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div class="footer">
      <div class="footer_links">
        <a href="/">关于我们</a>
        <span>|</span>
        <a href="/">联系我们</a>
        <span>|</span>
        <a href="/">招聘人才</a>
        <span>|</span>
        <a href="/">友情链接</a>
      </div>
      <p class="copyright">
            CopyRight © 2020 上弦文化有限公司 All Rights Reserved<br />
            电话：532-88888888    鲁ICP备88888888号
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
button {
  color:black;
  background: skyblue;
  border-radius: 30%;
  width: 70px;
  height: 30px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border: 0;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.backg {
  background-image: url(../static/image/1.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment:fixed;
  /* -moz-background-size: 100% 100%; */
}
.footer{
    /* margin-top:20px; */
    background:#262F38;
    overflow:hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: -8px;
    height: 68px;
}
.footer_links{
    text-align:center;
    /* margin-top:20px; */
    margin-bottom: -6px;
}
.footer_links a,.footer_links span{
    color:#fff;
    font-size:12px;

}
.footer_links span{
    margin:0 5px;
}
.copyright{
    text-align:center;
    font-size:12px;
    color:#fff;
    line-height:22px;
    margin-top:9px;
    margin-bottom:10px;
}
</style>
