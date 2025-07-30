'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';

// Import images
import slider_img_1 from "@/assets/img/portfolio/elementor-wordpress1.jpg";
import slider_img_2 from "@/assets/img/portfolio/elementor-wordpress2.jpg";
import slider_img_3 from "@/assets/img/portfolio/elementor-wordpress3.jpg";
import slider_img_4 from "@/assets/img/portfolio/elementor-wordpress4.jpg";

// Image data
const slider_images = [
  { src: slider_img_1, alt: "Elementor WordPress Project - Homepage Design" },
  { src: slider_img_2, alt: "WordPress UI - Service Section Layout" },
  { src: slider_img_3, alt: "Elementor-Based Portfolio Section Showcase" },
  { src: slider_img_4, alt: "Custom WordPress Contact Page Design" },
  { src: slider_img_1, alt: "Elementor WordPress Project - Homepage Design" },
  { src: slider_img_2, alt: "WordPress UI - Service Section Layout" },
  { src: slider_img_3, alt: "Elementor-Based Portfolio Section Showcase" },
  { src: slider_img_4, alt: "Custom WordPress Contact Page Design" },
];

const setting = {
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 1,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const PortfolioSlider = () => {
  return (
    <div
      className="porfolio-inner__slider-area porfolio-inner__ptb black-bg-3 p-relative fix"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Text over slider */}
      <div
        className="porfolio-inner__text-1"
        style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h4 className="porfolio-inner__slider-title tp_title_anim" style={{ fontSize: '42px' }}>
          Projects That Delivered <br /> Design & Dev.
        </h4>
      </div>

      {/* Slider */}
      <Slider {...setting} className="porfolio-inner__slider-active">
        {slider_images.map((item, index) => (
          <div key={index} className="porfolio-inner__thumb">
            <Image
              src={item.src}
              alt={item.alt}
              quality={85}
              style={{ width: '100%', height: 'auto' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioSlider;
