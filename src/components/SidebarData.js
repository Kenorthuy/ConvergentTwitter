import React from 'react';
import * as FAIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar-text'
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <RiIcons.RiBarChart2Fill />,
        cName: 'sidebar-text'
    },
    // {
    //     title: 'Log Out',
    //     path: '/log-out',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'sidebar-text'
    // },
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'sidebar-text'
    // },
    // {
    //     title: 'About Us',
    //     path: '/about-us',
    //     icon: <AiIcons.AiFillHome />,
    //     cName: 'sidebar-text'
    // },
]
