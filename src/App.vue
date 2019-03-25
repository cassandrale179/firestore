<template>
  <div id="app">
      <div class="container">

          <!-- Display introduction slide here --> 
          <div v-if="count > 0" class="intro">
            <Intro @eventname="count = $event"></Intro>
          </div> 
      
          <!-- Star the experiment if count < 0, which means user finished reading the instruction slide -->
          <div v-if="count <= 0" class="experiment">
            {{moveSlides ('blue') }}
            <OneSlide :oneSlideProp= "oneSlideData"></OneSlide> 
          </div>
        </div> 

  </div>
</template>

<style>

body{
    position: absolute;
    height: 100%;
    width: 100%; 
    background-image: url('http://i.imgur.com/4Pp7dRg.jpg'); 
    background-size: cover; 
}
</style>

<script>

import Form from '../src/components/form';
import Intro from '../src/components/intro'; 
import OneSlide from '../src/components/one-slide';  



export default {
  name: 'App', 


  components: {
      Form, Intro, OneSlide
    }, 



   // Return any important data 
   data() {
    return {
      count: 2, 
      curr_slide: 0, 
      block: 'blue', 

      // Set experiment data here 
      oneSlideData : {
        title: 'Block 1', 
        block: 'big', 
      }
    };
  }


}
</script>

