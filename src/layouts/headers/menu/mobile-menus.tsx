"use client";
import Link from "next/link";
import menu_data from "./MenuData";
import React, { useEffect, useState } from "react";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string>("");

  const openMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? "" : menu));
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-hover-active nav ul li');

    const handleMouseEnter = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      target.classList.add('active');
      Array.from(target.parentElement!.children).forEach((sibling) => {
        if (sibling !== target) {
          sibling.classList.remove('active');
        }
      });
    };

    const handleMouseLeave = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      Array.from(target.parentElement!.children).forEach((sibling) => {
        if (sibling !== target) {
          sibling.classList.add('active');
        }
      });
    };

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('mouseenter', handleMouseEnter);
      menuItem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener('mouseenter', handleMouseEnter);
        menuItem.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <ul>
      {menu_data.map((item, index) => {
        const hasMobileSubmenus = item.sub_menus?.some((sub) => sub.mobile_menu);

        return (
          <li key={index} className={`has-dropdown active`}>
            <Link
              href={item.link}
              className={`${navTitle === item.title ? "expanded" : ""}`}
            >
              {item.title}
              {hasMobileSubmenus && (
                <button
                  className={`dropdown-toggle-btn ${navTitle === item.title ? "dropdown-opened" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openMobileMenu(item.title);
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1V27" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 14H27" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </Link>

            {hasMobileSubmenus && (
              <ul
                className="tp-submenu submenu"
                style={{ display: navTitle === item.title ? "block" : "none" }}
              >
                {item.sub_menus?.map((sub, sub_index) =>
                  sub.mobile_menu ? (
                    <li key={sub_index}>
                      <Link href={sub.link}>{sub.title}</Link>
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenus;
