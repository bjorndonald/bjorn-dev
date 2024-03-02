import GithubIcon from '@/icons/Github.icon'
import LinkedinIcon from '@/icons/Linkedin.icon'
import TwitterIcon from '@/icons/Twitter.icon'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import AppIcon from '@/icons/App.icon'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    return (
        <nav className="bg-white absolute w-full top-0 left-0 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <AppIcon />
                </a>

                <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink href="/" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="/tech" >Tech stack</NavLink>
                        </li>
                        <li>
                            <NavLink href="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink href="/contact">Contact</NavLink>
                        </li>
                        <li className='hstack gap-3'>
                            <a className='cursor-pointer' href='https://github.com/bjorndonald'>
                                <GithubIcon />
                            </a>
                            <a className='cursor-pointer' href='https://twitter.com/6lackbjorn'>
                                <TwitterIcon />
                            </a>
                            <a className='cursor-pointer' href='https://www.linkedin.com/in/bjorn-donald-bassey/'>
                                <LinkedinIcon />
                            </a>
                        </li>
                    </ul>
                </div>

                <MobileMenu />
            </div>
        </nav>

    )
}

export default Navbar