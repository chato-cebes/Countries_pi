import style from "./Activities.module.css";

const ActivityCard = ({
  id,
  name,
  description,
  difficulty,
  time,
  season,
  countries,
}) => {
  return (
    <div className={style.cardActtivity}>
      <details>
        <summary className={style.summary}>
          <div className={style.h2}>
            <b>{name}</b>
          </div>
          <div className={style.divCountry}>
            {countries.map((c) => (
              <div key={c.name}>
                {c.name} {c.flagIcon}
              </div>
            ))}
          </div>
          <div className={style.h2}>{id}</div>
        </summary>
        <div className={style.title2}>
          <div className={style.h2}>
            <b>Dificultty:</b> {difficulty}
          </div>
          <div className={style.h2}>
            <b>Time:</b> {time} (HH:MM)
          </div>
          <div className={style.h2}>
            <b>Season:</b> {season}
          </div>
        </div>
        <p>
          <b>Description:</b> {description}
        </p>
      </details>
    </div>
  );
};

export default ActivityCard;
