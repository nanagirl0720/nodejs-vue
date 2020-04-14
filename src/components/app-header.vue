<template>
  <div class="bg">欢迎来到<span :style="font"> Management </span></div>
</template>

<script>
    export default {
        name: "app-header",
        data(){
            return{
                font: {
                    fontSize: '20px'
                }
            }
        }
    }
</script>

<style scoped>
</style>
