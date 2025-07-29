'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/modalinex.png";
import portfolio_img_2 from "@/assets/img/portfolio/afilcorp.png";
import portfolio_img_3 from "@/assets/img/portfolio/christopher.png";

import project_img_1 from '@/assets/img/portfolio/port-inner-up-1.jpg';
import project_img_2 from '@/assets/img/portfolio/port-inner-up-4.jpg';
import project_img_3_2 from '@/assets/img/portfolio/port-inner-up-5.jpg';

import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';
import project_img_5 from '@/assets/img/portfolio/port-inner-up-3.jpg';
import project_img_6 from '@/assets/img/portfolio/portfolio-2.jpg';

import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

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
  // Split projects roughly in half for two columns
  const half = Math.ceil(allPortfolioProjects.length / 2);
  const leftProjects = allPortfolioProjects.slice(0, half);
  const rightProjects = allPortfolioProjects.slice(half);

  return (
    <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
      <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
        <p>Latest projects</p>
        <p>Latest projects</p>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-portfolio-wrapper pr-30 pt-55">
              <div className="tp-section-title-wrapper mb-60">
                <div className="tp-section-title-inner tp_title_anim p-relative">
                  <span className="tp-section-subtitle tp-portfolio-subtitle">Project</span>
                  <h3 className="tp-section-title tp_title_anim">Latest projects</h3>
                </div>
              </div>

              <div className="tp-portfolio-item-wrapper">
                {leftProjects.map((item, i) => (
                  <div key={item.id} className="tp-portfolio-item mb-70">
                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                      <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                        <div
                          className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})`, height: 'auto' }}
                        ></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image
                            data-speed="0.85"
                            style={{ height: 'auto' }}
                            src={item.img}
                            alt={`${item.title} project image`}
                          />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">0{i + 1}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
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

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-portfolio-item-wrapper pl-50">
              {rightProjects.map((item, i) => (
                <div key={item.id} className="tp-portfolio-item mb-70">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                      <div
                        className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${item.bg_img})`, height: 'auto' }}
                      ></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image
                          data-speed="0.85"
                          style={{ height: 'auto' }}
                          src={item.img}
                          alt={`${item.title} project image`}
                        />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">
                          0{leftProjects.length + i + 1}
                        </span>
                        <span className="tp-portfolio-meta-arrow">
                          <RitghtArrowIconPortfolio />
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
      </div>
    </section>
  );
};

export default PortfolioArea;
