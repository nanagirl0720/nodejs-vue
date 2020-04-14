<template>

  <div id="model">
    <h2>v-model：</h2>
    <hr>
    文本框：{{message}}
    <ol>
      <li>
        绑定数据源v-model : <input type="text" v-model="message">
      </li>
      <li>
        <!--当鼠标移动到文本框外时，message发生改变-->
        懒加载数据源v-model.lay : <input type="text" v-model.lazy="message">
      </li>
      <li>
        <!--文本框中只有当以数字开头时，只保留数字-->
        v-model.number : <input type="text" v-model.number="message">
      </li>
      <li>
        <!--去除文本框中开头的空格-->
        v-model.trim : <input type="text" v-model.trim="message">
      </li>
    </ol>
    <br>
    文本域：{{message}}<br>
    <textarea rows="10" cols="30"  v-model="message"></textarea>
    <br>
    复选框：<input type="checkbox" v-model="isTrue"/>
    <br>
    下拉框：
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <br>
    <hr>
    数据绑定到数组中：
    <input type="checkbox" id="isTrue"  v-model="ruming" value="nana"><label for="isTrue">娜娜</label>
    <input type="checkbox" id="isTrue1"  v-model="ruming" value="dandan"><label for="isTrue1">旦旦</label>
    <input type="checkbox" id="isTrue2" v-model="ruming" value="danmin"><label for="isTrue2">旦民</label>
    <br>
    {{ruming}}
    <br>
    单选框绑定：
    <input type="radio" id="nan" value="man" v-model="sex"><label for="nan">男</label>
    <input type="radio" id="nv" value="famale" v-model="sex"><label for="nv">女</label>
    <br>
    您选择的性别是：{{sex}}
  </div>

</template>

<script>
    export default {
        name: "Model",
        data() {
            return{
                message: 'China',
                isTrue: false,
                ruming: [],
                sex: ''
            }
        }
    }
</script>

<style scoped>

</style>
