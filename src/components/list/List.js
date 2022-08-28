
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchProperty } from '../../store/getSlice';
import "../getProperty/GetProperty.css"


function List() {
    const { data, status } = useSelector((state) => state.property)

    const [findData, setFindData] = useState([]);

    const [data1, setData1] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProperty())
    }, [])


    const deleteData = async (id) => {

        try {
            const baseURL = process.env.REACT_APP_BASEURL;

            await axios.delete(`${baseURL}/property/deleteProperty/${id}`)

            const newProduct = data.filter((newPro) => {
                return newPro.id != id
            },


            )
            setData1(newProduct)



            alert("AD DELETE DONE")
        } catch (error) {
            console.log(error);
        }

    }








    return (

        <div>
            <div className="container">


                <div className="row ">

                    {
                        data.map((cat, i) => {

                            return <div className='col-lg-3 col-sm-12 col-md-3  mt-3  styleCad'  >
                                <div className="card" id='styleCard' >
                                    <img src={cat.image} className="card-img-top" alt="cardImages" />
                                    <div className="card-body">

                                        <div  >
                                            <p><b>Title:</b>  {cat.title}</p>
                                            <p><b>Price:</b>  {cat.price}</p>
                                            <p><b>Size ( Per Meter): </b>  {cat.size}</p>


                                            <p><b>Location : </b> {cat.location}</p>
                                            <button className='btn btn-danger' onClick={() => deleteData(cat._id)}>Delete Property</button>




                                        </div>




                                    </div>

                                </div>
                            </div>


                        })
                    }


                </div>


            </div>


        </div>






    )
}


export default List








