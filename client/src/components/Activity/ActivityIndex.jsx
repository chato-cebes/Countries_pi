import GetActivity from "./GetActivity";
import PostActivity from "./PostActivity";
import { Link } from "react-router-dom";
import { useState } from "react";

const ActivitiIndex = () => {

    const [visible, setVisible]= useState("");

  const handleClick = (e) => {
    setVisible(e.target.name)
  };

  return (
    <div>
      <div>
        <div>
          <Link to="/home"><button>Back</button></Link>
        </div>

        <h1>DO YOU WANTO TO ...</h1>
      
        <div >
          <h3>See the list of Activities</h3>
          <button name="list" onClick={(e)=>handleClick(e)}>Go there...</button>
        </div>
        
        <div>
          <h3>Create an Activity</h3>
          <button name="create" onClick={(e)=>handleClick(e)}>Start with...</button>
        </div>
      </div>

        {visible === "list" &&
            <div>
            <h2>List</h2>
            <GetActivity/>
            </div>
        }
        
        {visible === "create" &&
            <div>
            <h2>Create</h2>
            <PostActivity/>
            </div>
        }
      
    </div>
  );
};
export default ActivitiIndex;
