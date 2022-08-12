import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const languages = [{name: 'Python', src: 'python'}, {name: 'Java', src: 'java'}, {name: 'JavaScript', src: 'javascript'}, {name: 'C++', src: 'cpp'}, {name: 'Sql', src: 'sql'}];
  const technologies = [{name: 'React', src: 'react'}, {name: 'Node JS', src: 'node'}, {name: 'Spring', src: 'spring'}, 
  {name: 'Flask', src: 'flask'}, {name: 'Android Studio', src: 'androidstudio'}, {name: 'Git', src: 'git'}, {name: 'Redux', src: 'redux'}, {name: 'Material UI', src: 'mui'}];

  const [activeFilter, setActiveFilter] = useState('Languages');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [cards, setCards] = useState([...languages]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'Languages') {
        setCards([...languages])
      } else {
        setCards([...technologies])
      }
    }, 400);
  };

  return (
    <>
      <h2 className="head-text"><span>Skills</span></h2>

      <div className="app__skills-filter">
        {['Languages', 'Technologies'].map((item, index) => (
          <div key={index} onClick={() => handleWorkFilter(item)} className={`app__skills-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      
      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} style={{width: '80%', display: 'flex', justifyContent: 'center'}}>
        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {cards.map((card) => (
              <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.4 }} className="app__skills-item app__flex" key={card.name}>
                <div className="app__flex" style={{backgroundColor: '#fff'}}>
                  <img src={`assets/${card.src}.png`} alt={card.name} />
                </div>
                <p className="p-text">{card.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);
