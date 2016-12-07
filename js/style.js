




function initMap() {
  

  var myLatlng = new google.maps.LatLng(53.156622, 9.983964);
  var mapOptions = {
    zoom: 12,
    minZoom: 2,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROAD
  };


var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // [START region_polyline]
  // Define a symbol using SVG path notation, with an opacity of 1.
  var planeSymbol = {

    path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
    scale: 0.1, 
    strokeOpacity: 1,
    fill: '#E18001',
    strokeWeight: 1,
    anchor: new google.maps.Point(300,300)
  };

  var image = "img/bockhorn_ls2.png";
  var image2 = "img/hamburg_ls.png";


  var lineCoordinates = [
    new google.maps.LatLng(52.832952, 9.667539),
    new google.maps.LatLng(52.835507, 9.686233),
    new google.maps.LatLng(52.847692, 9.691436),
    new google.maps.LatLng(52.848679, 9.692610),
    new google.maps.LatLng(52.854350, 9.700013),
    new google.maps.LatLng(52.856198, 9.704552),
    new google.maps.LatLng(52.860140, 9.716885),
    new google.maps.LatLng(52.867688, 9.736063),
    new google.maps.LatLng(52.885124, 9.758519),
    new google.maps.LatLng(52.911337, 9.796876),
    new google.maps.LatLng(52.937096, 9.855626),
    new google.maps.LatLng(52.965181, 9.903364),
    new google.maps.LatLng(52.982219, 9.928120),
    new google.maps.LatLng(53.006873, 9.929456),
    new google.maps.LatLng(53.042222, 9.948601), 
    new google.maps.LatLng(53.040543, 9.949663), 
    new google.maps.LatLng(53.073530, 9.958396), 
    new google.maps.LatLng(53.113032, 9.985099), 
    new google.maps.LatLng(53.129640, 9.991411), 
    new google.maps.LatLng(53.141292, 10.005006), 
    new google.maps.LatLng(53.151193, 10.036322), 
    new google.maps.LatLng(53.159054, 10.060599), 
    new google.maps.LatLng(53.184582, 10.083062),
    new google.maps.LatLng(53.234846, 10.077705), 
    new google.maps.LatLng(53.258565, 10.088645), 
    new google.maps.LatLng(53.314440, 10.067039), 
    new google.maps.LatLng(53.337419, 10.040109), 
    new google.maps.LatLng(53.365495, 10.035646), 
    new google.maps.LatLng(53.380482, 10.006511), 
    new google.maps.LatLng(53.381369, 10.015203), 
    new google.maps.LatLng(53.387085, 10.020849), 
    new google.maps.LatLng(53.426145, 10.034592), 
    new google.maps.LatLng(53.457737, 10.027108), 
    new google.maps.LatLng(53.478591, 10.022176), 
    new google.maps.LatLng(53.500970, 10.039329), 
    new google.maps.LatLng(53.508820, 10.035975), 
    new google.maps.LatLng(53.525559, 10.021899), 
    new google.maps.LatLng(53.541475, 10.033229), 
    new google.maps.LatLng(53.545313, 10.030383), 
    new google.maps.LatLng(53.544195, 10.025649), 
    new google.maps.LatLng(53.544195, 10.025649), 
    




  ];
  var visibleLine = new google.maps.Polyline({
    path: lineCoordinates,
    strokeOpacity: 0.9,
    strokeWeight: 4,
    color: 'grey',
    map: map
    });

    var staticMark = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(52.841044, 9.633916),
    icon: image,
    visible: true // hide the static marker
    });

    var staticMarker = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(53.544195, 10.025649), /*lineCoordinates[0],*/
    icon: image2,
    visible: true // hide the static marker
    });

  var bounds = new google.maps.LatLngBounds();
  bounds.extend(lineCoordinates[0]);
  bounds.extend(lineCoordinates[40]);
  // Create the polyline, passing the symbol in the 'icons' property.
  // Give the line an opacity of 0.
  // Repeat the symbol at intervals of 20 pixels to create the dashed effect.
  var line = new google.maps.Polyline({
    path: lineCoordinates,
    strokeOpacity: 0,
    icons: [{
      // icon: planeSymbol,
      offset: '0' /*,
      repeat: '20px' */
    }],
    map: map
  });
map.fitBounds(bounds);
animatePlane(line);


$(window).resize(function(){
        $('#map_canvas').css("height",$(window).height());
        $('#map_canvas').css("width",$(window).width());
        google.maps.event.trigger(map, 'resize');
        map.setZoom( map.getZoom() );
   });


// [END region_polyline]

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animatePlane(line) {
var line = new google.maps.Polyline({
    path: lineCoordinates,
    strokeOpacity: 0,
    icons: [{
      icon: planeSymbol,
      offset: '0' /*,
      repeat: '20px' */
    }],
    map: map
  });
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 2000;

      var icons = line.get('icons');
      icons[0].offset = (count / 20) + '%';
      line.set('icons', icons);
  }, 20);
}
google.maps.event.addDomListener(window, 'load', initMap);


}





