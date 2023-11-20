import axios from "axios";

export const ALL_COUNTRIES = "ALL_COUNTRIES";
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

//------------------ request pokemons ----------------

export const get_all_countries = () => async (dispatch) => {
    try {
        const getAllCountries = await axios.get("http://localhost:3001/countries__");
        return dispatch({
            type: ALL_COUNTRIES,
            payload: getAllCountries.data
        });
    } catch (error) {
        return dispatch({
            type: ALL_COUNTRIES,
            payload: {mensaje: error}
        });
    }
}

// export const get_name_pokemon = (name) => async (dispatch) => {
//     try {
//         const getNamePokemon = await axios.get(`https://api-pokemon-flame.vercel.app/pokemons/name?nombre=${name}`);
//         return dispatch({
//             type: GET_NAME_POKEMON,
//             payload: getNamePokemon.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: GET_NAME_POKEMON,
//             payload: {mensaje: error.message}
//         });
//     }
// }

// export const get_id_pokemon = (id) => async (dispatch) => {
//     try {
//         const getIdPokemon = await axios.get(`https://api-pokemon-flame.vercel.app/pokemons/${id}`);
//         return dispatch({
//             type: GET_ID_POKEMON,
//             payload: getIdPokemon.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: GET_ID_POKEMON,
//             payload: {mensaje: error.message}
//         });
//     }
// }

// export const update_pokemon = (id, obj) => async (dispatch) => {
//     try {
//         const updatePokemon = await axios.put(`https://api-pokemon-flame.vercel.app/pokemons/${id}`, obj);
//         return dispatch({
//             type: UPDATE_POKEMON,
//             payload: updatePokemon.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: UPDATE_POKEMON,
//             payload: {mensaje: error.message}
//         });
//     }
// }

// export const create_pokemon = (obj) => async (dispatch) => {
//     try {
//         const createPokemon = await axios.post(`https://api-pokemon-flame.vercel.app/pokemons`, obj);
//         return dispatch({
//             type: CREATE_POKEMON,
//             payload: createPokemon.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: CREATE_POKEMON,
//             payload: {mensaje: error.message}
//         });
//     }
// }

// export const delete_pokemon = (id) => async (dispatch) => {
//     try {
//         const deletePokemon = await axios.delete(`https://api-pokemon-flame.vercel.app/pokemons/${id}`);
//         return dispatch({
//             type: DELETE_POKEMON,
//             payload: deletePokemon.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: DELETE_POKEMON,
//             payload: {mensaje: error.message}
//         });
//     }
// }


// //------------------- request tipos ---------------------

// export const get_all_types = () => async (dispatch) => {
//     try {
//         const getAllTypes = await axios.get("https://api-pokemon-flame.vercel.app/types");
//         return dispatch({
//             type: ALL_TYPES,
//             payload: getAllTypes.data
//         });
//     } catch (error) {
//         return dispatch({
//             type: ALL_TYPES,
//             payload: {mensaje: error.message}
//         });
//     }
// }

// //------------------- request filtros ------------------------

// export const filtrosPokemons = (obj) => async (dispatch) => {
//     try {
//         return dispatch({
//             type: FILTROS_POKEMONS,
//             payload: obj
//         });
//     } catch (error) {
//         return dispatch({
//             type: FILTROS_POKEMONS,
//             payload: {mensaje: error.message}
//         });
//     }
// }


