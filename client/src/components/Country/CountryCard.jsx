import { Link } from "react-router-dom";
import style from "./Country.module.css";

const CountryCard = ({ id, name, flag, region }) => {
  return (
    <div className={style.onecard}>
      <div className={style.flag}>
        <Link to={`/detail/${id}`}>
          <img className={style.img} src={flag} alt={name} />
        </Link>
      </div>
      <div className={style.title}>
        <h3>{name}</h3>
        <h5>{region}</h5>
      </div>
    </div>
  );
};

export default CountryCard;
