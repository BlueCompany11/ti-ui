<template>
  <div class="hello">
    <div>
        <span v-text="question"></span>
    </div>
    <p>Anserw: </p>
    <p v-if="submitted">{{anserw}}>>
    <button v-on:click="checkAnserw">Check</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    flashcards: Object,
  },
  data: function(){
    return {
      question: String,
      anserw: String,
      submitted: Boolean,
    }
  },
  mounted(){
    axios
      .get('https://localhost:44367/api/FlashCard')
            .then(response => {
              this.msg = response.data
        })
  },
  methods: {
    checkAnserw: function (){
      axios
      .get('https://localhost:44367/api/FlashCard')
      .then(response => {
        this.question = response.data[0]["question"]
        this.anserw = response.data[0]["anserw"]
        })
      .catch(error => console.log(error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
