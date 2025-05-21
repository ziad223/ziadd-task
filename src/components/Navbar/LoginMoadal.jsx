import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { CiLock } from "react-icons/ci";

const LoginModal = ({ isOpen, onClose }) => {
    const { t , i18n } = useTranslation();

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={onClose}
            >
                <div
                    className="bg-white rounded-lg h-[400px] w-[400px] relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-gray-300 w-full h-14">
                        <button
                            onClick={onClose}
                            className={`absolute top-1 ${i18n.language === 'ar' ? ' left-3' : ' right-3'} bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-gray-900 font-bold text-xl`}
                        >
                            <FaTimes />
                        </button>
                        <h2 className="p-4">{t("loginModal.title")}</h2>
                    </div>

                    <div className="p-5">
                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-sm">
                                    {t("loginModal.usernameLabel")}
                                </label>
                                <div className="relative">
                                    <FaRegEnvelope className={`absolute ${i18n.language === 'ar' ? 'right-2 top-3' : 'left-2 top-2'} text-2xl  text-gray-400`} />
                                <input
                                        type="text"
                                        className="h-[40px] border border-gray-300 px-12 outline-none"
                                        placeholder={t("loginModal.usernamePlaceholder")}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-sm">
                                    {t("loginModal.passwordLabel")}
                                </label>
                                <div className="relative">
                                    <CiLock className={`absolute ${i18n.language === 'ar' ? 'right-2 top-3' : 'left-2 top-2'} text-2xl  text-gray-400`} />
                                    <input
                                        type="password"
                                        className="h-[40px] border border-gray-300 px-12 outline-none"
                                        placeholder={t("loginModal.passwordPlaceholder")}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="p-5 flex items-center justify-between">
                        <h2 className="text-gray-500 text-sm">{t("loginModal.forgotPassword")}</h2>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" className="w-5 h-5 accent-[#a70101]" />
                            <label htmlFor="" className="text-gray-500 text-sm">
                                {t("loginModal.rememberMe")}
                            </label>
                        </div>
                    </div>

                    <button className="p-5 mt-5 flex items-center justify-center bg-[#a70101] w-[90%] mx-auto text-white h-[40px]">
                        {t("loginModal.loginButton")}
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginModal;
