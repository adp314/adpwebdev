import { useTranslation } from "react-i18next";
import "../../i18n";
import { Navbar } from "../../layouts/Navbar";
import { Projects } from "../../components/Projects";
import { Footer } from "../../layouts/Footer";

export function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-full font-Cairo text-white px-14 bg-gradient-to-bl from-[#05010E] via-[#160523] to-[#1D041F] animate-gradient ">
      <div className=" h-2/4 bg-no-repeat bg-center bg-cover">
        <Navbar />
        <div className="flex-col">
          <div className="flex justify-between">
            <div className="mt-24">
              <h1 className="text-6xl ">
                {t("home_presentation_1")}
                <br />
                {t("home_presentation_2")}
                <br />
                {t("home_presentation_3")}
              </h1>
              <div className="mt-8 text-2xl font-light text-gray-400">
                <p className="">{t("home_subpres_1")}</p>
                <p className="">{t("home_subpres_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
