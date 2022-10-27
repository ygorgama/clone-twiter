import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface MenuItemConteinerProps{
    children?: ReactNode
    isSelected?: boolean;
    isDark?: boolean;
}


export interface MenuItemProps{
    children: string;
    href: string;
}


export interface MenuIconProps{
    src: string;
    alt:string
}

function MenuItemContainer({isSelected = false, isDark = false, children}:MenuItemConteinerProps) {
    return(
        <div className={clsx(
            'flex items-center',
            {
                "text-primary-blue": isSelected,
                "text-black": !isSelected && !isDark,
                "text-white": !isSelected && isDark,
            }
        )}>
            {children}
        </div>
    )
}


function MenuIcon(props:MenuIconProps) {
    return(
        <Slot className='w-9 h-14 mr-5'>
            <img src={props.src} alt={props.alt} />
        </Slot>
    )
}


 function MenuItemLink({children,  href}:MenuItemProps) {
    return(
        <a className={clsx(
            "text-md font-bold home__icon",

        )} href={href}>
            {children} 
        </a>
    )
}

export const  MenuItem = {
    root: MenuItemContainer,
    icon: MenuIcon,
    link: MenuItemLink,
}
