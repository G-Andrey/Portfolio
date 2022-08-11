import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a className="app__navbar-logo" href="/#about">
        <img src={images.andreyLogo} alt="logo"/>
      </a>
      <ul className="app__navbar-links">
        {['about', 'projects', 'skills', 'resume'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <ul className="app__navbar-links-social">
        <li className="app__flex p-text">
          <a className="app__navbar-logo" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrey-goryuk/">
           <FaLinkedin size={25}/> 
          </a>
        </li>
        <li className="app__flex p-text">
          <a className="app__navbar-logo" target="_blank" rel="noopener noreferrer" href="https://github.com/G-Andrey">
            <FaGithubSquare size={25}/>
          </a >          
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['about', 'projects', 'skills', 'resume'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrey-goryuk/" onClick={() => setToggle(false)}>
                  LinkedIn 
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/G-Andrey" onClick={() => setToggle(false)}>
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
