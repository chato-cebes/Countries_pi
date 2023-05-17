import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getActivities, getCountries } from "../../Redux/actions/actions";
import { Landing } from "./LandingStyles";
import mapWorld from "./mapWorld.jpg";

const Landinpage = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state.countries);
  const partOne = [];
  const partTwo = [];
  const partThree = [];
  const partFour = [];

  for (let i = 0; i < countryState.length; i++) {
    if (i < 50) {
      partOne.push(countryState[i]);
    } else if (i > 50 && i < 100) {
      partTwo.push(countryState[i]);
    } else if (i > 100 && i < 150) {
      partThree.push(countryState[i]);
    } else if (i > 150 && i < 200) {
      partFour.push(countryState[i]);
    }
  }

  console.log("uno", partOne);
  console.log("dos", partTwo);
  console.log("tres", partThree);
  console.log("cuatro", partFour);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <Landing>
      <div className="centro">
        <img src={mapWorld} alt="" />
        <div className="legenda">
          <h1 className="nombre">Countries</h1>
          <Link to="/home">
            <button className="btnEntrar">Entrar</button>
          </Link>
        </div>
        <div className="bloquedebanderas1">
          <div className="lineas1">
            {partOne.map((el) => (
              <img
                key={el.id}
                src={el.flag}
                alt={el.name}
                style={{ border: "1px solid white" }}
              />
            ))}
            {partTwo.map((el) => (
              <img
                key={el.id}
                src={el.flag}
                alt={el.name}
                style={{ border: "1px solid white" }}
              />
            ))}
          </div>
        </div>

        <div className="bloquedebanderas2">
          <div className="lineas2">
            {partThree.map((el) => (
              <div className="labelNombres" key={el.id}>
                ▪ {el.name}
              </div>
            ))}
            {partFour.map((el) => (
              <div className="labelNombres" key={el.id}>
                ▪ {el.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Landing>
  );
};

export default Landinpage;

{
  /* <div className={style.class}>
    <img
      className={style.imagen}
      src="https://1.bp.blogspot.com/-DOBM9iLl97c/UROudWGVqrI/AAAAAAAADOc/ELtj0hjxr6Y/w1200-h630-p-k-no-nu/World-countries-flags.jpg"
      alt="banderas del mundo"
    />
    <div className={style.div}>
      <h1>Welcome to Countries page</h1>
      <Link to="/home">
        <button className={style.Button}>Start</button>
      </Link>
    </div>
  </div> */
}
