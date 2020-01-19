<template>
  <div class="hello">
    <div>
        <span v-text="question"></span>
        <p>Anserw: </p>
        <span v-if="submitted" v-text="anserw"></span>
    </div>
    <button v-if="!submitted" v-on:click="checkAnserw" v-text="msg"></button>
    <button v-if="submitted" v-on:click="goNext" v-text="msg"></button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: function(){
    return {
      question: "",
      anserw: "",
      submitted: false,
      flashcards: [],
      currentQuestion: 0,
      msg: "Check"
    }
  },
  mounted(){
    this.flashcards = this.$store.state.flashcards
    if (this.flashcards.length == 0){
      alert("Could not load the data. Try to run a server.")
    }
    this.question = this.flashcards[this.currentQuestion]["question"]
    this.anserw = this.flashcards[this.currentQuestion]["answer"]
  },
  methods: {
    checkAnserw: function (){
      this.submitted = true;
      this.msg = "Next"
    },
    goNext: function(){
      this.currentQuestion += 1
      if(this.currentQuestion >= this.flashcards.length){
          this.msg = "Finished"
      }
      else{
          this.submitted = false;
          this.question = this.flashcards[this.currentQuestion]["question"]
          this.anserw = this.flashcards[this.currentQuestion]["answer"]
      }

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
