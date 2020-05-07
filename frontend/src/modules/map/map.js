import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { Marker } from "react-mapbox-gl";
import style from './map.module.css'
import DrawMarkers from './utils/DrawMarkers'
import DrawLine from './utils/DrawLine';


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


    // console.log(this.props)


    var map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom 
    });

    let coords=this.props.orders

    let markers = coords.map (adress => (
      {
        'type': 'Feature',
        'properties': {
        'description': 
          `Order №${adress["orderId"]}
          <br/>
          Postcode ${adress["postcode"]}
          <br/>
          <button id="get_point">Add point to route</button>`,
        'icon': 'garden'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [adress["lng"], adress["lat"]]
        }
      }
      )

    )
    DrawMarkers(map, markers);
    new mapboxgl.Marker().setLngLat([-0.5851639 , 51.4093628]).addTo(map);
    var Arr =[]
    Arr.push([-0.5851639 , 51.4093628])

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function() {
      map.getCanvas().style.cursor = 'pointer';
    });
   
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function() {
      map.getCanvas().style.cursor = '';
    });
    
    
        map.on('click' , 'places' , function(e){    
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        let pop = new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
        
        document.getElementById('get_point').addEventListener('click', function (el) {
          // this.props.addNewPoint(coordinates)
          Arr.push(coordinates) 
          pop.remove();
        })
        // DrawLine( Arr[Arr.length-2],Arr[Arr.length-1]);        
      } 
      );
    document.getElementById("add_route").addEventListener('click', function() {
      let routesMap = Arr.map (el => (
        el[0].toString()+','+el[1].toString()+';'
        )
      )
      routesMap=routesMap.join('')
      routesMap=routesMap.slice(0, routesMap.length-2)
      DrawLine(routesMap, map)
    })
    document.getElementById("del_route").addEventListener('click', function (){
      if (count > 0)
      { map.removeLayer(`layer${count-1}`)
      map.removeSource(`source${count-1}`)
      count--}
      else alert ("Routes findn't")
    })
  }

  render() {
    return (
      <div>
        <button id="add_route">Add new route</button>
        <button id="del_route">Remove last route</button>
        <div ref={el => this.mapContainer = el} className={style.map_container}/>
      </div>
    )
  }

}
export default Maps;
//ReactDOM.render(<Maps/>, document.getElementById('root'))

