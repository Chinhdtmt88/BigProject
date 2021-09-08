/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations); //lấy phần tử id="map", phân tích chuỗi Json
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hpbmhudjQ2IiwiYSI6ImNrdDhibW1kazEwbnMydmxqZTN0NTNwYjgifQ.LegkQHZ53fkU8hcpa-Py2w';

// eslint-disable-next-line vars-on-top
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/chinhnv46/ckt8clvlp4tcr17o52sa0e0zu',
  scrollZoom: false,
  //   center: [105.804817, 21.028511],
  //zoom: 10,
  //interactive: true,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //Create marker(đánh dấu)
  const el = document.createElement('div'); //tạo một div element
  el.className = 'marker';

  //Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);
  // Add popup
  new mapboxgl.Popup({
    offset: 50,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}:${loc.description}</p>`)
    .addTo(map);

  //Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 200, bottom: 150, left: 100, right: 100 },
});
