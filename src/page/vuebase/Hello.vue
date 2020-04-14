<template>
    <div id="Hello" name="Hello">
      <h2>Hello World</h2>
      <hr>
      <h3>插值：</h3>
      <ol>
        <li>
          <!--缺点：页面加载过慢时，页面直接显示{{message}}，不美观-->
          <!--缺点：在网速慢的情况下，页面会显示{{xx}}，然后等到解析完成后，才会改变成相应的数据，所以使用这三种指令都可以防止插值表达式的闪烁-->
          数据绑定最常见的文本插值<span v-pre>{{}}</span> : <span>{{message}}</span>
        </li>
        <li>
          <!--容易产生冲突和攻击-->
          v-html : <span v-html="message"></span>
        </li>
        <li>
          <!---->
          v-text : <span v-text="message"></span>
        </li>
        <li>
          <!--只渲染一次-->
          v-once  : <span v-once>{{message}}</span>
        </li>
        <li>
          <!--在使用v-cloak的元素标签中添加其他的内容，渲染完页面后会被保留，而v-text和v-html如果在元素标签中填写其他，页面加载完成后，会被覆盖掉-->
          v-cloak : <span v-cloak>{{message}}</span>
        </li>
        <li>
          <!--双向绑定-->
          v-model : <label for="zhi"></label><input v-model="message" id="zhi">
        </li>
        <li>
          v-if : <span v-if="nv">女</span>
        </li>
        <li>
          v-show : <span v-show="nan">男</span>
        </li>
        <li>
          v-for :
          <div v-for="student in students">
            {{student.name}}
          </div>
        </li>
      </ol>
    </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
            message: 'hello world',
            nan: true,
            nv: true,
            students: [
                {name: 'zs',
                    age: 23},
                {name: 'ls',
                    age: 21},
                {name: 'ww',
                    age: 17}
            ],
            username: 'dz'
        }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

</style>
