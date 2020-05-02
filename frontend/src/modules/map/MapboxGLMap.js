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
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-0.5851639, 51.4093628],
        zoom: 9
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
      let coords=[{"id":1,"lng":-0.7067573,"lat":51.3147712},{"id":2,"lng":-0.622613,"lat":51.36033},{"id":3,"lng":-0.739293,"lat":51.354024},{"id":4,"lng":-0.740415,"lat":51.389043},{"id":5,"lng":-0.70227,"lat":51.424035},{"id":6,"lng":-0.586515,"lat":51.485092},{"id":7,"lng":-0.612329,"lat":51.508643},{"id":8,"lng":-0.64295,"lat":51.514233},{"id":9,"lng":-0.485326,"lat":51.285948},{"id":10,"lng":-0.479931,"lat":51.292937},{"id":11,"lng":-0.49284,"lat":51.286972},{"id":12,"lng":-0.497368,"lat":51.286249}]
    let markers = coords.map (adress => (
      {
        'type': 'Feature',
        'properties': {
        'icon': 'rocket'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [adress.lng, adress.lat]
        }
      }
      )
    )
    DrawMarkers(map, markers);
    new mapboxgl.Marker().setLngLat([-0.5851639 , 51.4093628]).addTo(map);
    var Arr =[]
    Arr.push([-0.5851639 , 51.4093628])
    map.on('click' , 'places' , function(e){  
      
      Arr.push(e.features[0].geometry.coordinates) 
      new mapboxgl.Marker().setLngLat(e.features[0].geometry.coordinates).addTo(map);  
      // DrawLine( Arr[Arr.length-2],Arr[Arr.length-1]);        
    } 
    );  

    
    map.on('dblclick', function() {
      let routesMap = Arr.map (el => (
        el[0].toString()+','+el[1].toString()+';'
        )
      )
      routesMap=routesMap.join('')
      routesMap=routesMap.slice(0, routesMap.length-2)
      DrawLine(routesMap, map)
    })
    };
    

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div className={style.map_container} ref={el => (mapContainer.current = el)}  />;
};

export default MapboxGLMap;