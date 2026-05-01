import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "IMS Dashboard",
      description:
        "Inventory Management System with CRUD operations, authentication, and admin panel.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://ims.mhbstream.com/",
      type: "Live Demo",
    },
    {
      title: "TMS System",
      description:
        "Ticket Management System with real-time tracking and role-based admin system.",
      tech: ["React", "PHP", "MySQL"],
      link: "https://tms.wellnetworks.pk/login",
      type: "Live Demo",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack e-commerce application with cart, authentication, and order management.",
      tech: ["MERN Stack"],
      link: "#",
      type: "Code",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      link: "#",
      type: "Code",
    },
  ]

  return (
    <div className="bg-[#0F172A] text-white pt-24 px-6 md:px-12 min-h-screen">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-gray-400 mt-3">
          Some of the work I’ve built using MERN stack and PHP
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#F59E0B]">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-[#F59E0B] hover:underline">
                {project.type} →
              </button>
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects