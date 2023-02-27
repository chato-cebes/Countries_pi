import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../../Redux/actions/actions";
import CountryCard from "../Country/CountryCard";
import Validations from "../Validations";


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

  const [error, setError] = useState({
    activityName: "",
    description: "",
    difficulty: "",
    time: "",
    season: "",
    country: [],
  });


const handleCheck= (e)=>{
  if (e.target.checked)
  setInput({
    ...input,
    [e.target.name] :e.target.value
  })
  setError(Validations({
    ...input,
    [e.target.name]: e.target.value,
})
)
}


const handleChange = (e) =>{
    setInput({
        ...input,
        [e.target.name] :e.target.value
      })
      setError(Validations({
        ...input,
        [e.target.name]: e.target.value,
    })
    )   
}

const handleSelect = (e) => {
  setInput({
    ...input,
    country: [...input.country, e.target.value]
  })
  setError(Validations({
    ...input,
    country: [...input.country, e.target.value]
})
)
}

const handleClick = (e) =>{
  e.preventDefault();
  console.log(input.country);
  setInput({
    ...input,
    country: [input.country.shift()]
  })
}

const [showDiv, setShowDiv] = useState(true);

  const handleDiv = ()=>{
    setShowDiv(true)
  }

  const disableButton = {};
  if(input.activityName && input.description && input.difficulty && input.time && input.season && input.country.length){
    disableButton.disabled = false;
  } else {
   disableButton.disabled = true;
  }


/* 
console.log("activityName",error.activityName);
console.log("description",error.description);
console.log("difficulty",error.difficulty);
console.log("time",error.time);
console.log("season",error.season);
console.log("country",error.country);
*/

const handleSubmit = (e) => {
  e.preventDefault();
  if(!error.activityName && !error.description && !error.difficulty && !error.time && !error.season && !error.country ){
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
        <br/><br/>
      </div>
      
      <div>
        <label>Write a little description of {input.activityName}: </label>
        <input type= 'text' name= 'description' value= {input.description} onChange={(e)=> handleChange(e)}/>
        <br/><br/>
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
        <br/><br/>
      </div>
    
      <div>
        <label>Time in hours spent on this activity: </label>
        <input type= 'text' name= 'time' value= {input.time} onChange={(e)=>handleChange(e)} placeholder= "HH:MM"/>
        <br/><br/>
        </div>
        
        <div>
        <label>Season: </label>
        <label><input type= 'radio' id= 'Summer' name= "season" value= 'Summer' onChange={(e)=> handleCheck(e)}/>Summer</label>
        <label><input type= 'radio' id= 'Autumn' name= "season" value= 'Autumn' onChange={(e)=> handleCheck(e)}/>Autumn</label>
        <label><input type= 'radio' id= 'Winter' name= "season" value= 'Winter' onChange={(e)=> handleCheck(e)}/>Winter</label>
        <label><input type= 'radio' id= 'Spring' name= "season" value= 'Spring' onChange={(e)=> handleCheck(e)}/>Spring</label>
        <br/><br/>
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
        <br/><br/>
      </div>

      <div>
        <button type="submit" {...disableButton}>Create activity</button>
        <br/><br/>
      </div>
      </form>


        {showDiv && 
          <div>
          <li key={error.activityName}>{error.activityName && <p style={{color: 'red'}}>{error.activityName}</p>}</li>
          <li key={error.description}>{error.description && <p style={{color: 'red'}}>{error.description}</p>}</li>
          <li key={error.difficulty}>{error.difficulty && <p style={{color: 'red'}}>{error.difficulty}</p>}</li>
          <li key={error.time}>{error.time && <p style={{color: 'red'}}>{error.time}</p>}</li>
          <li key={error.season}>{error.season && <p style={{color: 'red'}}>{error.season}</p>}</li>
          <li key={error.country}>{error.country && <p style={{color: 'red'}}>{error.country}</p>}</li>
          </div>
        }

      <div>
          {input.country.map((c)=> 
          countries.map((ele)=> 
          (ele.name === c)? 
          (<CountryCard id={ele.id} name={ele.name} flag={ele.flag}/>)
          :""))}
      </div>
      </div>
  );
};

export default PostActivity;
