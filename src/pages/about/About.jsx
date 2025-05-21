import bg from '../../../public/images/about-bg.jpg';
import AboutCon from './AboutCon';

const About = () => {
  return (
  <>
      <div className="relative mt-10 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-white text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">نبذة عنا</h1>
            <p className="text-lg leading-relaxed">
              شارك.. معًا نصنع الفرق

            </p>
            <button className='bg-[#a70101] px-5 py-3 mt-3'>
              تسوق سريع
            </button>
          </div>
        </div>
      </div>
      <AboutCon/>
  </>
  );
};

export default About;
