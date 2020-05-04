import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken='pk.eyJ1IjoiaWxpYXNuayIsImEiOiJjazk0ZjFsM3AwYWpvM21venRhMHVxZnV0In0.89Hh6UMwZgvHAkbohiT8JQ';
let coordinatesArr
function fetchLine (route) {
  console.log(route)
  let routesMap = route.map(el => (
      el[0].toString()+','+el[1].toString()+';'
    )
  )
  routesMap=routesMap.join('')
  routesMap=routesMap.slice(0, routesMap.length-2)
    
  fetch(`https://api.mapbox.com/optimized-trips/v1/mapbox/driving-traffic/-0.5851639,51.4093628;${routesMap}?geometries=geojson&overview=full&access_token=${mapboxgl.accessToken}`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    coordinatesArr = data["trips"][0]["geometry"]["coordinates"]
    return coordinatesArr
  })
}

export default fetchLine = fetchLine


