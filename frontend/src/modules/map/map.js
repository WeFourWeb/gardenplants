import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import style from './map.module.css'
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';




class Maps extends React.Component {
  constructor(props) {
  super(props);
    this.state = { 
      lat: 51.4093628,
      lng:  -0.5851639,
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

    
    let LineOnMap = (color, id, lng_s, lat_s, lng_f, lat_f) =>{
      fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${lng_s},${lat_s};${lng_f},${lat_f}?geometries=geojson&access_token=pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ`)
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
                'line-color': color,
                'line-width': 5
                }
                });
      })
  
      
    }
     
    map.on('load', function() {

      // for (let i=0; i < LocalStore.length - 1 ; i++){
      //   LineOnMap(LocalStore[i].id , LocalStore[i].lng, LocalStore[i].lat, LocalStore[i+1].lng, LocalStore[i+1].lat);
      // }
      LineOnMap('blue', 0, LocalStore[0].lng, LocalStore[0].lat, LocalStore[1].lng, LocalStore[1].lat);
      LineOnMap('blue', 1, LocalStore[1].lng, LocalStore[1].lat, LocalStore[2].lng, LocalStore[2].lat);
      LineOnMap('blue', 2, LocalStore[2].lng, LocalStore[2].lat, LocalStore[3].lng, LocalStore[3].lat);
      LineOnMap('blue', 3, LocalStore[3].lng, LocalStore[3].lat, LocalStore[4].lng, LocalStore[4].lat);
      LineOnMap('blue', 4, LocalStore[4].lng, LocalStore[4].lat, LocalStore[5].lng, LocalStore[5].lat);

      LineOnMap('green', 5, LocalStore[0].lng, LocalStore[0].lat, LocalStore[6].lng, LocalStore[6].lat);
      LineOnMap('green', 6, LocalStore[6].lng, LocalStore[6].lat, LocalStore[7].lng, LocalStore[7].lat);
      LineOnMap('green', 7, LocalStore[7].lng, LocalStore[7].lat, LocalStore[8].lng, LocalStore[8].lat);

      LineOnMap('red', 8, LocalStore[0].lng, LocalStore[0].lat, LocalStore[9].lng, LocalStore[9].lat);
      LineOnMap('red', 9, LocalStore[9].lng, LocalStore[9].lat, LocalStore[10].lng, LocalStore[10].lat);
      LineOnMap('red', 10, LocalStore[10].lng, LocalStore[10].lat, LocalStore[11].lng, LocalStore[11].lat);
      LineOnMap('red', 11, LocalStore[11].lng, LocalStore[11].lat, LocalStore[12].lng, LocalStore[12].lat);

    
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
