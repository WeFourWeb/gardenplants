import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from './map.module.css'
import DrawMarkers from './utils/DrawMarkers'
import DrawLine from "./utils/DrawLine";

const MapboxGLMap = ({addNewPoint, routes, orders}, ...props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-0.5851639, 51.4093628],
        zoom: 9
      })
      map.on('load', () => {
        setMap(map)
      })
  
      let markers = orders.map(adress => ({
        'type': 'Feature',
        'properties': {
        'description': 
        `Order №${adress.orderId}
        <br/>
        <button id="get_point">Add point to route</button>`,
        'icon': 'garden'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [adress.lng, adress.lat]
        }
      })
    )
    DrawMarkers(map, markers);
    new mapboxgl.Marker().setLngLat([-0.5851639 , 51.4093628]).addTo(map);
    var Arr = []
    Arr.push([-0.5851639 , 51.4093628])

    map.on('click' , 'places' , function(e) { 
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description; 
      Arr.push(e.features[0].geometry.coordinates) 
      let pop = new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map); 
      document.getElementById('get_point').addEventListener('click', function (el) {
        addNewPoint(coordinates, parseInt(description.slice(description.indexOf('№')+1, description.indexOf('<'))))
        pop.remove()
      })
    }) 
    }

    const updateMap = ({ setMap }) => {
      setMap(map)
      routes.forEach(route => { 
        DrawLine(route.coordinates).then((res) => {
          map.addSource(`route${route._id}`, {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': res
              } 
            }
          })
          map.addLayer({
            'id': `route${route._id}`,
            'type': 'line',
            'source': `route${route._id}`,
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': 'green',
              'line-width': 3
            }
          })
        })
      })
    }
  if (!map) initializeMap({ setMap, mapContainer })
  updateMap({ setMap })
  }, [map])
  return <div className={style.map_container} ref={el => (mapContainer.current = el)}  />
}

export default MapboxGLMap;