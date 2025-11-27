import { useContext, } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsContext } from '../../context/context';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { allProducts, loading } = useContext(productsContext)
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()


  function handlenavigate(id) {
    console.log("navigated")
    navigate(`/cart/${id}`)
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>

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
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      className='mt-20 px-5 '
    >
      {/* <div className='mt-40 grid grid-cols-4 justify-center items-center p-5 overflow-hidden w-full'> */}
      {allProducts.map((product) => (
        <div key={product.id} className='font-display shadow-md hover:shadow-lg cursor-pointer w-[350px]  mb-5 flex flex-col justify-center items-center h-[450px] relative '>
          <div className='h-44'>
            <img className='h-full' src={product.thumbnail} alt="" />
            <p className='bg-amber-950 absolute top-2.5 left-2.5 rounded-2xl p-1.5 text-white'>{product.brand}</p>
          </div>
          <div className='p-5 flex flex-col justify-center space-y-2.5'>
            <h1 className='text-3xl line-clamp-2 font-medium '>{product.title}</h1>
            <p className='line-clamp-2 font-light text-size'>{product.description}</p>
            <p className='text-2xl'>${product.price}</p>
            <button onClick={() => handlenavigate(product?.id)} className='bg-amber-950 cursor-pointer text-center px-7 py-2.5 text-white rounded-2xl hover:scale-105 transition'>Show Detailes</button>
          </div>
        </div>
      ))}
      {/* </div> */}
    </Carousel>

  )
}

export default Products
