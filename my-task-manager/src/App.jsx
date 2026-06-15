import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskCreatePage from "./pages/TaskCreatePage.jsx";
import UserLoginPage from "./pages/UserLoginPage.jsx";
import TaskStorePage from "./pages/TaskStorePage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import UserRegestrationPage from "./pages/UserRegestrationPage.jsx";
import VerifyMailPage from "./pages/VerifyMailPage.jsx";
import VerifyOtpPage from "./pages/VerifyOtpPage.jsx";
import Helper from "./utility/Helper.js";


const App = () => {

    if(Helper.islogin()){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskCreatePage/>} />
                    <Route path="/storetask" element={<TaskStorePage/>} />
                    <Route path="/profile" element={<UserProfilePage/>} />
                     <Route path="/verify" element={<VerifyMailPage/>} />
                    <Route path="/Otpverify" element={<VerifyOtpPage/>} />
                </Routes>
            </BrowserRouter>
        );
    }else{
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskCreatePage/>} />
                    <Route path="/registration" element={<UserRegestrationPage/>} />
                    <Route path="/login" element={<UserLoginPage/>}/>

                </Routes>
            </BrowserRouter>
        );
    }

};

export default App;