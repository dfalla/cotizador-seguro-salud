import { LIST_PRODUCTS_SUCCESS  } from '../Actions/CotizadorActions';

const initialState = {
      persona: {}
};

const cotizadorReducer = (state = initialState, { type, payload }) => {

      switch (type) {
            case LIST_PRODUCTS_SUCCESS:
                  return {
                        ...state,
                        persona: {...payload}
                  }
            default:
                  return state
      }
};


export default cotizadorReducer;