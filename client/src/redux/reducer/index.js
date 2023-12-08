import { ALL_COUNTRIES, FIND_NAME_COUNTRIES } from "../action";

const initialState = {
    countries: [],
    mensaje:""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case FIND_NAME_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                mensaje: action.payload.mensaje && action.payload.mensaje
            }

        default:
            return state;
    }
};

export default rootReducer;