import { Link } from "react-router-dom"
import style from "./Country.module.css"


const CountryCard = ({id, name, flag, region}) =>{
    return(
        <div className={style.onecard}>
            <h1>{name}</h1>
            <Link to={`/detail/${id}`}>
            <img src={flag} alt={name} className={style.flag}/>
            </Link>
            <h3>{region}</h3>
        </div>
    )
}

export default CountryCard