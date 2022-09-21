
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Overview from './Components/Overview';
import Order_placed from './Components/Order_placed';
import Guide from './Components/Guide';
import Travellers from './Components/Traveller';

import Rating from './Components/Rating';
import Login from './Components/Login';
import AdminDetails from './Components/AdminDetails';
import Orderdet from  './Components/Orders_details';
import Verify from './Components/Verify'

function App() {


  return (
   
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path='/overview' element={<Overview />} />
          <Route exact path='/Orders' element={<Order_placed />} />
          <Route exact path='/Ordersdet' element={<Orderdet />} />
          <Route exact path='/Guides' element={<Guide />} />
          <Route exact path='/Travellers' element={<Travellers />} />
          <Route exact path='/AdminDetails' element={<AdminDetails />} />
          <Route exact path='/Details' element={<Rating />} />
          <Route exact path='/Verify' element={<Verify />} />
        </Routes>
      </Router>
    
  );
}

export default App;
