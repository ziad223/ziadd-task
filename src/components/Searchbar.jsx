import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
      const { t , i18n } = useTranslation();
    
    return (
        <div className='container relative '>
            <input
                type="text"
                placeholder={t('search')}
                className={`
          bg-white 
          px-4 
          h-[45px] 
          sm:h-[50px] 
          text-sm sm:text-base 
          rounded-[5px] 
          border-[2px] sm:border-[3px] 
          border-[#ccc] 
          outline-none 
          w-full 
          mx-auto
          mt-4 sm:mt-5
        `}
            />
            <CiSearch
                className={`
          text-[#444444] 
          text-xl sm:text-2xl 
          absolute 
          ${i18n.language === 'ar' ? 'left-3 sm:left-4 ' : 'right-3 sm:right-4 '}
          lg:top-[33px] top-[25px]
                `}
            />
        </div>
    );
};

export default Searchbar;
