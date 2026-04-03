import React, { useContext } from 'react';
import { productsContext } from '../../context/context';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(productsContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-4 font-display">
      <div className="max-w-4xl mx-auto">
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl font-black mb-8 text-slate-900 tracking-tight uppercase italic"
        >
          Your <span className="text-amber-500 underline decoration-2 underline-offset-8">Cart</span>
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-white border border-slate-200 rounded-[2rem] py-20 shadow-xl"
          >
            <span className="text-6xl block mb-4">🛍️</span>
            <p className="text-xl text-slate-500 font-medium">Your cart is currently empty.</p>
            <button className="mt-6 px-8 py-3 bg-slate-950 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Go Shopping
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 md:p-6 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow gap-6"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl bg-slate-100"
                    />

                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-slate-800 leading-tight">{item.title}</h2>
                      <p className="text-amber-600 font-mono font-bold mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                        Unit Price: ${item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto bg-slate-50 p-2 rounded-2xl border border-slate-100 min-w-[140px]">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 flex items-center justify-center bg-white shadow-sm border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 active:scale-90 transition-all"
                    >
                      −
                    </button>

                    <span className="text-lg font-black w-10 text-center text-slate-800">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 flex items-center justify-center bg-slate-950 text-white rounded-xl shadow-lg shadow-slate-950/20 hover:bg-slate-800 active:scale-90 transition-all"
                    >
                      +
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.div 
              layout
              className="mt-10 p-8 bg-slate-950 rounded-[2.5rem] text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl"
            >
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">Total Balance</p>
                <h3 className="text-4xl font-black italic">
                  ${totalPrice.toFixed(2)}
                </h3>
              </div>
              <button className="w-full md:w-auto px-12 py-4 bg-amber-500 text-black font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10">
                Checkout Now
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;