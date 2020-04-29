import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import style from './map.module.css'
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';



class Maps extends React.Component  ({orders}, props){
  constructor(props) {
  super(props);
    this.state = { 
      lat: 51.5095,
      lng:  0.0054,
      zoom: 9
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    var marker = new mapboxgl.Marker() 
    .setLngLat([30.3544, 59.8838])
    .addTo(map);
                             
    map.on('load', function() {
      map.addSource('places', {
      'type': 'geojson',
      'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
          'icon': 'theatre'
          },
          'geometry': {
          'type': 'Point',
          'coordinates': [-77.038659, 38.931567]
          }
        }
      ]
    }
  })})

render() {
    return (   
      <div ref={el => this.mapContainer = el} className={style.map_container}/>
      
    )
  }
}

export default Maps;
//ReactDOM.render(<Maps/>, document.getElementById('root'))