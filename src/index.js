import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';

import "./index.css";
import App from "./components/App";
import movies from "./reducers";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// const logger = function({dispatch , action}){
//   return function(next){
//     return function(action){
//       console .log('Action Type === ',action.type);
//       next(action);
//     }
//   }
// }
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log("Action Type === ", action.type);
  }
  next(action);
};

// export const StoreContext = createContext();
// console.log(StoreContext);
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }
// const thunk = ({dispatch , getState })=>(next) =>(action) =>{

//   if(typeof action == 'function'){
//     console.log('thunk')
//     action(dispatch);
//     return;
//   }

//   next (action)
// }
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })
// console.log(store.getState());

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props)
//        this.unsubscribe =   this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render() {
//         const {store}= this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component
//            {...dataToBePassedAsProps}
//             dispatch={store.dispatch} />
//         );
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }

//     }
//     return ConnectedComponentWrapper;
//   };
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
