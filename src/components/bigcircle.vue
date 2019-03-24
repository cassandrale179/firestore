<template> 
    <div class="big-circle">
        <div :class="object.shape0" class="deg0"></div> 
        <div :class="object.shape1" class= "deg45"></div> 
        <div :class="object.shape2" class= "deg90"></div> 
        <div :class="object.shape3" class= "deg135"></div> 
        <div :class="object.shape4" class= "deg180"></div> 
        <div :class="object.shape5" class= "deg225"></div> 
        <div :class="object.shape6" class= "deg270"></div> 
        <div :class="object.shape7" class= "deg315"></div> 
        <div :class="object.shape8" class= "center1"></div>  
        <div :class="object.shape9" class= "center2"></div> 
    </div>

</template>
<style scoped>

    .big-circle{
        margin-right: 5rem;
        position: relative;
        width: 8em;
        height: 8em;
        border-radius: 50%;
        
    }

   .bluedot, .greendot{
        position: absolute;
        height: 1.2em;
        width: 1.2em;
        border-radius: 50%;
        margin-left: -22px; 
    }

    

    .bluetriangle, .greentriangle{
        position: absolute;
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 15px solid #16A085;
    }


    .bluedot{
            background-color: #2471A3   
        }

    .bluetriangle {
        border-bottom: 15px solid  #2471A3; 
    }

    .greendot {
        background-color: #16A085;    
    }

    .greentriangle {
        border-bottom: 15px solid #16A085;   

    }


    .deg0{
      margin-left: 3rem; 
    }

    .deg45{
        margin-top: 1.0rem; 
        margin-left: 5.12rem; 

    }

    .deg90{
        margin-top: 2.9rem; 
        margin-left: 5.8rem; 
    }

    .deg135{
        margin-top: 4.9rem; 
        margin-left: 5.12rem; 
    }

    .deg180{
        margin-top: 5.9rem;
        margin-left: 3rem; 
    }

    .deg225{
        margin-top: 4.9rem;
        margin-left: 0.85rem; 
    }

    .deg270{
        margin-top: 2.9rem; 
        margin-left: 0rem; 
    }

    .deg315{
        margin-top: 1.0rem; 
        margin-left: 0.6rem; 
    }

    .center1{
        margin-top: 2.0rem; 
        margin-left: 3.0rem; 
    }

    .center2{
        margin-top: 4.0rem; 
        margin-left: 3.0rem; 
    }

</style>   

<script>
    // Export the app here 
    export default {
        name: 'bigcircle',
        props: ['object'], 
    };
</script>


 