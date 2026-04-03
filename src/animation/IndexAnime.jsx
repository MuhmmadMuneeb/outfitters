import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IndexAnime = ({ i, title, description, link, color, targetscale, progress, range }) => {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    })
    const imgscale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetscale])
    return (
        <div ref={container} className=' flex  items-center sticky top-0 '>
            <motion.div style={{ backgroundColor: color, }} className='  relative'>

                <motion.div style={{ imgscale }} className=' w-full h-full '>
                    
                    <video src={link} loop autoPlay></video>
               
                </motion.div>
            </motion.div>
        </div>
    )
}

export default IndexAnime
