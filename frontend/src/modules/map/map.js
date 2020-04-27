import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import style from './map.module.css'
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';




class Maps extends React.Component {
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
   
    
  let AddMarkers = (Arr) => {
    for (let i=0; i < Arr.length ; i++){
      let marker = new mapboxgl.Marker().setLngLat([Arr[i].lng, Arr[i].lat]).addTo(map);
    }
  }
  
  let DrawMarkers = () => {
  fetch('http://localhost:1000/api/getAdressList')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      AddMarkers(data);
    })
  }
   
    
    

    DrawMarkers();
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  
  }
  
  render() {
    return (
      
    
    <div ref={el => this.mapContainer = el} className={style.map_container}/>
     
    )
  }
}

export default Maps;
ReactDOM.render(<Maps/>, document.getElementById('root'))