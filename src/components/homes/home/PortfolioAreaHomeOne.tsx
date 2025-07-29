"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/afilcorp.png"; // ✅ Afilcorp
import portfolio_img_2 from "@/assets/img/portfolio/modalinex.png"; // ✅ Modalinex
import portfolio_img_3 from "@/assets/img/portfolio/christopher.png"; // ✅ Christopher

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

const portfolio_content = {
  subtitle: 'Project',
  title: 'Latest projects',
  portfolio_data: [
    {
      id: 1,
      img: portfolio_img_1,
      bg_img: "/assets/img/portfolio/afilcorp.png",
      title: 'Afilcorp',
      url: 'https://staging54.ibaxs.com/',
    },
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/modalinex.png",
      title: 'Modalinex',
      url: 'https://modalinex.com/',
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/christopher.png",
      title: "Christopher Leigh Dodson",
      url: 'https://christopherleighdodson.com/',
    }
  ]
}
const { subtitle, title, portfolio_data } = portfolio_content;

const PortfolioAreaHomeOne = () => {
  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>
                <div className="tp-portfolio-item-wrapper">
                  {/* Afilcorp - Project 01 */}
                  <div className="tp-portfolio-item mb-70">
                    <Link href={portfolio_data[0].url} target="_blank">
                      <div className="tp-portfolio-thumb img-1 w-img fix ">
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${portfolio_data[0].bg_img})` }}></div>
                        <div className="tp-portfolio-thumb-img ">
                          <Image data-speed="0.85" style={{ objectFit: 'cover', height: "auto" }} src={portfolio_data[0].img} alt="Afilcorp project image" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{portfolio_data[0].title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">01</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>Web Dev</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                  <Link href="/portfolio"
                    className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                    <span className="tp-btn-circle-text-2">
                      Explore <br /> More Projects
                      <span className="tp-btn-circle-arrow-2">
                        <UpArrowIconPortfolio />
                      </span>
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {/* Modalinex - Project 02 */}
                <div className="tp-portfolio-item mb-70">
                  <Link href={portfolio_data[1].url} target="_blank">
                    <div className="tp-portfolio-thumb img-2 w-img fix">
                      <div className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${portfolio_data[1].bg_img})`, height: "auto" }}></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image data-speed="0.85" style={{ height: "auto" }} src={portfolio_data[1].img} alt="Modalinex project image" />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{portfolio_data[1].title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">02</span>
                        <span className="tp-portfolio-meta-arrow">
                          <RitghtArrowIconPortfolio />
                        </span>
                        <div className="tp-portfolio-meta-hover">
                          <span>Web Dev</span>
                          <span className="tp-portfolio-meta-link">View Project</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Christopher Leigh Dodson - Project 03 */}
                <div className="tp-portfolio-item mb-70">
                  <Link href={portfolio_data[2].url} target="_blank">
                    <div className="tp-portfolio-thumb img-2 w-img fix">
                      <div className="tp-portfolio-thumb-img include-bg d-none"
                        style={{ backgroundImage: `url(${portfolio_data[2].bg_img})`, height: "auto" }}></div>
                      <div className="tp-portfolio-thumb-img">
                        <Image data-speed="0.85" style={{ height: "auto" }} src={portfolio_data[2].img} alt="Christopher Leigh Dodson project image" />
                      </div>
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{portfolio_data[2].title}</h3>
                      <div className="tp-portfolio-meta d-flex align-items-center">
                        <span className="tp-portfolio-meta-count">03</span>
                        <span className="tp-portfolio-meta-arrow">
                          <RitghtArrowIconPortfolio />
                        </span>
                        <div className="tp-portfolio-meta-hover">
                          <span>Web Dev</span>
                          <span className="tp-portfolio-meta-link">View Project</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;
