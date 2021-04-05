<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

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

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-top position-ref full-height">
             <div class="content">
                
                  <h1> Google Maps</h1>

                  <div id="app" class="maps" >
                       <gmap-map
                            :center="{lat:10,lng:10}"
                            :zoom="10"
                            style="width: 100%; height: 600px;">


                                <gmap-marker
                                  :position="{lat:10,lng:10}"                      
                                  :clickable="true"
                                  :draggable="false"
                                ></gmap-marker>


                        
                         </gmap-map>
                        
                  </div>
                
            </div>
        </div>

         <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
