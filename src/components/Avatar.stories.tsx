import { Avatar, AvatarProps } from "./Avatar";
import {Meta, StoryObj} from '@storybook/react'

import '../styles/global.css'

export default{
    title: 'Components/Avatar',
    component: Avatar,
    args:{
        size: 'sm',
        src: '../../src/assets/Profile Picture.svg'
    }
} as Meta<AvatarProps>

export const Default: StoryObj = {}

export const Medium: StoryObj = {
    args:{
        size: 'md',
    }
}

