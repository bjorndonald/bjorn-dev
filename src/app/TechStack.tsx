import BootstrapIcon from '@/icons/Bootstrap.icon'
import CSS3Icon from '@/icons/CSS3.icon'
import GitIcon from '@/icons/Git.icon'
import GithubIcon from '@/icons/Github.icon'
import GreensockIcon from '@/icons/Greensock.icon'
import HTML5Icon from '@/icons/HTML5.icon'
import JavascriptIcon from '@/icons/Javascript.icon'
import MongodbIcon from '@/icons/Mongodb.icon'
import PHPIcon from '@/icons/PHP.icon'
import ReactIcon from '@/icons/React.icon'
import ReduxIcon from '@/icons/Redux.icon'
import SassIcon from '@/icons/Sass.icon'
import TailwindIcon from '@/icons/Tailwind.icon'
import TypescriptIcon from '@/icons/Typescript.icon'
import VsCodeIcon from '@/icons/VsCode.icon'
import React from 'react'

const TechStack = () => {
    return (
        <div className='vstack gap-24 items-center'>
            <div className="vstack items-center gap-5 ">
                <h3 className='text-[48px] font-bold'>My Tech Stack</h3>
                <p className='text-[32px] md:text-left text-center'>Technologies I’ve been working with recently</p>
            </div>

            <div className="hstack justify-center gap-y-10 flex-wrap gap-x-7">
                <div className='flex-[0.149] center'>
                    <HTML5Icon />
                </div>
                <div className='flex-[0.149] center'>
                    <CSS3Icon />
                </div>
                <div className='flex-[0.149] center'>
                    <JavascriptIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <ReactIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <ReduxIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <BootstrapIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <TailwindIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <PHPIcon />
                </div>

                <div className='flex-[0.149] center'>
                    <SassIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <GitIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <GreensockIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <TypescriptIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <MongodbIcon />
                </div>
                <div className='flex-[0.149] center'>
                    <GithubIcon size={131} />
                </div>
            </div>
        </div>
    )
}

export default TechStack