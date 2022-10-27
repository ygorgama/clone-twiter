import { Post, PostProps } from "./Post";
import {Meta, StoryObj} from '@storybook/react'
import '../styles/global.css'


export default{
    title: 'Components/Post',
    component: Post,
    args:{
        isDark: false,
        method: () =>{},
        src: '../../src/assets/Profile Picture.svg'   

    }
} as Meta<PostProps>

export const Default: StoryObj = {
    
}

export const DarkMode: StoryObj = {
    args:{
        isDark: true,
    }
}



