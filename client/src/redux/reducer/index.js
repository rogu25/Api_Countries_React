import { ALL_COUNTRIES } from "../action";

const initialState = {
    countries: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        default:
            return state;
    }
};

export default rootReducer;