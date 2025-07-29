'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Images (make sure all paths are correct)
import portfolio_img_1 from '@/assets/img/portfolio/modalinex.png';
import portfolio_img_2 from '@/assets/img/portfolio/afilcorp.png';
import portfolio_img_3 from '@/assets/img/portfolio/christopher.png';

import project_img_1 from '@/assets/img/portfolio/port-inner-up-1.jpg';
import project_img_2 from '@/assets/img/portfolio/port-inner-up-4.jpg';
import project_img_3_2 from '@/assets/img/portfolio/port-inner-up-5.jpg';

import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';
import project_img_5 from '@/assets/img/portfolio/port-inner-up-3.jpg';
import project_img_6 from '@/assets/img/portfolio/portfolio-2.jpg';

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';

// Combined portfolio data with unique IDs & URLs
const allPortfolioProjects = [
  {
    id: 1,
    img: portfolio_img_1,
    bg_img: '/assets/img/portfolio/modalinex.png',
    title: 'Modalinex',
    category: 'Web Dev',
    url: 'https://modalinex.com/',
  },
  {
    id: 2,
    img: portfolio_img_3,
    bg_img: '/assets/img/portfolio/afilcorp.png',
    title: 'Christopher Leigh Dodson',
    category: 'Web Dev',
    url: 'https://christopherleighdodson.com/',
  },
  {
    id: 3,
    img: portfolio_img_2,
    bg_img: '/assets/img/portfolio/modalinex.png',
    title: 'Afilcorp',
    category: 'Web Development',
    url: '#',
  },
  {
    id: 4,
    img: project_img_1,
    bg_img: '/assets/img/portfolio/modalinex.png',
    title: 'Project One',
    category: 'Branding',
    url: '#',
  },
  {
    id: 5,
    img: project_img_2,
    bg_img: '/assets/img/portfolio/port-inner-up-4.jpg',
    title: 'Project Two',
    category: 'Branding',
    url: '#',
  },
  {
    id: 6,
    img: project_img_3_2,
    bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
    title: 'Project Three',
    category: 'Branding',
    url: '#',
  },
  {
    id: 7,
    img: project_img_4,
    bg_img: '/assets/img/portfolio/port-inner-up-2.jpg',
    title: 'Project Four',
    category: 'Branding',
    url: '#',
  },
  {
    id: 8,
    img: project_img_5,
    bg_img: '/assets/img/portfolio/port-inner-up-3.jpg',
    title: 'Project Five',
    category: 'Branding',
    url: '#',
  },
  {
    id: 9,
    img: project_img_6,
    bg_img: '/assets/img/portfolio/portfolio-2.jpg',
    title: 'Project Six',
    category: 'Branding',
    url: '#',
  },
];

const PortfolioArea = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.set('.tp-portfolio-bg-text', { x: '25%' });
    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).to('.tp-portfolio-bg-text', { x: '-80%' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-list-scroll-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).to('.portfolio-list-scroll-text', { x: '-80%' });
  }, []);

  return (
    <div
      className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix black-bg-3 pt-80 pb-50"
      data-scrub="0.0001"
    >
      <div className="portfolio-list-scroll-text pb-80 d-flex align-items-center">
        <p>Latest Project</p>
        <p>Latest Project</p>
      </div>
      <div className="container">
        <div className="row grid gx-90">
          <div className="col-xl-12 grid-item">
            <div className="tp-portfolio-item-wrapper">
              {allPortfolioProjects.map((item, index) => (
                <div key={item.id} className="tp-portfolio-item mb-70">
                  <Link href={item.url || '/portfolio-details'} target="_blank" rel="noopener noreferrer">
                    <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                      <div
                        className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${item.bg_img || item.img.src})` }}
                      ></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image
                          src={item.img}
                          alt={`${item.title} - ${item.category} Project`}
                          style={{ height: 'auto' }}
                          placeholder="blur"
                          quality={85}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">0{index + 1}</span>
                        <span className="tp-portfolio-meta-arrow">
                          {/* Your arrow SVG or icon here */}
                        </span>
                        <div className="tp-portfolio-meta-hover">
                          <span>{item.category}</span>
                          <span className="tp-portfolio-meta-link">View Project</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      

export default PortfolioArea;
