

    <!-- This is template for one slide -->
    <template>
        <div class="body">
            <h1> {{ oneSlideProp.title}} </h1> 
            <p> Press <b> t </b> for triangles, <b> c</b> for circles, or <b> q </b> to quit the experiment </p>
            <div class="row">
                <component style="display: inline-block" :is="ComponentData.shape0" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape1" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape2" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape3" :object="ObjectData" ></component>  
            </div>
            <div class="row">
                <component style="display: inline-block" :is="ComponentData.shape4" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape5" :object="ObjectData" ></component>  
            </div>
            <div class="row">
                <component style="display: inline-block" :is="ComponentData.shape6" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape7" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape8" :object="ObjectData" ></component>  
                <component style="display: inline-block" :is="ComponentData.shape9" :object="ObjectData" ></component>  
             </div>
            </div>
        </div>
     </template>
    <script>


    // Import the circle and triangle components here 
    import BigCircle from './bigcircle';  
    import BigTriangle from './bigtriangle'; 
    import CircleImage from '../../assets/circle.png'; 

    
    // This contained attributes for small shape and big shape 
    var smallShape = {}; 
    var bigShape = {}; 

    // // Helper functions to shuffle an array 
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // Function that fill out shape data 
    function fillOutShape(data){
        var shapeType = {}
        for (var i = 0; i < 10; i++){
            var keyName = 'shape' + i.toString(); 
            shapeType['shape' + i.toString()] = data[i]; 
        } 
        return shapeType; 
    }


    // Preset function based on cue 
   

    // Export variables here 
    export default {
      name: 'one-slide',
      props: ['oneSlideProp'],  



      // Watch for changes of data the parent here (pass as a prop )
      watch : {
        'oneSlideProp.title': function (newVal, oldVal){
           this.mainFunction(this.oneSlideProp.block, this.oneSlideProp.title);

        }
     },  

     // List of methods to create the slide 
      methods: {

        onEnter : function(key){
            console.log("key", key); 
            console.log("Current number", this.$data.correctKey); 

            if (key == this.$data.correctKey){
                console.log("Correct"); 
            }
        }, 


        createData: function (p1, p2, f1, f2, h1, h2, l1, l2){

            // This is the customized component (either lcoal or global)
            var arr1 = Array(h1).fill(p1).concat(Array(h2).fill(p2)); 
            var arr2 = Array(h2).fill(p1).concat(Array(h1).fill(p2)); 
            var arr3 = Array(l1).fill(p1).concat(Array(l2).fill(p2)); 
            var arr4 = Array(l2).fill(p1).concat(Array(l1).fill(p2));  

            var arr =  [arr1, arr2, arr3, arr4]; 
            var random_num = Math.floor(Math.random()*arr.length) 
            var p = arr[random_num];   
            shuffle(p); 

            // This is the set component (either local or global)
            var f = Array(5).fill(f1).concat(Array(5).fill(f2));  
            shuffle(f);   

            // Set the correct key 
            if (random_num == 1) this.$data.correctKey = 84; 
            if (random_num == 2) this.$data.correctKey = 67; 
            if (random_num == 3) this.$data.correctKey = 67; 
            if (random_num == 4) this.$data.correctKey = 84; 


            return [p, f]; 
        }, 

        
        mainFunction: function(currentblock, title){
            // This contained attributes for small shape and big shape 
            var smallShape = {}; 
            var bigShape = {}

            // Choose a ratio of contrast and type 
            var global = 'blue'; 
            var local = 'green'; 

            // High ratio (8, 2) and low ratio (4, 6)
            var h1 = 8; var h2 = 2; 
            var l1 = 4; var l2 = 6; 

            // Create an array of ratios (8020, 2080, 4060, 6040)
            if (global == 'blue' && local == 'green'){
                var gd = this.createData('Triangle-Component', 'Circle-Component', 'bluedot', 'bluetriangle', h1, h2, l1, l2); 
                var ld = this.createData('greentriangle', 'greendot', 'Triangle-Component', 'Circle-Component', h1, h2, l1, l2);   

                if (title.includes('Block')){
                    this.ComponentData = {}; 
                    this.ObjectData = {}; 
                }

                // Create new block data 
                else if (currentblock == 'big'){
                    var bigShape = fillOutShape(gd[0]);  
                    var smallShape = fillOutShape(gd[1]); 
                    this.ComponentData = bigShape; 
                    this.ObjectData = smallShape; 

                    



                } else if (currentblock == 'small') {

                    var bigShape = fillOutShape(ld[1]); 
                    var smallShape = fillOutShape(ld[0]); 
                    this.ComponentData = bigShape; 
                    this.ObjectData = smallShape; 

                } else {
                    var numb = title.match(/\d/g);
                    numb = parseFloat(numb.join("")); 
                    if (numb % 2 == 0){

                        var bigShape = fillOutShape(gd[0]);  
                        var smallShape = fillOutShape(gd[1]); 
                        this.ComponentData = bigShape; 
                        this.ObjectData = smallShape; 

                    }  else {

                        var bigShape = fillOutShape(ld[1]); 
                        var smallShape = fillOutShape(ld[0]); 
                        this.ComponentData = bigShape; 
                        this.ObjectData = smallShape; 

                    }
                }
            }   
        }, 
    }, 


    mounted() {
        window.addEventListener('keyup', event => {
        if (event.keyCode === 84 || event.keyCode == 67) { 
            this.onEnter(event.keyCode)
        }}); 

     }, 




     // Other dynamic data bind in this component 
      data() {
          return {
              correctKey: '', 
              CircleImage,
              ComponentData: {},  
              ObjectData: {}, 
          }
        
      }, 



      // Children components 
      components: {
          'Circle-Component': BigCircle, 
          'Triangle-Component': BigTriangle
      } 

    };
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
        img{
            width: 150px;
            position: fixed;
            margin-left: 100px;
            margin-top: -29px;
        }

      .body{
        position: absolute;
        background: white; 
        padding: 3em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        transition: 0.3s;
        border-radius: 5px; 
        width: 70rem; 
        height: 45rem; 
        margin-top: 2.5rem; 
        margin-left: 10rem; 
      }

      .row{
          padding-left: 40px;
          padding-right: 40px;
          margin-bottom: 3rem; 
      }

      h1 {
        font-weight: normal;
      }
    
    </style>
    

