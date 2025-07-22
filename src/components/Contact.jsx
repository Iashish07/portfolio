import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-linear-to-t from-[#0E2433] to-[#224C78] w-full md:min-h-[60vh] '>
      <div className="w-[80wh] h-[30vh] md:h-[60vh] mx-16 rounded-lg bg-[#101820] ">
        <div className="flex flex-col justify-center items-center text-center h-full px-4 py-8">
  <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4 mt-6">
    Let's build something together.
  </h2>
  <p className="text-gray-400 mb-6">
    Got an idea or need a site for your business? Reach out and let’s make it real.
  </p>
  <a
    href="https://www.instagram.com/ashbytes.dev/?utm_source=ig_web_button_share_sheet"
    className="px-6 py-3 bg-white mb-4 text-black font-semibold rounded-full hover:bg-green-300 transition"
  >
    Connect Now
  </a>
</div>

      </div>
    </div>
  )
}

export default Contact


