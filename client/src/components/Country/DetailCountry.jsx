import { getCountryById } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.countryDetail[0]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [id, dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <div>
        <label>COUNTRY</label>
        <h1>Official Name: {detail?.officialName}</h1>
        <img src={detail?.flag} alt={detail?.name} />
      </div>
      <div>
        <label>DETAIL</label>
        <h3>Country Code: {detail?.id}</h3>
        <h3>Region: {detail?.region}</h3>
        <h3>Subregion: {detail?.subregion}</h3>
        <h3>Capital: {detail?.capital}</h3>
        <h3>
          Currency: ({detail?.currencySymbol}) {detail?.currencyName},{" "}
          {detail?.currencyTag}
        </h3>
        <h3>Languages: {detail?.languages}</h3>
        <h3>Area: {detail?.area} sq. Km</h3>
        <h3>Population: {detail?.population}</h3>
        <h3>
          Do you want to know more about {detail?.name}, check this out!!!{" "}
          <Link to="https://population.un.org/wpp/DataSources/">
            <button>More</button>
          </Link>
        </h3>
      </div>
      <div>
        <label>ACTIVITIES</label>
        {detail?.Activities.map((act) => {
          return (
            <div>
              <h3>Activity: {act?.activityName}</h3>
              <h3>Description: {act?.description}</h3>
              <h3>difficulty: {act?.difficulty}</h3>
              <h3>time: {act?.time}</h3>
              <h3>season: {act?.season}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
