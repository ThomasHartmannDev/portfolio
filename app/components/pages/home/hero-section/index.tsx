import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandWhatsapp, TbBrandLinkedin} from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
    url: 'https://github.com/ThomasHartmannDev',
    icon: <TbBrandGithub/>
    },
    {   
    url: 'https://github.com/ThomasHartmannDev',
    icon: <TbBrandLinkedin/>
    },
    {
    url: 'https://github.com/ThomasHartmannDev',
    icon: <TbBrandWhatsapp/>
    }
]

export const HeroSection = () => {
    return(
        <section className='w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]'>
            <div className='container flex items-start justify-between flex-col-reverse lg:flex-row'>
                <div className='w-full lg:max-w-[530px]'>
                    <p className='text-mono text-purple-400'>Olá, meu nome é</p>
                    <h1 className='text-4xl font-medium mt-2'>Thomas Hartmann</h1>
                    <p className='text-gray-400 my-6 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                        {Array.from({length: 5}).map((_, index) =>(
                            <TechBadge name = 'next.js'/>
                        ))}
                    </div>
                    <div className='mt-6 lg:mt10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
                        <Button className=' w-max shadow-button'>                        
                            Entre em contato 
                            <HiArrowNarrowRight size={18}/> 
                        </Button>
                        <div className='text-gray-600 text-2xl flex items-center h-20 gap-3'>
                            {MOCK_CONTACTS.map((contact, index) =>(
                                <a 
                                    href={contact.url} 
                                    key={`contact-${index}`}
                                    target='_blank'
                                    className='hover:text-gray-100 transition-colors'
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <Image width={420} height={404} src='/images/profile-pic.png' alt='Foto de perfil do Thomas Hartmann'
                    className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover'
                />
            </div>
        </section>
    )
}