import { ProfileItems, ProfileContainerProps } from "./Profile";
import {Meta, StoryObj} from '@storybook/react'
import '../styles/global.css'


export default{
    title: 'Components/Profile',
    component: ProfileItems.root,
    args:{
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

// export const DarkMode: StoryObj = {
//     args:{
//         isDark: true,
//         children:(
//             <>
//                 <MenuItem.icon src="../../src/assets/home-dark-theme.svg" alt="Home"/>
//                 <MenuItem.link children="Home" href="/"/>
//             </>
//         )
//     }
// }

// export const Selected: StoryObj = {
//     args:{
//         isSelected: true,
//         children: (
//             <>
//             <MenuItem.icon src="../../src/assets/home-select.svg" alt="Home"/>
//             <MenuItem.link children="Home" href="/"/>
//         </>
//         )
//     }
// }

