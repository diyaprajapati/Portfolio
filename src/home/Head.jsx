import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Reusable CloseButton component
const CloseButton = ({ onClick }) => (
  <button onClick={onClick} className="text-black focus:outline-none">
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between px-4 py-3 lg:px-24 md:px-16">
        <div className="text-3xl font-extrabold font-dancingScript self-center">
          <h1>Diya Prajapati</h1>
        </div>

        {/* Hamburger menu or Close button */}
        <div className="md:hidden">

          {/* humburger */}
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Buttons and links for medium to large screens */}

        <div className='hidden md:flex md:flex-row gap-20 text-end md:gap-12'>
          <div className='flex flex-row gap-5 self-center'>
            <Link to="/" className={`nav-link`}>
              Home
            </Link>
            <Link to="/skill" className={`nav-link`}>
              Skills
            </Link>
            <Link to="/project" className={`nav-link`}>
              Projects
            </Link>
            <Link to="/achievement" className={`nav-link`}>
              Achievements
            </Link>
            <Link to="/blog" className={`nav-link`}>
              Blog
            </Link>
          </div>
          <div className="border-[2px] border-orange-600 py-2 px-4 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out duration-200">
            <a href="https://drive.google.com/file/d/19nvuJuskFIUeFJbP2VSB0MoEoAqG2oJc/view?usp=sharing" target='_blank'>
              <button className="p-2">Resume</button>
            </a>
          </div>
        </div>
      </div>

      {/* Sliding menu for small screens */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-slate-400 bg-opacity-90 transition-transform duration-300 ease-in-out transform`}>

        {/* close button */}
        <div className='text-end my-10 mx-5'>
          <CloseButton onClick={closeMenu} />
        </div>

        {/* links and button */}
        <div className="flex flex-col items-center py-28 h-screen gap-6">
          <Link to="/" className={`nav-link`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/skill" className={`nav-link`} onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/project" className={`nav-link`} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/achievement" className={`nav-link`} onClick={closeMenu}>
            Achievements
          </Link>
          <Link to="/blog" className={`nav-link`} onClick={closeMenu}>
            Blog
          </Link>
          <div className="border-[2px] border-orange-600 py-2 px-4 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out duration-200">
            <a href="https://drive.google.com/file/d/19nvuJuskFIUeFJbP2VSB0MoEoAqG2oJc/view?usp=sharing" target='_blank'>
              <button className="p-2" onClick={closeMenu}>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
