import { ALL_COUNTRIES, FIND_NAME_COUNTRIES, FIND_ID_COUNTRY } from "../action";

const initialState = {
    countries: [],
    mensaje: "",
    detalle_country: {}
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
        case FIND_ID_COUNTRY:
            return {
                ...state,
                detalle_country: action.payload,
                mensaje: action.payload.mensaje && action.payload.mensaje
            }

        default:
            return state;
    }
};

export default rootReducer;