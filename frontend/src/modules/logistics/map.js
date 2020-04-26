import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import style from './map.css'
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';


class Maps extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lat: 59.9337,
      lng: 30.352,
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
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer'/>
      </div>
    )
  }
}

export default Maps;
ReactDOM.render(<Maps/>, document.getElementById('root'))