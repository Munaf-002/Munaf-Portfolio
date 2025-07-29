'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';

// Import images
import slider_img_1 from "@/assets/img/portfolio/elementor-wordpress1.jpg";
import slider_img_2 from "@/assets/img/portfolio/elementor-wordpress2.jpg";
import slider_img_3 from "@/assets/img/portfolio/elementor-wordpress3.jpg";
import slider_img_4 from "@/assets/img/portfolio/elementor-wordpress4.jpg";

// Image data with SEO-friendly alt text
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
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
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
                      style={{ height: 'auto' }}
                      placeholder="blur"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
