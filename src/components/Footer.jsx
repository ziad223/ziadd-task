import { useTranslation } from 'react-i18next';
import { BiChevronLeft } from 'react-icons/bi';
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import facebook from '../../public/images/facebook_icon.svg';
import instagram from '../../public/images/instagram_icon.svg';
import twitter from '../../public/images/twitter_icon.svg';
import youtube from '../../public/images/youtube_icon.svg';
import visa from '../../public/images/visa-logo.png';
import master from '../../public/images/mastercard-logo.png';
import miza from '../../public/images/meeza-logo.png';

const Footer = () => {
    const { t , i18n } = useTranslation();

    return (
        <div className='bg-[#f6f1d3] py-20'>
            <div className="container flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 text-center md:text-right">
                <div>
                    <h2 className='font-bold'>{t('quick_links')}</h2>
                    <ul className='flex flex-col gap-3 mt-5'>
                        <li><a href="#">{t('home')}</a></li>
                        <li><a href="#">{t('about_us')}</a></li>
                        <li><a href="#">{t('delivery_to')}</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'>{t('accounts')}</h2>
                    <ul className='flex flex-col gap-3 mt-5'>
                        <li><a href="#">{t('my_account')}</a></li>
                        <li><a href="#">{t('contact_us')}</a></li>
                        <li><a href="#">{t('terms_conditions')}</a></li>
                        <li><a href="#">{t('privacy')}</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'>{t('call_us')}</h2>
                    <div className='mt-6'>
                        <div className='flex items-center justify-center md:justify-start gap-4'>
                            <FaMobileAlt className='text-[#6c0606]' />
                            {t('phone_number')}
                        </div>
                        <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>
                            <FaEnvelope className='text-[#6c0606]' />
                            {t('email_address')}
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className={` ${i18n.language === 'ar' ? 'text-right' : 'text-left'} font-bold`}>{t('write_to_us')}</h2>
                    <div className='mt-6 flex items-center justify-center md:justify-start'>
                        <input
                            type="text"
                            className='bg-white h-[40px] py-5 block outline-none px-5 w-full max-w-[200px]'
                            placeholder={t('enter_your_email')}
                        />
                        <button className='bg-[#a70101] w-[60px] h-[40px] flex items-center justify-center'>
                            <BiChevronLeft className='text-white text-4xl' />
                        </button>
                    </div>
                    <div className='mt-10'>
                        <h2 className={` ${i18n.language === 'ar' ? 'text-right' : 'text-left'} font-bold`}>{t('follow_us')}</h2>
                        <ul className='mt-5 flex gap-3 justify-center md:justify-start'>
                            <li><img src={twitter} className='w-10 cursor-pointer transition duration-300 hover:scale-50' alt="" /></li>
                            <li><img src={facebook} className='w-10 cursor-pointer transition duration-300 hover:scale-50' alt="" /></li>
                            <li><img src={instagram} className='w-10 cursor-pointer transition duration-300 hover:scale-50' alt="" /></li>
                            <li><img src={youtube} className='w-10 cursor-pointer transition duration-300 hover:scale-50' alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* البلوك السفلي */}
            <div className="container mt-10">
                <hr className='mt-10' />
                <div className='mt-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-right'>
                    <div className="flex items-center gap-7 justify-center md:justify-start">
                        <img src={visa} className='w-14 cursor-pointer transition duration-300 hover:scale-50' alt="" />
                        <img src={master} className='w-14 cursor-pointer transition duration-300 hover:scale-50' alt="" />
                        <img src={miza} className='w-14 cursor-pointer transition duration-300 hover:scale-50' alt="" />
                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-3 md:gap-5'>
                        <p className='text-[12px] border-l-2 px-5 border-gray-400 pr-2'>{t('terms_and_conditions')}</p>
                        <p className='text-[12px] border-l-2 px-5 border-gray-400 pr-2'>{t('privacy_policy')}</p>
                        <p className='text-[12px]'>{t('design_credit')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
