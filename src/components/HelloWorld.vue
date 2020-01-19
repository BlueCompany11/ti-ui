<template>
  <div class="hello">
    <div id="nav">
      <button class="big-btn"><router-link to="/learn">Learn</router-link></button>
    </div>
    <div>
      <button class="big-btn"><router-link to="/create">Create flashcard</router-link></button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  mounted(){
    axios
      .get('https://localhost:44367/api/FlashCard')
            .then(response => {
              this.$store.commit("loadFlashcards", response.data)
            .catch(error => console.log(error))
        })
  },
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

.big-btn {
    width: 100px;
    height: 50px;
}
</style>
