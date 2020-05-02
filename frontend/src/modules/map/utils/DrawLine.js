import mapboxgl from 'mapbox-gl';

const DrawLine = function(route, map) {
    let coordinatesArr = []
    let count = 0
    fetch(`https://api.mapbox.com/optimized-trips/v1/mapbox/driving-traffic/${route}?geometries=geojson&overview=full&access_token=${mapboxgl.accessToken}`)
      .then((response) => {
        return response.json();
      }
      )
      .then((data) => {
        coordinatesArr=data["trips"][0]["geometry"]["coordinates"]
        // console.log(coordinatesArr);
      }
      )
      .then(()=> {
        map.addSource(`source${count}`, {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': coordinatesArr
            }
          }
        }
        );
        map.addLayer({
          'id': `layer${count}`,
          'type': 'line',
          'source': `source${count}`,
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 3
          }
        
        
        })
    count++
      }
      )
  }

export default DrawLine