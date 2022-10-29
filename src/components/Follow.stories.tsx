import {Meta, StoryObj} from '@storybook/react'
import {NewsItems, ContainerProps} from './News'
import { Follow } from './Follow'


import '../styles/global.css'
import React from 'react'

export default{
    title: 'Components/Follow',
    component: NewsItems.root,
    args:{
        nome: 'Who to follow',
        children:(
            <React.Fragment>
                <Follow name='Bessie Cooper' src='../../src/assets/bessie.svg' userName='@alessandroveronezi'/>
                <Follow name='Jenny Wilson' src='../../src/assets/jessie.svg' userName='@gabrielcantarin'/>
            </React.Fragment>
        )
    }
} as Meta<ContainerProps>

export const Default: StoryObj = {}

export const DarkMode: StoryObj = {
    args:{
        isDark:true
    }
}
