import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, filterRegion, filterSeason, orderCountry, orderPoblation, getActivities } from "../Redux/actions/actions";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Paginado from "./Paginado";
import Allcards from "./Country/Allcards"

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
  
    const handleRegion= (e)=>{
      dispatch(filterRegion(e.target.value))
}
    const handleSeason= (e)=>{
      dispatch(filterSeason(e.target.value))

}
    const handleCountryOrder= (e)=>{
      e.preventDefault()
      dispatch(orderCountry(e.target.value))
      setCurrentPage(1)
      setOrder(`Ordered ${e.target.value}`)
}
    const handlePoblationOrder= (e)=>{
      e.preventDefault()
      dispatch(orderPoblation(e.target.value))
      setCurrentPage(1)
      setOrder(`Ordered ${e.target.value}`)
}

  

  //Once Home component starts, this hook do a petition to action for get the information from back
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    
  }, [dispatch]);


  return (
    <div>
      <div>
        <SearchBar />
        <Link to="/activities"><button>Activities</button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
        <br />
        <br />
      </div>
      <div>
          <label>Country: 
          <button value="ascendente" onClick={(e)=>handleCountryOrder(e)}>Ascendente</button>
          <button value="descendente" onClick={(e)=>handleCountryOrder(e)}>Descendente</button></label>
          <label>population: 
          <button value="ascendente" onClick={(e)=>handlePoblationOrder(e)}>Ascendente</button>
          <button value="descendente" onClick={(e)=>handlePoblationOrder(e)}>Descendente</button></label>

        <select onChange={(e)=>handleRegion(e)} value= "default">
        <option value="default" disabled>Regions</option>
        <option value="allregions">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>

        <select onChange={(e)=>handleSeason(e)} value="default">
        <option value="default" disabled>Season</option>
        <option value="allseasons">All</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        </select>

      <Paginado 
      cardPerPage= {cardPerPage}
      countryState= {countryState}
      paginado= {paginado}/>
      </div>
      
      <Allcards currentCard= {currentCard}/>
    </div>
  );
};

export default Home;
