/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 * 
 */
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
});
const app = new Vue({
    el: '#app',

    data:{
    	 renderlocations:[],
    	 locations:[  
    	            {id:1,Fname:"Audy",Lname:"MacKonochie",Gender:"Female",Lat:27.948308,Long:109.599191},
    	            {id:2,Fname:"Godard",Lname:"Matthiae",Gender:"Male",Lat:14.6306039,Long:121.0056925},
    	            {id:3,Fname:"Alphonse",Lname:"Knowles",Gender:"Male",Lat:45.75997,Long:126.668787},
    	            {id:4,Fname:"Elvis",Lname:"Chatan",Gender:"Female",Lat:-38.9338082,Long:-69.2497586},
    	            {id:5,Fname:"Keely",Lname:"Mariotte",Gender:"Male",Lat:48.8902362,Long:36.308001},
    	            {id:6,Fname:"Chrisy",Lname:"Plant",Gender:"Male",Lat:28.420801,Long:120.075461},
					{id:7,Fname:"Godiva",Lname:"Esby",Gender:"Female",Lat:-8.1141,Long:111.7762},
					{id:8,Fname:"Belinda",Lname:"Peploe",Gender:"Female",Lat:37.7213799,Long:-25.510372},
					{id:9,Fname:"Kalle",Lname:"Gallgher",Gender:"Male",Lat:37.9525906,Long:23.7464528},
					{id:10,Fname:"Alli",Lname:"Powelee",Gender:"Female",Lat:25.5562935,Long:-100.9383192},
					{id:11,Fname:"Ashlin",Lname:"Duxbury",Gender:"Male",Lat:22.43,Long:41.75},
					{id:12,Fname:"Giavani",Lname:"Stiegars",Gender:"Male",Lat:30.884195,Long:115.764855},
					{id:13,Fname:"Bernarr",Lname:"Stife",Gender:"Male",Lat:40.02219,Long:98.99644},
					{id:14,Fname:"Maegan",Lname:"Steggles",Gender:"Female",Lat:3.2572094,Long:-77.2864879},
					{id:15,Fname:"Web",Lname:"Peasby",Gender:"Male",Lat:39.9041999,Long:116.4073963},
                    
                 ],

       
       infoWindowOptions:{
               pixelOffset:{
               	 width:0,
               	 height:-40
               }
       },

      currentLocation:{},

       infoWindowOpened:false

    },
   
   mounted(){
   	    //Mount To show all the Points on map
   	    this.renderlocations = [...this.locations];
   	    console.log(this.renderlocations);
   },


    methods:{

    	femaleGender(){
    		let females = this.locations.filter(location =>  location.Gender =="Female");
    		this.renderlocations = females;
    		console.log(this.locations);//for testing purpose
    	},
    	maleGender(){
    		let males = this.locations.filter(location =>  location.Gender =="Male");    		
    		this.renderlocations = males;
    		console.log(this.locations);//for testing purpose
    		
    	},
    	all(){
    		this.renderlocations = [...this.locations];
    	},
    	handleCurrentLocation(item){
           this.currentLocation = item,
           this.infoWindowOpened = true
    	},
    	HandleCloseWindow(){
    	   this.currentLocation = {},
           this.infoWindowOpened = false
    	}
    },

    computed:{
   	 
    	mapCenter(){
  			return {
    				lat:this.locations[1].Lat,
    		     	lng:this.locations[1].Long
    			}
         	},

         infoWindowPosition(){
              return{
                   lat:this.currentLocation.Lat,
                   lng:this.currentLocation.Long,
              }
         },	

    }
   
});
