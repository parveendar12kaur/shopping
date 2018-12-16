import { combineReducers } from "redux";
import initialState from './initialstate';
import { FILTER_DATA_RECEIVED, FILTER_UPDATE, FILTER_DISABLE, FILTER_RESET } from '../dictionary'

const filter = (state = initialState, action) => {

  switch(action.type) {
    case FILTER_DATA_RECEIVED:
        return Object.assign({}, state, {
            [action.context]: Object.assign({}, state[action.context], {
              options: action.data
            })
        })

    case FILTER_UPDATE:
        return Object.assign({}, state, {
            [action.context]: Object.assign({}, state[action.context], {
              selectedOption: action.value
            })
        })

    case FILTER_RESET:
        return Object.assign({}, state, {
            dept: Object.assign({}, state.dept, {
              selectedOption: [],
              disabled: false
            }),
            cat: Object.assign({}, state.cat, {
              selectedOption: [],
              disabled: false,
              options: []
            }),
            vendor: Object.assign({}, state.vendor, {
              selectedOption: [],
              disabled: false
            }),
            year: Object.assign({}, state.year, {
              selectedOption: [],
              disabled: false
            })
        })
    
    case FILTER_DISABLE:
        if(action.context){
          return Object.assign({}, state, {
              [action.context]: Object.assign({}, state[action.context], {
                disabled: true
              })
          })
        }else{
          return Object.assign({}, state, {
              dept: Object.assign({}, state.dept, {
                disabled: true
              }),
              cat: Object.assign({}, state.cat, {
                disabled: true
              })
          })  
        
      }

    default:
        return state
  }
  
};

export default combineReducers({
  filter
});
