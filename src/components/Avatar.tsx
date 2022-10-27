import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface AvatarProps{
    size: 'sm' | 'md',
    src: string
}

export function Avatar(props: AvatarProps) {
    return(
        <img className={clsx(
            'rounded-full',
            {
                'w-14 h-14': props.size === 'md',
                'w-10 h-10': props.size === 'sm'
            }
        )} src={props.src} alt="Avatar" />
    )
}
