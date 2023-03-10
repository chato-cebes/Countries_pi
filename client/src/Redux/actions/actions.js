import axios from "axios";
import { FILTER_REGION, FILTER_SEASON, GET_ACTIVITIES, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_QUERY, ORDER_COUNTRY, ORDER_POBLATION } from "./actionTypes";

export const getCountries = () => {
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/countries')
            return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data})
    }
};

export const getCountryById = (id) => {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data})          
    }


}
export const getCountryByQuery = (name) => {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            return dispatch({ type: GET_COUNTRY_BY_QUERY, payload: response.data})
    }

}

export const getActivities = () => {
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/activities')
            return dispatch({ type: GET_ACTIVITIES, payload: response.data})
    }

}

export const createActivity = (obj) => {
    return async function(){
        let response = await axios.post('http://localhost:3001/activities', obj)
        console.log(response);
        return response.data.message
        
    }
}

export const filterRegion = (region) => {
    return {type: FILTER_REGION, payload: region };
  };

  export const filterSeason = (season) => {
    return {type: FILTER_SEASON, payload: season };
  };
  
  export const orderCountry = (name) => {
    return { type: ORDER_COUNTRY, payload: name 
    };
  };
  
  export const orderPoblation = (numero) => {
    return { type: ORDER_POBLATION, payload: numero 
    };
  };
  