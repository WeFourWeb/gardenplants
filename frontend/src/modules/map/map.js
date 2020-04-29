import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import style from './map.module.css'
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';





class Maps extends React.Component  {

  constructor(props) {
  super(props);
    this.state = { 
      lat: 51.4093628,
      lng:  -0.5851639,
      zoom: 9
    };
  }

  componentDidMount() {



    var map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom 
    });

    

    // Сохраняем данные с API
  let coords=[{"id":1,"lng":-0.7067573,"lat":51.3147712},{"id":2,"lng":-0.622613,"lat":51.36033},{"id":3,"lng":-0.739293,"lat":51.354024},{"id":4,"lng":-0.740415,"lat":51.389043},{"id":5,"lng":-0.70227,"lat":51.424035},{"id":6,"lng":-0.586515,"lat":51.485092},{"id":7,"lng":-0.612329,"lat":51.508643},{"id":8,"lng":-0.64295,"lat":51.514233},{"id":9,"lng":-0.485326,"lat":51.285948},{"id":10,"lng":-0.479931,"lat":51.292937},{"id":11,"lng":-0.49284,"lat":51.286972},{"id":12,"lng":-0.497368,"lat":51.286249}]
  console.log(coords)

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
  ))
      let DrawMarker = function () {
  map.on('load', function() {
    map.addSource('places', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': markers
  }});
    map.addLayer({
      'id': 'places',
      'type': 'symbol',
      'source': 'places',
      'layout': {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true
      }
      }) })
    }
    DrawMarker();
    let DrawLine = function () {
      map.on('load', function() {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
        [-0.5851639 , 51.4093628],
        [-0.622613, 51.36033]
        ]
        }
        }
        });
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
        'line-width': 8
        }
      }) })
     
     
    }
    
  new mapboxgl.Marker().setLngLat([-0.5851639 , 51.4093628]).addTo(map);

 
        var Arr =[]
        Arr.push([-0.5851639 , 51.4093628])
        map.on('click' , 'places' , function(e){  
          Arr.push(e.features[0].geometry.coordinates) 
          new mapboxgl.Marker().setLngLat(e.features[0].geometry.coordinates).addTo(map);
          console.log(e.features[0].geometry.coordinates)  
        } 
        );
        map.on('dragend' , function(e){
          console.log(Arr);
       })
        
      } //Component DidMount

  render() {
    return (
      <div ref={el => this.mapContainer = el} className={style.map_container}/>
    )
  }
}

export default Maps;


//ReactDOM.render(<Maps/>, document.getElementById('root'))

