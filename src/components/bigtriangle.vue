<template> 
        <div class="big-triangle">

            <!-- Row 1 -->
            <div class="row">
                <div class="column0"><div :class="object.shape0"></div></div>
            </div>

            <!-- Row 2 -->
            <div class="row">
                <div class="column1"><div :class="object.shape1"></div></div>  
                <div class="column2"><div :class="object.shape2"></div></div>  
            </div>  

            <!-- Row 3 --> 
            <div class="row">
                <div class="column3"> <div :class="object.shape3"> </div> </div>
                <div class="column4"> <div :class="object.shape4"> </div> </div>
                <div class="column5"> <div :class="object.shape5" ></div> </div>
            </div>

            <!-- Row 5 --> 
            <div class="row">
                <div class="column6"><div :class="object.shape6"></div></div>
                <div class="column7"><div :class="object.shape7"></div></div>
                <div class="column8"><div :class="object.shape8"></div></div>
                <div class="column9"><div :class="object.shape9"></div></div>
            </div>
            </div> 
        </div>
    </template>
          
    
    <style scoped>
         .big-triangle{
            margin-right: 5rem; 
            height: 8rem; 
            width: 8rem;
        }

        .row{
            display: table;
            clear: both;
            width: 8rem;
            height: 2rem; 
        }

        .column0{
            float: left;
            width: 100%;
            height: 2rem;
            text-align: center; 
            
        }

        .column1{
            float: left;
            width: 50%;
            height: 2rem;
            text-align: center; 
            padding-left: 1.5rem; 
        }
        

        .column2{
            float: left;
            width: 50%;
            height: 2rem;
            text-align: center; 
            padding-right: 1.5rem; 
        }

        .column3, .column4, .column5{
            float: left;
            width: 33.3%;
            height: 2rem;
        }

        .column6{

            float: left;
            width: 25%;
            height: 2rem;
            padding-right: 2rem; 
        }

        .column7{
            float: left;
            width: 25%;
            height: 2rem;
        } 

        .column8{
            float: left;
            width: 25%;
            height: 2rem; 
        } 


        .column9{
            float: left;
            width: 25%;
            height: 2rem;
            padding-left: 1.1rem; 
        } 

        .greendot, .bluedot{
            height: 1.1em;
            width: 1.1em;
            border-radius: 50%;
            display: inline-block; 
            margin-top: 0.5rem;  
        }

        .greentriangle, .bluetriangle{
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            display: inline-block; 
            margin-top: 0.5rem;  
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

     
    </style>   
    

    <script>

        // Export the app here 
        export default {
            name: 'bigtriangle',
            props: ['object'], 
           
        };
    </script>