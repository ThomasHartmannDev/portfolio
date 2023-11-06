import {IoMdHeart} from 'react-icons/io'

export const Footer = () =>{
    return(
        <footer className="h-14 w-full h-full flex item-center justify-center bg-gray-950">
            <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
                Made with <IoMdHeart size={13} className='text-purple-500'/> 
                <strong className='font-medium'>Thomas Hartmann</strong>
            </span>
        </footer>
    )
}