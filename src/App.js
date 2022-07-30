import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import User_Details from './Components/User_Details';
import Users from './Components/User';
// import RecentUpload from './Components/RecentUpload';
import Index from './Components/RecentUpload';
import Images from './Components/Images';
import Settings from './Components/Settings';
import Login from './Components/Login';
import Forgetpassword from './Components/Forgetpassword';
import Videos from './Components/Videos';


function App() {
  return (
    <div className="flex  ">
 <Navbar/>
     <Router>
        <Routes>


        <Route exact path='/' element={<Users/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/video' element={<Videos/>}/>
          <Route exact path='/User_details' element={<User_Details/>}/>
          <Route exact path='/Forgetpassword' element={<Forgetpassword/>}/>
          <Route exact path='/images' element={<Images/>}/>
          <Route exact path='/setting' element={<Settings/>}/>

        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
