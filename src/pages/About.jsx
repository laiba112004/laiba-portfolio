import React from 'react'

const About = () => {
  return (
    <div className="bg-[#0F172A] text-white pt-24 px-6 md:px-12 min-h-screen">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-400 leading-relaxed mb-8 text-center">
          I am a passionate Full Stack Developer with hands-on experience in 
          building scalable and user-friendly web applications using modern 
          technologies. I specialize in the MERN stack along with PHP and MySQL, 
          focusing on clean code, performance, and real-world problem solving.
        </p>

        {/* Experience */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#F59E0B]">
            Experience
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I have worked as a Full Stack Web Developer where I developed 
            responsive UI components using React.js and Tailwind CSS, 
            integrated RESTful APIs, and built backend services using 
            Node.js, Express.js, and PHP. I also implemented CRUD operations 
            and worked with databases like MongoDB and MySQL.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#F59E0B]">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Redux",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "PHP",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "REST APIs",
              "Git & GitHub"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-800 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#F59E0B]">
            Education
          </h2>

          <p className="text-gray-400">
            BS Computer Science — Virtual University (Ongoing)
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Want to work together or have a project in mind?
          </p>

          <a href="/contact">
            <button className="bg-[#F59E0B] px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
              Contact Me
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default About