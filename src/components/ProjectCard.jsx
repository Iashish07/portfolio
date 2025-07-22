import React from 'react'
import { ExternalLink } from 'lucide-react' 

const ProjectCard = ({ title, type, description, liveLink, codeLink }) => {
  return (
    <div className="bg-[#111827] border border-[#2c3e50] rounded-2xl p-6 
      hover:shadow-xl hover:scale-[1.015] transition-all duration-300 
      flex flex-col justify-between gap-4">
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-xs uppercase tracking-widest text-indigo-400">{type}</p>
        <p className="text-sm text-gray-300 mt-2 leading-relaxed">{description}</p>
      </div>

      <div className="flex gap-3 pt-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white font-medium 
              border border-indigo-500 rounded-full px-4 py-1 hover:bg-indigo-500 transition"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-300 font-medium 
              border border-gray-600 rounded-full px-4 py-1 hover:bg-gray-800 transition"
          >
            Code <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
