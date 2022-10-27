import { TweetInfo, TweetProps } from "./Tweet";
import {Meta, StoryObj} from '@storybook/react'

import '../styles/global.css'

export default{
    title: 'Components/Spacer',
    component: TweetInfo,
    args:{
        name: 'Devon Lane',
        userName: '@marcelosalomao',
        content: 'Hold on I need at least a few minutes!',
        isDark: false,
        imageSrc: '../../src/assets/Placehpolder.png',
        src: '../../src/assets/Profile Picture.svg',
        time: '23s'
        
    }
} as Meta<TweetProps>

export const Default: StoryObj = {}

export const Medium: StoryObj = {
    args:{
        isDark:true
    }
}

