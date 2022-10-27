import { MenuItem, MenuItemConteinerProps } from "./MeunItem";
import {Meta, StoryObj} from '@storybook/react'
import { RiHome7Line } from "react-icons/ri";
import { RiHome7Fill } from "react-icons/ri";
import '../styles/global.css'
import React from "react";

export default{
    title: 'Components/MenuItem',
    component: MenuItem.root,
    args:{
        children:(
            <>
                <MenuItem.icon src="../../src/assets/home-default.svg" alt="Home"/>
                <MenuItem.link children="Home" href="/"/>
            </>
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

