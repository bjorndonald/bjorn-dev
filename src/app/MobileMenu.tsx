'use client';
import GithubIcon from '@/icons/Github.icon'
import LinkedinIcon from '@/icons/Linkedin.icon'
import TwitterIcon from '@/icons/Twitter.icon'
import React, { useState } from 'react'
import NavLink from './NavLink';

const MobileMenu = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(!show)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center lg:hidden justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50" aria-controls="navbar-hamburger" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`${show ? "" : "hidden"} z-50 w-full`} id="navbar-hamburger">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <NavLink href='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink href='/tech'>Tech stack</NavLink>
                    </li>
                    <li>
                        <NavLink href='/projects'>Projects</NavLink>
                    </li>

                    <li className='hstack gap-3  py-2 px-3'>
                        <a href=''>
                            <GithubIcon />
                        </a>
                        <a href=''>
                            <TwitterIcon />
                        </a>
                        <a href=''>
                            <LinkedinIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu