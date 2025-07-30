'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// Images
import portfolio_img_1 from '@/assets/img/portfolio/modalinex.png';
import portfolio_img_2 from '@/assets/img/portfolio/afilcorp.png';
import portfolio_img_3 from '@/assets/img/portfolio/christopher.png';
import project_img_1 from '@/assets/img/portfolio/nalytoo.png';
import project_img_2 from '@/assets/img/portfolio/preet.png';
import project_img_3_2 from '@/assets/img/portfolio/playtme.png';
import project_img_4 from '@/assets/img/portfolio/nopressure.png';
import project_img_5 from '@/assets/img/portfolio/port-inner-7.jpg';
import project_img_6 from '@/assets/img/portfolio/port-inner-up-3.jpg';

const allPortfolioProjects = [
  {
    id: 1,
    img: portfolio_img_1,
    bg_img: '/assets/img/portfolio/modalinex.png',
    title: 'Modalinex',
    category: 'Acf Development',
    url: 'https://modalinex.com/',
  },
  {
    id: 2,
    img: portfolio_img_3,
    bg_img: '/assets/img/portfolio/afilcorp.png',
    title: 'Christopher Leigh Dodson',
    category: 'Web Development',
    url: 'https://christopherleighdodson.com/',
  },
  {
    id: 3,
    img: portfolio_img_2,
    bg_img: '/assets/img/portfolio/modalinex.png',
    title: 'Afilcorp',
    category: 'Web Development',
    url: 'https://staging54.ibaxs.com/',
  },
  {
    id: 4,
    img: project_img_1,
    bg_img: '/assets/img/portfolio/nalytoo.png',
    title: 'Nalytoo',
    category: 'Figma to WordPress',
    url: 'https://nalytoo.com/',
  },
  {
    id: 5,
    img: project_img_2,
    bg_img: '/assets/img/portfolio/preet.png',
    title: 'Virsa by Mrs Preet',
    category: 'Ecommerce',
    url: 'https://staging15.neotechfusion.com/',
  },
  {
  id: 6,
  img: project_img_4,
  bg_img: '/assets/img/portfolio/nopressure.png',
  title: 'No Pressure Construction',
  category: 'Web Design',
  url: 'https://staging57.ibaxs.com/',
},
{
  id: 7,
  img: project_img_3_2,
  bg_img: '/assets/img/portfolio/playtme.png',
  title: 'Playtime Global',
  category: 'Web Design',
  url: 'https://playtime.global/',
},

  {
    id: 8,
    img: project_img_5,
    bg_img: '/assets/img/portfolio/port-inner-7.jpg',
    title: 'Cloudnine',
    category: 'Web Design',
    url: 'https://cloud9concierge.com/',
  },
  {
    id: 9,
    img: project_img_6,
    bg_img: '/assets/img/portfolio/port-inner-up-3.jpg',
    title: 'RentinSaigon',
    category: 'Listing Website',
    url: 'https://staging40.neotechfusion.com/',
  },
];

const PortfolioArea = () => {
  useEffect(() => {
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

  // Split into two columns
  const half = Math.ceil(allPortfolioProjects.length / 2);
  const columnOne = allPortfolioProjects.slice(0, half);
  const columnTwo = allPortfolioProjects.slice(half);

  return (
  <div className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix black-bg-3 pt-80 pb-50" data-scrub="0.0001">
    <div className="portfolio-list-scroll-text pb-80 d-flex align-items-center">
      <p>Latest Projects</p>
      <p>Latest Projects</p>
    </div>
    <div className="container">
      <div className="row grid gx-90">
        {/* Left column */}
        <div className="col-xl-6 grid-item">
          <div className="tp-portfolio-item-wrapper">
            {allPortfolioProjects
              .filter((_, index) => index % 2 === 0)
              .map((item, index) => (
                <div key={item.id} className="tp-portfolio-item mb-70">
                  <Link href={item.url} target="_blank">
                    <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                      <div
                        className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${item.bg_img})` }}
                      ></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image
                          data-speed="0.85"
                          style={{ height: 'auto' }}
                          src={item.img}
                          alt={`${item.title} - ${item.category}`}
                        />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">0{index * 2 + 1}</span>
                        <span className="tp-portfolio-meta-arrow">
                          <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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

        {/* Right column */}
        <div className="col-xl-6 grid-item">
          <div className="tp-portfolio-item-wrapper">
            {allPortfolioProjects
              .filter((_, index) => index % 2 === 1)
              .map((item, index) => (
                <div key={item.id} className="tp-portfolio-item mb-70">
                  <Link href={item.url} target="_blank">
                    <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                      <div
                        className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${item.bg_img})` }}
                      ></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image
                          data-speed="0.85"
                          style={{ height: 'auto' }}
                          src={item.img}
                          alt={`${item.title} - ${item.category}`}
                        />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">0{index * 2 + 2}</span>
                        <span className="tp-portfolio-meta-arrow">
                          <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
  </div>
);
}

export default PortfolioArea;
