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
  
  let LocalStore

  let DrawMarkers = () => {
  fetch('http://wefouragency.com:1000')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      LocalStore = data
      AddMarkers(data);
      
    })
  }
   
    
    

    DrawMarkers();

    
    let LineOnMap = (id, lng_s, lat_s, lng_f, lat_f) =>{
      fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${lng_s},${lat_s};${lng_f},${lat_f}?geometries=geojson&access_token=pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data['0']['routes']['geometry']['coordinates'])
          map.addSource(`${id}`, {
              'type': 'geojson',
              'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
              'type': 'LineString',
              'coordinates': data["routes"][0]["geometry"]["coordinates"]
              }
              }
              });
          
              map.addLayer({
                'id': `${id}`,
                'type': 'line',
                'source': `${id}`,
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': 'red',
                'line-width': 8
                }
                });
      })
  
      
    }
     
    map.on('load', function() {

      for (let i=0; i < LocalStore.length - 1 ; i++){
        LineOnMap(LocalStore[i].id , LocalStore[i].lng, LocalStore[i].lat, LocalStore[i+1].lng, LocalStore[i+1].lat);
      }
      
    
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
