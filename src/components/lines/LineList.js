import { Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'
import MarkerPoints from './MarkerPoints'

const LineList = () => {

  const pathPoints = useSelector(state => state.pathPoints.points)
  const polylineOptions = {
    smoothFactor: 0,
    color: 'lime',
    weight: 5,
    steps: 0
  }
  return (
    <>
      {pathPoints ? <Polyline pathOptions={polylineOptions} positions={pathPoints} /> : false}
      <MarkerPoints />
    </>
  )
}
export default LineList