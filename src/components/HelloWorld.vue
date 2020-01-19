<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{question}}: {{anserw}}</div>
    <button v-on:click="loadData">Load data</button>
    <button v-on:click="sendData">Send data</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
  msg: String,
  },
  data: function(){
    return {
      question: String,
      anserw: String,
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
    loadData: function (){
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
