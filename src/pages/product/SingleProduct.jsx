import { useContext, useEffect, useState } from 'react'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom'
import { productsContext } from '../../context/context'

const SingleProduct = () => {
    const [loading, setloading] = useState(true)
    const { id } = useParams()
    const { singleProduct, setSingleProducts,additems } = useContext(productsContext)
    const navigate=useNavigate()
    // ROUTING
    function handlecart() {
        additems(singleProduct)
        navigate("/cart")
    }

    // FETCHING DATA FROM API
    async function Product() {
        try {
            const getData = await fetch(`https://dummyjson.com/products/${id}`)
            const Result = await getData.json()
            console.log(Result)
            if (Result) {
                setSingleProducts(Result)
                setloading(false)
            }
        } catch (error) {
            console.error("Error Occure while fetching data", error)
        }
    }
    useEffect(() => { Product() }, [id])

    // LOADING ANIMATION
    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center font-display'>

                {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                // onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                    <p className='text-4xl font-bold '>LOADING PRODUCTS.....</p>
                </Backdrop>
            </div>
        )
    }
    return (
        <section className='grid place-items-center-safe h-screen'>
            <div className='mt-24 font-display p-5 w-3xl h-96 flex justify-center items-center shadow-md hover:shadow-lg cursor-pointer'>
                <div className='h-full w-1/2'>
                    <img className='h-full w-full object-cover' src={singleProduct.thumbnail} alt="" />
                </div>
                <div className='space-y-5 p-3.5 w-1/2'>
                    <h1 className='font-bold text-3xl'>{singleProduct.title}</h1>
                    <h4 className='text-size '>{singleProduct.description}</h4>
                    <p>${singleProduct.price}</p>
                    <p><span className='text-orange-300'>&#x2605;</span>{singleProduct.rating}</p>
                    <button onClick={handlecart} className='bg-amber-950 py-1.5 px-3.5 rounded-2xl text-center hover:shadow-lg text-white cursor-pointer'>Add to cart</button>
                    <button className='bg-amber-950 ml-2 py-1.5 px-3.5 rounded-2xl text-center hover:shadow-lg text-white cursor-pointer'>Buy</button>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct
