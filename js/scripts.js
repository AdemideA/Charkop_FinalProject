    var map = new L.Map('map', { 
      center: [19.2150, 72.8245],
      zoom: 15
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);

    $.getJSON("data/data.geojson", function(data) { 
  console.log(data)


  var options = {
    style: function(feature) {
      var SectorColour;

      if (feature.properties.ID == 1) {
        SectorColour = '#ffeda0';
      }

      if (feature.properties.ID == 2) {
        SectorColour = '#fed976';
      }

      if (feature.properties.ID == 3) {
        SectorColour = '#feb24c';
      }

      if (feature.properties.ID == 4) {
        SectorColour = '#fd8d3c';
      }

      if (feature.properties.ID == 5) {
        SectorColour = '#fc4e2a';
      }

      if (feature.properties.ID == 6) {
        SectorColour = '#e31a1c';
      }

      if (feature.properties.ID == 7) {
        SectorColour = '#b10026';
      }

      return {
            color: SectorColour,
            fillColor: SectorColour,
            // fillopacity: 1,
            // weight: 2,
        }
    },  
  
  
    onEachFeature: function (feature, layer) {
      layer.on('click', function(){
        $('#sidebar h2').text(feature.properties.Sector);
        $('#sidebar h3').text('Average Number of Households Interviewed in Sector: ' + feature.properties.Number_Interviewed);
        $('#sidebar h4').text('Average Length of Tenure in Charkop: ' + feature.properties.Length_Tenure);
        $('#sidebar h5').text('Interesting things interviewees said about the Community: ' + feature.properties.Community);
        $('#sidebar h6').text('Interesting things interviewees said about the Services: ' + feature.properties.Services) 
      })
    }     
  
  }
  
  L.geoJson(data, options).addTo(map);

});