import {combineReducers , createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { janusproducts , categorywithid} from './redux/reducers/categoryreducers'

const redroot = combineReducers({
  
    janusproducts:janusproducts,
    categorywithid:categorywithid
})

const initialstate = {}
const composeEnhancers = composeWithDevTools({
   
  });

const store =  createStore(redroot , initialstate , composeEnhancers( applyMiddleware(thunk) ))


export default store;