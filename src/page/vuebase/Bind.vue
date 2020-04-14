<template>

  <div id="bind">
    <h2>v-bind：绑定HTML标签的属性(省略为 :)</h2>
    <hr>
    <ol>
      <img :src="imgPath" width="200"/><br>
      <a :href="hrefPath">跳转到首页</a>
    </ol>
    <br>
    <hr>
    绑定样式:
    <div :class="class1" >1.class1的颜色变化</div>
    <div :class="{class2:isOk}">2.class2的字体大小变化</div>
    <div :class="[class1,class2]">3.两个样式都绑定</div>
    <div :class="isOk?class1:class2">4.三目运算</div>
    <div :style="{color:color,fontSize:font}">5.绑定style</div>
    <div :style="styleObject">6.对象绑定style</div>
    <input type="checkbox" v-model="isOk"> isOk->{{isOk}}
    <br>
    <br>
  </div>
</template>

<script>
    export default {
        name: "Bind",
        data(){
            return{
                imgPath: require('../../assets/wode.gif'),
                hrefPath: '/',
                class1: 'class1',//它是个字符串类型，绑定class
                isOk: true,  //{：}判断值是否为真，绑定class中的判断
                class2: 'class2',    //[]通过数组绑定多个class样式,
                color: 'orange',
                font: '20px',
                styleObject: {
                    color: 'green',
                    fontSize: '20px'
                }
            }
        }
    }
</script>

<style scoped>
  .class1{
    color: brown;
  }
  .class2{
    font-size: 200%;
  }
</style>
