"use client";

import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaBook,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full"
      style={{
        backgroundImage: "url(/bgwhite.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Profile Image */}
      <img
        src="/fotohome.jpg"
        alt="foto"
        width={200}
        height={100}
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-full shadow-lg"
      />

      {/* Header */}
      <header className="text-center my-6">
        <TypeAnimation
          sequence={["Hello🤚 Am Muhammad Ashbal Al Saddam", 20]}
          wrapper="span"
          speed={50}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
          repeat={Infinity}
        />
      </header>

      {/* Introduction */}
      <div className="text-center max-w-2xl px-4">
        <p className="text-lg sm:text-xl font-bold">
          I am a Full Stack Web Developer, WordPress Developer & UI/UX Designer
        </p>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          I am a dedicated and result-oriented programmer with experience in
          software development. I have expertise in various programming
          languages and technologies, and I always strive to provide innovative
          and efficient solutions.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          PROJECTS
        </button>
      </div>

      {/* Sidebar Social Icons */}
      <div className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 space-y-3">
        {[
          {
            Icon: FaLinkedin,
            link: "https://www.linkedin.com/in/muhammad-ashbal-al-saddam-a21a2a303/",
          },
          { Icon: FaTwitter, link: "https://twitter.com/yourprofile" },
          { Icon: FaYoutube, link: "https://www.youtube.com/c/yourchannel" },
          { Icon: FaGithub, link: "https://github.com/ashbal18" },
          { Icon: FaBook, link: "https://yourwebsite.com" },
        ].map(({ Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-xl sm:text-2xl transition duration-300"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
        <span className="text-gray-600 text-sm sm:text-base">
          Chat with me 👋
        </span>
        <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-full">
          💬
        </div>
      </div>
    </div>
  );
}
