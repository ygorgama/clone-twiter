import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import {Button  } from "./Button";


export interface PostProps{
    src: string,
    isDark: boolean;
    method?: () =>{}
}

export interface PostIconsProps{
    src: string
    alt: string
    className?: string
    method?: () => {}
}



export function Post(props:PostProps) {
    return(
        <form>
            <div className='flex items-center '>
                <label className='mr-6' htmlFor=""> <Avatar size='md' src={props.src}/></label>
                <textarea id='inputThink' placeholder='What’s happening?' className={clsx(
                    'text-md font-bold justify-between w-full bg-transparente',
                    {
                        "text-dark-5":  !props.isDark,
                        "text-dark-6": props.isDark,
                    }

                )}>
                </textarea>
            </div>
            <div className='flex w-full items-center justify-between'>
                <div>
                    <ButtonIcons src='emoji' alt='Emoji' method={props.method}/>
                    <ButtonIcons src='gif' alt='Gig'  method={props.method}/>
                    <ButtonIcons src='media' alt='Media'  method={props.method}/>
                    <ButtonIcons src='poll' alt='Poll'  method={props.method}/>
                    <ButtonIcons src='schedule' alt='Escala'  method={props.method}/>
                </div>
                <Button className='w-20' children='Tweet'  isPrimary={true} size="md"/>
            </div>
        </form>
    )
}

export function ButtonIcons(props:PostIconsProps) {
    const classDefine = !props.className ? 'mr-5' : props.className
    return(
        <button onClick={props.method} 
        className={`w-9 h-14 ${classDefine}`}>
            <img src={`../../src/assets/${props.src}.svg`} alt={props.alt} />
        </button>
    )
}


