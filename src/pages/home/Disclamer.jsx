import React, { useState } from 'react'

const Disclamer = () => {
  const [Disclamer, setdisclamer] = useState(true)
  return (
    // <section className={`h-full ${Disclamer==true?"opacity-100 translate-x-0":"opacity-0 -translate-x-full pointer-events-none"} transition-all ease-in duration-200 flex justify-center items-center bg-black opacity-75 fixed inset-0`}>
    //     <div className=' bg-white h-56 w-36 '>
    //         <button className='cursor-pointer' onClick={()=>setdisclamer(false)}>close</button>
    //     DISCLAMER
    //     </div>

    <section
      className={`
        fixed inset-0 flex justify-center items-center
        bg-black/60 backdrop-blur-sm
        transition-all duration-500
        ${Disclamer ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
    >
      {/* White Box */}
      <div className="bg-white w-80 p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-xl font-bold mb-3">Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          This is a demo disclaimer content. You can change it easily.
        </p>

        <button
          onClick={() => setdisclamer(false)}
          className="bg-black cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </section>


    // </section>
  )
}

export default Disclamer
