import './App.css';
import { Routes, Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Landinpage from './components/Landinpage/Landinpage';
import Home from './components/Home/Home';
import Detail from './components/Country/DetailCountry'
import ActivitiIndex from './components/Activity/ActivityIndex';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import About from './components/About/About';

function App() {
const location= useLocation()

  return (
    <div className="App">
       {location.pathname !== '/'&& <Nav/>}
      <Routes>
        <Route exact path='/' element={<Landinpage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/detail/:id' element={<Detail/>}/>
        <Route exact path='/activities' element={<ActivitiIndex/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
