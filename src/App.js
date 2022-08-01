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
import {useState} from 'react'
import Forgetpassword from './Components/Forgetpassword';

function App() {

  const [open, setopen] = useState(false)
  const handleclick = () => {
      setopen(!open)
  }


  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/Forgetpassword' element={<Forgetpassword />} />
        </Routes>
      </Router>
      <div className="flex bg-[#F7F8Fc]">
        <div className={!open ? 'hidden':'  bg-[#363740]'}><Navbar /></div>
        <div className='m-auto '>
          <Router>
            <Routes>
              <Route exact path='/Dashboard' element={<Users open={handleclick} />} />
              <Route exact path='/images' element={<Images />} />
              <Route exact path='/Videos' element={<Videos />} />
              <Route exact path='/setting' element={<Settings />} />

              <Route exact path='/User_details' element={<User_Details />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
