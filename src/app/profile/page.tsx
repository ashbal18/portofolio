"use client"
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Profile(){
    return (
        <div className='flex flex-col md:flex-row bg-cover bg-center'>
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0">
                <Image src="/adobe.png" alt='foto' width={500} height={500} className="max-w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 justify-center items-center p-4 md:p-20">
                <header className='flex justify-center items-center mb-4 md:mb-10'>
                    <TypeAnimation
                        sequence={[
                            'Hello World',
                            1000,
                            'Welcome To My Profile',
                            1000,
                            'have a nice day',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block', fontWeight:'bold'}}
                        repeat={Infinity}
                    />
                </header>
                <h1 className='w-full mb-4 md:mb-10 text-xl md:text-[20px] font-bold text-orange-500 font-serif'>Muhammad Ashbal Al Saddam</h1>
                <h1 className='w-full mb-2 text-2xl md:text-[30px] font-bold text-black'>Profil Singkat</h1>
                <p className='w-full mb-6 md:mb-10 font-bold text-black text-sm md:text-base'>
                    Saya seorang lulusan S1 Teknik Informatika Universitas Putra Indonesia YPTK Padang. Sebagai seorang yg terampil dalam mengolah data, saya memiliki latar belakang dalam teknik informatika dan pengalaman dalam mengelola, menganalisa, dan mengoptimalkan data. Saya memiliki semangat dan dedikasi yang tinggi dalam bekerja, jujur, cepat tanggap, memiliki kemampuan komunikasi yang baik, memiliki kemampuan dalam.
                </p>
                <h1 className='w-full text-2xl md:text-[30px] font-bold text-black'>Pendidikan</h1>
                <p className='w-full font-bold text-black text-sm md:text-base'>Universitas Putra Indonesia YPTK Padang</p>

                <div className="flex justify-center items-center gap-4 md:gap-20 m-4 md:m-10">
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
            </div>
        </div>
    );
}