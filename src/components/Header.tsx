import { clsx } from 'clsx';
import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface HeaderContainerProps{
    children: ReactNode
    isDark: boolean;
}


export interface HeaderProfileProps{
    twetts: string
}

export interface ImageProps{
    isHome: boolean
}



function HeaderContainer(props:HeaderContainerProps) {
    return(
        <div className={clsx(
            'flex text-md font-bold w-profile  border-b-1 border-dark-6',
            {
                "text-black":  !props.isDark,
                "text-white": props.isDark,
            
            }
        )}>
            {props.children}
        </div>
    )
}


function Symbol(props:ImageProps) {
        const image = props.isHome  ? 'change-mode.svg' : 'setinha.svg';
        const Comp = props.isHome ? 'button' : 'a'
        return(
        <Slot className='w-9 h-14'>
            <Comp href="/"><img src={`../../src/assets/${image}`} alt="Icone profile" /></Comp>
        </Slot>
    )
}




 function HeaderProfile(props:HeaderProfileProps) {
    return(
        <div className='flex items-center ml-8'>
            <div className='mr-8'>
                <Symbol isHome={false}/>
            </div>
            <div>
                <p className='text-md'>Name</p>
                <p className='text-dark-6 text-xls'>{props.twetts}</p>
            </div>
        </div>            
    )
}


function HeaderHome() {
    return(
        <div className='flex justify-between items-center w-full'>
            <div >
               <p className='text-md'>Home</p>
             </div>
            <div>
                <Symbol isHome={true}/>
           </div>
        </div>            
    )
}




export const  HeaderItems = {
    root: HeaderContainer,
    profile: HeaderProfile,
    home:HeaderHome,
}