import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { base_url } from '../utils/config';

const WhatsApp = () => {
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    // Fetching the API data
    axios.get(`${base_url}/settings`)
      .then(response => {
        const whatsappData = response.data.data.find(item => item.key === 'whatsapp');
        if (whatsappData) {
          setWhatsappLink(whatsappData.value);  // Set the WhatsApp link value
        }
            
      })
      .catch(error => {
        console.error('Error fetching WhatsApp link:', error);
      });
  }, []);

  const handleWhatsAppClick = () => {
    if (whatsappLink) {
      window.location.href = whatsappLink;  // Redirect to the WhatsApp link
    }
  };

  return (
    <div className='fixed bottom-10 lg:right-20 right-5 z-50'>
      <FaWhatsapp
        className='lg:w-[82px] lg:h-[82px] w-14 h-14 bg-[#17AC07] text-white rounded-full p-3 cursor-pointer'
        onClick={handleWhatsAppClick}  // Trigger the redirect on click
      />
    </div>
  );
};

export default WhatsApp;
