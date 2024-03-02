import Image from 'next/image'
import React, { Fragment } from 'react'
import project from '@/images/project.png'
import LinkIcon from '@/icons/Link.icon'
import sendfunds from '@/images/sendfunds.png'
import traderstools from '@/images/traderstools.png'
import ibsconsulting from '@/images/ibsconsulting.png'
import GithubIcon from '@/icons/Github.icon'
import PlayStoreIcon from '@/icons/PlayStore.icon'
import AppStoreIcon from '@/icons/AppStore.icon'

const projects = [
    {
        image: sendfunds,
        title: "Sendfunds application",
        description: "We built a payments app that rewards you when you send money to family, friends and businesses ",
        code: "",
        isApp: true,
        app_store: "https://apps.apple.com/ng/app/sendfunds/id1608000336",
        play_store: "https://play.google.com/store/apps/dev?id=4821755202717018809&hl=en_US&gl=US",
        stack: ["React Native", "PHP"],
        preview_link: ""
    },
    {
        image: traderstools,
        title: "Traderstools",
        description: "Traderstools' desktop app redefines collaboration, synchronizing accounts and workflows for an elevated trading venture. I was the frontend developer on this project. I also worked on the application itself using the Electron JS framework",
        code: "",
        isApp: false,
        app_store: "",
        play_store: "",
        stack: ["Next js", "Tailwind", "Typescript"],
        preview_link: "https://traderstools.com/"
    },
    {
        image: ibsconsulting,
        title: "IBS Consulting",
        description: "Website for a career and eductaion consultation firm. I built their web platform which involved integram with the Moneris payment service and a Bigin CRM. The mailchimp email service was also used. ",
        code: "",
        isApp: false,
        app_store: "",
        play_store: "",
        stack: ["Next js", "JQuery", "Tailwind", "Typescript"],
        preview_link: "https://www.consultwithibs.com/"
    }
]

const Projects = () => {
    return (
        <div className='vstack gap-24 py-36 items-center'>
            <div className="vstack items-center gap-5 ">
                <h3 className='text-[48px] font-bold'>Projects</h3>
                <p className='text-[32px] '>Things I’ve built so far</p>
            </div>
            <div className="md:hstack vstack px-4 items-start gap-y-10 gap-x-8">
                {projects.map((x, i) => (
                    <div key={i} className="flex-[0.33] overflow-hidden shadow-xl rounded-[20px]">
                        <div className='h-[260px] relative w-auto overflow-hidden'>
                            <Image src={x.image} className='object-fill object-center w-full h-auto ' alt='Project 1' />
                        </div>
                        <div className='py-3 px-4 vstack gap-3'>
                            <h5 className='text-[28px] font-medium'>{x.title}</h5>
                            <p className='text-lg font-light text-[#666666]'>{x.description}</p>
                            <small className='text-md font-extralight text-[#666666]'><b className='font-light text-base'>Tech stack</b>: {x.stack.map((el, ind) => (
                                <Fragment key={ind}>
                                    {el}
                                    {i < x.stack.length && ", "}
                                </Fragment>
                            ))}</small>
                            <div className="hstack w-full gap-4">
                                {x.isApp && <>
                                    <a href={x.play_store} className="hstack underline cursor-pointer gap-1">
                                        <PlayStoreIcon />
                                        <small className='text-base text-[#666]'>Play Store</small>
                                    </a>
                                    <a href={x.app_store} className="hstack underline text-base cursor-pointer gap-1">
                                        <AppStoreIcon />
                                        <small className='text-base text-[#666]'>App Store</small>
                                    </a>
                                </>}
                                {!x.isApp && <>
                                    <a href={x.preview_link} className="hstack underline text-base cursor-pointer gap-1">
                                        <LinkIcon />
                                        <small className='text-base text-[#666]'>Live Preview</small>
                                    </a>
                                    {x.code && <a href={x.code} className="hstack underline text-base cursor-pointer gap-1">
                                        <GithubIcon />
                                        <small className='text-base text-[#666]'>View Code</small>
                                    </a>}
                                </>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects