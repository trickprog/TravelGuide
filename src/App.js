
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Overview from './Components/Overview';
import Order_placed from './Components/Order_placed';
import Guide from './Components/Guide';
import Travellers from './Components/Traveller';

import Rating from './Components/Rating';
import Login from './Components/Login';


function App() {


  return (
   
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path='/overview' element={<Overview />} />
          <Route exact path='/Orders' element={<Order_placed />} />
          <Route exact path='/Guides' element={<Guide />} />
          <Route exact path='/Travellers' element={<Travellers />} />
          <Route exact path='/Details' element={<Rating />} />
        </Routes>
      </Router>
    
  );
}

export default App;
