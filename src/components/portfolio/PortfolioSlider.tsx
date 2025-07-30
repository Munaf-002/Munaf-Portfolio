'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';

// ✅ Your custom images
import slider_img_1 from "@/assets/img/portfolio/elementor-wordpress1.jpg";
import slider_img_2 from "@/assets/img/portfolio/elementor-wordpress2.jpg";
import slider_img_3 from "@/assets/img/portfolio/elementor-wordpress3.jpg";
import slider_img_4 from "@/assets/img/portfolio/elementor-wordpress4.jpg";

// ✅ Same structure, just updated images
const slider_images = [
  slider_img_1,
  slider_img_2,
  slider_img_3,
  slider_img_4,
  slider_img_1,
  slider_img_2,
  slider_img_3,
  slider_img_4,
];

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
                        src={item}
                        style={{ height: 'auto' }}
                        alt={`Portfolio Project Slide ${index + 1}`}
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
