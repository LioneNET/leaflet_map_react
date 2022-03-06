import LineLIst from '../lines/LineList'
import { MapContainer, TileLayer } from 'react-leaflet'

const MapPlace = () => {
  return (
    <MapContainer center={[43.3197031, 45.6934308]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LineLIst />
    </MapContainer>
  )
}

export default MapPlace