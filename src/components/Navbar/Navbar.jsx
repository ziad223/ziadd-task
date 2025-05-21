import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import logo from '../../../public/images/logo.png';
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoginModal from "./LoginMoadal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false); // حالة المودال
  const { t } = useTranslation();

  return (
    <div className="py-5 px-5 lg:px-0 bg-white">
      <div className="flex items-center justify-between w-full container">
        <div className="flex items-center justify-between w-full md:hidden">
          <img src={logo} alt="logo" className="w-[130px] object-cover" />
          <FiMenu
            className="text-3xl cursor-pointer text-[#444444]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <ul className="hidden md:flex items-center gap-5">
          <li className="text-sm">
            <CiLogin
              className="text-2xl cursor-pointer text-[#444444]"
              onClick={() => setLoginModalOpen(true)} // فتح المودال عند الضغط
            />
          </li>
          <Link to='/home' className="text-sm transition duration-300 hover:text-[#a70101]">{t("home")}</Link>
          <Link to='/about' className="text-sm transition duration-300 hover:text-[#a70101]">{t("about")}</Link>
          <Link to='/' className="text-sm transition duration-300 hover:text-[#a70101]">{t("branches")}</Link>
          <Link to='/contact' className="text-sm transition duration-300 hover:text-[#a70101]">{t("contact")}</Link>
          <Link to='/' className="text-sm transition duration-300 hover:text-[#a70101]">{t("orderStatus")}</Link>
          <Link to='/' className="text-sm transition duration-300 hover:text-[#a70101]">{t("changeArea")}</Link>
          <li><LanguageSwitcher /></li>
        </ul>

        <img
          src={logo}
          alt="logo"
          className="w-[130px] object-cover hidden md:block"
        />
      </div>

      {menuOpen && (
        <ul className="md:hidden flex justify-center lg:justify-start flex-col gap-4 mt-5 px-4">
          <li
            className="text-sm flex items-center gap-2 justify-center lg:justify-start cursor-pointer"
            onClick={() => setLoginModalOpen(true)}  // فتح المودال من القائمة الصغيرة
          >
            <CiLogin className="text-2xl text-[#444444]" /> {t("navbar.login")}
          </li>
          <Link to='/home' className="text-sm text-center lg:text-start">{t("home")}</Link>
          <Link to='/about' className="text-sm text-center lg:text-start">{t("about")}</Link>
          <Link to='/' className="text-sm text-center lg:text-start">{t("branches")}</Link>
          <Link to='/contact' className="text-sm text-center lg:text-start">{t("contact")}</Link>
          <Link to='/' className="text-sm text-center lg:text-start">{t("orderStatus")}</Link>
          <Link to='/' className="text-sm text-center lg:text-start">{t("changeArea")}</Link>
          <li><LanguageSwitcher /></li>
        </ul>
      )}

      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
};

export default Navbar;
