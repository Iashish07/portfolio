import React from 'react'
 
const Skills = () => {
  return (
    <section className='bg-linear-to-t from-[#142738] to-[#101820] w-full md:min-h-[60vh]`
   text-center'>
      <div className="text-gray-400 text-2xl uppercase font-bold tracking-widest py-2 px-16">
        Skills
      </div>
      <div className="text-center">
        <p className='px-16 py-2 text-gray-400 '>Here are the tools and technologies I use</p>
      </div>
      <div className="flex flex-wrap justify-center items-stretch gap-4 px-4 py-8">

      <div
      className="skill-card w-full sm:w-[47%] md:w-[22%] max-w-[300px]"

      style={{ backgroundImage: "url('/html.png')" ,
        backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%',
       }}>
      <div className="skill-card-content">
      <h4 className="text-lg font-semibold">HTML/CSS</h4>
      <p className="text-sm text-gray-400">UI library for modern apps</p>
      </div>
      </div>

      <div
      className="skill-card w-full sm:w-[47%] md:w-[22%] max-w-[300px]"
      style={{ backgroundImage: "url('/JavaScript-logo.png')",
        backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%'
       }}
      >
      <div className="skill-card-content">
      <h4 className="text-lg font-semibold">Javascript</h4>
      <p className="text-sm text-gray-400">UI library for modern apps</p>
      </div>
      </div>

      <div
      className="skill-card w-full sm:w-[47%] md:w-[22%] max-w-[300px]"
      style={{ backgroundImage: "url('/react.png')", 
        backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%'
      }}>
      <div className="skill-card-content">
      <h4 className="text-lg font-semibold">React</h4>
      <p className="text-sm text-gray-400">UI library for modern apps</p>
      </div>
      </div>

      <div
      className="skill-card w-full sm:w-[47%] md:w-[22%] max-w-[300px]"
      style={{ backgroundImage: "url('/tailwind.jpg')",
        backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%'
       }}>
      <div className="skill-card-content">
      <h4 className="text-lg font-semibold">Tailwind CSS</h4>
      <p className="text-sm text-gray-400">UI library for modern apps</p>
      </div>
      </div>

      </div>
    </section>
  )
}

export default Skills

