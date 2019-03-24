
<template>
    <div v-if="count > 0"  class="body">

      <!-- ____________ DISPLAY INSTRUCTIONS AND EXAMPLES FOR THE USER HERE _______________ -->
      <div v-if= "page < 5" class="introduction">
          <h1>Introduction </h1> 
          In this task, press <b> t </b> if there are more triangles, press <b> c </b> if there are more circles. 
          For <a href="" class="blue"> blue-colored</a> shape, focus on the <b> big </b> shapes. 
          For  <a href="" class="green"> green-colored</a>  shape, focus on the <b>small </b> shapes 
          that make up the big shapes. 
        
          <!-- Instructions example (4 slide in total ) -->
          <div v-if="page <= 1" class="example">
              <img src="../../assets/d1.png" /> 
              <u>Example 1 (blue = big):</u> There are <b> 4 triangles </b> and <b> 6 circles </b> in this picture. Press <b>c</b> 
          </div>
          <div v-if="page === 2" class="example">
              <img src="../../assets/d2.png" /> 
              <u>Example 2 (blue = big):</u> There are <b> 8 triangles </b> and <b> 2 circles </b> in this picture. Press <b>t</b> 
          </div>
          <div v-if="page === 3" class="example">
              <img src="../../assets/d3.png" /> 
              <u>Example 3 (green = small):</u> There are <b> 4 triangles </b> and <b> 6 circles </b> in this picture. Press <b>c</b> 
          </div>
          <div v-if="page === 4" class="example">
              <img src="../../assets/d4.png" /> 
              <u>Example 4 (green = small):</u> There are <b> 8 triangles </b> and <b> 2 circles </b> in this picture. Press <b>t</b> 
          </div> <br>

          <!-- Button to move back and forth between the pages -->
          <ui-button v-on:click="page -= 1" raised> < Back </ui-button> 
          <ui-button v-on:click="page += 1" raised> Next > </ui-button> 
             
        </div>


         <!-- ____________  BEGIN EXPERIMENT HERE  _______________ --> 
        <div v-if= "page >= 5" >
          <h1> Expeirment </h1>  
          The experiment will begin. You will see <b>10 </b> slides of just blue shapes,  <b>10 </b> slieds of green shapes, 
          then  <b>10 </b> slides of blue, green, blue, green ...etc.  <br > 
          Click <b> Next </b> when you are ready, or <b> Back </b>to review the examples.  <br><br>
          <ui-button v-on:click="page -= 1" raised> < Back </ui-button> 
          <ui-button v-on:click="setCurrTime" raised> Begin </ui-button> 
          <h2> {{count}} seconds </h2>
        </div>

      </div>

  
    </div>

 </template>
<script>

import OneSlide from './one-slide';   



// Export the app here 
export default {

  name: 'intro',

  // Child component goes here 
  components: {
    'One-Slide': OneSlide, 
  },

  methods: {
    setCurrTime: function(){

      this.intervalid1 = setInterval(function(){
        this.$data.count -= 1; 
        if (this.$data.count <= 0){
          this.$emit('eventname', this.$data.count);  
          clearInterval(this.intervalid1); 
        } 
      }.bind(this), 1000);
    
    }, 

  }, 

  // Data return here 
  data() {
    return {
      count: 5, 
      page : 1, 
      componentData: 'One-Slide', 
      
    }
  }, 

  
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only  --> 
<style scoped>
  .body{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white; 
    padding: 3em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    transition: 0.3s;
    border-radius: 5px; 
  }


  .slideCSS{
    position: absolute;
    height: 100px;
  }

  .content{
    padding-bottom: 1rem; 
  }

  .blue{
    font-weight: bold;
    color: #2471A3; 
  }

  .green{
    font-weight: bold;
    color: #16A085;     
  }

  a{
    text-decoration: none; 
  }

  
  h1 {
    font-weight: normal;
  }

  section{
    width: 400px;
    margin-bottom: 10px; 
  }


  img{
    width: 600px; 
  }

</style> 
