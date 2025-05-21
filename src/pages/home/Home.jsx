import React, { Suspense } from 'react';
import logo from '../../../public/images//logo.png'
import HomePageForm from './HomePageForm'

const Home = () => {
    return (
      <div className=' '>
      <div dir='ltr' className='px-32 py-5'>
                <img src={logo} alt='logo' class width={200} height={200} />
            </div>
      <h2 className='bg-[#400b0a] my-10 h-[100px] flex items-center justify-center text-gray-100 text-3xl'>
        أهلاً ومرحباً بكم
      </h2>
      <HomePageForm/>
      </div>
    );
};

export default Home;
