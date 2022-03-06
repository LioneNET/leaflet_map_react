import actionTypes from './../types/index'

const initialState = {
  position: {
    start: [],
    end: []
  },
  points: null
}

const pathReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PATH:
      return { ...state, points: action.data }
    case actionTypes.SET_POSITION:
      return { ...state, position: action.data }
    default:
      return state
  }
}

export default pathReducer