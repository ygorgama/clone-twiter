import { clsx } from 'clsx';

export interface SpacerProps{
    isDark: boolean
}


export function Spacer(props: SpacerProps) {
    return(
        <div className={clsx(
            'w-full h-3',
            {
                'bg-dark-8': !props.isDark,
                'bg-dark-4': props.isDark
            }
        )}>

        </div>
    )
}
