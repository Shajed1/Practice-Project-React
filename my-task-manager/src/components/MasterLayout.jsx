
import AppFooter from "./AppFooter.jsx";
import AppNavbar from "./AppNavbar.jsx";
import { Toaster } from "react-hot-toast";


const MasterLayout = (props) => {
    return (
        <div>
            <AppNavbar/>
            {props.children}
            <AppFooter/>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default MasterLayout;