import { Link } from "react-router-dom";

const Landinpage = () => {
  return (
    <div>
      <h1>Welcome to the landing page</h1>
      <Link to="/home" >
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Landinpage;