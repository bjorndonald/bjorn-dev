'use client';
import useThemeDetector from '@/hooks/useThemeDetector';
import React, { useEffect, useState } from 'react'
import MoonIcon from './Moon.icon';
import SunIcon from './Sun.icon';

const ThemeToggler = () => {
    const { isDarkTheme, toggle } = useThemeDetector()

    return (
        <div className='hstack gap-2.5 md:gap-[15px]'>
            <SunIcon active={!isDarkTheme} />
            <div onClick={toggle} className="switcher cursor-pointer rounded-full dark:bg-dark shadow-sm w-[34px] md:h-[21px] relative md:w-[52px] h-[14px]">
                <div className="absolute top-1/2 left-0 rounded-full -translate-y-1/2 bg-lavendar w-full md:h-[13px] h-[8.5px]"></div>
                <div className={`bubble relative z-20 duration-[1.5s] transition-transform bg-primary dark:bg-white md:w-[21px] md:h-[21px] h-3.5 w-3.5 rounded-full ${isDarkTheme ? "md:translate-x-[31px] translate-x-[20px]" : ""}`}>
                </div>
            </div>
            <MoonIcon active={isDarkTheme} />
        </div>
    )
}

export default ThemeToggler