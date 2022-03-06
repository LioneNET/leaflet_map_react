import actionTypes from './../types/index'
const initialState = {
  markers: {
    start: null,
    end: null
  }
}
const markerPoints = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MARKER_POINTS:
      return { ...state, markers: action.data }
    default:
      return state
  }
}

export default markerPoints