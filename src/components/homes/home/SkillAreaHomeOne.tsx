'use client'
import React from 'react';
// skill images
import skill_img_1 from "@/assets/img/skill/tailwind-css.png";
import skill_img_2 from "@/assets/img/skill/wp.png";
import skill_img_3 from "@/assets/img/skill/javascript.png";
import skill_img_4 from "@/assets/img/skill/html.png";
import skill_img_5 from "@/assets/img/skill/webflow.png";
import skill_img_6 from "@/assets/img/skill/shopify.png";
import Image, { StaticImageData } from 'next/image';

interface DataType {
  subtitle: string;
  title: string;
  info: string;
  skill_data: {
    tab_id: string;
    items: {
      img: StaticImageData;
      title: string;
      percent: number;
    }[];
  }[];
}

const skill_content: DataType = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: "For those who know what they're looking for..",
  skill_data: [
    {
      tab_id: "tech",
      items: [
        {
          img: skill_img_1,
          title: "Tailwind",
          percent: 85
        },
        {
          img: skill_img_2,
          title: "WordPress",
          percent: 95
        },
        {
          img: skill_img_3,
          title: "JS",
          percent: 70
        },
        {
          img: skill_img_4,
          title: "HTML",
          percent: 97
        },
        {
          img: skill_img_5,
          title: "Webflow",
          percent: 85,
        },
        {
          img: skill_img_6,
          title: "Shopify",
          percent: 80
        }
      ],
    }
  ]
}

const { subtitle, title, info, skill_data } = skill_content;

const SkillAreaHomeOne = () => {
  return (
    <section className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2" style={{ backgroundImage: 'url(/assets/img/skill/bg-distort.png)' }}>
      <div className="tp-skill-shape">
        <span className="tp-skill-shape-1"></span>
        <span className="tp-skill-shape-2"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-skill-section-title">
              <div className="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                <div className="tp-section-title-inner tp_title_anim p-relative">
                  <span className="tp-section-subtitle">{subtitle}</span>
                  <h3 className="tp-section-title">{title}</h3>
                </div>
                <p>{info}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid - No Tabs */}
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-skill-tab-content tp-skill-radius">
              <div className="row">
                {skill_data[0].items.map((inner_item, index) => (
                  <div key={index} className="col-xl-2 col-lg-3 col-md-3 col-6">
                    <div className="tp-skill-item text-center">
                      <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                        <div className="tp-skill-icon">
                          <span>
                            <Image src={inner_item.img} alt={inner_item.title} />
                          </span>
                        </div>
                        <h3 className="tp-skill-count"><span>{inner_item.percent}</span>%</h3>
                      </div>
                      <div className="tp-skill-content">
                        <h3 className="tp-skill-title">{inner_item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillAreaHomeOne;
