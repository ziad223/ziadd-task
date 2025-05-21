import { FaRegComments } from 'react-icons/fa';
import img from '../../public/images/move-img.gif';
import TabsContent from './TabsContent';
import Reviews from './Reviews';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="mt-10 bg-white h-[80px]">
        <div className="mt-10 container flex items-center h-full gap-5">
          <a className="bg-[#a70101] px-5 rounded-[30px] flex items-center justify-center hover:bg-black h-[50px] text-white">
            {t('butchery')}
          </a>
          <a className="bg-[#a70101] px-5 rounded-[30px] flex items-center justify-center hover:bg-black h-[50px] text-white">
            {t('vegetables')}
          </a>
          <a className="bg-[#a70101] px-5 rounded-[30px] flex items-center justify-center hover:bg-black h-[50px] text-white">
            {t('poultry')}
          </a>
          <a className="bg-[#a70101] px-5 rounded-[30px] flex items-center justify-center hover:bg-black h-[50px] text-white">
            {t('groceries')}
          </a>
          <a className="px-5 rounded-[30px] flex items-center gap-1 justify-center bg-black h-[40px] text-white">
            <FaRegComments />
            <span>{t('viewComments')}</span>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 w-[80%] mx-auto">
          <div className="lg:w-[65%] w-full">
            <TabsContent />
          </div>
          <div className="lg:w-[35%] h-max w-full bg-white">
            <div className="bg-[#a70101] h-[50px] rounded-tl-[5px] rounded-tr-[5px] text-xl text-center text-white flex items-center justify-center">
              {t('cart')}
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-10">
              <img src={img} alt="img" />
              <h3>{t('addToCart')}</h3>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
    </>
  );
};

export default Tabs;
