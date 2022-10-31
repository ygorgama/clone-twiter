import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';


export interface SeachContainerProps{
    isDark: boolean;
    className?: string;
}


interface SeachIcon{
    isDark: boolean;
}

export function SearchContainer(props:SeachContainerProps) {
    return(
        <div className={clsx(
            'flex items-center py-4 w-90 h-10 rounded-full',
            {
                "text-dark-5 bg-dark-7": !props.isDark,
                "text-dark-6 bg-dark-3": props.isDark,
            }
        )}>
            <MenuIcon isDark={props.isDark} />
            <MenuItemLink/>
        </div>
    )
}


function MenuIcon(props:SeachIcon) {
    const src = props.isDark ? 'seach-dk' : 'search-lg'
    return(
        <Slot className='w-4 h-5 ml-3 mr-5'>
             <img src={`../../src/assets/${src}.svg`} alt='Seach'/>
        </Slot>
    )
}


 function MenuItemLink() {
    return(
        <input className='w-full outline-none bg-transparente' type="text" placeholder='Search Twitter'/>
    )
}

