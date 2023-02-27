import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Validations from "./Validations";

const Contact = () => {
    const navigate = useNavigate()

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    mail: "",
    comments: "",
  });

  const [error, setError] = useState({
    name: "There are not information to save",
    lastname: "",
    mail: "",
    comments: "",
  });

  
  const handleChange = (e) => {
      setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setError(Validations({
            ...input,
            [e.target.name]: e.target.value,
        })
        )
    };

  const [showDiv, setShowDiv] = useState(false);

  const handleDiv = ()=>{
    setShowDiv(true)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name",error.name, "lastname",error.lastname, "mail",error.mail, "comments",error.comments);
    if(!error.name && !error.lastname && !error.mail && !error.comments ){
        alert("Activity saved successfully" )
        setInput({
            name: "",
            lastname: "",
            mail: "",
            comments: "",
        });
        navigate("../home")
    }
        
};

  return (
    <div>
      <div>
        <Link to="/home"><button>Back</button></Link>
        <br/><br/>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)}/>
          <br />
          <br />
        </div>

        <div>
          <label>Lastname: </label>
          <input type="text" name="lastname" value={input.lastname} onChange={(e) => handleChange(e)}/>
          <br />
          <br />
        </div>

        <div>
          <label>E-mail: </label>
          <input type="text" name="mail" value={input.mail} onChange={(e) => handleChange(e)}/>
          <br />
          <br />
        </div>

        <div>
          <label>Comments: </label>
          <input type="text" name="comments" value={input.comments} onChange={(e) => handleChange(e)}/>
          <br />
          <br />
        </div>

        <div>
          <button type="submit" onClick={handleDiv}>Commit!</button>
          {showDiv && 
          <div>
            <li key={error.name}>{error.name && <p style={{color: 'red'}}>{error.name}</p>}</li>
            <li key={error.lastname}>{error.lastname && <p style={{color: 'red'}}>{error.lastname}</p>}</li>
            <li key={error.mail}>{error.mail && <p style={{color: 'red'}}>{error.mail}</p>}</li>
            <li key={error.comments}>{error.comments && <p style={{color: 'red'}}>{error.comments}</p>}</li>
          </div>
          }
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};
export default Contact;
