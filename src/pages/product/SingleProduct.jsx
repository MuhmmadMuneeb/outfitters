import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsContext } from '../../context/Context.jsx';
import { motion } from 'framer-motion';

const SingleProduct = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { singleProduct, setSingleProducts, additems } = useContext(productsContext);
    const navigate = useNavigate();

    const handleCart = () => {
        additems(singleProduct);
        navigate("/cart");
    };

    async function fetchProduct() {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            if (data) {
                setSingleProducts(data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    useEffect(() => { 
        fetchProduct(); 
    }, [id]);

    if (loading) {
        return (
            <div className="h-screen w-full bg-slate-950 flex flex-col justify-center items-center gap-4">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full"
                />
                <p className="text-amber-500 font-mono tracking-widest text-sm uppercase">Loading Product...</p>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 pt-24 md:pt-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
            >
                <div className="w-full md:w-1/2 h-[350px] md:h-[500px] bg-slate-100 overflow-hidden">
                    <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="h-full w-full object-cover" 
                        src={singleProduct.thumbnail} 
                        alt={singleProduct.title} 
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 mb-2 block">
                                {singleProduct.category} // {singleProduct.brand}
                            </span>
                            <h1 className="font-black text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight italic uppercase">
                                {singleProduct.title}
                            </h1>
                        </div>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                            {singleProduct.description}
                        </p>

                        <div className="flex items-center gap-6">
                            <span className="text-4xl font-black text-slate-900">${singleProduct.price}</span>
                            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                                <span className="text-amber-500 text-lg">★</span>
                                <span className="text-amber-700 font-bold text-sm">{singleProduct.rating}</span>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCart} 
                                className="flex-1 bg-slate-950 text-white py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-slate-950/20"
                            >
                                Add to cart
                            </motion.button>
                            
                            <motion.button 
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-amber-500 text-slate-950 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
                            >
                                Buy Now
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default SingleProduct;