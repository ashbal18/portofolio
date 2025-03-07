"use client"
export default function Skill() {
    return (
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-6 p-6 bg-gray-100">
        <SkillCard title="Front-End" content="HTML, CSS, JavaScript, React, Angular, dll." />
        <SkillCard title="Back-End" content="Node.js, Express, Django, Ruby on Rails" />
        <SkillCard title="DevOps & Tools" content="Docker, Git, Jenkins, AWS, CI/CD, VS Code" />
      </div>
    );
  }
  
  function SkillCard({ title, content }: { title: string; content: string }) {
    return (
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  }