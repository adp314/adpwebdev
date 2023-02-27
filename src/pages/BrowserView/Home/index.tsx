import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Navbar } from "../../../layouts/Navbar";
import { Projects } from "../../../components/Projects";
import { Footer } from "../../../layouts/Footer";
import { About } from "../../../components/About";
import { Links } from "../../../components/Links";

export function HomeBView() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-full font-Cairo text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#1a1613] via-[#130616] to-[#160822] ">
      <div className=" w-[1200px]">
        <Navbar />

        <div className="flex-col">
          <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradient opacity-30" />
          <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradient opacity-30" />
          <div className="flex justify-between">
            <div className="mt-24">
              <h1 className="text-6xl ">
                {t("home_presentation_1")}
                <br />
                {t("home_presentation_2")}
                <br />
                {t("home_presentation_3")}
              </h1>
              <div className="mt-6 text-2xl font-light text-gray-400">
                <p className="">{t("home_subpres_1")}</p>
                <p className="">{t("home_subpres_2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Projects />
        </div>
        <div className="mt-24">
          <About />
        </div>
        <div className="mt-24">
          <Links />
        </div>
        <Footer />
      </div>
    </div>
  );
}
