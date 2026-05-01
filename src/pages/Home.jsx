import React from "react"
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#0B1120] text-white">
  <section
  id="home"
  className="min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-10 text-center pt-20 overflow-x-hidden"
>
  <div className="max-w-4xl mx-auto w-full px-2 sm:px-0">

    <p className="text-[#F59E0B] text-xs sm:text-sm md:text-base tracking-widest uppercase px-2">
      Full Stack Developer
    </p>

    <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent break-words px-2">
      Laiba Fatima
    </h1>

    <h2 className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 px-3 sm:px-2">
      Building scalable, secure & user-focused web applications
    </h2>

    <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-3 sm:px-2">
      Full Stack Developer with hands-on experience building admin dashboards,
      management systems, and full-stack applications. Focused on clean code,
      performance, and real-world solutions.
    </p>

    <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 px-3 sm:px-2">

      <a href="https://github.com/laiba112004" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
        <button className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-[10px] sm:text-sm md:text-base rounded-lg bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition">
          <FaGithub className="text-sm sm:text-base" />
          GitHub
        </button>
      </a>

      <a href="https://www.linkedin.com/in/laiba-fatima-7a2879386/" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
        <button className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-[10px] sm:text-sm md:text-base rounded-lg bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition">
          <FaLinkedin className="text-sm sm:text-base" />
          LinkedIn
        </button>
      </a>

      <a href="mailto:laibafatima1119@gmail.com" className="flex-1 sm:flex-none">
        <button className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-[10px] sm:text-sm md:text-base rounded-lg bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition">
          <FaEnvelope className="text-sm sm:text-base" />
          Email
        </button>
      </a>

    </div>

  </div>
</section>
      <section id="about" className="py-24 px-6 md:px-12 bg-[#0B1120] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/5 to-transparent blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F59E0B] text-sm tracking-[0.4em] uppercase mb-3">
              About Me
            </p>

            <h2 className="text-xl md:text-3xl font-bold leading-tight">
              Crafting Scalable Web Applications with
              <span className="text-[#F59E0B]"> Real-World Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a Full Stack Developer with hands-on industry experience in building
                scalable and high-performance web applications using the MERN stack.
                I specialize in developing clean, maintainable, and efficient systems
                with modern JavaScript (ES6+), React.js, Redux, Express.js, Node.js and Mongodb.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                During my professional experience, I have worked on complex admin dashboards,
                inventory management systems, and ticket management platforms. I have implemented
                secure authentication systems, role-based access control, and RESTful API integrations
                to ensure smooth and optimized application performance.
              </p>

              <p className="text-gray-500 text-lg leading-relaxed">
                I focus on writing clean, scalable code and building user-friendly interfaces.
                My goal is to create solutions that not only work efficiently but also provide
                real value to users and businesses. I am continuously learning and adapting to new technologies to stay ahead in modern web development.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl hover:-translate-y-2 transition">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Full Stack Developer
                </h3>
                <p className="text-[#F59E0B] text-lg mb-2">
                  Code5 Technologies • Lahore
                </p>
                   <p className="text-gray-500 text-lg mb-3">
                  Oct 2025 – March 2026
                </p>
                <p className="text-gray-400 text-lg">
                  Developed responsive UI components using React.js, Redux, and Tailwind CSS.
                  Built backend APIs using Node.js, Express.js, with CRUD operations
                  on MongoDB and MySQL databases.
                </p>
              </div>

              <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl hover:-translate-y-2 transition">
                <h3 className="text-lg font-semibold text-white mb-2">
                  MERN Stack Intern
                </h3>

                <p className="text-[#F59E0B] text-lg mb-2">
                  Ideoversity • Arfa Software Technology Park
                </p>

                <p className="text-gray-500 text-lg mb-3">
                  April 2025 – June 2025
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Built responsive and user-friendly interfaces using modern React.js practices.
                  Integrated frontend with backend services using Axios and REST APIs.
                 
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-16">

            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:bg-white/10 transition-all duration-300 text-center cursor-pointer">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>

            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:bg-white/10 transition-all duration-300 text-center cursor-pointer">
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects Delivered</p>
            </div>

            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:bg-white/10 transition-all duration-300 text-center cursor-pointer">
              <h3 className="text-3xl font-bold text-white">MERN</h3>
              <p className="text-gray-400 text-sm mt-1">Core Stack</p>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 md:px-12 bg-[#0B1120] relative">

        <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/5 to-transparent blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F59E0B] text-sm tracking-[0.4em] uppercase mb-3">
              Skills
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Professional <span className="text-[#F59E0B]">Skill Set</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">React.js</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">Redux</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">JavaScript (ES6+)</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">Node.js</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 mx-auto mb-3 bg-white rounded" />
              <p className="text-white font-bold">Express.js</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">MongoDB</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">MySQL</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">PHP</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">HTML5</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">CSS3</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">Tailwind CSS</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 hover:-translate-y-2 transition text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-10 mx-auto mb-3" />
              <p className="text-white font-bold">Git & GitHub</p>
            </div>

          </div>
        </div>
      </section>
      <section id="projects" className="py-24 px-6 bg-[#0B1120]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#F59E0B] text-sm tracking-[0.4em] uppercase mb-3">
              Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              My <span className="text-[#F59E0B]">Featured Work</span>
            </h2>
          </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:-translate-y-2 transition">

              <img
                src="pic2.jpeg"
                alt="IMS Project"
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  IMS – Inventory Management System
                </h3>

                <p className="text-[#F59E0B] text-lg mb-2">
                  React • Redux • Node • MongoDB
                </p>

                <p className="text-gray-400 text-lg mb-4">
                  Built a full-featured admin dashboard with role-based access,
                  authentication, and centralized data management for organizations.
                </p>

                <div className="flex gap-3">
                   <a href="https://github.com/RazaIboothme/Inventory-management.git" target="_blank" rel="noreferrer">
  <button className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg text-sm bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition duration-300">
    <FaGithub />
   Source Code
  </button>
