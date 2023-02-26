import './App.css';
import { Routes, Route} from "react-router-dom";
import Landinpage from './components/Landinpage';
import Home from './components/Home';
import Detail from './components/Country/DetailCountry'
import ActivitiIndex from './components/Activity/ActivityIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landinpage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/detail/:id' element={<Detail/>}/>
        <Route exact path='/activities' element={<ActivitiIndex/>}/>
      </Routes>
    </div>
  );
}

export default App;
