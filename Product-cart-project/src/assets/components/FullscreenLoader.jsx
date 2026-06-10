import {Spinner} from "react-bootstrap";


const FullscreenLoader = () => {
    return (
        <div className="container mt-5">
           <div className="row justify-content-center align-items-center">
               <div className="col-md-2 mt-5">
                   <Spinner animation="border" role="status">
                       <span className="visually-hidden">Loading...</span>
                   </Spinner>
               </div>
           </div>
        </div>
    );
};

export default FullscreenLoader;