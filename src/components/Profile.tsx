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
    return(
        <React.Fragment>
            <div className='flex items-center'>
                <Avatar size='sm' src={props.src} />
                <div className='ml-5'>
                    <p>{props.name}</p>
                    <p className='text-dark-6'>{props.userName}</p>
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
