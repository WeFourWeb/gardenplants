import mapboxgl from 'mapbox-gl';
import { Marker } from "react-mapbox-gl";

const DrawMarkers = (map, markers) => {
    map.on('load', function() {
      map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': markers
        }
      }
      );
      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true
        }
        }
        ) 
        map.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': []
                
            }
          }
        }
        );
        map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 3
          }
        })
    }
    );
  }

export default DrawMarkers