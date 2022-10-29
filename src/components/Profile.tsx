import { clsx } from 'clsx';
import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Avatar } from './Avatar';


export interface ProfileContainerProps{
    children: ReactNode
    isDark: boolean;
}


export interface ProfileUserProps{
    src: string,
    name: string
    userName: string
    IsMedium?: boolean
}

export interface ProfileIconProps{
    isDark:boolean
}


function ProfileContainer({isDark = false, children}:ProfileContainerProps) {
    return(
        <div className={clsx(
            'flex items-center text-md font-bold ',
            {
                "text-black":  !isDark,
                "text-white": isDark,
            }
        )}>
            {children}
        </div>
    )
}


function MenuIcon(props:ProfileIconProps) {
    return(
        <Slot className='w-9 h-14 ml-9'>
            <img src={ `'../../src/assets/${props.isDark ? "dark-mode-profile-icon.svg" : "default-profile-icon.svg"}`} alt="Icone profile" />
        </Slot>
    )
}




 function ProfileUser(props:ProfileUserProps) {
    const size = props.IsMedium ? 'md' : 'sm'
    return(
        <React.Fragment>
            <div className='flex items-center'>
                <Avatar size={size} src={props.src} />
                <div className='ml-2'>
                    <p className='font-bold'>{props.name}</p>
                    <p className='text-dark-6 text-sm'>{props.userName}</p>
                </div>
            </div>            
        </React.Fragment>
    )
}

export const  ProfileItems = {
    root: ProfileContainer,
    content: ProfileUser,
    icon: MenuIcon
}
