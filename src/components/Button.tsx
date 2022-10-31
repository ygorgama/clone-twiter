import { clsx } from 'clsx';

export interface ButtonProps{
    size: 'sm' | 'md' |'lg',
    children: string,
    isPrimary: boolean
    method?: () => void
    className?: string
}

export function Button({size = 'lg',isPrimary = true, children,  method, className}:ButtonProps) {
    return(
        <button onClick={method} className={clsx(
            `rounded-full text-md ${className ? className : 'w-full'}  font-bold`,
            {
                'bg-primary-blue text-white': isPrimary,
                'bg-transparente  border-1 border-primary-blue text-primary-blue': !isPrimary
            },
            {
                'h-16': size == 'lg',
                'h-12': size == 'md',
                'h-8': size =='sm',
            }
        )} >
            {children} 
        </button>
    )
}
