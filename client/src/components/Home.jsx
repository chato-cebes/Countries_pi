import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../Redux/actions/actions";
import CountryCard from "./Country/CountryCard";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  //Get countries information for render
  const countries = useSelector((state) => state.countries);

  //Once Home component starts, this hook do a petition to action for get the information from back
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <SearchBar/>
        <Link to="/activities"><button>Activities</button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
        <br/>
      </div>

      {countries?.map((c) => {
        return (
          <CountryCard
            key={c?.id}
            id={c?.id}
            name={c?.name}
            flag={c?.flag}
            region={c?.region}
          />
        );
      })}
    </div>
  );
};

export default Home;
