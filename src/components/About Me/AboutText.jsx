import React from 'react'
import { Link } from 'react-router'
import Magnet from '../effects/Magnet'
import ScrollReveal from '../effects/ScrollReveal'

const AboutText = () => {
  return (
    <>
    <div id='AboutMeText' className='overflow-hidden mt-[112px]'>
        <div className="container">
            <div id="AboutTextRow">
                <div id='Text' className='lg:w-[600px] flex flex-col gap-7'>
                    <h2 data-aos="fade-right" className='lg:text-6xl text-5xl text-Primary font-soldier'>Hello!</h2>
                        <ScrollReveal containerClassName='lg:text-[26px] text-second font-poppins font-normal leading-[150%]'>
                            I'm <span className='text-coffee font-medium'>Nishan Khanal,</span> a passionate <span className='text-coffee font-medium'>CA student</span> from Bijayakharka, Khotang, Nepal — currently pursuing my Chartered Accountancy at <span className='text-coffee font-medium'>Gurukul CA</span>. I believe in growing every day, staying curious, and building a life rooted in integrity and purpose.
                        </ScrollReveal>
                        <ScrollReveal containerClassName='lg:text-[26px] text-second font-poppins font-normal leading-[150%]'>
                    I completed my <span className='text-coffee font-medium'>+2 Science</span> from Texas International College and my SEE from Shree Champawati Madhyamik Vidyalaya, Khotang. With every step of my journey, I'm learning to think critically, communicate clearly, and lead with <span className='text-coffee font-medium'>confidence.</span>
                        </ScrollReveal>
                    {/* -----------Get in Touch----------- */}
                    <Magnet padding={5} magnetStrength={30}>
                        <Link to={'/contact'} className='hover-brown transition-trigger relative w-[200px] h-[200px] rounded-full border-1 border-coffee mt-10 flex items-center justify-center rotate-[-25deg] cursor-pointer hover:rotate-0 hover:bg-coffee duration-[.3s] group'>
                            <span className='absolute top-[-15px] left-0 w-full h-[200px] rotate-[-85deg] group-hover:rotate-0 group-hover:top-0 duration-[.3s] rounded-full border-1 border-coffee'></span>
                            <p className='text-4xl text-second text-center font-soldier group-hover:text-brand duration-[.3s]'>Get in <br /> Touch</p>
                        </Link>
                    </Magnet>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutText