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
        SectorColour = '#b10026';
      }

      if (feature.properties.ID == 2) {
        SectorColour = '#fd8d3c';
      }

      if (feature.properties.ID == 3) {
        SectorColour = '#b10026';
      }

      if (feature.properties.ID == 4) {
        SectorColour = '#b10026';
      }

      if (feature.properties.ID == 5) {
        SectorColour = '#b10026';
      }

      if (feature.properties.ID == 6) {
        SectorColour = '#fd8d3c';
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
        $('#sidebar h3').html('Number of Households Interviewed in Sector: ' + '<br/>' + feature.properties.Number_Interviewed);
        $('#sidebar h4').html('Average Length of Tenure in Charkop: ' + '<br/>' + feature.properties.Length_Tenure);
        $('#sidebar h5').html('Interesting things interviewees said about the Community: ' + '<br/>' + feature.properties.Community + '; ' + '<br/>' + feature.properties.communitytwo + '; ' + '<br/>' + feature.properties.communitythree);
        $('#sidebar h6').html('Interesting things interviewees said about the Services: ' + '<br/>' + feature.properties.Services) 
      })
    }     
  
  }
  
  L.geoJson(data, options).addTo(map);

});