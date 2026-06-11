import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useState} from "react";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Loginform = () => {

    let navigate = useNavigate();

let [submitted, setSubmitted] = useState(false);

   const onSubnit = async (e) => {
     e.preventDefault();
     let formData = new FormData(e.target);
       let Email=formData.get('email');
    if(ValidationHelper.isEmpty(Email)){

        toast.error('Email required');
    }else{
        setSubmitted(true)
           let res= await axios.get(`${ValidationHelper.API_BASE_two()}/RecoverVerifymail/${Email}`)
           if (res.data['status']==="success"){
               toast.success(res.data['massage']);
               sessionStorage.setItem('Email',Email)
               navigate("/verify")
           }else{
               toast.error('request Failed!');
               setSubmitted(false)
           }



    }
   }
    return (
        <div className="container mt-5 ">
            <div className="row justify-content-center ">
                <div className="col-md-4">
                    <div className="card bg-dark-subtle">
                        <form onSubmit={onSubnit} className="p-4">
                            <label>Enter Your Email</label>
                            <input name="email" type="email" className="form-control mt-1" />
                            <button disabled={submitted} type="submit" className="btn btn-primary w-100 mt-2" >{
                                submitted?(<ButtonSpinner/>):("submit")
                            }</button>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Loginform;