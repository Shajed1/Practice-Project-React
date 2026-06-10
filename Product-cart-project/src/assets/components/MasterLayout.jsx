import AppNavbar from "./AppNavbar.jsx";
import AppFooter from "./AppFooter.jsx";


const MasterLayout = (props) => {
    return (
        <div>
            <AppNavbar />
            {props.children}
            <AppFooter/>
        </div>
    );
};

export default MasterLayout;