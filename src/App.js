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
import Videos from './Components/Videos'
import Login from './Components/Login';
import Forgetpassword from './Components/Forgetpassword';
function App() {
  return (
    <div className="flex bg-[#F7F8Fc]">
      <div className='  bg-[#363740]'><Navbar /></div>
      <div className='m-auto '>
        <Router>
          <Routes>
            <Route exact path='/' element={<Users />} />
            <Route exact path='/images' element={<Images />} />
            <Route exact path='/login' element={<Login/>}/>
             <Route exact path='/Videos' element={<Videos />} />
             <Route exact path='/setting' element={<Settings />} />
             <Route exact path='/User_details' element={<User_Details />} />
             <Route exact path='/Forgetpassword' element={<Forgetpassword/>}/>
          </Routes>
        </Router>
      </div>
    
          
         
         




      {/* <Router>
        <Routes>
          <Login/>

        </Routes>
      </Router> */}



    </div>
  );
}

export default App;
