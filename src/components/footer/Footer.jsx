import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import img1 from '../../../public//images/home/footer-2.svg'
import img2 from '../../../public//images/home/footer-3.svg'
import img3 from '../../../public//images/home/footer-1.svg'
import { base_url } from '../../utils/config';
const Footer = () => {
  const { t, i18n } = useTranslation(); // استخدام الترجمة
  const [footerData, setFooterData] = useState(null);
  const [locationUrl , setLocationUrl] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    axios.get(`${base_url}/settings`, {
      headers: {
        'Accept-Language': i18n.language, // Set the language for the request
      },
    })
      .then((response) => {
        if (response.data.status) {
          const data = response.data.data;
          console.log(data);
          
          const siteNameElement = data.find(item => item.key === 'site_link');
          setLocationUrl(siteNameElement.value);
          
          
          setFooterData({
            email: data.find(item => item.key === 'email')?.value,
            mobile: data.find(item => item.key === 'mobile')?.value,
            location: data.find(item => item.key === 'location')?.value,
            workingHours: data.find(item => item.key === 'time')?.value,
            socialLinks: {
              twitter: data.find(item => item.key === 'twitter')?.value,
              instagram: data.find(item => item.key === 'instagram')?.value,
              snapchat: data.find(item => item.key === 'snapchat')?.value,
              facebook: data.find(item => item.key === 'facebook')?.value,
              tiktok: data.find(item => item.key === 'tiktok')?.value,
              youtube: data.find(item => item.key === 'youtube')?.value,
              linkedin: data.find(item => item.key === 'linkedin')?.value,
            },
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching footer data:', error);
      });
  }, [i18n.language]);

  // Render loading if data is not yet available
  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-full bg-cover bg-[#133658] py-16"
      id="footer-section"
    >
      <div className="flex flex-col lg:mr-10 lg:flex-row px-4 md:px-16 lg:px-24">

        {/* روابط سريعة */}
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
          <h2 className="text-[14px] font-bold text-[#fff]">{t('quick_links')}</h2>
          <ul className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-20">
  <div>
    <li
      className="flex items-center gap-2 mb-2 cursor-pointer "
      onClick={() => document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('home')}</span>
    </li>
    <li
      className="flex items-center mt-4 gap-2 mb-2 cursor-pointer"
      onClick={() => document.getElementById('about-us-section').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('about_us')}</span>
    </li>
    <Link to='/projects'
      className="flex items-center mt-4 gap-2 mb-2 cursor-pointer"
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('our_projects')}</span>
    </Link>
  </div>
  <div>
    <li
      className="flex items-center gap-2 mb-2 cursor-pointer"
      onClick={() => document.getElementById('our-services-section').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('our_services')}</span>
    </li>
    <li
      className="flex items-center mt-4 gap-2 mb-2 cursor-pointer"
      onClick={() => document.getElementById('media-center-section').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('media_center')}</span>
    </li>
    <li
      className="flex items-center mt-4 gap-2 mb-2 cursor-pointer"
      onClick={() => document.getElementById('our-companies-section').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="w-4 mt-1 h-4 border-2 opacity-50 border-[#fff] rounded-full bg-transparent"></div>
      <span className="text-[14px] text-[#fff]">{t('our_companies')}</span>
    </li>
  </div>
</ul>

        </div>

        {/* تواصل معنا */}
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
          <h2 className="text-[14px] font-bold text-[#fff]">{t('contact_us')}</h2>
          <ul className="mt-10">
            <li className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src={img3} loading="lazy" alt="email" className="mt-1 w-[32px] h-[32px]" />
              <span className="text-white text-[14px]">{footerData.email}</span>
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer mt-5">
              <img src={img1} loading="lazy" alt="phone" className="mt-1 w-[32px] h-[32px]" />
              <span className="text-white text-[14px]">{footerData.mobile}</span>
            </li>
          </ul>
        </div>

        {/* موقعنا ومواعيد العمل */}
        <div className="lg:w-1/3 w-full">
          <h2 className="text-[14px] font-bold text-[#fff]">{t('location_working_hours')}</h2>
          <ul className="mt-10">
            <a href={locationUrl} target='_blankx' className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src={img2} loading="lazy" alt="location" className="mt-1 w-[32px] h-[32px]" />
              <span className="text-white text-[14px]">{footerData.location}</span>
            </a>
            <li className="flex items-center gap-2 mb-2 cursor-pointer mt-5">
              <img src={img1} loading="lazy" alt="working hours" className="mt-1 w-[32px] h-[32px]" />
              <span className="text-white text-[14px]">{footerData.workingHours}</span>
            </li>
          </ul>
        </div>

      </div>
      <hr className="mt-16 w-[80%] mx-auto opacity-25" />
      <div className="flex gap-5 flex-col lg:flex-row justify-between items-center mt-5 lg:w-[80%] mx-auto">
        <div className="flex items-center gap-3">
          {Object.entries(footerData.socialLinks).map(([key, url]) => {
            if (url) {
              const IconComponent = {
                facebook: FaFacebook,
                instagram: FaInstagram,
                twitter: FaTwitter,
                snapchat : FaSnapchat,
                tiktok : FaTiktok,
                linkedin : FaLinkedin,
                youtube : FaYoutube
                // أضف المزيد من الأيقونات هنا حسب الحاجة
              }[key];

              return (
                <div key={key} className="w-[35px] cursor-pointer h-[35px] flex justify-center items-center rounded-full border-2 border-[#fff]">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {IconComponent && <IconComponent className="text-white text-[20px]" />}
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
        <h2 className="text-9px text-white">{t('rights_reserved')}</h2>
      </div>
    </div>
  );
};

export default Footer;
