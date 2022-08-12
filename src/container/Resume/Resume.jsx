import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Resume.scss';

const Resume = () => {

  return (
    <>
      <h2 className="head-text"><span>Resume</span></h2>
      <div className="resume__container">
        <img src={`assets/AndreyGoryukResume.png`} height={670} width={520} className="resume__img"/>       
      </div>
      <div className={'app__resume-filter'}>
        <a href={`assets/AndreyGoryukResume.pdf`} rel="noreferrer" target="_blank" className={'app__resume-button'}>
          <MdOpenInNew />Open as PDF
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Resume, 'app__resume'), 
  'resume',
  'app__whitebg'
);
