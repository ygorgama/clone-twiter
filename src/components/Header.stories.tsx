import { HeaderContainer, HeaderContainerProps } from "./Header";
import {Meta, StoryObj} from '@storybook/react'
import '../styles/global.css'


export default{
    title: 'Components/Header',
    component:HeaderContainer,
    args:{
        isDark: false,
        isHome: true,
    }
} as Meta<HeaderContainerProps> 

export const Default: StoryObj = {
    
}

export const Profile: StoryObj = {
    args:{
        isDark: false,
        isHome: false,
            
    }
}

export const HomeDark: StoryObj = {
    args:{
        isDark: true,
        isHome: true
            
    }
}


export const ProfileDark: StoryObj = {
    args:{
        isDark: true,
        isHome: true
            
    }
}

