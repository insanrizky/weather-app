import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { weather } from './reducers/weather';

const reducers = combineReducers({
    weather
})

export function initializeStore () {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}