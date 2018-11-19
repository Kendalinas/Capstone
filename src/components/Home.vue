<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Kendal's Capstone</h2>
   
  </div>
</template>

<script>
// import { API } from "@/common/api"
import axios from 'axios';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to my App'
    }
  },
  mounted() {
  //   document.addEventListener("DOMContentLoaded", function(event) {
  //     responsiveVoice.speak("Hello World")
  //   console.log("DOM fully loaded and parsed");
  // });
    
    // API.get("projects", {
    //   params:{ type:"comedy"

    //   }
    // })
    // axios.jsonp('http://www.behance.net/v2/projects?api_key=8X7njeQ67MR015PmQj3g0J5j9StQJF98&field=comedy')
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
