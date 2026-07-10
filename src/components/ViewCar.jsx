import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewCar = () => {
     const [data,changeData]=useState( [] )
     const fetchData = ()=>{
            axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch()
     }
     
     useEffect(
        ()=>{
            fetchData()
        },[]
     )

  return (
    <div>
        <NavigationBar/>
 <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        
                       
                        {
                            data.map(
                                (value,index)=>{
                                    return(
                                        
                                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                           <div className="card shadow h-100">
                        <img
                            src={value.image}
                            className="card-img-top"
                            alt=""
                            height="330px"
                        />

                        <div className="card-body">
                            <h5 className="card-title">
                            {value.brand} {value.model}
                            </h5>

                            <p className="card-text">
                            <strong>Car ID:</strong> {value.carId}<br />
                            <strong>Fuel:</strong> {value.fuelType}<br />
                            <strong>Transmission:</strong> {value.transmission}<br />
                            <strong>Color:</strong> {value.color}<br />
                            <strong>Year:</strong> {value.year}<br />
                            <strong>Price:</strong> ₹{value.price}<br />
                            <strong>Description:</strong> {value.description}
                            </p>

                            <button className="btn btn-dark w-100">
                            View Details
                            </button>
                        </div>
                        </div>


                                                </div>
                                                            )
                                                        }
                                                    )
                                                }

                                                
                                            </div>



                                        </div>
                                    </div>
        </div>





    </div>
  )
}

export default ViewCar