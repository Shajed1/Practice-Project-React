
import {useState} from "react";

import toast from "react-hot-toast";
import axios from "axios";
import ButtonSpinner from "./ButtonSpinner";
import Helper from './../utility/Helper';
import {useNavigate} from "react-router-dom";

const VerifyOtp = () => {
   
const navigate=useNavigate()

    let [submitted, setSubmitted] = useState(false);

    const onSubnit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let otp=formData.get('otp');

            let Email=localStorage.getItem('Email');
            setSubmitted(true)
            let res= await axios.get(`${Helper.BASE_API()}/RecoververifyOTP/${Email}/${otp}`)

            setSubmitted(false)
            if (res.data['status']==="success"){
                toast.success(res.data['massage']);
                localStorage.setItem("otp",otp)
                navigate("/profile")
            }else{
                toast.error('request Failed!');

            }



        
    }
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row justify-content-center ">
                <div className="col-md-4">
                    <div className="card bg-dark-subtle">
                        <form onSubmit={onSubnit} className="p-4">
                            <label>Enter OTP</label>
                            <input name="otp" type="text" className="form-control mt-1" />
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

export default VerifyOtp;