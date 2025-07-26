'use client'
import React from 'react';
import ContactArea from './ContactArea';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';



const Contact = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <FooterOne style={true} />
        </div>
      </div>

    </>
  );
};

export default Contact;