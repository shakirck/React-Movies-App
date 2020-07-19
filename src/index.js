import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

// const logger = function({dispatch , action}){
//   return function(next){
//     return function(action){
//       console .log('Action Type === ',action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch , getState }) => (next) => (action)=>{
  if(typeof action !=='function'){
    console .log('Action Type === ',action.type);

  }
  next(action);
}

// const thunk = ({dispatch , getState })=>(next) =>(action) =>{

//   if(typeof action == 'function'){
//     console.log('thunk')
//     action(dispatch);
//     return;
//   }

//   next (action)
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
