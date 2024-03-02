'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
interface Props {
    children: string
    href: string
}

const NavLink: FC<Props> = ({ href, children }) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`block py-2 px-3 ${pathname === href ? "lg:text-blue-700 lg:bg-transparent bg-blue-600 text-white" : "text-gray-900 dark:text-white"}  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent`}>{children}</Link>
    )
}

export default NavLink