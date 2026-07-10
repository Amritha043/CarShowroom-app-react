import React from 'react'
import NavigationBar from './NavigationBar'

const AddCar = () => {
  return (
    <div>
        <NavigationBar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <label htmlFor="" className="form-label text-light">Car ID</label>
                           <input type="text" className="form-control" />

                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label text-light">Brand</label>
                             <select name="" id="" className="form-control text-light">
                                <option value="">Tata</option>
                                <option value="">Toyota</option>
                                <option value="">BMW</option>
                                <option value="">Chevrolet</option>
                             </select>


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label text-light">Model</label>
                             <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label text-light">Fuel Type</label>
                             <input type="tel" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light"> Transmission</label>
                             <input type="tel" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light">Price</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light">Color</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light">Manufacturing Year</label>
                             <input type="date" className="form-control" />
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light">Image URL</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label htmlFor="" className="form-label text-light">Description</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <button className="btn btn-dark btn-form">ADD CAR</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </div>
  )
}

export default AddCar