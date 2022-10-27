import { clsx } from 'clsx';

export interface ButtonProps{
    size: 'sm' | 'md' |'lg',
    children: string,
    isPrimary: boolean
    method?: () => {}
    className?: string
}

export function Button({size = 'lg',isPrimary = true, children,  method, className}:ButtonProps) {
    return(
        <button onClick={method} className={clsx(
            `block rounded-full text-md ${className ? className : 'w-full'}  font-bol`,
            {
                'bg-primary-blue text-white': isPrimary,
                'bg-dark-8 text-primary-blue': !isPrimary
            },
            {
                'py-5': size === 'lg',
                'py-3': size === 'md',
                'px-2': size === 'sm',
            }
        )} >
            {children} 
        </button>
    )
}
