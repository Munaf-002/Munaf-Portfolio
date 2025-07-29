'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import quote from "@/assets/img/testimonial/quote.svg";
import avatarGeneric from "@/assets/img/users/avatar-generic.png";
import StartIcon from '@/svg/icons/StartIcon';
import { gsap } from 'gsap';

const testimonial_slider_data = [
  {
    id: 1,
    rating_text: "5.0 Rating",
    description: `Collaborating with Asif was exceptional! His communication was outstanding, he made sure to understand the requirements and delivered a great WordPress site from Figma using DIVI. Exceeded expectations.`,
    name: "Showupmyscience"
  },
  {
    id: 2,
    rating_text: "5.0 Rating",
    description: `Asif a su être à l'écoute de mes attentes et a su les comprendre rapidement. Le travail a été réalisé dans les délais. Une personne honnête et professionnelle.`,
    name: "Adeboyeoni"
  },
  {
    id: 3,
    rating_text: "5.0 Rating",
    description: `This is the second time collaborating with Asif. His professionalism, attention to detail, and ability to bring ideas to life are truly remarkable.`,
    name: "Laurene"
  },
  {
    id: 4,
    rating_text: "5.0 Rating",
    description: `Third time working with Asif. He integrated my Figma file into WordPress using Divi Builder. Very proactive and reliable.`,
    name: "Marcus"
  },
  {
    id: 5,
    rating_text: "5.0 Rating",
    description: `One of my best orders so far. Bug-free delivery, perfect understanding of the task, and very professional.`,
    name: "Guerin Antoine"
  },
];

const slider_a = {
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slider_b = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const TestimonialAreaHomeOne = ({ style }: any) => {
  const bg_img = style ? null : "/assets/img/bg/distort-bg.png";
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const borders = document.querySelectorAll('.tp-testimonial-user-border');
    borders.forEach((line) => {
      gsap.set(line, { width: 0 });
      gsap.to(line, {
        scrollTrigger: {
          trigger: '.tp-testimonial-user-border',
          start: 'top 90%',
          end: 'bottom 80%',
          markers: false,
        },
        width: "100%",
      });
    });
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${bg_img})` }}
      className={`tp-testimonial-area ${style ? 'sv-inner__customize pb-160 black-bg-3' : 'theme-bg tp-bg-light pb-80'} pt-25`}
    >
      <div className="container">
        {!style && (
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-50 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">Testimonials</span>
                    <h3 className="tp-section-title">What clients say</h3>
                  </div>
                  <p>Rated 4.9 out of 5 based on client reviews</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testimonial-slider ml-70 mr-70">
              <Slider
                {...slider_a}
                asNavFor={slider2 as Slider}
                ref={(slider) => {
                  setSlider1(slider);
                  sliderRef.current = slider;
                }}
                className="tp-testimonial-slider-active swiper-container"
              >
                {testimonial_slider_data.map((item) => (
                  <div key={item.id} className="swiper-slide">
                    <div
                      className="tp-testimonial-item theme-bg-2"
                      style={{ backgroundImage: 'url(/assets/img/testimonial/bg-distort.png)' }}
                    >
                      <div className="tp-testimonial-quote">
                        <Image src={quote} alt="quote" />
                      </div>
                      <div className="tp-testimonial-item-top d-flex align-items-center">
                        <div className="tp-testimonial-rating">
                          {[...Array(5)].map((_, i) => (
                            <StartIcon key={i} />
                          ))}
                        </div>
                        <p>{item.rating_text}</p>
                      </div>
                      <div className="tp-testimonial-content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="tp-testimonial-thumb-slider">
                <Slider
                  {...slider_b}
                  asNavFor={slider1 as Slider}
                  ref={(slider) => setSlider2(slider)}
                  className="tp-testimonial-nav swiper-container"
                >
                  {testimonial_slider_data.map((item, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="tp-testimonial-user-item d-flex justify-content-center align-items-center">
                        <div className="tp-testimonial-user-thumb">
                          <Image src={avatarGeneric} alt={`User ${item.name}`} />
                        </div>
                        <div className="tp-testimonial-user-content">
                          <h3 className="tp-testimonial-user-title">{item.name}</h3>
                        </div>
                        <span className="tp-testimonial-user-border"></span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaHomeOne;
