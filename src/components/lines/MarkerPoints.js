import L from 'leaflet'
import { Marker } from 'react-leaflet'
import { useSelector } from 'react-redux';

const iconStart = new L.Icon({
  iconUrl: require('../../assets/marker-start.png'),
  iconSize: new L.Point(20, 56)
})

const iconEnd = new L.Icon({
  iconUrl: require('../../assets/marker-end.png'),
  iconSize: new L.Point(20, 56)
})

const MarkerPoint = () => {
  const markers = useSelector(state => state.markers.markers)
  return (
    <>
      {markers.start ? <Marker position={markers.start} icon={iconStart} /> : false}
      {markers.end ? <Marker position={markers.end} icon={iconEnd} /> : false}
    </>
  )
}
export default MarkerPoint