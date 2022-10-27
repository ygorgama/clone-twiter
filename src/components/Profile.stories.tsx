import { ProfileItems, ProfileContainerProps } from "./Profile";
import {Meta, StoryObj} from '@storybook/react'
import '../styles/global.css'


export default{
    title: 'Components/Profile',
    component: ProfileItems.root,
    args:{
        isDark: false,
        children:(
            <>
                <ProfileItems.content src="../../src/assets/Profile Picture.svg" name="Davide Biscuso" userName="@biscuttu"/>
                <ProfileItems.icon isDark={false}/>
            </>
        )

    }
} as Meta<ProfileContainerProps>

export const Default: StoryObj = {
    
}

export const DarkMode: StoryObj = {
    args:{
        isDark: true,
        children:(
            <>
                <ProfileItems.content src="../../src/assets/Profile Picture.svg" name="Davide Biscuso" userName="@biscuttu"/>
                <ProfileItems.icon isDark={true}/>
            </>
        )
            
    }
}

