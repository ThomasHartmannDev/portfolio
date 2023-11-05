import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {cn} from '@/app/libs/utils'
type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}:NavItemProps) =>{
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className= {
            cn('text-gray-400 flex items-center gap-2 font-mono', isActive && 'text-gray-50')
        }>
        <span className='text-purple-700'>#</span>
        {label}
        </Link>
    );  
}