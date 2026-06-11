import ButtonSpinner from "./ButtonSpinner.jsx";
import {useState} from "react";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import axios from "axios";


const VerifyForm = () => {



    let [submitted, setSubmitted] = useState(false);

    const onSubnit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let otp=formData.get('otp');
        if(ValidationHelper.isEmpty(otp)){

            toast.error('otp required');
        }else{
            let Email=sessionStorage.getItem('Email');
            setSubmitted(true)
            let res= await axios.get(`${ValidationHelper.API_BASE_two()}/RecoververifyOTP/${Email}/${otp}`)

            setSubmitted(false)
            if (res.data['status']==="success"){
                toast.success(res.data['massage']);
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODEyNjgzMzAsImRhdGEiOiJzaGFqZWRzaG9oYW4xMUBnbWFpbC5jb20iLCJpYXQiOjE3ODExODE5MzB9.80jlky7aeHdt5pj6t00IHE4DED02oDqulLATuSCP_kY";
                sessionStorage.setItem("token", token);
                window.location.href="/";
            }else{
                toast.error('request Failed!');

            }



        }
    }
    return (
        <div className="container mt-5 ">
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



export default VerifyForm;