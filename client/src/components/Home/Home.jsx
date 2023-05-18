import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterRegion,
  filterSeason,
  getActivities,
  getCountries,
  orderCountry,
  orderPoblation,
} from "../../Redux/actions/actions";
import Allcards from "../Country/Allcards";
import Paginado from "../Paginado/Paginado";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state.countries);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(10);
  const [order, setOrder] = useState("");
  const indexLastCard = currentPage * cardPerPage;
  const indexFirstCard = indexLastCard - cardPerPage;
  const currentCard = countryState.slice(indexFirstCard, indexLastCard);

  const paginado = (pagNumber) => {
    setCurrentPage(pagNumber);
  };

  const handleRegion = (e) => {
    dispatch(filterRegion(e.target.value));
  };
  const handleSeason = (e) => {
    dispatch(filterSeason(e.target.value));
  };
  const handleCountryOrder = (e) => {
    e.preventDefault();
    dispatch(orderCountry(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };
  const handlePoblationOrder = (e) => {
    e.preventDefault();
    dispatch(orderPoblation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };

  //Once Home component starts, this hook do a petition to action for get the information from back
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.marco}>
      <div className={style.filtros}>
        <div className={style.titleSelect}>
          <label>Country:</label>
          <button
            className={style.space}
            value="ascendente"
            onClick={(e) => handleCountryOrder(e)}
          >
            Ascendente
          </button>
          <button
            className={style.space}
            value="descendente"
            onClick={(e) => handleCountryOrder(e)}
          >
            Descendente
          </button>
        </div>
        <div className={style.titleSelect}>
          <label>Population:</label>
          <button
            className={style.space}
            value="ascendente"
            onClick={(e) => handlePoblationOrder(e)}
          >
            Ascendente
          </button>
          <button
            className={style.space}
            value="descendente"
            onClick={(e) => handlePoblationOrder(e)}
          >
            Descendente
          </button>
        </div>
        <div className={style.title}>
          <select
            className={style.space}
            onChange={(e) => handleRegion(e)}
            value="default"
          >
            <option value="default" disabled>
              Regions
            </option>
            <option value="allregions">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={style.title}>
          <select
            className={style.space}
            onChange={(e) => handleSeason(e)}
            value="default"
          >
            <option value="default" disabled>
              Season
            </option>
            <option value="allseasons">All</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
      </div>

      <Paginado
        cardPerPage={cardPerPage}
        countryState={countryState}
        paginado={paginado}
      />

      <Allcards currentCard={currentCard} />
    </div>
  );
};

export default Home;
