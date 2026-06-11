import {useEffect, useState} from "react";
import axios from "axios";

import FullscreenLoader from "./FullscreenLoader.jsx";
import ValidationHelper from "../../utility/ValidationHelper.js";



const ProductList = () => {

    let [data,SetData]=useState(null)



    const CallProductList= async ()=>{
       let response= await axios.get(`${ValidationHelper.API_BASE()}/product-list`)
        let productList=response.data['data']
        SetData(productList)

    }

    useEffect(()=>{
        (async ()=>{
            await CallProductList()

        })()
    },[])

    const addtocart = async (id) => {
        let res=await axios.post(`${ValidationHelper.API_BASE()}/create-cart/${id}`)
    }
    
    
    
    return (
        <div>
            {data===null?(<FullscreenLoader/>):(
               <div className={"container"}>
                       <div className="row">

                           {

                               data.map((item,index)=>{
                                   return (
                                       <div className="col-md-4 p-12 d-flex justify-content-center" key={index}>
                                          <div className="card p-3">
                                              <div className={"card justify-content-center align-items-center"}>
                                                  <img src={item["image"]} height={"200px"} width={"200px"}/>
                                                  <h6>{item["title"]}</h6>

                                                  <p>{item["short_des"]}</p>
                                                  <p> Price {item["price"]}</p>
                                                  <p> Discount Price : {item["discount_price"]}</p>
                                                  {item["remark"] === "new" ? (
                                                      <p className="text-bg-primary">{item["remark"]}</p>) : (
                                                      <p className="text-bg-warning">{item["remark"]}</p>)}

                                                  <input onClick={()=>{addtocart(item["id"])}} className="btn btn-primary" />
                                              </div>

                                          </div>
                                       </div>
                                   )
                               })
                           }
                       </div>

               </div>
            )}
        </div>
    );
};

export default ProductList;