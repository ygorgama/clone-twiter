import { clsx } from 'clsx';
import {ButtonIcons} from './Post'
import { Avatar } from './Avatar';


export interface TweetProps{
    src: string,
    name: string
    userName: string
    isDark: boolean;
    time:string
    content: string
    imageSrc?: string 
}





 export function TweetInfo(props:TweetProps) {
    return(
            <div className={clsx(
                'font-medium text-xs border-t-1 border-solid ',
                {
                    "text-black border-dark-7":  !props.isDark,
                    "text-white border-dark-4": props.isDark,
                
                }
            )}>
                <div className='flex items-center mt-1'>
                    <div className='flex relative top-2'>
                        <Avatar size='sm' src={props.src} />
                    </div>
                    <div className='ml-5'>
                        <span className=' font-bold mr-2'>{props.name}</span>
                        <span className='text-dark-6 mr-2'>{props.userName}</span>
                        <span className='text-dark-6'>{props.time}</span>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        {props.content.length <= 280 && <p>{props.content}</p>}
                        {props.imageSrc && <img src={props.imageSrc} alt={props.imageSrc}/>}
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center mr-6'>
                            <ButtonIcons className='mr-2' alt='Like' src='comment' />
                            <span>61</span>
                        </div>

                        <div className='flex items-center mr-6 '>
                            <ButtonIcons className='mr-2' alt='Like' src='retweet' />

                            <span >12</span>
                        </div>
                        <div className='flex items-center mr-6'>
                            <ButtonIcons className='mr-2' alt='Like' src='like' />
                            <span >6.2k</span>
                        </div>
                     
                        <div className='flex items-center'>
                             <ButtonIcons className='mr-2'  alt='Like' src='share' />
                            <span >61</span>
                        </div>
                    </div>
                    <a className='text-primary-blue' href="/404">Show this thread</a>
                </div>
            </div>            
    )
}