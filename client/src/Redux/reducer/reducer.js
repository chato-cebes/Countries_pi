import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_ACTIVITIES,
  POST_ACTIVITY,
  GET_COUNTRY_BY_QUERY,
  FILTER_REGION,
  ORDER_COUNTRY,
  ORDER_POBLATION,
  FILTER_SEASON,
} from "../actions/actionTypes";

const initialState = {
  countries: [],
  countriesSupport: [],
  activities: [],
  activitiesSuport: [],
  countryDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesSupport: action.payload
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case GET_COUNTRY_BY_QUERY:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        activitiesSuport: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case FILTER_REGION:
      const allcountries = state.countriesSupport;
      const regionFilter =
        action.payload === "allregions"
          ? allcountries
          : allcountries.filter((act) => act.region === action.payload);
      return {
        ...state,
        countries: regionFilter,
      };

    case FILTER_SEASON:
        const season = state.countriesSupport;
        const allseasons = season.filter((cont)=> cont.Activities.length > 0)
        const allActivity = state.activitiesSuport;
        const mapAllActivity = allActivity.filter((s)=> s.season === action.payload)
        const getKey = mapAllActivity.map((e)=> e.Countries.map((k)=>k.key).toString())
        const findOnCountry = season.filter((cont)=> getKey.find((key)=> key === cont.key))
        
        const filterSeason = action.payload ==="allseasons"
        ? allseasons
        :findOnCountry

      return {
        ...state,
        countries: filterSeason
      };

    case ORDER_COUNTRY:
      console.log(action.payload);

      let countryforSort =
        action.payload === "ascendente"
          ? state.countries.sort((a, b) => (a.name > b.name ? 1 : -1))
          : action.payload === "descendente"
          ? state.countries.sort((a, b) => (a.name < b.name ? 1 : -1))
          : state.countries;

      return {
        ...state,
        countries: countryforSort,
      };

    case ORDER_POBLATION:
        let populationforSort =
        action.payload === "ascendente"
          ? state.countries.sort((a, b) => (a.population > b.population ? 1 : -1))
          : action.payload === "descendente"
          ? state.countries.sort((a, b) => (a.population < b.population ? 1 : -1))
          : state.countries;

      console.log(populationforSort)
    return {
        ...state,
        countries: populationforSort,
      };

    default:
      return { ...state };
  }
};

export default reducer;

/* let populationforSort = (action.payload === "ascendente")?
      
        state.countries.sort((num1, num2) => {
        const a = num1.population.split(".").map((conpop) => parseInt(conpop)).join("");
        const b = num2.population.split(".").map((conpop) => parseInt(conpop)).join("");

        for ( let i = 0; i < Math.max(a.length, b.length); i++ ) {
          if (a[i] === undefined) {
            return -1;
          } else if (b[i] === undefined) {
            return 1;
          } else if (a[i] < b[i]) {
            return -1;
          } else if (a[i] > b[i]) {
            return 1;
          }
        }

        return 0;
      }): state.countries.sort((num1, num2) => {
        const a = num1.population.split(".").map((conpop) => parseInt(conpop));
        const b = num2.population.split(".").map((conpop) => parseInt(conpop));

        for ( let i = 0; i < Math.max(a.length, b.length); i++ ) {
        if (a[i] > b[i]) {
            return -1;
          } else if (a[i] < b[i]) {
            return 1;
          }
        
        }
        return 0;
      }) */