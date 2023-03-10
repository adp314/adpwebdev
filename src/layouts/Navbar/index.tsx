import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import "../../i18n";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const isWorkPage = location.pathname === "/work";
  const isAboutPage = location.pathname === "/about";

  const [langDropDown, setLangDropDown] = useState(false);
  const [langSelected, setLangSelected] = useState("");

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
    <div className="w-full font-Cairo text-white">
      <div className="pt-12 flex gap-4 justify-between items-center">
        <div className="flex gap-6 justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="tracking-normal ease-in" onClick={dropDownLang}>
              {langDropDown === false ? (
                <>
                  {langSelected === "fr" && (
                    <div className="h-8 w-10 rounded border bg-cover bg-center p-0.5 cursor-pointer hover:bg-white hover:text-black flex justify-center items-center ">
                      <span className="font-light text-xl">{langSelected}</span>
                    </div>
                  )}
                  {langSelected === "pt" && (
                    <div className="h-8 w-10 rounded border bg-cover bg-center p-0.5 cursor-pointer hover:bg-white hover:text-black flex justify-center items-center">
                      <span className="font-light text-xl">{langSelected}</span>
                    </div>
                  )}
                  {langSelected === "en" && (
                    <div className="h-8 w-10 rounded border bg-cover bg-center p-0.5 cursor-pointer hover:bg-white hover:text-black flex justify-center items-center">
                      <span className="font-light text-xl">{langSelected}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex gap-3 justify-start items-center">
                  <div className="h-8 w-10 rounded border cursor-pointer flex justify-center items-center">
                    <span className="font text-xl">{"//"}</span>
                  </div>
                  <div className="flex gap-2 text-lg">
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
            <div className="text-xl font-light flex justify-start items-center ml-8 gap-6">
              <div className={isWorkPage ? " text-white" : "text-neutral-400"}>
                <Link to="/work">
                  <p className="hover:text-white">Work</p>
                </Link>
              </div>
              <div className={isAboutPage ? " text-white" : "text-neutral-400"}>
                <Link to="/about">
                  <p className="hover:text-white">About</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 cursor-pointer">
          <a
            href="mailto:andredp314@gmail.com"
            className="text-xl font-light tracking-normal"
          >
            andredp314@gmail.com
          </a>
          <BsArrowUpRight className="text-xl" />
        </div>
      </div>
    </div>
  );
}
