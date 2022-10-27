import { MenuItem, MenuItemConteinerProps } from "./MeunItem";
import {Meta, StoryObj} from '@storybook/react'

import '../styles/global.css'
import React from "react";

export default{
    title: 'Components/MenuItem',
    component: MenuItem.root,
    args:{
        children:(
            <React.Fragment>
                <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home"/>
                <MenuItem.link children="Home" href="/"/>
            </React.Fragment>
        )

    }
} as Meta<MenuItemConteinerProps>

export const Default: StoryObj = {
    
}

export const DarkMode: StoryObj = {
    args:{
        isDark: true,
        children:(
            <>
                <MenuItem.icon src="../../src/assets/home-dark-theme.svg" alt="Home"/>
                <MenuItem.link children="Home" href="/"/>
            </>
        )
    }
}

export const Selected: StoryObj = {
    args:{
        isSelected: true,
        children: (
            <>
            <MenuItem.icon src="../../src/assets/home-select.svg" alt="Home"/>
            <MenuItem.link children="Home" href="/"/>
        </>
        )
    }
}

