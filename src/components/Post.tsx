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
                    <PostIcon src='emoji' alt='Emoji' method={props.method}/>
                    <PostIcon src='gif' alt='Gig'  method={props.method}/>
                    <PostIcon src='media' alt='Media'  method={props.method}/>
                    <PostIcon src='poll' alt='Poll'  method={props.method}/>
                    <PostIcon src='schedule' alt='Escala'  method={props.method}/>
                </div>
                <Button className='w-20' children='Tweet'  isPrimary={true} size="md"/>
            </div>
        </form>
    )
}

function PostIcon(props:PostIconsProps) {

    return(
        <button onClick={props.method} 
        className='w-9 h-14 mr-5'>
            <img src={`../../src/assets/${props.src}.svg`} alt={props.alt} />
        </button>
    )
}


            {/* <div className='flex items-center'>
                <Avatar size='md' src={props.src}/>
                <p className='text-lg'>What’s happening?</p>
            </div>
            <div className='flex w-full items-center' >
                <PostIcon src='emoji' alt='Emoji' method={props.method}/>
                <PostIcon src='gif' alt='Gig'  method={props.method}/>
                <PostIcon src='media' alt='Media'  method={props.method}/>
                <PostIcon src='poll' alt='Poll'  method={props.method}/>
                <PostIcon src='schedule' alt='Escala'  method={props.method}/>
                <Button className='w-5' children='Tweet'  isPrimary={true} size="sm"  method={props.method}/>
            </div> */}