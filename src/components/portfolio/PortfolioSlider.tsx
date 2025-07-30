'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';

// ✅ Your imported images
import slider_img_1 from "@/assets/img/portfolio/christopher.png";
import slider_img_2 from "@/assets/img/portfolio/modalinex.png";
import slider_img_3 from "@/assets/img/portfolio/nopressure.png";
import slider_img_4 from "@/assets/img/portfolio/afilcorp.png";

// ✅ Image list with alt text
const slider_images = [
  { src: slider_img_1, alt: "Christopher - Coaching Website UI/UX Design" },
  { src: slider_img_2, alt: "Modalinex - Finance Dashboard Design" },
  { src: slider_img_3, alt: "NoPressure - Gym & Fitness Brand Website" },
  { src: slider_img_4, alt: "Afilcorp - SaaS Product Landing Page" },
  { src: slider_img_1, alt: "Christopher - Coaching Website UI/UX Design" },
  { src: slider_img_2, alt: "Modalinex - Finance Dashboard Design" },
  { src: slider_img_3, alt: "NoPressure - Gym & Fitness Brand Website" },
  { src: slider_img_4, alt: "Afilcorp - SaaS Product Landing Page" },
];

// ✅ Slider settings (same as before)
const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      }
    }
  ]
};

const PortfolioSlider = () => {
  return (
    <>
      <div className="porfolio-inner__slider-area porfolio-inner__ptb black-bg-3 p-relative fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="porfolio-inner__overlay">
                <div className="porfolio-inner__text-1">
                  <h4 className="porfolio-inner__slider-title tp_title_anim">
                    Projects That Delivered <br /> Design & Dev.
                  </h4>
                </div>
                <Slider {...setting} className="porfolio-inner__slider-active">
                  {slider_images.map((item, index) => (
                    <div key={index} className="porfolio-inner__thumb">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        style={{ height: '400px', width: '100%' }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;
