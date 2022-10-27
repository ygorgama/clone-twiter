import { SeachContainerProps, SearchContainer } from "./SearchBar";
import {Meta, StoryObj} from '@storybook/react'

import '../styles/global.css'

export default{
    title: 'Components/Search',
    component: SearchContainer,
    args:{
        isDark: false
    }
} as Meta<SeachContainerProps>


export const Default: StoryObj = {}

export const DarkMode: StoryObj = {
    args:{
        isDark: true
    }
}