</a>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:-translate-y-2 transition">

              <img
                src="pic1.jpeg"
                alt="TMS Project"
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  TMS – Ticket Management System
                </h3>

                <p className="text-[#F59E0B] text-lg mb-2">
                  React • Node • Express • MongoDB
                </p>

                <p className="text-gray-400 text-lg mb-4">
                  Developed a full-stack ticket management system with real-time monitoring,
                  secure authentication, and CRUD operations for efficient workflow handling.
                </p>

                <div className="flex gap-3">
                <a href="https://github.com/Code5-Tech/Wellnet.TMS/compare/Laibacode" target="_blank" rel="noreferrer">
  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#1F2937] cursor-pointer text-white border border-gray-600 hover:bg-[#111827] transition duration-300">
    <FaGithub />
   Source Code
  </button>
</a>
                </div>
              </div>
            </div>


          


            <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:-translate-y-2 transition">

              <img
                src="pic3.jpeg"
                alt="Ecommerce Project"
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  E-commerce Web Application
                </h3>

                <p className="text-[#F59E0B] text-lg mb-2">
                  MERN Stack • Authentication • Cart System
                </p>

                <p className="text-gray-400 text-lg mb-4">
                  Developed an e-commerce platform with product browsing, user authentication,
                  cart management, and responsive UI for all devices.
                </p>

                <div className="flex gap-3">
                  <a href="https://github.com/laiba112004/frontend.git" target="_blank" rel="noreferrer">
  <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg text-sm bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition duration-300">
    <FaGithub />
   Source Code
  </button>
</a>
                </div>
              </div>
            </div>
            <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:-translate-y-2 transition">

              <img
                src="piccc.jpeg"
                alt="IMS Project"
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
PHP CRUD Application                </h3>

                <p className="text-[#F59E0B] text-lg mb-2">
                  PHP • HTML • CSS • MySQL
                </p>

                <p className="text-gray-400 text-lg mb-4">
                 Developed a complete Create, Read, Update, Delete (CRUD) application for user account management
 Enabled secure registration, login, and personalized dashboard display.
                </p>

                <div className="flex gap-3">
                    <a href="  https://github.com/laiba112004/login-signup-crud.git" target="_blank" rel="noreferrer">
  <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg text-sm bg-[#1F2937] text-white border border-gray-600 hover:bg-[#111827] transition duration-300">
    <FaGithub />
   Source Code
  </button>
</a>

               
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
<section id="contact" className="py-24 px-6 bg-[#0B1120] text-center">

  <div className="max-w-3xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Get In <span className="text-[#F59E0B]">Touch</span>
    </h2>

    {/* Typewriter */}
    <div className="text-gray-400 text-lg mb-5 min-h-[60px]">
      <Typewriter
        options={{
          strings: [
            "Open to internships and junior developer roles.",
            "Available for freelance and real-world projects.",
            "Let's build something amazing together."
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
        }}
      />
    </div>

    {/* Contact Card */}
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 shadow-lg backdrop-blur-md">

      <div className="flex flex-col gap-6">

        {/* Email */}
        <a href="mailto:laibafatima1119@gmail.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
          <span className="text-[#F59E0B] text-xl">✉</span>
          <span className="text-lg">laibafatima1119@gmail.com</span>
        </a>

        {/* Phone */}
        <a href="tel:+923237754738" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
          <span className="text-[#F59E0B] text-xl">📞</span>
          <span className="text-lg">+92 323 7754738</span>
        </a>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <span className="text-[#F59E0B] text-xl">📍</span>
          <span className="text-lg">Lahore, Pakistan</span>
        </div>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Home