<template>

  <div id="On">
    <h2>v-on：省略为 @</h2>
    <hr>
    <ol>
      <li>
        比赛得分：{{score}}
        <br>
        <button @click="jiafen">加分</button>
        <button @click="jianfen">减分</button>
        <br>
        <!--enter:ASCII在键盘上的值是13-->
        在绑定比赛得分的基础上加减：<input type="text" v-model="ruleScore" @keyup.enter="onEnter">
      </li>
    </ol>
  </div>
</template>

<script>
    export default {
        name: "On",
        data(){
            return{
                score: 0,
                ruleScore: 0
            }
        },
        methods: {
            jiafen() {
                this.score++;
            },
            jianfen() {
                this.score--;
            },
            onEnter() {
                this.score=this.score+parseInt(this.ruleScore)
            }
        }
    }
</script>

<style scoped>

</style>
