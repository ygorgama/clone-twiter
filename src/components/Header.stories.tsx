import { HeaderItems, HeaderContainerProps } from "./Header";
import {Meta, StoryObj} from '@storybook/react'
import '../styles/global.css'


export default{
    title: 'Components/Header',
    component: HeaderItems.root,
    args:{
        isDark: false,
        children:(
            <>
                <HeaderItems.home/>
            </>
        )
    }
} as Meta<HeaderContainerProps>

export const Default: StoryObj = {
    
}

export const Profile: StoryObj = {
    args:{
        isDark: false,
        children:(
            <>
                <HeaderItems.profile twetts="9 tweets"/>
            </>
        )
            
    }
}

export const HomeDark: StoryObj = {
    args:{
        isDark: true,
        children:(
            <>
                <HeaderItems.home/>
            </>
        )
            
    }
}


export const ProfileDark: StoryObj = {
    args:{
        isDark: true,
        children:(
            <>
                <HeaderItems.profile twetts="9 tweets"/>
            </>
        )
            
    }
}

