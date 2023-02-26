import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, POST_ACTIVITY, GET_COUNTRY_BY_QUERY} from "../actions/actionTypes";

const initialState={
    countries:[],
    activities:[],
    countryDetail:[],
}

const reducer= (state= initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryDetail: action.payload
            }
        case GET_COUNTRY_BY_QUERY:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state,
            }
    
        default:
            return{...state}
    }
}

export default reducer;