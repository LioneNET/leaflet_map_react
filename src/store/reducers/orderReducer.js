import actionTypes from './../types/index'
const initialState = {
  items: []
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER_ITEMS:
      return { ...state, items: action.data }
    default:
      return state
  }
}

export default orderReducer