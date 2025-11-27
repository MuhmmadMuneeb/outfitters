import React, { useEffect, useRef } from 'react'
import IndexAnime from './IndexAnime'
import { motion, useScroll } from 'framer-motion'


const projects = [
    {
        id: 1,
        link: "../public/first.mp4",
    },
    {
        id: 2,
        link: "../public/second.mp4",

    },

    {
        id: 2,
        link: "../public/third.mp4",
    },
    {
        id: 2,
        link: "../public/forth.mp4",
    },
    {
        id: 2,
        link: "../public/first.mp4",
    },
]
const Base = () => {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    useEffect(() => scrollYProgress.on("change", e => console.log(e)), [])
    return (
        <section ref={container} className='relative top-0'>

            {projects.map((project, index) => {
                const targetscale = 1 - (projects.length - index) * 0.05
                return <IndexAnime key={project.id} i={index} {...project} range={[index * 0.25, 1]} targetscale={targetscale} progress={scrollYProgress} />
            })}

        </section>
    )
}

export default Base
