
import AppFooter from "./AppFooter.jsx";
import AppNavbar from "./AppNavbar.jsx";


const MasterLayout = (props) => {
    return (
        <div>
            <AppNavbar/>
            {props.children}
            <AppFooter/>
        </div>
    );
};

export default MasterLayout;