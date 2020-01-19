<template>
  <div class="hello">
    <div class="space">
        <input  v-model="question" placeholder="question">
    </div>
    <div class="space">
        <input  v-model="anserw" placeholder="anserw">
    </div>
    <button class="space" v-on:click="done" v-text="msg"></button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: function(){
    return {
      question: "",
      anserw: "",
      msg: "Create"
    }
  },
  methods: {
    done: function (){
     
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
    margin-bottom: 10px;
    margin-right: 10px;
}

</style>
