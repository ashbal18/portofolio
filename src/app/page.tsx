"use client"

import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee"; // Import react-fast-marquee



export default function Home() {
  return (
    <div className='flex flex-col md:flex-row bg-cover bg-center'>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src="/fotosaya211.png" alt='foto' width={500} height={500} className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 justify-center items-center p-4 md:p-20" style={{ backgroundColor:'beige' }}>
        <header className='flex justify-center items-center mb-10'>
          <TypeAnimation
            sequence={[
              'Haloo I am Web Development ',
              500,
              'Welcome To My Portofolio',
              500,
              'have a nice day',
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em', display: 'inline-block', fontWeight:'bold', color:'gold'}}
            repeat={Infinity}
          />
        </header>

        <h1 className='mb-10 text-2xl md:text-[30px] font-bold text-black'>I'm a Full Stack Web Developer, WordPress Development & UI/UX Design</h1>
        <p className='font-bold text-black text-sm md:text-base'>Saya seorang programmer yang berdedikasi dan berorientasi pada hasil dengan pengalaman dalam pengembangan perangkat lunak. Saya memiliki keahlian dalam berbagai bahasa pemrograman dan teknologi, dan saya selalu berusaha untuk memberikan solusi inovatif dan efisien.</p>

        <Marquee> {
            <div className="flex justify-center items-center gap-4 md:gap-20 m-4 md:m-10 mt-10"> 
            <a href="https://www.google.com">
              <img src="./globe.svg" width={30} alt="Globe" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="./ig.jpg" width={30} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src="./linked.png" width={30} alt="LinkedIn" />
            </a>
            <a href="https://www.google.com">
              <img src="./globe.svg" width={30} alt="Globe" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="./ig.jpg" width={30} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src="./linked.png" width={30} alt="LinkedIn" />
            </a>
            
          </div>
          }
        </Marquee>

      
      </div>
    </div>
  );
}