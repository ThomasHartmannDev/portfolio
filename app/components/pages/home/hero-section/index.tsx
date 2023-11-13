'use client'
import { Button } from '@/app/components/button'
import { CMSIcon } from '@/app/components/cms-icon'
import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { HomePageInfo } from '@/app/types/page-info'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {motion} from 'framer-motion'
import { techBadgeAnimation } from '@/app/libs/animations'

type HomeSectionProps = {
    homeInfo: HomePageInfo;
}

export const HeroSection = ({homeInfo}: HomeSectionProps) => {
    const handleContact = () =>{
        const contactSection = document.querySelector('#contact');
        if(contactSection){
            contactSection.scrollIntoView({behavior: 'smooth'})
        }
    }
    return(
        <section className='w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]'>
            <div className='container flex items-start justify-between flex-col-reverse lg:flex-row'>
                <motion.div 
                    className='w-full lg:max-w-[530px]'
                    initial={{opacity:0, x: -200}}
                    whileInView={{opacity:1, x:0}}
                    exit={{opacity:0, x:-200}}
                    transition={{duration:0.5}}
                    >
                    <p className='text-mono text-purple-400'>Hi, my name is</p>
                    <h1 className='text-4xl font-medium mt-2 hover:text-purple-500 transition-all'>Thomas Hartmann</h1>
                    <div className='text-gray-400 my-6 text-sm sm:text-base'>
                        <RichText content={homeInfo.introduction.raw}/>
                    </div>
                    <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                        {homeInfo.technologies.map((tech, i) =>(
                            <TechBadge name = {tech.name} key={`intro-tech-${tech.name}`}
                                {...techBadgeAnimation}
                                transition={{duration:0.7, delay: i * 0.2}}
                            />
                        ))}
                    </div>
                    <div className='mt-6 lg:mt10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
                        <Button className=' w-max shadow-button' onClick={handleContact}>                        
                            Contact me
                            <HiArrowNarrowRight size={18}/> 
                        </Button>
                        <div className='text-gray-600 text-2xl flex items-center h-20 gap-3'>
                            {homeInfo.socials.map((contact, index) =>(
                                <a 
                                    href={contact.url} 
                                    key={`contact-${index}`}
                                    target='_blank'
                                    className='hover:text-gray-100 transition-colors'
                                >
                                    <CMSIcon icon={contact.iconSvg}/>
                                </a>
                            ))}
                        </div>

                    </div>
                </motion.div>
                    
                <motion.div 
                    initial={{opacity:0, x: 200, scale:0.5}}
                    whileInView={{opacity:1, x:0, scale:1}}
                    exit={{opacity:0, x:200, scale:0.5}}
                    transition={{duration:0.5}}
                >
                    <Image width={420} height={404} src={homeInfo.profilePicture.url} alt='Foto de perfil do Thomas Hartmann'
                        className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover'
                    />
                </motion.div>
            </div>
        </section>
    )
}