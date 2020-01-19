<template>
  <div class="hello">
    <div class="space">
        <input  v-model="question" placeholder="question">
    </div>
    <div class="space">
        <input  v-model="answer" placeholder="anserw">
    </div>
    <button class="space" v-on:click="done" v-text="msg"></button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      question: "",
      answer: "",
      msg: "Create"
    }
  },
  methods: {
    done: function (){
     axios
      .post('https://localhost:44367/api/FlashCard',
        {
          question: this.question,
          answer: this.answer,
          group: "global"
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
    margin-top: 10px;
    margin-right: 10px;

}

</style>
