import CalendarIcon from '@/icons/Calendar.icon'
import LocationIcon from '@/icons/Location.icon'
import OfficeIcon from '@/icons/Office.icon'
import React from 'react'

const experience = [
    {
        title: "Frontend Engineer",
        company: "Traderstools",
        location: "Remote",
        deal: "Contract",
        period: "Aug 2023 - Jan 2024"
    },
    {
        title: "Full Stack Engineer",
        company: "IBS Consulting",
        location: "Remote",
        deal: "Contract",
        period: "Dec 2023 - Jan 2024"
    },
    {
        title: "Frontend Engineer",
        company: "Traderseco",
        location: "Remote",
        deal: "Full Time",
        period: "Aug 2021 - Mar 2023"
    },
    {
        title: "Computer Engineer",
        company: "UCTH",
        location: "Calabar, Nigeria",
        deal: "Full Time",
        period: "Aug 2020 - Aug 2021"
    },
    {
        title: "Software Intern",
        company: "Crackle NG",
        location: "Abuja, Nigeria",
        deal: "Internship",
        period: "Mar 2017 - Aug 2017"
    },
]

const education = [
    {
        title: "Bachelor in Computer Engineering",
        company: "Afe Babalola University, Nigeria",
        deal: "Full Time",
        period: "Sep 2013 - Oct 2018"
    },
]

const page = () => {
    return (
        <main className='min-h-screen pb-20 vstack w-full gap-11 pt-24'>
            <div className="vstack max-w-[700px]  gap-8">
                <h2 className='text-[42px] font-bold'>About Me</h2>
                <p className='text-lg text-[#666]'>
                    Senior Front-End Developer and Mobile Developer with 8 years of experience building stable, aesthetically pleasing websites, apps and full-stack development.
                </p>
            </div>
            <div className="vstack  w-[700px] gap-8">
                <h2 className='text-[42px] font-bold'>Work Experience</h2>
                <div className="vstack w-full gap-6">
                    {experience.map((x, i) => (
                        <div key={i} className="hstack w-full pb-6 border-b border-[#EBEAED] justify-between">
                            <div className="vstack gap-1">
                                <h5 className='text-xl font-medium text-dark'>{x.title}</h5>
                                <div className="hstack justify-between w-[315px]">
                                    <div className='text-light gap-1 tex-xs font-medium hstack'><OfficeIcon /> {x.company}</div>

                                    <div className='text-light gap-1 tex-xs font-medium hstack'><LocationIcon /> {x.location}</div>
                                </div>
                            </div>

                            <div className="vstack h-full justify-between gap-2 items-end">
                                <div className="rounded-[50px] w-[84px] h-6 center text-[9px] font-semibold bg-[#D7FFE0] text-[#018C0F]">
                                    {x.deal}
                                </div>
                                <div className='hstack gap-1 text-xs font-medium text-light'>
                                    <CalendarIcon /> {x.period}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="vstack  w-[700px] gap-8">
                <h2 className='text-[42px] font-bold'>Education</h2>
                <div className="vstack w-full gap-6">
                    {education.map((x, i) => (
                        <div key={i} className="hstack w-full pb-6 border-b border-[#EBEAED] justify-between">
                            <div className="vstack gap-1">
                                <h5 className='text-xl font-medium text-dark'>{x.title}</h5>
                                <div className="hstack justify-between w-[315px]">
                                    <div className='text-light gap-1 tex-xs font-medium hstack'><OfficeIcon /> {x.company}</div>


                                </div>
                            </div>

                            <div className="vstack h-full justify-between gap-2 items-end">
                                <div className="rounded-[50px] w-[84px] h-6 center text-[9px] font-semibold bg-[#D7FFE0] text-[#018C0F]">
                                    {x.deal}
                                </div>
                                <div className='hstack gap-1 text-xs font-medium text-light'>
                                    <CalendarIcon /> {x.period}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default page