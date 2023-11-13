'use client'
import { SectionTitle } from "@/app/components/section-title"
import {motion} from 'framer-motion'
export const NoExperience = () =>{
    return(
        <section className="container pb-16 justify-center flex md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px] block text-center">
                <SectionTitle subtitle="Experiences" title="Professional experience" className='items-center text-center'/>
                <motion.p className="mt-3 block"
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x: 0}}
                    exit={{opacity:1, x: 0}}
                    transition={{duration:0.5, delay: 0.3}}
                >
                I'm looking for my first Job and I'm eager to embark on my professional journey as a junior developer and build my experience. Who knows, soon I may be able to highlight the incredible contributions I will make to your company here!
                </motion.p>
            </div>
        </section>
    )
}