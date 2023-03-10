import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountryByQuery } from "../../Redux/actions/actions"


const SearchBar = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    
    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountryByQuery(name))
        
    }


    return(
        <div>
            <input type= "search" placeholder="Search Country" onChange={(e)=>handleChange(e)}/>
            <button type="submit" onClick={(e)=> handleSubmit(e) }>Search</button> 
        </div>
    )
}

export default SearchBar;
