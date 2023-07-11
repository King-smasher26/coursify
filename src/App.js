import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import ScrollToTop from './Components/ScrollToTop';
import { Link } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Page2 from './Components/Page2';
import Viewdata from './Components/Viewdata';
import Viewdataafter from './Components/Viewdataafter';
import Navbar from './Components/Navbar';
import { Route , Routes} from 'react-router-dom';
// import Datalayout from './Datalayout';

function App() {
  return (
    <>
    <Navbar/>
    <ScrollToTop />
      <Routes>

      <Route path="/" element={<Landingpage className="lpa"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/viewdata" element={<Viewdata/>}/>
      <Route path="/thisisres" element={<Viewdataafter/>}/>

      {/* <Route path="/viewdata" element={<Datalayout/>}>

      <Route index element={<Viewdata/>}/>
      <Route path='result' element={<Viewdataafter/>}/>

      </Route> */}

      
      </Routes>
    </>
  );
}

export default App;
