import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-center items-center bg-black/60 backdrop-blur-md p-4"
        >

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-[380px] p-8 rounded-[2rem] shadow-2xl text-center relative overflow-hidden"
          >

            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />

            <div className="mb-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">
                Disclaimer
              </h2>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              This project is for demonstration purposes only. Content and brand assets belong to their respective owners. By continuing, you acknowledge the "NextGen" experimental UI.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(false)}
              className="w-full bg-slate-950 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-950/20 uppercase text-xs tracking-widest"
            >
              I Understand
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Disclaimer;