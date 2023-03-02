import { useTranslation } from "react-i18next";
import "../../i18n";
import tslogo from "../../assets/ts.png";
import jslogo from "../../assets/js.png";
import nextlogo from "../../assets/nextjs.png";
import reactlogo from "../../assets/reactjs.png";
import nodelogo from "../../assets/nodejs.png";
import gitlogo from "../../assets/git.png";
import reactquerylogo from "../../assets/reactquery.png";
import tailwindlogo from "../../assets/Tailwind.png";
import postgrelogo from "../../assets/postgre.png";
import mangodblogo from "../../assets/mangodb.png";
import reduxlogo from "../../assets/redux.png";

export function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <div className="font-Cairo ">
        <h2 className="text-3xl font-light">
          J'ai 25 ans, née au Portugal, mais j'ai vécu presque toute ma vie en
          France. Après de nombreuses expériences dans différents domaines liés
          à l'informatique, j'ai décidé de me former au developpement web via
          Ironhack. Après le Bootcamp Ironhack, j'ai fais des projects
          personnels à fin de m'auto-former et être prêt pour le marché du
          travail. Curieux et touche-à-tout lié au domaine WEB je suis très
          enthousiaste de démarrer une nouvelle expérience.
        </h2>
        <h2 className="text-2xl mt-10">Hobbies</h2>
        <div className="w-full h-full rounded-3xl ">
          <p className="text-xl font-light ">
            Passionner par le Tennis & le Footbal. ReactJS, Typescript et ses
            librairies, ainsi que NodeJS. Je commence également l'apprentissage
            de NextJS.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-5xl mt-10">Skills</h2>
          <div className="w-full h-full rounded-3xl flex justify-between items-center mt-20">
            <img className="w-16" src={tslogo} />
            <img className="w-16" src={gitlogo} />
            <img className="w-16" src={nextlogo} />
            <img className="w-20" src={reactlogo} />
            <img className="w-20" src={nodelogo} />
            <img className="w-20" src={reactquerylogo} />
            <img className="w-20" src={tailwindlogo} />
            <img className="w-24" src={mangodblogo} />
            <img className="w-20" src={postgrelogo} />
            <img className="w-20" src={reduxlogo} />
          </div>
        </div>
      </div>
    </div>
  );
}
