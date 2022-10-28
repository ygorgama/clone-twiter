import {Meta, StoryObj} from '@storybook/react'
import {SideBar, SideBarProps} from './SideBar';

export default {
    title: 'Components/SideBar',
    component: SideBar,
    args:{
        isDark:false
    } 
} as Meta<SideBarProps>

export const Default: StoryObj = {}; 

export const DarkMode: StoryObj = {
    args:{
        isDark:true
    } 
}; 