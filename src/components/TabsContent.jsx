import img from '../../public/images/animal.webp';
import animal1 from '../../public/images/animal-1.png';
import animal2 from '../../public/images/animal-2.jpg';
import According from './According';
import { useTranslation } from 'react-i18next';

const TabsContent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className='relative h-[200px] bg-cover bg-center rounded-t-[5px]'
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 rounded-t-[5px]'></div>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-5 mt-10'>
        <div className='lg:w-1/2 bg-white'>
          <div
            className='relative h-[400px]  bg-cover bg-center rounded-t-[5px]'
            style={{ backgroundImage: `url(${animal1})` }}
          >
            <div className='absolute bottom-0 right-0 bg-[#000] opacity-40 w-full'>
              <h2 className='text-white text-2xl font-bold -mb-3 pt-5 mr-5 z-50'>
                {t('priceBasedOnChoice')}
              </h2>
              <p className='line-through mt-5 text-white mr-5 mb-2'>450.00 ج.م</p>
            </div>
          </div>
          <div className='p-5'>
            <h2 className='text-xl text-[#a70101] font-bold'>{t('sharik7Beef')}</h2>
            <p className='mt-2 text-sm leading-[22px]'>
              {t('announcementText')}
            </p>
            <button className='bg-[#1c7805] hover:bg-[#a70101] transition duration-300 rounded-[5px] text-white w-full  mt-24 h-[40px]'>
              {t('bookNow')}
            </button>
          </div>
        </div>
        <div className='lg:w-1/2 bg-white'>
          <div
            className='relative h-[400px]  bg-cover bg-center rounded-t-[5px]'
            style={{ backgroundImage: `url(${animal2})` }}
          >
            <div className='absolute bottom-0 right-0 bg-[#000] opacity-40 w-full'>
              <h2 className='text-white text-2xl font-bold -mb-3 pt-5 mr-5 z-50'>
                {t('priceBasedOnChoice')}
              </h2>
              <p className='line-through mt-5 text-white mr-5 mb-2'>450.00 ج.م</p>
            </div>
          </div>
          <div className='p-5'>
            <h2 className='text-xl text-[#a70101] font-bold'>{t('lambMeat')}</h2>
            <p className='mt-2 text-sm leading-[22px]'>
              {t('announcementText')}
            </p>
            <button className='bg-[#1c7805] hover:bg-[#a70101] transition duration-300 rounded-[5px] text-white w-full mt-24 h-[40px]'>
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div>
      <According />
    </div>
  );
};

export default TabsContent;
