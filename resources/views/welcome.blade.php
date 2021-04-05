<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Google Maps</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }
            .content {
                text-align: center;
            }

            
        </style>
    </head>
    <body>
        <div class="flex-top position-ref full-height">
             <div class="content">
                <div class="box">
                    <h1> Google Maps With laravel and Vue</h1>
                </div>
                  <div id="app" class="maps " >
                     <div class="container">
                       <div class="columns">
                        <div class="column box">
                                <gmap-map
                                    :center="mapCenter"
                                    :zoom="5"
                                    style="width: 100%; height: 700px;">
                                   <gmap-marker
                                          v-for="item in locations" 
                                          :key="item.id"
                                          :position="{lat:item.Lat,lng:item.Long}"                      
                                          :clickable="true"
                                          :draggable="false"
                                    ></gmap-marker>
                              </gmap-map>
                           </div> 
                          <div class="column">
                               <table class="table box is-striped">
                                  <thead>
                                    <tr>
                                      <th>S.No</th>
                                      <th>FName</th>
                                      <th>LName</th>
                                      <th>Gender</th>
                                      <th>Lat</th>
                                      <th>Long</th>
                                    </tr>
                                  </thead>
                                   <tbody>
                                        <tr v-for="item in locations"   :key="item.id">                                 <td v-text="item.id"></td>
                                            <td v-text="item.Fname"></td>
                                            <td v-text="item.Lname"></td>
                                            <td v-text="item.Gender"></td>
                                            <td v-text="item.Lat"></td>
                                            <td v-text="item.Long"></td>
                                           
                                        </tr>
                                   </tbody>
                              </table>
                           </div>     
                       </div>  
                     </div><!--container-->
                  </div><!--vue block app-->                
            </div><!--/Content-->
        </div><!--/Flex box-->

         <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
