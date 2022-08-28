import React from 'react'
import { useState } from 'react';
import axios from "axios"
import "./AddProduct.css"
import { toast } from "react-toastify"


export default function AddProduct() {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");




    const [image, setImage] = useState("");




    const ProductAdd = async (title, location, type, size, price, image) => {



        if (!title || !location || !type || !size || !type || !image) {
            return alert("please field all data ")
        }


        const formData = new FormData()
        formData.append('title', title)
        formData.append('location', location)
        formData.append('type', type)
        formData.append('price', price)

        formData.append('size', size)


        formData.append('image', image)

        await axios.post(`${process.env.REACT_APP_BASEURL}/property/createProperty`, formData).then((result2, err) => {
            console.log(result2);

            toast("Product Create Successfully")
            if (err) {
                console.log(err);
            }
        }


        ).catch(err => { console.log(err); })
    }






    return (
        <div>
            <div className="container">
                <div className="row mt-5">


                    <div className="col-sm-12 col-lg-4 col-md-4 ">
                    </div>
                    <div className="col-sm-12 col-lg-4 col-md-4 divup text-center">
                        <h2 className='mt-3'>ADD PROPERTY</h2>

                        <div className="mt-5 mb-3">
                            <input type="text" value={title} className="form-control" placeholder="Property Title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter Your Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter Your Type" value={type} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter Your Size " value={size} onChange={(e) => setSize(e.target.value)} />
                        </div>


                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder='Enter a Price' value={price} onChange={(e) => setPrice(e.target.value)} />

                        </div>
                        <div className="mb-3">
                            <input type="file" className="form-control" name='image' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <button className="btn btn-primary   mt-3 mb-3 " onClick={() => ProductAdd(title, location, type, size, price, image)}>Add PROPERTY</button>




                    </div>

                    <div className="col-sm-12 col-lg-4 col-md-4 ">
                    </div>

                </div>





            </div>
        </div>






    )
}


