import AppIcon from '@/icons/App.icon'
import GithubIcon from '@/icons/Github.icon'
import LinkedinIcon from '@/icons/Linkedin.icon'
import TwitterIcon from '@/icons/Twitter.icon'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='vstack mb-20 gap-16 w-full'>
            <div className="md:hstack vstack items-center w-full justify-between">
                <Link href={"/"}><AppIcon /></Link>

                <div className="md:hstack md:w-fit vstack w-full items-center gap-6 md:gap-14">
                    <span>+234 818 818 3562</span>
                    <span>bjorndonaldb@gmail.com</span>
                    <div className="hstack gap-2">
                        <a className='cursor-pointer' href='https://github.com/bjorndonald'>
                            <GithubIcon />
                        </a>
                        <a className='cursor-pointer' href='https://twitter.com/6lackbjorn'>
                            <TwitterIcon />
                        </a>
                        <a className='cursor-pointer' href='https://www.linkedin.com/in/bjorn-donald-bassey/'>
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </div>
            <hr className='h-0.5 bg-[#141414] w-full' />

            <div className="md:hstack vstack items-center w-full justify-between">
                <ul className="font-medium flex  p-4 md:p-0 flex-row justify-center flex-wrap space-x-3 md:space-x-8 rtl:space-x-reverse mt-0 border-0 bg-white ">
                    <li>
                        <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                    </li>
                    <li>
                        <Link href="/tech" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tech stack</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                    </li>


                </ul>

                <p>Designed by <a className='bg-gradient-to-r from-[#13B0F5] bg-clip-text text-transparent to-[#E70FAA]' href='https://www.figma.com/@pavanmg007'>Pavan MG</a> and built by me</p>
            </div>
        </footer>
    )
}

export default Footer