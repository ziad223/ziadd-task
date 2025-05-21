
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/languageSlice'; 
import { useTranslation } from 'react-i18next';
import saudiFlag from '../../../public/images/home/sudia-flag.jpg'; 
import usaFlag from '../../../public/images/home/usa.jpg'; 

const LanguageSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useSelector((state) => state.language.language); 

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang)); 
    i18n.changeLanguage(lang); 
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={currentLanguage === 'ar' ? saudiFlag : usaFlag}
          alt="Flag"
          loading="lazy"
          className="md:w-[30px] w-6 h-6  md:h-[30px]  rounded-full border-2 border-white shadow-md"
        />
        <span className='text-[13px] font-normal text-[#444444]'>
          {currentLanguage === 'ar' ? 'العربية' : 'English'}
        </span>
      </div>

      {menuOpen && (
        <div className="absolute z-50 bg-white shadow-lg rounded-lg mt-2 py-2 w-[150px] top-full left-0">
          <ul>
            <li
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => changeLanguage('ar')}
            >
              <img
                src={saudiFlag}
                alt="Saudi Flag"
                loading="lazy"
                className="w-[20px] h-[20px] rounded-full"
              />
              <span className="text-[14px]">العربية</span>
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => changeLanguage('en')}
            >
              <img
                src={usaFlag}
                alt="USA Flag"
                loading="lazy"
                className="w-[20px] h-[20px] rounded-full"
              />
              <span className="text-[14px]">English</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
