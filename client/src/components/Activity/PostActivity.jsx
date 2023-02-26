import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createActivity, getCountries } from "../../Redux/actions/actions";
import CountryCard from "../Country/CountryCard";


const PostActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  
  const regions = [];
  countries.map((cont) => !regions.includes(cont.region)? regions.push(cont.region): null)
  //console.log(regions);
  

  const [input, setInput] = useState({
    activityName: "",
    description: "",
    difficulty: "",
    time: "",
    season: "",
    country: [],
  });



const handleChange = (e) =>{
    setInput({
        ...input,
        [e.target.name] :e.target.value
      })     
}

const handleCheck = (e) => {
    if (e.target.checked){
      setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }    
}

const handleSelect = (e) => {
  setInput({
    ...input,
    country: [...input.country, e.target.value]
  })
}

const handleClick = (e) =>{
  e.preventDefault();
  console.log(input.country);
  setInput({
    ...input,
    country: [...input.country.shift()]
  })
}


const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createActivity(input));
  alert("post creado con exito")
  setInput ({
    activityName: "",
    description: "",
    difficulty: "",
    time: "",
    season: "",
    country: [],
  })
}

useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
    
      <form onSubmit={(e)=> handleSubmit(e)}>
      <div>
        <label>Activity name: </label>
        <input type= 'text' name= 'activityName' value= {input.activityName} onChange={(e)=> handleChange(e)}/>
      </div>
      
      <div>
        <label>Write a little description of {input.activityName}: </label>
        <input type= 'text' name= 'description' value= {input.description} onChange={(e)=> handleChange(e)}/>
      </div>
      
      <div>
        <label>How difficult this activity is in a range 1  to 5? : </label>
      </div>
      
      <div>
        <label>1<input type="radio" id="one" name="difficulty" value="1"  onChange={(e)=> handleCheck(e)}/></label>
        <label>2<input type="radio" id="two" name="difficulty" value="2"  onChange={(e)=> handleCheck(e)}/></label>
        <label>3<input type="radio" id="three" name="difficulty" value="3" onChange={(e)=> handleCheck(e)}/></label>
        <label>4<input type="radio" id="four" name="difficulty" value="4" onChange={(e)=> handleCheck(e)}/></label>
        <label>5<input type="radio" id="five" name="difficulty" value="5" onChange={(e)=> handleCheck(e)}/></label>
      </div>
    
      <div>
        <label>Time in hours spent on this activity: </label>
        <input type= 'time' name= 'time' value= {input.time} onChange={(e)=>handleChange(e)}/>
        </div>
        
        <div>
        <label>Season: </label>
        <label><input type= 'checkbox' id= 'Summer' name= "season" value= 'Summer' onChange={(e)=> handleCheck(e)}/>Summer</label>
        <label><input type= 'checkbox' id= 'Autumn' name= "season" value= 'Autumn' onChange={(e)=> handleCheck(e)}/>Autumn</label>
        <label><input type= 'checkbox' id= 'Winter' name= "season" value= 'Winter' onChange={(e)=> handleCheck(e)}/>Winter</label>
        <label><input type= 'checkbox' id= 'Spring' name= "season" value= 'Spring' onChange={(e)=> handleCheck(e)}/>Spring</label>
      </div>

      <div>
        <label>Where is located this activity: </label>
        <select value ="default" onChange={(e)=> handleSelect(e)} required >
        <option value="default" disabled>Choose any country------ </option>
          {regions.map((reg)=> {
            return(
              <optgroup key={reg} label= {reg}>
            {countries.map((c) => {
              if (c.region === reg){
              return( 
                  
                  <option key={c.key} value={c.name}>{c.name} {c.flagIcon}</option>
              )
              }})}
              </optgroup>
          )})}
        </select>
        <button onClick={(e)=> handleClick(e)}>undo</button>
      </div>

      <div>
        <button type="submit">Create activity</button>
      </div>

      <div>
          {input.country.map((c)=> 
          countries.map((ele)=> 
          (ele.name === c)? 
          (<CountryCard id={ele.id} name={ele.name} flag={ele.flag}/>)
          :""))}
      </div>
      </form>
      </div>
  );
};

export default PostActivity;
