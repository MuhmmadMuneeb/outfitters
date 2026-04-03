import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products = () => {
  const { allProducts, loading } = useContext(productsContext);
  const navigate = useNavigate();

  const handlenavigate = (id) => {
    navigate(`/cart/${id}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-slate-950 flex flex-col justify-center items-center gap-6">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-500 font-mono tracking-[0.3em] uppercase text-sm"
        >
          Fetching Inventory...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black text-slate-900 italic uppercase">Featured</h2>
            <p className="text-slate-500 font-medium">Explore our latest drops</p>
          </div>
        </div>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-3 pb-10" 
        >
          {allProducts.map((product) => (
            <motion.div 
              key={product.id} 
              whileHover={{ y: -10 }}
              className="bg-white group rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={product.thumbnail} 
                  alt={product.title} 
                />
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.brand}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-slate-900 italic">
                    ${product.price}
                  </span>
                  <button 
                    onClick={() => handlenavigate(product?.id)} 
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Products;