import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Projects.scss';

const Projects = () => {
  const projects = [{name:'Memories',title:'Memories', description: 'A full MERN stack social media app where users can share, like, search, and comment on memories', tags: ['Full Stack'], sitelink: 'https://g-andrey.github.io/memories/#/posts', gitlink: 'https://github.com/G-Andrey/memories', imgSrc: 'memoriesDemo'},
                    {name:'Restaurant',title:'Restaurant', description: 'A full stack web app where users can order food & book reservations at a fictional restaurant', tags: ['Full Stack'], sitelink: 'https://syedsadman16.github.io/Online-Restaurant-System-Frontend/#/', gitlink: 'https://github.com/syedsadman16/Online-Restaurant-Backend', imgSrc: 'restaurantDemo'},
                    {name:'Face Mask Detection',title:'Face Mask Detection', description: 'Trained and deployed a ML model to perform live face mask detection in the browser', tags: ['Machine Learning & Web'], sitelink: 'https://g-andrey.github.io/Face-mask-detection/#/', gitlink: 'https://github.com/G-Andrey/Face-mask-detection', imgSrc: 'facemaskDemo'},
                    {name:'Sort Visualizer',title:'Sort Visualizer', description: 'A responsive webapp built with React to visualize how various sorting algorithms work', tags: ['Visualizer'], sitelink: 'https://g-andrey.github.io/Sort-Visualizer/', gitlink: 'https://github.com/G-Andrey/Sort-Visualizer', imgSrc: 'sortvisualizerDemo'},
                    {name:'Movie Tracker',title:'Movie Tracker', description: 'A mobile app that web scrapes movie details and keeps track of movies that users have seen and plan on seeing', tags: ['Mobile'], sitelink: 'https://github.com/G-Andrey/MovieListV3#compelete-app-demo-%EF%B8%8F', gitlink: 'https://github.com/G-Andrey/MovieListV3', imgSrc: 'movietrackerDemo'},
                    {name:'$JPM Stock Price Forecasting',title:'$JPM Stock Price Forecasting', description: 'Trained logistic regression, random forest classifier, and neural network models to forecast stock price', tags: ['Machine Learning & Data Science'], sitelink: 'https://g-andrey.github.io/Forecasting-Daily-JPM-Stock-Price-with-Machine-Learning/', gitlink: 'https://github.com/G-Andrey/Forecasting-Daily-JPM-Stock-Price-with-Machine-Learning', imgSrc: 'stockforecastDemo'}
  ];

  const [works, setWorks] = useState([...projects]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setWorks([...projects]);
      } else if (item === 'Web') {
        setWorks([projects[0],projects[1],projects[2],projects[3]]);
      } else if (item === 'Mobile'){
        setWorks([projects[4]]);
      } else{
        setWorks([projects[2], projects[5]]);
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text"><span>Projects</span></h2>

      <div className="app__work-filter">
        {['All', 'Web', 'Mobile', 'ML'].map((item, index) => (
          <div key={index} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={require(`../../assets/${work.imgSrc}.png`)} alt={work.name} />
              <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} className="app__work-hover app__flex">
                <a href={work.sitelink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.90] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.gitlink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.90] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__works'),
  'projects',
  'app__whitebg',
);
