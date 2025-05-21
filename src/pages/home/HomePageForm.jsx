import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePageForm = () => {
  const navigate = useNavigate();
  const [governorate, setGovernorate] = useState('');
  const [area, setArea] = useState('');
  const [error, setError] = useState('');

  const areasByGovernorate = {
    'الأسكندرية': [
      'سموحة', 'محرم بك', 'العصافرة', 'لوران', 'المعمورة',
      'العجمي', 'كامب شيزار', 'سيدي بشر', 'المنتزه',
      'ميامي', 'الشاطبي', 'الإبراهيمية', 'سان ستيفانو',
      'باكوس', 'رأس التين'
    ],
    'الجيزة': [
      'الدقي', 'المهندسين', 'الهرم', 'الوراق', 'امبابة',
      'العمرانية', 'فيصل', 'بولاق الدكرور', 'كرداسة',
      'العجوزة', 'المنيب', 'الجيزة', 'أوسيم', 'الصف', 'البدرشين'
    ]
  };

  const handleClick = (e) => {
    if (!governorate || !area) {
      e.preventDefault(); // يمنع التنقل
      setError('برجاء اختيار المحافظة والمنطقة');
    } else {
      setError('');
    }
  };

  return (
    <div className='mt-10 px-4'>
      <h2 className='text-center text-2xl'>فضلاً، اختر منطقتك لعرض القائمة.</h2>
      <form className='mx-auto lg:w-[500px] bg-[#eee] p-10 mt-10'>
        <div className='flex flex-col gap-2'>
          <label className='text-sm'>اختر محافظة*</label>
          <select
            className='h-[40px] outline-none px-5 rounded-[5px]'
            value={governorate}
            onChange={(e) => {
              setGovernorate(e.target.value);
              setArea('');
            }}
          >
            <option hidden>اختر محافظة*</option>
            <option>الأسكندرية</option>
            <option>الجيزة</option>
          </select>
        </div>

        <div className='flex flex-col gap-2 mt-8'>
          <label className='text-sm'>اختر منطقة*</label>
          <select
            className='h-[40px] outline-none px-5 rounded-[5px]'
            value={area}
            onChange={(e) => setArea(e.target.value)}
            disabled={!governorate}
          >
            <option hidden>اختر منطقة*</option>
            {governorate &&
              areasByGovernorate[governorate]?.map((a, i) => (
                <option key={i}>{a}</option>
              ))}
          </select>
        </div>

        {error && <p className='text-red-600 text-sm mt-4'>{error}</p>}

        <Link
          to="/home"
          onClick={handleClick}
          className={`h-[40px] flex items-center justify-center mt-10 w-full rounded-[5px] text-gray-100 ${governorate && area ? 'bg-[#a70101]' : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          اذهب للتسوق
        </Link>
      </form>
    </div>
  );
};

export default HomePageForm;
