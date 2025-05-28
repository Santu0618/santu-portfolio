
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Adventure Works Cycle' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src="https://user-images.githubusercontent.com/114532273/226063947-384786c8-7def-41b4-be16-952a0b7d02c6.png" alt="" />
            </a>}
            {title=='Health Care Analysis' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src="https://blog.decos.com/hubfs/Hero%20blog%20data%20analytics.png#keepProtocol" alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Adventure Works Cycle',
        description:'Adventure Works is a fictional company often used in SQL and data analysis exercises. It operates in the cycling industry, offering a variety of products related to bicycles, accessories, and parts. The Adventure Works Cycle dataset is commonly used to practice data analysis, including SQL queries, reporting, and business intelligence tasks.',
        image: {vpn},
        git:'https://github.com/Santu0618/Data-Analyst/blob/main/Adventure%20Works%20Cycle%20ppt-%20Group%204.pptx',
        technologies:['MS Excel', 'Tableau', 'Power BI', 'SQL', 'PPT']
    },
    {
        title:'Health Care Analysis',
        description:'Healthcare analysis involves using data to evaluate, improve, and optimize various aspects of healthcare systems, patient care, operations, and outcomes. The goal is to provide actionable insights that can enhance decision-making, improve patient care, and streamline operations. Healthcare data analysis often covers a variety of data sources, such as patient records, clinical data, operational data, and financial data.',
        image: {copeople},
        git:"https://github.com/Santu0618/Data-Analyst/blob/main/Health%20Care%20Analysis(Power%20BI)-Group-1.pbix",
        technologies:[ 'MS Excel', 'Tableau', 'Power BI', 'SQL', 'PPT']
    }
]

export default Projects