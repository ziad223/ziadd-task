import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import person from '../../public/images/person.svg';
import { useTranslation } from 'react-i18next';

const Comments = () => {
    const { t , i18n } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const targetDate = new Date('2025-07-31T00:00:00');

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
        <>
            <div className='mt-14 mb-20 py-20 lg:w-3/4 container'>
                <h2 className={`text-3xl font-bold text-center ${i18n.language === 'ar' ? "lg:text-right" : "lg:text-left"}  mt-10`}>{t('comments')}</h2>
                <div className='mt-10 space-y-5'>
                    {[1].map((item, index) => (
                        <div key={index} className='bg-white rounded shadow-lg'>
                            <div
                                className='h-[50px] flex items-center cursor-pointer px-5'
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className='flex items-center gap-2'>
                                    <FaPlus className='text-[#a70101]' />
                                    <h3>{t('viewAllComments')}</h3>
                                </div>
                            </div>

                            {openIndex === index && (
                                <div className='p-5 border-t shadow-lg'>
                                    <div className='w-[90%] mx-auto border p-5 text-center'>
                                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-5">
                                            <div className='flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right'>
                                                <div className='flex flex-col items-center sm:items-start'>
                                                    <img src={person} alt="person" className='rounded-full w-16 h-16 object-cover' />
                                                    <h2 className='mt-2 text-sm sm:text-base'>{t('userName')}</h2>
                                                </div>
                                                <div className='flex flex-col gap-2 text-sm sm:text-base'>
                                                    <h4 className='text-gray-400'>{t('commentDate')}</h4>
                                                    <h2 className='font-bold'>{t('commentTitle')}</h2>
                                                    <h3>{t('commentBody')}</h3>
                                                    <h5 className='text-gray-400'>{t('replyDate')}</h5>
                                                </div>
                                            </div>
                                            <h3 className='text-sm sm:text-base'>
                                                <span className='text-[#400b0a] font-bold'>
                                                    <span className='text-2xl'>10</span>/10
                                                </span> {t('rating')}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 mt-10">
                                            <div className='flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right'>
                                                <div className='flex flex-col items-center sm:items-start'>
                                                    <img src={person} alt="person" className='rounded-full w-16 h-16 object-cover' />
                                                    <h2 className='mt-2 text-sm sm:text-base'>{t('userName')}</h2>
                                                </div>
                                                <div className='flex flex-col gap-2 text-sm sm:text-base'>
                                                    <h4 className='text-gray-400'>{t('commentDate')}</h4>
                                                    <h2 className='font-bold'>{t('commentTitle')}</h2>
                                                    <h3>{t('commentBody')}</h3>
                                                    <h5 className='text-gray-400'>{t('replyDate')}</h5>
                                                </div>
                                            </div>
                                            <h3 className='text-sm sm:text-base'>
                                                <span className='text-[#400b0a] font-bold'>
                                                    <span className='text-2xl'>10</span>/10
                                                </span> {t('rating')}
                                            </h3>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Comments;
