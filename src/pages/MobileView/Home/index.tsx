import { useTranslation } from "react-i18next";
import "../../../i18n";
import { NavbarMobile } from "../../../layouts/NavbarMobile";

export function HomeMView() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-screen font-Cairo text-white bg-gradient-to-bl from-[#05010E] via-[#160523] to-[#1D041F] animate-gradient ">
      <NavbarMobile />
      <div className="flex-col px-8">
        <div className="flex justify-between">
          <div className="mt-16">
            <h1 className="text-4xl ">
              {t("home_presentation_1")}
              <br />
              {t("home_presentation_2")}
              <br />
              {t("home_presentation_3")}
            </h1>
            <div className="mt-4 text-xl font-light text-gray-400">
              <p>{t("home_subpres_1")}</p>
              <p className="">{t("home_subpres_2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
