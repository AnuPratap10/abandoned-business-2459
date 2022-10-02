import logo from './logo.svg';
import './App.css';
import MainFile from "./Component/MainFile"
import Login from './Component/Login';
import AllRoutes from './Routes/AllRoutes';

import Password from "./Component/Password"
import FooterSec from './Component/FooterSec'




function App() {
  return (
    <div className="App">
         {/* <MainFile/> */}
    <AllRoutes/>
    <FooterSec/>


    </div>
  );
}

export default App;
