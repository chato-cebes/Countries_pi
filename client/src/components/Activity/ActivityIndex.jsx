import GetActivity from "./GetActivity";
import PostActivity from "./PostActivity";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Activities.module.css"

const ActivitiIndex = () => {
  const activity = useSelector((state)=>state.activities)
  const [visible, setVisible] = useState("");

  const handleClick = (e) => {
    setVisible(e.target.name);
  };

  return (
    <div>
      <div>
        <div>
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>

        <div >
        <h1 className={style.name}>DO YOU WANTO TO ...</h1>
          <button className={style.buttons} name="list" onClick={(e) => handleClick(e)}>See Activities</button>
          <button className={style.buttons} name="create" onClick={(e) => handleClick(e)}>Create</button>
          <button className={style.buttons} name="modify" onClick={(e) => handleClick(e)}>Modify</button>
          <button className={style.buttons} name="delete" onClick={(e) => handleClick(e)}>Delete</button>
        </div>

      </div>

      {visible === "list" ? (
        <div className={style.getactiviti}>
          <h2>List</h2>
          <GetActivity activity={activity}/>
        </div>
      ) : visible === "create" ? (
        <div className={style.postactiviti}>
          <h2>Create</h2>
          <PostActivity />
        </div>
      ) : null}
    </div>
  );
};
export default ActivitiIndex;
