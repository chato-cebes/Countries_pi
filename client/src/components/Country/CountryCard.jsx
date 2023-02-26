import { Link } from "react-router-dom"

const CountryCard = ({id, name, flag, region}) =>{
    return(
        <div>
        <h1>{name}</h1>
        <Link to={`/detail/${id}`}>
        <img src={flag} alt={name}/>
        </Link>
        <h3>{region}</h3>
        </div>
    )
}

export default CountryCard