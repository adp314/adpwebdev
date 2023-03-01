import { useTranslation } from "react-i18next";
import "../../../i18n";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../../layouts/Navbar";
import { Projects } from "../../../components/Projects";
import { Footer } from "../../../layouts/Footer";
import { About } from "../../../components/About";
import { Links } from "../../../components/Links";
import { BsDot } from "react-icons/bs";

export function WorkBView() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
      <div className=" w-[1200px]">
        <Navbar />

        <div className="flex-col">
          <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
          <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-25" />
          <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-90 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
          <div className="flex justify-between">
            <div className="mt-36">
              <h1 className="text-7xl flex flex-col gap-3">
                <p>{t("home_presentation_1")}</p>

                <p>{t("home_presentation_2")}</p>

                <p>{t("home_presentation_3")}</p>
              </h1>
              <div className="mt-14 bg-[#222222bd] bg-opacity-90 w-max h-max px-4 py-1 rounded-full font-light flex justify-center items-center gap-1 drop-shadow-lg ">
                <BsDot className="text-4xl text-green-400" />
                <p className="uppercase text-base mr-3">Available for work</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36">
          <Projects />
        </div>
        <div className="mt-36">
          <Footer />
        </div>
      </div>
    </div>
  );
}
