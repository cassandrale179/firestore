


<template >
  <div class="body">
    <h1>Cognitive Flexibility Task</h1>

    <!-- <div>
      <li v-for="userName of users"
       >
        {{userName}}
      </li>
    </div> -->
    <section> <ui-textfield placeholder="Experiment Name" fullwidth> </ui-textfield></section>
    <section> <ui-textfield placeholder="Full Name" fullwidth> </ui-textfield></section>
    <section> 
      <ui-textfield outlined> Age </ui-textfield>  
      <ui-textfield outlined> Gender </ui-textfield>  
    </section>
    <section> 
      <ui-textfield box leadingIcon outlined> Date 
      <template slot="before"> <ui-textfield-icon>event</ui-textfield-icon> </template>
    </ui-textfield>
  </section> 
    <ui-button v-on:click="displayForm = !displayForm" raised> Begin Experiment</ui-button>
  </div>
</template>



<script>


console.log("db fuckkk", window.dbProp); 


// Export the app here 
export default {
  name: 'form',




  data() {
    
  
  }, 

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    border-radius: 5px; /* 5px rounded corners */
  }


  h1 {
    font-weight: normal;
  }

  section{
    width: 400px;
    margin-bottom: 10px; 
  }


</style>
