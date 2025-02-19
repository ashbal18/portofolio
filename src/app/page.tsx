"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee"; // Import react-fast-marquee

const MyComponent = () => (
  <span className="mx-4"> {/* Add spacing between marquee items */}
    {/* Content for each marquee item */}
    <p>Some scrolling text here.</p>
  </span>
);

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row bg-cover bg-center'>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src="/fotosaya211.png" alt='foto' width={500} height={500} className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 justify-center items-center p-4 md:p-20" style={{ backgroundColor:'beige' }}>
        <header className='flex justify-center items-center mb-10'>
          <TypeAnimation
            sequence={[
              'Haloo Iam Web Development ',
              1000,
              'Welcome To My Portofolio',
              1000,
              'have a nice day',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em', display: 'inline-block', fontWeight:'bold', color:'gold'}}
            repeat={Infinity}
          />
        </header>

        <h1 className='mb-10 text-2xl md:text-[30px] font-bold text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nam?</h1>
        <p className='font-bold text-black text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit non quidem maiores dolorum corrupti nulla laborum ea veritatis veniam atque ipsa unde dolores assumenda optio tempora, sit molestias ducimus.</p>

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