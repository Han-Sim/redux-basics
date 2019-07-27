import { FETCH_POST, NEW_POST } from "../actions/types" //those constants are representing action "type"

const initialState = {
  items: [], //array of post objects
}

//Export default reducer
//  Parameters: initialState and Action Types
//  Must be a pure function
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    default:
      return state
  }
}
