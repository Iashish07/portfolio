import React from 'react'
import { FaMailBulk, FaMailchimp, FaVoicemail } from 'react-icons/fa'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const links = [
  { href: 'https://www.instagram.com/ashbytes.dev', icon: <FaInstagram />, name: 'instagram' },
  { href: 'https://www.linkedin.com/in/aashish-kumar-codes999/', icon: <FaLinkedin />, name: 'Linkedin' },
  { href: 'mailto:ytaashish01@gmail.com', icon: <FaMailBulk />, name: 'gmail' },
  { href: 'https://github.com/Iashish07', icon: <FaGithub />, name: 'github' }
]

const Footer = () => {
  return (
    <footer id='socials' className='bg-[#0E2433] to-[#101820] w-screen py-4 text-black'>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4">
        <p className='text-sm text-center md:text-left'>&copy; All rights reserved</p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white transition-colors duration-300 hover:text-black'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer


