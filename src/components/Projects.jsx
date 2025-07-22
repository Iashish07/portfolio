import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectData = [
    {
      title: 'Restaurant Page',
      type: 'Business Portfolio',
      description: 'A clean and modern restaurant portfolio built with React and Tailwind CSS. Features sections for menu, testimonials, and contact.',
      liveLink: 'https://cafepagedemo.vercel.app/',
      codeLink: '', // Optional: GitHub link
    },
    // Add more projects here
  ]

  return (
    <div id="projects" className="bg-gradient-to-t from-[#224C78] to-[#142738] w-full py-16 text-center">
      <h2 className="text-4xl font-extrabold text-white tracking-widest uppercase">Projects</h2>
      <p className="text-gray-300 text-sm mt-2 mb-10 px-4">get yourself a similar one... More coming soon.</p>

      <div className="px-6 md:px-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
