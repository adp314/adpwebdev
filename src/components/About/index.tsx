import { useTranslation } from "react-i18next";
import "../../i18n";

export function About() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="font-Cairo">
        <h2 className="text-5xl">{t("home_about_title")}</h2>
        <div className="mt-10">
          <div className="bg-black opacity-50 w-full h-full rounded-3xl px-6 py-6">
            <p className="text-xl font-light">
              J'ai 25 ans, je suis récemment devenu en décembre 2022 développeur
              web fullstack, je suis née au Portugal, mais j'ai vécu presque
              toute ma vie en France. Après de nombreuses expériences dans
              différents domaines liés à l'informatique, j'ai décidé de me
              former au developpement web via Ironhack. Après le Bootcamp
              Ironhack, j'ai fais des projects personnels à fin de m'auto-former
              et être prêt pour le marché du travail. Curieux et touche-à-tout
              lié au domaine WEB je suis très enthousiaste de démarrer une
              nouvelle expérience.
            </p>
          </div>
          <h2 className="text-2xl mt-6">Diplômes</h2>
          <div className="bg-black opacity-50 w-full h-full rounded-3xl px-6 py-6 mt-2">
            <p className="text-xl font-light">
              Passionner par le Tennis & le Footbal. ReactJS, Typescript et ses
              librairies, ainsi que NodeJS. Je commence également
              l'apprentissage de NextJS.
            </p>
          </div>
          <h2 className="text-2xl mt-6">Hobbies & Tech Interests</h2>
          <div className="bg-black opacity-50 w-full h-full rounded-3xl px-6 py-6 mt-2">
            <p className="text-xl font-light ">
              Passionner par le Tennis & le Footbal. ReactJS, Typescript et ses
              librairies, ainsi que NodeJS. Je commence également
              l'apprentissage de NextJS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
