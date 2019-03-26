<template>
  <div id="app">
      <div class="container">

          <!-- <div v-if="count == 0" class="form">
              <Form></Form>
            </div> 
         -->
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


  // Watch variable changes here  and trigger a function 
  watch : { 

  // If the block variable change, trigger move slides to generate a new block 
    block: function(newVal, oldVal){
      setTimeout(function() { 
        this.moveSlides(newVal); 
      }.bind(this), 4000); 
    } 
  }, 


  // Methods (function) used in this slide 
  methods: {

    // This method generates 10 slides within 2.5 seconds for each block 
    moveSlides : function(block){

      // Run the blue block 
      if (block == 'blue'){
      this.blueInterval = setInterval(function(){
          if (this.$data.curr_slide >= 10){
            clearInterval(this.blueInterval);  
            this.$data.curr_slide = 0;   
            this.$data.block = 'green'; 
            this.$data.oneSlideData.title = 'Block 2';  
            this.$data.oneSlideData.block = 'small';  
          }  else {
            this.$data.curr_slide += 1; 
            this.$data.oneSlideData.title = 'Slide ' + this.$data.curr_slide.toString();  
          }
        }.bind(this), 2500);    
      } 

      // Run the green block 
      if (block == 'green'){
        this.greenInterval = setInterval(function(){       
            if (this.$data.curr_slide == 10){
              clearInterval(this.greenInterval);  
              this.$data.curr_slide = 0;  
              this.$data.block = 'switch'; 
              this.$data.oneSlideData.title = 'Block 3';  
              this.$data.oneSlideData.block = 'switch';  
            } else {
              this.$data.curr_slide += 1; 
              this.$data.oneSlideData.title = 'Slide ' + this.$data.curr_slide.toString();  
            }
            
          }.bind(this), 2500);    
      }

  // Run the switch block 
        if (block == 'switch'){
        this.switchInterval = setInterval(function(){       
            if (this.$data.curr_slide == 10){
              clearInterval(this.switchInterval);  
            } else {
              this.$data.curr_slide += 1; 
              this.$data.oneSlideData.title = 'Slide ' + this.$data.curr_slide.toString();  
            }
          }.bind(this), 2500);    
      }
    }
  }, 



    components: {
      Form, Intro, OneSlide
    }, 



   // Return any important data 
   data() {
    return {
      count: 1, 
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

