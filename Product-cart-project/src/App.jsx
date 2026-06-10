import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductListpage from "./assets/pages/ProductListpage.jsx";
import CartListpage from "./assets/pages/CartListpage.jsx";
import Userlogin from "./assets/pages/Userlogin.jsx";
import VerifyPage from "./assets/pages/VerifyPage.jsx";
import ValidationHelper from "./utility/ValidationHelper.js";
import NotFoundPage from "./assets/pages/NotFoundPage.jsx";

const App = () => {

 if(ValidationHelper.islogin()){
     return (
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={<ProductListpage/>} />
                 <Route path="/cartlist" element={<CartListpage/>} />


             </Routes>
         </BrowserRouter>
     );
 }else{
     return (
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={<ProductListpage/>} />
                 <Route path="/login" element={<Userlogin/>} />
                 <Route path="/verify" element={<VerifyPage/>}/>
                 <Route path="*" element={<NotFoundPage/>} />
             </Routes>
         </BrowserRouter>
     );
 }


};

export default App;