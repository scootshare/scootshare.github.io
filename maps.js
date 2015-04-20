// if HTML DOM Element that contains the map is found...
//if (document.getElementById('map-canvas')){
function initialize() { 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(42.3804602,-71.1090958);
  
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
   var mapCanvas = document.getElementById('map-canvas');
   // var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
   var map = new google.maps.Map(mapCanvas, mapOptions);
   $.getJSON("http://spreadsheets.google.com/feeds/list/1JUTBExG9pubs4bH_9o776IzyycpIKbTViYoWy2vJRV8/od6/public/values?alt=json-in-script&callback=?", function(data) {

     var i;
     
     for (i=0; i<6; i++) {
			 var trialerLoc = new google.maps.LatLng(
         data.feed.entry[i].gsx$lat.$t,
         data.feed.entry[i].gsx$long.$t );
       
      
			 
			 //var infowindow = new google.maps.InfoWindow({content: contentString});
			 var marker = new google.maps.Marker({
				 position: trialerLoc,
				 map: map,
				 title: data.feed.entry[i].gsx$name.$t});
			 
			 (function(marker, i) {
                        // add click event
				 google.maps.event.addListener(marker, 'click', function() {
					 
					 var contentString = 
         '<h1>' + data.feed.entry[i].gsx$name.$t +'</h1>' + 
         '<b>Description: </b>' + data.feed.entry[i].gsx$description.$t + '<br>'+
         '<b>Dimensions: </b>' + data.feed.entry[i].gsx$dimensions.$t + '<br>'+
         '<a href="' + data.feed.entry[i].gsx$request.$t + '"><p align="center">' +
							 '<b>Send Request</b> </p></a>';
					 
					 infowindow = new google.maps.InfoWindow({
						 content: contentString,
						 maxWidth: 200
					 });
					 infowindow.open(map, marker);
				 });
			 })(marker, i);
			 
     }
   
});
	
//	google.maps.event.addListener(marker, 'click', function() {
	//			 infowindow.open(map,marker);
	//		 }); 
 
}

 google.maps.event.addDomListener(window, 'load', initialize);// if HTML DOM Element that contains the map is found...
//if (document.getElementById('map-canvas')){
function initialize() { 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(42.3804602,-71.1090958);
  
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
   var mapCanvas = document.getElementById('map-canvas');
   // var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
   var map = new google.maps.Map(mapCanvas, mapOptions);
   $.getJSON("http://spreadsheets.google.com/feeds/list/1JUTBExG9pubs4bH_9o776IzyycpIKbTViYoWy2vJRV8/od6/public/values?alt=json-in-script&callback=?", function(data) {

     var i;
     
     for (i=0; i<6; i++) {
			 var trialerLoc = new google.maps.LatLng(
         data.feed.entry[i].gsx$lat.$t,
         data.feed.entry[i].gsx$long.$t );
       
      
			 
			 //var infowindow = new google.maps.InfoWindow({content: contentString});
			 var marker = new google.maps.Marker({
				 position: trialerLoc,
				 map: map,
				 title: data.feed.entry[i].gsx$name.$t});
			 
			 (function(marker, i) {
                        // add click event
				 google.maps.event.addListener(marker, 'click', function() {
					 
					 var contentString = 
         '<h1>' + data.feed.entry[i].gsx$name.$t +'</h1>' + 
         '<b>Description: </b>' + data.feed.entry[i].gsx$description.$t + '<br>'+
         '<b>Dimensions: </b>' + data.feed.entry[i].gsx$dimensions.$t + '<br>'+
         '<a href="' + data.feed.entry[i].gsx$request.$t + '"><p align="center">' +
							 '<b>Send Request</b> </p></a>';
					 
					 infowindow = new google.maps.InfoWindow({
						 content: contentString,
						 maxWidth: 200
					 });
					 infowindow.open(map, marker);
				 });
			 })(marker, i);
			 
     }
   
});
	
//	google.maps.event.addListener(marker, 'click', function() {
	//			 infowindow.open(map,marker);
	//		 }); 
 
}

 google.maps.event.addDomListener(window, 'load', initialize);
