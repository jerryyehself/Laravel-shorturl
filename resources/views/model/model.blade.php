<html>
    <head>
        <title>短網址測試</title>
        <link rel="icon" href="{{asset('imgs/short_images.jpeg')}}" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <script src="{{asset('js/jquery.min.js')}}" defer></script>
        <script src="{{asset('js/app.js')}}" defer></script>
        <!--script src="{{asset('js/show_chart.js')}}" defer></script>-->
        <script src="https://d3js.org/d3.v7.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body>
        @yield('content')
    </body>  
</html>