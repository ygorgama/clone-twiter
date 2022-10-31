import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';


export interface HeaderContainerProps{
    isDark: boolean;
    isHome: boolean;
    twetts: string
    functionHandller?: () => void
}

export interface HeaderProfileProps{
    twetts: string
    functionHandller?: () => void
}

export interface HeaderHomeProps{
    functionHandller?: () => void
}


export interface ImageProps{
    functionHandller?: () => void 
    isHome: boolean
}

export function HeaderContainer(props:HeaderContainerProps) {

    return(
        <div className={clsx(
            'flex text-md font-bold w-full  border-b-1 border-dark-6',
            {
                "text-black":  !props.isDark,
                "text-white": props.isDark,
            
            }
        )}>
            
            {props.isHome ? <HeaderHome functionHandller={props.functionHandller}/>  : <HeaderProfile twetts={props.twetts} />}
        </div>
    )
}


function Symbol(props:ImageProps) {
        const image = props.isHome  ? 'change-mode.svg' : 'setinha.svg';
        const Comp = props.isHome ? 'button' : 'a'
        return(
        <Slot className='w-9 h-14'>
            <button onClick={props.functionHandller}><img src={`../../src/assets/${image}`} alt="Simbolo" /></button>
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


function HeaderHome(props:HeaderHomeProps) {
    return(
        <div className='flex justify-between items-center w-full'>
            <div >
               <p className='text-md'>Home</p>
             </div>
            <div>
                <Symbol functionHandller={props.functionHandller}  isHome={true}/>
           </div>
        </div>            
    )
}




