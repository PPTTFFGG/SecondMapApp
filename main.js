import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// const qwe = 1;
// const gauthdata = {
//   login: 'geoserver',
//   password: '123'
// }

// let response = await  fetch('http://localhost:8080/geoserver/rest/workspaces/SDB_NYC/datastores/SDB_NYC/featuretypes.json', {
//   mode: 'no-cors',
//   method: "GET",
//   credentials: 'include',
//   headers: {
//     'Authorization': `Basic ${gauthdata.login}:${gauthdata.password}`
//   }
// });

// console.log(response);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
