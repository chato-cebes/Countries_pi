import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../../Redux/actions/actions";
import Validations from "../Validations/Validations";
import style from "./Activities.module.css";

const PostActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const regions = [];
  countries.map((cont) =>
    !regions.includes(cont.region) ? regions.push(cont.region) : null
  );
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

  const handleCheck = (e) => {
    if (e.target.checked)
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    setError(
      Validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      Validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (input.country.includes(e.target.value)) {
      alert("This Country is already selected");
    } else {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
    }
    setError(
      Validations({
        ...input,
        country: [...input.country, e.target.value],
      })
    );
  };

  const handleClick = (e) => {
    let filterFlag = input.country.filter((fl) => fl !== e);
    setInput({
      ...input,
      country: filterFlag,
    });
  };

  const [showDiv, setShowDiv] = useState(false);

  const handleDiv = () => {
    setShowDiv(true);
  };

  const disableButton = {};
  if (
    !error.activityName &&
    !error.description &&
    !error.difficulty &&
    !error.time &&
    !error.season &&
    !error.country
  ) {
    disableButton.disabled = false;
  } else {
    disableButton.disabled = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !error.activityName &&
      !error.description &&
      !error.difficulty &&
      !error.time &&
      !error.season &&
      !error.country
    ) {
      dispatch(createActivity(input));
      setInput({
        activityName: "",
        description: "",
        difficulty: "",
        time: "",
        season: "",
        country: [],
      });
    }
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
        <div className={style.div}>
          <label>Activity name: </label>
          <input
            type="text"
            name="activityName"
            value={input.activityName}
            onChange={(e) => handleChange(e)}
            style={{ width: "200px", height: "20px" }}
          />
          {error.activityName && (
            <p style={{ color: "red" }}>{error.activityName}</p>
          )}
        </div>
        <div className={style.div}>
          <label>Where is located this activity: </label>
          <select value="default" onChange={(e) => handleSelect(e)}>
            <option value="default" disabled>
              Choose any country------{" "}
            </option>
            {regions.map((reg) => {
              return (
                <optgroup key={reg} label={reg}>
                  {countries.map((c) => {
                    if (c.region === reg) {
                      return (
                        <option key={c.key} value={c.name}>
                          {c.name} {c.flagIcon}
                        </option>
                      );
                    }
                  })}
                </optgroup>
              );
            })}
          </select>
          {error.country && <p style={{ color: "red" }}>{error.country}</p>}
        </div>

        <div className={style.div}>
          <label>How difficult this activity is in a range 1 to 5? : </label>

          <div>
            <label style={{ display: "inline-flex", margin: "6px" }}>
              1
              <input
                type="radio"
                id="one"
                name="difficulty"
                value="1"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label style={{ display: "inline-flex", margin: "6px" }}>
              2
              <input
                type="radio"
                id="two"
                name="difficulty"
                value="2"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label style={{ display: "inline-flex", margin: "6px" }}>
              3
              <input
                type="radio"
                id="three"
                name="difficulty"
                value="3"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label style={{ display: "inline-flex", margin: "6px" }}>
              4
              <input
                type="radio"
                id="four"
                name="difficulty"
                value="4"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label style={{ display: "inline-flex", margin: "6px" }}>
              5
              <input
                type="radio"
                id="five"
                name="difficulty"
                value="5"
                onChange={(e) => handleCheck(e)}
              />
            </label>
          </div>
          {error.difficulty && (
            <p style={{ color: "red" }}>{error.difficulty}</p>
          )}
        </div>

        <div className={style.div}>
          <label>Time in hours spent on this activity: </label>
          <input
            type="text"
            name="time"
            value={input.time}
            onChange={(e) => handleChange(e)}
            placeholder="HH:MM"
            style={{ width: "200px", height: "20px", textAlign: "center" }}
          />
          {error.time && <p style={{ color: "red" }}>{error.time}</p>}
        </div>

        <div className={style.div}>
          <label>Best season to this activivity : </label>
          <label>
            <input
              type="radio"
              id="Summer"
              name="season"
              value="Summer"
              onChange={(e) => handleCheck(e)}
            />
            Summer
          </label>
          <label>
            <input
              type="radio"
              id="Autumn"
              name="season"
              value="Autumn"
              onChange={(e) => handleCheck(e)}
            />
            Autumn
          </label>
          <label>
            <input
              type="radio"
              id="Winter"
              name="season"
              value="Winter"
              onChange={(e) => handleCheck(e)}
            />
            Winter
          </label>
          <label>
            <input
              type="radio"
              id="Spring"
              name="season"
              value="Spring"
              onChange={(e) => handleCheck(e)}
            />
            Spring
          </label>
          {error.season && <p style={{ color: "red" }}>{error.season}</p>}
        </div>

        <div className={style.div}>
          <label>Write a little description of {input.activityName}: </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
            style={{ width: "500px", height: "60px" }}
          />
          {error.description && (
            <p style={{ color: "red" }}>{error.description}</p>
          )}
        </div>

        <div className={style.btn}>
          <button
            type="submit"
            {...disableButton}
            onClick={handleDiv}
            className={style.UndoCreateBtn}
          >
            Create activity
          </button>
        </div>
      </form>
      <div className={style.flag}>
        {input.country.map((c) =>
          countries.map((ele) =>
            ele.name === c ? (
              <div key={ele.id} className={style.mapFlag}>
                <button
                  onClick={() => handleClick(ele.name)}
                  className={style.delFlag}
                >
                  X
                </button>
                <img className={style.imgFlag} src={ele.flag} alt={ele.name} />
                {ele.name}
              </div>
            ) : (
              ""
            )
          )
        )}
      </div>
    </div>
  );
};

export default PostActivity;
