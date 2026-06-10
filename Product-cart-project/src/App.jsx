import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductListpage from "./assets/pages/ProductListpage.jsx";
import CartListpage from "./assets/pages/CartListpage.jsx";
import Userlogin from "./assets/pages/Userlogin.jsx";
import VerifyPage from "./assets/pages/VerifyPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<ProductListpage/>} />
          <Route path="/cartlist" element={<CartListpage/>} />
          <Route path="/login" element={<Userlogin/>} />
          <Route path="/verify" element={<VerifyPage/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;