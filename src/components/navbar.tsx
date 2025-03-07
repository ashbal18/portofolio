"use client";
import { useState } from "react";
import Contact from "@/app/contact/page";
import Home from "@/app/page";
import Profile from "@/app/about/page";
import Portofolio from "@/app/portofolio/page";
import { Menu, X } from "lucide-react";
import Experience from "@/app/experience/page";
import Skill from "@/app/skill/page";
import Testimoni from "@/app/testimoni/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between h-[60px] px-5 md:px-10 lg:px-20 z-50">
        <h1 className="font-bold text-xl flex items-center">
          <span className="text-black">Muhammad Ashbal Al Saddam</span>
          <img
            src="/profile.jpg"
            alt="nama"
            className="h-[40px] w-[40px] rounded-full ml-2"
          />
        </h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-[60px] left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-4 p-5 md:flex md:flex-row md:static md:shadow-none md:space-y-0 md:space-x-6 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#skill">Keterampilan</NavLink>
          <NavLink href="#portofolio">Portofolio</NavLink>
          <NavLink href="#experience">Pengalaman</NavLink>
          <NavLink href="#testimoni">Testimoni</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>

      {/* Konten Halaman */}
      <div className=" p-4 space-y-20 bg-gray-100">
        <Section id="home" title="">
          <Home />
        </Section>
        <Section id="about" title="">
          <Profile />
        </Section>
        <Section id="skill" title="">
          <Skill  />
        </Section>
        <Section id="portofolio" title="">
          <Portofolio />
        </Section>
        <Section id="experience" title="">
          <Experience />
        </Section>
        <Section id="testimoni" title="">
          <Testimoni />
        </Section>
        <Section id="contact" title="">
          <Contact />
        </Section>
      </div>
    </>
  );
}

// Komponen untuk Link dengan Smooth Scroll
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick} className="hover:text-teal-700 cursor-pointer text-lg font-medium">
      {children}
    </a>
  );
}

// Komponen untuk Section Halaman
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center p-4">
      <h2 className="text-2xl font-bold text-center md:text-left">{title}</h2>
      <div className="mt-4 text-gray-700">{children}</div>
    </section>
  );
}