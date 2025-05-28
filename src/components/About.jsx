import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';


const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Kavala Sai Shyam Santhosh, a 2021 graduate🎓 working as a Systems Engineer, recently promoted in October 2024. I have a strong background in SQL, Power BI, and Excel, with certifications from organizations such as Accenture, BCGx, and Infosys. Focused on transitioning into a Data Analyst role and am keen to explore opportunities for growth in this field.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/kavala-sai-shyam-santhosh-7674872b0/' target='_blank'>Systems Engineer</a> I specialize in both Analysis and Dashboards🚀.
              <br />
              ✍️ Beyond Analysis, I love sharing my insights and experiences through engaging blogs on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://github.com/Santu0618/Data-Analyst.git" target='_blank'>Focused</a>, where I delve into the intricacies of insights and technology trends.
              On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1dZZsFgkFBmptYopVkXN-iEwgT4U89MyQ/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About;