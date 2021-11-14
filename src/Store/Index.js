import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cotizadorReducer from '../Store/Reducers/CotizadorReducer';

export default createStore(cotizadorReducer, applyMiddleware(thunk));


