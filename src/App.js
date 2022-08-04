import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
function App() {

  

  return (
    <>
    <div className='flex space-x-6'>
<Navbar/>
     
          <Router>
            <Routes>
              <Route exact path='/Dashboard' element={<Dashboard/>} />
              <Route exact path='/Products' element={<Product/>} />
            </Routes>
          </Router>

      </div>
      
    </>
  );
}

export default App;
