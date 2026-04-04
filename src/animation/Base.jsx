import React, { useEffect, useRef } from 'react'
import IndexAnime from './IndexAnime'
import { useScroll } from 'framer-motion'

const projects = [
    {
        id: 1,
        link: "/first.mp4",   // ✅ FIXED
    },
    {
        id: 2,
        link: "/second.mp4",  // ✅ FIXED
    },
    {
        id: 3,
        link: "/third.mp4",   // ✅ FIXED
    },
    {
        id: 4,
        link: "/forth.mp4",   // ✅ FIXED
    },
    {
        id: 5,
        link: "/first.mp4",   // ✅ FIXED
    },
]

const Base = () => {
    const container = useRef()

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (e) => console.log(e))
        return () => unsubscribe() // ✅ cleanup (important)
    }, [scrollYProgress])

    return (
        <section ref={container} className='relative top-0'>
            {projects.map((project, index) => {
                const targetscale = 1 - (projects.length - index) * 0.05

                return (
                    <IndexAnime
                        key={project.id}   // ✅ now unique
                        i={index}
                        {...project}
                        range={[index * 0.25, 1]}
                        targetscale={targetscale}
                        progress={scrollYProgress}
                    />
                )
            })}
        </section>
    )
}

export default Base