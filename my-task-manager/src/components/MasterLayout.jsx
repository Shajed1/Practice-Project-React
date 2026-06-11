import AppNabvar from "./AppNabvar.jsx";


const MasterLayout = (props) => {
    return (
        <div>
            <AppNabvar/>
            {props.children}
        </div>
    );
};

export default MasterLayout;