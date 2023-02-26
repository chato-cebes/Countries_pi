import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";

//Esta linea nos sirve para conectar con la extension del navegador => REDUX DEVTOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  //Esta linea me sirve para hacer peticiones a la API
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
