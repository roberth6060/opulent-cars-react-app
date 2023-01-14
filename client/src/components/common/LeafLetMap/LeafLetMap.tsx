import { LocationContainer } from './style/LeaftLetMapStyle';
// import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// const position: Array<Number> = [51.505, -0.09];
const latitude = 45.7988904;
const longitude = 15.8869043;

const LeafLetMap = ()=> {
    return (<LocationContainer>
      <h2>Location</h2>
     <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[latitude, longitude]}>
    <Popup>
      Savska opatovina 96, <br/>10070, Zagreb, Croatia
    </Popup>
  </Marker>
</MapContainer>
    </LocationContainer>)
}


export default LeafLetMap;