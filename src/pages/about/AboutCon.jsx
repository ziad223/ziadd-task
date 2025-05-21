import React from 'react';
import img from '../../../public/images/about-img.png';
import Footer from '../../components/Footer';

const AboutCon = () => {
    return (
      <>
            <div className='my-20'>
                <h2 className='text-center text-3xl'>نبذة عنا</h2>
                <div className='container'>
                    <div className="flex flex-col lg:flex-row mt-10 gap-10 items-center">

                        <img src={img} alt="img" className="" />

                        <div className='w-[90%] mx-auto lg:w-full'>
                            <h2 className='lg:text-3xl text-2xl font-bold'>شارك.. معًا نصنع الفرق.</h2>
                            <p className='text-sm text-gray-500 mt-5 leading-[22px] '>
                                في ظل ارتفاع أسعار المواد الغذائية بشكل عام واللحوم بشكل خاص، أصبح من الضروري البحث عن حلول مبتكرة تساهم في تخفيف الأعباء المالية على المستهلكين. إحدى هذه الحلول هي مبادرة بيع اللحوم بسعر الجملة، والتي تعتمد على اشتراك مجموعة من العملاء في شراء خروف واحد، مما يمكنهم من الحصول على اللحوم بسعر أقل بكثير مقارنة بشرائها بالتجزئة..
                            </p>
                        </div>
                    </div>
                    <div className='mt-20 w-[90%] mx-auto lg:w-full'>
                        <div>
                            <h2 className='text-2xl font-semibold'>مبادرة تطبيق "Sharik" لبيع اللحوم بهامش ربح بسيط لمواجهة ارتفاع الأسعار
                            </h2>
                            <p className='mt-4 text-xs leading-[22px]'>
                                في ظل ارتفاع أسعار المواد الغذائية بشكل عام واللحوم بشكل خاص، أصبح من الضروري البحث عن حلول مبتكرة تساهم في تخفيف الأعباء المالية على المستهلكين. إحدى هذه الحلول هي مبادرة تطبيق "Sharik"، التي تعتمد على اشتراك مجموعة من العملاء في شراء خروف واحد، مما يمكنهم من الحصول على اللحوم بسعر أقل بكثير مقارنة بشرائها بالتجزئة.
                            </p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl font-semibold'>
                                تفاصيل المبادرة:
                            </h2>
                            <ul className='mt-5 list-disc flex flex-col gap-2'>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>اشتراك جماعي:</span> يتم تنظيم مجموعات من العملاء بحيث يشترك كل مجموعة في شراء خروف واحد. يمكن لكل مجموعة أن تتكون من خمسة إلى عشرة أشخاص، حسب حجم الخروف واحتياجات الأفراد.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>تقسيم عادل:</span> يتم ذبح الخروف وتقسيمه بشكل عادل بين المشتركين، حيث يحصل كل فرد على جزء محدد من اللحم وفقاً لحصته المتفق عليها. لضمان توزيع عادل ومتساوٍ، يتم تحديد الحد الأقصى للشراء عند 3 كيلوغرامات لكل عميل.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'> توفير في التكلفة:</span>بفضل الشراء الجماعي، يمكن للمشتركين الحصول على اللحوم بسعر يقارب نصف السعر المعتاد في الأسواق، نظراً للاستفادة من أسعار الجملة وتقليل التكاليف اللوجستية.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>رسوم إدارية رمزية:</span> تضاف رسوم إدارية رمزية على كل طلب، لتغطية تكاليف التصوير، متابعة عمليات الذبح مع الجزار، ورفع الإعلانات على وسائل التواصل الاجتماعي.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>جودة مضمونة:</span> سيتم اختيار الخراف من مصادر موثوقة تضمن جودة اللحم وصحته، مع توفير شهادات صحية تؤكد سلامة المنتجات.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl font-semibold mt-8'>
                                تفاصيل المبادرة:
                            </h2>
                            <ul className='mt-5 list-disc flex flex-col gap-2 mb-10'>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>تخفيف الأعباء المالية:</span> مساعدة الأسر على مواجهة ارتفاع أسعار اللحوم من خلال تقديم حلول أكثر اقتصادية.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'> تعزيز التعاون المجتمعي:</span>تشجيع العمل الجماعي والتضامن بين أفراد المجتمع في مواجهة التحديات الاقتصادية.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>ضمان الجودة :</span>قديم لحوم طازجة وصحية بأسعار معقولة تضمن حصول الجميع على تغذية سليمة.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>رسوم إدارية رمزية:</span> تضاف رسوم إدارية رمزية على كل طلب، لتغطية تكاليف التصوير، متابعة عمليات الذبح مع الجزار، ورفع الإعلانات على وسائل التواصل الاجتماعي.</li>
                                <li className='text-sm leading-[22px]'><span className='text-[#a70101] font-bold'>جودة مضمونة:</span> سيتم اختيار الخراف من مصادر موثوقة تضمن جودة اللحم وصحته، مع توفير شهادات صحية تؤكد سلامة المنتجات.
                                </li>
                            </ul>
                            <p className='mt-5'>
                                نأمل أن تلاقي هذه المبادرة استحسان المجتمع وتساهم في تخفيف الأعباء المالية على الأسر، مع تعزيز روح التعاون والتكافل بين الأفراد. تطبيق "Sharing" يهدف إلى تقديم أفضل الحلول الاقتصادية والاجتماعية لضمان رضا عملائه ودعم المجتمع.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
      </>
    );
}

export default AboutCon;
