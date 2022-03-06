import locationReducer from './locationReducer'
import orderReducer from './orderReducer'
import pathPoints from './pathReducer'
import markers from './markerPoints'

const rootReducer = {
  locations: locationReducer,
  orders: orderReducer,
  pathPoints,
  markers
}

export default rootReducer