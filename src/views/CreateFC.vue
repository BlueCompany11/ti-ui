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
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    },
    testPost: function(){
        axios
      .post('https://jsonplaceholder.typicode.com/posts/',
        {
            userId: 1,
            id: 101,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }
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
