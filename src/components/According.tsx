import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import thanks from '../../public/images/thank.jpg';
import { useTranslation } from 'react-i18next';

const According = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const targetDate = new Date('2025-07-31T00:00:00');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className='mt-28 mb-20'>
            <h2 className='text-2xl'>{t('section_title')}</h2>
            <div className='mt-10 space-y-5'>
                {[1, 2].map((item, index) => (
                    <div key={index} className='bg-white rounded shadow'>
                        <div className='h-[50px] flex items-center cursor-pointer px-5' onClick={() => toggleAccordion(index)}>
                            <div className='flex items-center gap-2'>
                                <FaPlus className='text-[#a70101]' />
                                <h3>{t('accordion_title')}</h3>
                            </div>
                        </div>
                        {openIndex === index && (
                            <div className='p-5 border-t bg-gray-50'>
                                <div className='w-[90%] mx-auto border p-5 text-center'>
                                    <h2 className='text-black text-3xl'>{t('video_title')}</h2>
                                    <p className='mt-5'>{t('video_description')}</p>
                                    <iframe className='mt-10' width='100%' height={400} src="https://www.youtube.com/embed/hMm1LXy4nLU" title={t('video_title')} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='w-full text-white bg-[#400b0a] p-10 leading-[22px] mt-5'>
                {t('initiative_description')}
            </div>

            <div className='flex flex-col gap-10 items-center justify-center mt-10'>
                <h2 className='text-[#222222] text-3xl'>{t('pickup_title')}</h2>
                <h4>{t('pickup_message')}</h4>
                <h2 className='text-[#222222] text-3xl'>{t('countdown_title')}</h2>
                <div className='grid lg:grid-cols-4 gap-14'>
                    <div className='flex flex-col gap-5 items-center'>
                        <h2 className='text-5xl'>{timeLeft.days}</h2>
                        <h3 className='text-xl'>{t('days')}</h3>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h2 className='text-5xl'>{timeLeft.hours}</h2>
                        <h3 className='text-xl'>{t('hours')}</h3>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h2 className='text-5xl'>{timeLeft.minutes}</h2>
                        <h3 className='text-xl'>{t('minutes')}</h3>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h2 className='text-5xl'>{timeLeft.seconds}</h2>
                        <h3 className='text-xl'>{t('seconds')}</h3>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center sm:flex-row gap-10 mt-20'>
                <div className='bg-white rounded-[10px]'>
                    <img src={thanks} alt="thanks" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>{t('special_thanks')}</h2>
                    <h3 className='font-bold'>{t('engineer')} <span className='text-[#a70101] mx-1'>محمد حمدي</span></h3>
                    <h3 className='font-bold'>{t('initiative_by')}<span className='text-[#a70101] mx-1'>م/ عاطف توفيق</span></h3>
                    <h3 className='font-bold'>{t('site_by')}<span className='text-[#a70101] mx-1'>شركة البيت ديزاين للحلول البرمجية</span></h3>
                </div>
            </div>
        </div>
    );
};

export default According;
