import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Activities.module.css";
import GetActivity from "./GetActivity";
import PostActivity from "./PostActivity";

const ActivitiIndex = () => {
  const activity = useSelector((state) => state.activities);
  const [visible, setVisible] = useState("");

  const handleClick = (e) => {
    setVisible(e.target.name);
  };

  return (
    <div className={style.frame1}>
      <div className={style.frameBtn}>
        <button
          className={style.buttons}
          name="list"
          onClick={(e) => handleClick(e)}
        >
          All Activities
        </button>
        <button
          className={style.buttons}
          name="create"
          onClick={(e) => handleClick(e)}
        >
          Create
        </button>
        <button
          className={style.buttons}
          name="modify"
          onClick={(e) => handleClick(e)}
        >
          Modify
        </button>
        <button
          className={style.buttons}
          name="delete"
          onClick={(e) => handleClick(e)}
        >
          Delete
        </button>
      </div>
      <div className={style.frameRes}>
        {visible === "list" ? (
          <>
            <div className={style.title}>
              <div className={style.h2}>
                <h2>NAME</h2>
              </div>
              <div className={style.h2}>
                <h2>COUNTRY</h2>
              </div>
              <div className={style.h2}>
                <h2>ID</h2>
              </div>
            </div>
            <div className={style.activity}>
              <GetActivity activity={activity} />
            </div>
          </>
        ) : visible === "create" ? (
          <div className={style.postactiviti}>
            <h2>Create an Activity</h2>
            <PostActivity />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ActivitiIndex;
