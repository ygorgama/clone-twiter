import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps{
    size: 'sm' | 'md' |'lg',
    children: ReactNode,
    asChild: boolean,
    isPrimary: boolean
}

export function Button({size = 'lg',isPrimary = true, children, asChild}:ButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return(
        <Comp className={clsx(
            'rounded-3xl text-md w-2/6  font-bold	',
            {
                'bg-primary-blue text-white': isPrimary,
                'bg-dark-8 text-primary-blue': !isPrimary
            },
            {
                'py-5': size === 'lg',
                'py-3': size === 'md',
                'px-2': size === 'sm',
            }
        )}>
            {children} 
        </Comp>
    )
}
