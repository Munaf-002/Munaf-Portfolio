
import React from 'react';
import AboutInfo from './AboutInfo';
import FunfactArea from './FunfactArea';
import PersonalInfo from './PersonalInfo';
import HeroAreaAbout from './HeroAreaAbout';
import BrandAreaAbout from './BrandAreaAbout';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import AwardAreaHomeOne from '../homes/home/AwardAreaHomeOne';


const About = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <HeroAreaAbout />
            <AboutInfo />
            <PersonalInfo />
            <FunfactArea />
            <AwardAreaHomeOne style_2={true} />
            <BrandAreaAbout />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default About;