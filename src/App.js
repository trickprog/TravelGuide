import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import User_Details from './Components/User_Details';
import Users from './Components/User';


import Images from './Components/Images';
import Settings from './Components/Settings';
import Videos from './Components/Videos'
import Login from './Components/Login';

import Forgetpassword from './Components/Forgetpassword';

function App() {

  

  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/Forgetpassword' element={<Forgetpassword />} />
        </Routes>
      </Router>
      <div className="flex bg">
          <Router>
            <Routes>
              <Route exact path='/Dashboard' element={<Users/>} />
              <Route exact path='/images' element={<Images />} />
              <Route exact path='/Videos' element={<Videos />} />
              <Route exact path='/setting' element={<Settings />} />

              <Route exact path='/User_details' element={<User_Details />} />
            </Routes>
          </Router>

      </div>
    </>
  );
}

export default App;
