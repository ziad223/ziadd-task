import React, { useEffect, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import logo from '../public/images/logo.png';
import Homee from './pages/homee/Homee';
import Searchbar from './components/Searchbar';

const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <>
      {!hideHeaderFooter && <><Navbar /> <Searchbar /></>}
      {children}
    </>
  );
};

const App = () => {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  return (
    <BrowserRouter basename="/ghasiq/frontend">
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="h-screen"></div>
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Homee />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Suspense>
      
    </BrowserRouter>
  );
};

export default App;
