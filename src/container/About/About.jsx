import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const About = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span className="wave">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I'm</p>
            <h1 className="head-text">Andrey</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Aspiring Software</p>
          <p className="p-text">Engineer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={'assets/andreyProfile.png'} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={'assets/circle.svg'}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    > 
      <div className="circle-cmp app__flex">
        <img src={'assets/javascript.png'} alt="profile_bg" />
      </div>
      <div className="circle-cmp app__flex">
        <img src={'assets/python.png'} alt="profile_bg" />
      </div>
      <div className="circle-cmp app__flex">
        <img src={'assets/java.png'} alt="profile_bg" />
      </div>
    </motion.div>
  </div>
);

export default AppWrap(About, 'about');
