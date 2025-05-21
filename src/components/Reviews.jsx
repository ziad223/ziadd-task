import { useTranslation } from 'react-i18next';
import Comments from './Comments';
import Footer from './Footer';

const Reviews = () => {
    const { t , i18n } = useTranslation();

    return (
        <>
            <div className="bg-white mt-10 lg:mt-0 pt-20 mb-20">
                <div className="container">
                    <h2 className={`text-3xl font-bold text-center ${i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'} `}>
                        {t('title')}
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center gap-10 w-full lg:w-3/4 mx-auto lg:mx-0">
                        <div className="flex flex-col w-full lg:w-1/3 gap-3 items-center justify-center bg-[#6c0606] rounded-[10px] text-white mt-5 p-5">
                            <h2 className="text-4xl font-bold">10</h2>
                            <h2>{t('rating')}</h2>
                            <h2>{t('basedOn')}</h2>
                            <h2 className="text-2xl font-bold">{t('excellent')}</h2>
                        </div>

                        {/* الصندوق الثاني */}
                        <div className="flex flex-col w-full lg:w-1/3 justify-center gap-5">
                            <div>
                                <h2>{t('foodQuality')}</h2>
                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="w-[80%] h-[5px] bg-[#400b0a]"></div>
                                    <h2>10</h2>
                                </div>
                            </div>
                            <div>
                                <h2>{t('packaging')}</h2>
                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="w-[80%] h-[5px] bg-[#400b0a]"></div>
                                    <h2>10</h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full lg:w-1/3 gap-5">
                            <div>
                                <h2>{t('deliveryTime')}</h2>
                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="w-[80%] h-[5px] bg-[#400b0a]"></div>
                                    <h2>10</h2>
                                </div>
                            </div>
                            <div>
                                <h2>{t('value')}</h2>
                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="w-[80%] h-[5px] rounded-[10px] bg-[#400b0a]"></div>
                                    <h2>10</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Comments />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Reviews;
