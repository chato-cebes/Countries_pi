const ActivityCard = ({id, name, description, difficulty, time, season, countries}) => {
  return (
    <div>
      <details>
        <summary><b>Name:</b> {name}</summary>
        <p><b>id:</b> {id}</p>
        <p><b>Dificultty:</b> {difficulty}, <b>Time:</b> {time}(HH:MM), <b>Season:</b> {season}</p>
        <p><b>description:</b> {description}</p>
        <p><b>Countries related with this activity:</b> <ul>{countries.map((c)=> <li key={c.name}>{c.name}</li> )}</ul></p>
      </details>
    </div>
  );
};

export default ActivityCard;
