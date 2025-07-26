'use client';
import React, { useEffect, useState } from 'react';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
  {
    title: "WordPress Development",
    bg_img: "/assets/img/award/award-1.png",
  },
  {
    title: "WooCommerce Setup",
    bg_img: "/assets/img/about/woocommerce.jpg",
  },
  {
    title: "Web Design",
    bg_img: "/assets/img/about/web-design.png",
  },
  {
    title: "Landing Page Design",
    bg_img: "/assets/img/award/award-6.png",
  }
];

const AboutInfo = () => {
  const { handleMouseMove } = UseHoverReveal();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(touch);
    }
  }, []);

  return (
    <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-info__text">
              <div>
                I'm Asif Khan <span className="line"></span> a self-taught Digital Designer & Developer with over four years of work experience. What started in my room turned into a journey of crafting responsive, fast, and user-focused websites{' '}
                {info_data.map((item, index) => (
                  <React.Fragment key={index}>
                    <a
                      className="tp-hover-reveal-item"
                      href="#"
                      onMouseMove={(event) => {
                        if (!isTouch) {
                          handleMouseMove(event, '.tp-hover-reveal-item');
                        }
                      }}
                    >
                      {item.title}
                      <span></span>
                      {!isTouch && (
                        <div
                          className="tp-hover-reveal-bg"
                          style={{ backgroundImage: `url(${item.bg_img})` }}
                        ></div>
                      )}
                    </a>{' '}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
