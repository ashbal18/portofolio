import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";

export default function Skill() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        
        {/** Marquee with React Icons */}
        <Marquee className="mb-6 text-4xl text-gray-700" speed={50}>
            <FaHtml5 className="mx-4 text-orange-500" />
            <FaCss3Alt className="mx-4 text-blue-500" />
            <FaJs className="mx-4 text-yellow-500" />
            <FaReact className="mx-4 text-blue-400" />
            <FaAngular className="mx-4 text-red-600" />
            <FaNodeJs className="mx-4 text-green-500" />
            <FaDocker className="mx-4 text-blue-600" />
            <FaGitAlt className="mx-4 text-orange-600" />
        </Marquee>
        
        <div className="flex flex-wrap justify-center gap-6">

          {/** Front-End Card */}
          <div className="w-full max-w-2xl flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-3xl">
              <h1 className="text-2xl font-bold text-gray-800">Front-End</h1>
              <p className="text-gray-600 text-lg text-center">HTML, CSS, JavaScript, React, Angular, dll.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Learn More</button>
          </div>

          {/** Back-End Card */}
          <div className="w-full max-w-2xl flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-3xl">
              <h1 className="text-2xl font-bold text-gray-800">Back-End</h1>
              <p className="text-gray-600 text-lg text-center">Node.js, Express, Django, atau Ruby on Rails.</p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">Learn More</button>
          </div>

          {/** DevOps & Tools Card */}
          <div className="w-full max-w-2xl flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-3xl">
              <h1 className="text-2xl font-bold text-gray-800">DevOps & Tools</h1>
              <p className="text-gray-600 text-lg text-center">Docker, Git, Jenkins, AWS, CI/CD, VS Code.</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">Learn More</button>
          </div>

        </div>
      </div>
    );
}
