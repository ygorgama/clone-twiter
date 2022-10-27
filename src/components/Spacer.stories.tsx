import { Spacer, SpacerProps } from "./Spacer";
import {Meta, StoryObj} from '@storybook/react'

import '../styles/global.css'

export default{
    title: 'Components/Spacer',
    component: Spacer,
    args:{
        isDark: false
    }
} as Meta<SpacerProps>

export const Default: StoryObj = {}

export const Medium: StoryObj = {
    args:{
        isDark:true
    }
}

