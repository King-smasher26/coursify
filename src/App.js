import { useState,useEffect } from 'react';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import { Link } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Page2 from './Components/Page2';
import Navbar from './Components/Navbar';
import { Route , Routes} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader"; 
import BounceLoader from "react-spinners/BounceLoader"
// import Datalayout from './Datalayout';

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  },[])
  return (
    <div className='App'>
      {
      loading ?
      <div className='theloader'>

      <BounceLoader
      color={"#36d7b7"}
      loading={loading}
      // cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      </div>
      :
      <>
    <Navbar/>
    <ScrollToTop />
      <Routes>

      <Route path="/" element={<Landingpage className="lpa"/>}/>


      
      </Routes>
      </>
} 
    </div>
  );
}

export default App;
