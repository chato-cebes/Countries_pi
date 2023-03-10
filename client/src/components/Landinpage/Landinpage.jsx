import { Link } from "react-router-dom";
import style from "./Landin.module.css";

const Landinpage = () => {
  return (
    <div className={style.class}>
         
      <img className={style.imagen}
        src="https://1.bp.blogspot.com/-DOBM9iLl97c/UROudWGVqrI/AAAAAAAADOc/ELtj0hjxr6Y/w1200-h630-p-k-no-nu/World-countries-flags.jpg"
        alt="banderas del mundo"
      />
      <div className={style.div}>
        <h1>Welcome to Countries page</h1>
        <Link to="/home">
          <button className={style.Button}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Landinpage;
