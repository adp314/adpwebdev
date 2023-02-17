import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../../i18n";
import { RxHamburgerMenu, RxCross2 } from "react-icons/Rx";

export function NavbarMobile() {
  const { t, i18n } = useTranslation();

  const [langDropDown, setLangDropDown] = useState(false);
  const [langSelected, setLangSelected] = useState("");
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    setLangSelected(localStorage.getItem("i18nextLng") as string);
  }, [langSelected]);

  function handleClickFR() {
    i18n.changeLanguage("fr");
    setLangSelected("fr");
  }
  function handleClickEN() {
    i18n.changeLanguage("en");
    setLangSelected("en");
  }

  function handleClickPT() {
    i18n.changeLanguage("pt");
    setLangSelected("pt");
  }

  function dropDownLang() {
    if (langDropDown === false) {
      setLangDropDown(true);
    } else if (langDropDown === true) {
      setLangDropDown(false);
    }
  }

  return (
    <div className="w-full font-Cairo text-white bg-black bg-opacity-40 sticky top-0 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
      <div className="py-4 flex gap-4 justify-between items-center px-8 ">
        <div className="flex gap-4 justify-start items-center">
          <div className="flex justify-center items-center text-3xl pb-2">
            <span className="underline">a</span>
            <p className="font-bold">dp</p>
          </div>
          <div onClick={dropDownLang}>
            {langDropDown === false ? (
              <>
                {langSelected === "fr" && (
                  <div className="h-6 w-8 rounded border bg-cover bg-center cursor-pointer  hover:bg-white hover:text-black flex justify-center items-center">
                    <span className="font-light text-lg">{langSelected}</span>
                  </div>
                )}
                {langSelected === "pt" && (
                  <div className="h-6 w-8 rounded border bg-cover bg-center cursor-pointer hover:bg-white hover:text-black flex justify-center items-center">
                    <span className="font-light text-lg">{langSelected}</span>
                  </div>
                )}
                {langSelected === "en" && (
                  <div className="h-6 w-8 rounded border bg-cover bg-center cursor-pointer hover:bg-white hover:text-black flex justify-center items-center">
                    <span className="font-light text-lg">{langSelected}</span>
                  </div>
                )}
              </>
            ) : (
              <div className="flex gap-3 justify-start items-center">
                <div className="h-6 w-8 rounded border cursor-pointer flex  justify-center items-center">
                  <span className="font text-lg">{"//"}</span>
                </div>
                <div className="flex gap-2 text-base">
                  <div
                    className="flex justify-center items-center cursor-pointer font-light"
                    onClick={handleClickFR}
                  >
                    <p className=" text-gray-200 opacity-90 hover:text-white">
                      fr
                    </p>
                  </div>
                  <span className="flex justify-center items-center text-white opacity-40">
                    /
                  </span>
                  <div
                    className="flex justify-center items-center cursor-pointer font-light"
                    onClick={handleClickPT}
                  >
                    <p className=" text-gray-200 opacity-90 hover:text-white hover:opacity-100">
                      pt
                    </p>
                  </div>
                  <span className="flex justify-center items-center text-white opacity-40">
                    /
                  </span>
                  <div
                    className="flex justify-center items-center cursor-pointer font-light"
                    onClick={handleClickEN}
                  >
                    <p className=" text-gray-200 opacity-90 hover:text-white hover:opacity-100">
                      en
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {!isMenu ? (
            <RxHamburgerMenu
              className="text-3xl"
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            />
          ) : (
            <RxCross2
              className="text-3xl"
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            />
          )}
        </div>
      </div>
      {isMenu && (
        <div className="w-full h-full fixed bg-gradient-to-bl from-[#05010E] via-[#160523] to-[#1D041F] animate-gradient">
          <nav className="flex flex-col justify-center items-center">
            <p className="font-light text-2xl py-5">{t("nav_home")}</p>
            <span className="h-0.5 w-full bg-white bg-opacity-20" />
            <p className="font-light text-2xl py-5">{t("nav_about")}</p>
            <span className="h-0.5 w-full bg-white bg-opacity-20" />
            <p className="font-light text-2xl py-5">{t("nav_contact")}</p>

            <div className="h-full w-[60%] rounded bg-gradient-to-tr from-violet-200 to-slate-600 animate-gradientSpeed p-0.5 cursor-pointer mt-10 ">
              <div className="h-full w-full bg-neutral-800 rounded px-2 flex justify-center items-center py-8">
                <p className="text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-bl from-violet-200 to-slate-600 animate-gradientSpeed">
                  {t("nav_curriculum")}
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
