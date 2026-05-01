import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-[#0B1120] text-white">

    <section className="min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-40 text-center">

  <div className="max-w-4xl mx-auto">

    <p className="text-[#F59E0B] text-xl tracking-widest uppercase ">
      Full Stack Developer
    </p>

 
<h1 className="text-7xl md:text-9xl lg:text-[9rem] font-black mb-4 leading-none tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
  Laiba Fatima
</h1>
    <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
      I build scalable, secure & user-focused web applications
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
      MERN Stack & PHP developer with hands-on experience building
      admin dashboards, management systems, and full-stack applications.
      Focused on clean code, performance, and real-world solutions.
    </p>

    <div className="flex justify-center flex-wrap gap-4">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <button className="bg-[#F59E0B] px-5 py-3 rounded-lg hover:bg-yellow-500 transition">
          LinkedIn
        </button>
      </a>

      <a href="mailto:laibafatima1119@gmail.com">
        <button className="border border-[#F59E0B] px-5 py-3 rounded-lg hover:bg-[#F59E0B] hover:text-white transition">
          Email Me
        </button>
      </a>

      <a href="/cv.pdf" download>
        <button className="border border-gray-500 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
          Download Resume
        </button>
      </a>
    </div>

  </div>

</section>
     {/* ================= ABOUT ================= */}
<section className="py-16 px-6 md:px-12 bg-[#0B1120] text-center relative">

  {/* subtle glow background effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/5 to-transparent blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto">

    <p className="text-[#F59E0B] text-xl tracking-[0.3em] uppercase mb-3">
      About Me
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Passionate Developer Who Builds
      <span className="text-[#F59E0B]"> Real-World Solutions</span>
    </h2>

    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
      I'm a Full Stack Developer specialized in the MERN stack and PHP.
      I enjoy building scalable, clean, and performance-focused web applications
      that solve real business problems.
    </p>

    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
      I’ve worked on admin dashboards, inventory systems, and ticket management platforms
      with secure authentication, role-based access, and optimized database structures
      using MongoDB and MySQL. My focus is always on writing clean code and creating
      smooth user experiences.
    </p>

    {/* highlight stats */}
    <div className="flex flex-wrap justify-center gap-6 mt-10">

      <div className="bg-[#111827] border border-gray-800 px-6 py-4 rounded-xl">
        <h3 className="text-2xl font-bold text-white">2+</h3>
        <p className="text-gray-400 text-sm">Years Experience</p>
      </div>

      <div className="bg-[#111827] border border-gray-800 px-6 py-4 rounded-xl">
        <h3 className="text-2xl font-bold text-white">5+</h3>
        <p className="text-gray-400 text-sm">Projects Built</p>
      </div>

      <div className="bg-[#111827] border border-gray-800 px-6 py-4 rounded-xl">
        <h3 className="text-2xl font-bold text-white">MERN</h3>
        <p className="text-gray-400 text-sm">Core Stack</p>
      </div>

    </div>

    <Link to="/about">
      <button className="mt-10 text-[#F59E0B] hover:underline text-sm tracking-wide">
        Explore Full Journey →
      </button>
    </Link>

  </div>
</section>


      {/* ================= SKILLS ================= */}
      <section className="py-16 px-6 md:px-12">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">

          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Redux",
            "PHP",
            "MySQL",
            "Tailwind",
            "Express",
            "JavaScript"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-gray-800 rounded-full border border-gray-700 hover:border-[#F59E0B] transition"
            >
              {skill}
            </span>
          ))}

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="py-20 px-6 md:px-12">

        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 hover:border-[#F59E0B] transition">
            <h3 className="text-xl font-semibold mb-3">
              IMS Dashboard
            </h3>
            <p className="text-gray-400 mb-5 text-sm">
              Inventory system with role-based authentication,
              CRUD operations, and admin dashboard.
            </p>
            <a href="https://ims.mhbstream.com/" target="_blank" rel="noreferrer">
              <span className="text-[#F59E0B] text-sm">Live Demo →</span>
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 hover:border-[#F59E0B] transition">
            <h3 className="text-xl font-semibold mb-3">
              TMS System
            </h3>
            <p className="text-gray-400 mb-5 text-sm">
              Ticket management system with real-time tracking
              and centralized admin panel.
            </p>
            <a href="https://tms.wellnetworks.pk/login" target="_blank" rel="noreferrer">
              <span className="text-[#F59E0B] text-sm">Live Demo →</span>
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 hover:border-[#F59E0B] transition">
            <h3 className="text-xl font-semibold mb-3">
              E-commerce App
            </h3>
            <p className="text-gray-400 mb-5 text-sm">
              MERN e-commerce app with authentication,
              cart system, and order management.
            </p>
            <span className="text-[#F59E0B] text-sm">
              View Code →
            </span>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link to="/projects">
            <button className="text-[#F59E0B] hover:underline">
              View All Projects →
            </button>
          </Link>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 px-6 md:px-12 bg-[#020617] text-center">

        <h2 className="text-3xl font-bold mb-4">
          Open to Opportunities
        </h2>

        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          I'm actively looking for internships and junior developer roles
          where I can contribute, learn, and grow as a developer.
        </p>

        <Link to="/contact">
          <button className="bg-[#F59E0B] px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Get In Touch
          </button>
        </Link>
      </section>

    </div>
  )
}

export default Hero       