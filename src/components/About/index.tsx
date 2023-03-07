import { useTranslation } from "react-i18next";
import "../../i18n";
import { useWindowSize } from "../../hooks/useWindowSize";
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

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function About() {
  const { t, i18n } = useTranslation();
  const size: Size = useWindowSize();

  let sWidth = 0;
  let sHeight = 0;

  if (size.width && size.height != undefined) {
    sWidth = size.width;
    sHeight = size.height;
  }

  return (
    <>
      {sWidth >= 1280 && (
        <div className="">
          <div className="font-Cairo ">
            <h2 className="text-3xl font-light">
              J'ai 25 ans, née au Portugal, mais j'ai vécu presque toute ma vie
              en France. Après de nombreuses expériences dans différents
              domaines liés à l'informatique, j'ai décidé de me former au
              developpement web via Ironhack. Après le Bootcamp Ironhack, j'ai
              fais des projects personnels à fin de m'auto-former et être prêt
              pour le marché du travail. Curieux et touche-à-tout lié au domaine
              WEB je suis très enthousiaste de démarrer une nouvelle expérience.
            </h2>
            <h2 className="text-2xl mt-10">Hobbies</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">
                Passionner par le Tennis & le Footbal.
              </p>
            </div>

            <div className="mt-20">
              <h2 className="text-5xl mt-10">Skills</h2>
              <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-10 ">
                <div className="mb-8 text-center text-neutral-600 font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Typescript"
                    alt="Typescript"
                    src={tslogo}
                  />
                  <p>Typescript</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Git"
                    alt="Git"
                    src={gitlogo}
                  />
                  <p>Git</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-2 mx-2"
                    title="NextJS"
                    alt="NextJS"
                    src={nextlogo}
                  />
                  <p>NextJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600 font-light">
                  <img
                    className="w-20 mb-2"
                    title="ReactJS"
                    alt="ReactJS"
                    src={reactlogo}
                  />
                  <p>ReactJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20 mx-2"
                    title="NodeJS"
                    alt="NodeJS"
                    src={nodelogo}
                  />
                  <p>NodeJS</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="ReactQuery"
                    alt="Reactquery"
                    src={reactquerylogo}
                  />
                  <p>ReactQuery</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="TailwindCSS"
                    alt="TailwindCSS"
                    src={tailwindlogo}
                  />
                  <p>Tailwind</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-24 mb-3"
                    title="MangoDB"
                    alt="MangoDB"
                    src={mangodblogo}
                  />
                  <p>MangoDB</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="PostgreSQL"
                    alt="PostgreSQL"
                    src={postgrelogo}
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="Redux"
                    alt="Redux"
                    src={reduxlogo}
                  />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {sWidth < 1280 && sWidth >= 1024 && (
        <div className="">
          <div className="font-Cairo ">
            <h2 className="text-3xl font-light">
              J'ai 25 ans, née au Portugal, mais j'ai vécu presque toute ma vie
              en France. Après de nombreuses expériences dans différents
              domaines liés à l'informatique, j'ai décidé de me former au
              developpement web via Ironhack. Après le Bootcamp Ironhack, j'ai
              fais des projects personnels à fin de m'auto-former et être prêt
              pour le marché du travail. Curieux et touche-à-tout lié au domaine
              WEB je suis très enthousiaste de démarrer une nouvelle expérience.
            </h2>
            <h2 className="text-2xl mt-10">Hobbies</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">
                Passionner par le Tennis & le Footbal.
              </p>
            </div>

            <div className="mt-20">
              <h2 className="text-5xl mt-10">Skills</h2>
              <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-10 ">
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Typescript"
                    alt="Typescript"
                    src={tslogo}
                  />
                  <p>Typescript</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Git"
                    alt="Git"
                    src={gitlogo}
                  />
                  <p>Git</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-2 mx-2"
                    title="NextJS"
                    alt="NextJS"
                    src={nextlogo}
                  />
                  <p>NextJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600 font-light">
                  <img
                    className="w-20 mb-2"
                    title="ReactJS"
                    alt="ReactJS"
                    src={reactlogo}
                  />
                  <p>ReactJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20 mx-2"
                    title="NodeJS"
                    alt="NodeJS"
                    src={nodelogo}
                  />
                  <p>NodeJS</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="ReactQuery"
                    alt="Reactquery"
                    src={reactquerylogo}
                  />
                  <p>ReactQuery</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="TailwindCSS"
                    alt="TailwindCSS"
                    src={tailwindlogo}
                  />
                  <p>Tailwind</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-24 mb-3"
                    title="MangoDB"
                    alt="MangoDB"
                    src={mangodblogo}
                  />
                  <p>MangoDB</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="PostgreSQL"
                    alt="PostgreSQL"
                    src={postgrelogo}
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="Redux"
                    alt="Redux"
                    src={reduxlogo}
                  />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {sWidth < 1024 && sWidth > 700 && (
        <div className="">
          <div className="font-Cairo ">
            <h2 className="text-3xl font-light">
              J'ai 25 ans, née au Portugal, mais j'ai vécu presque toute ma vie
              en France. Après de nombreuses expériences dans différents
              domaines liés à l'informatique, j'ai décidé de me former au
              developpement web via Ironhack. Après le Bootcamp Ironhack, j'ai
              fais des projects personnels à fin de m'auto-former et être prêt
              pour le marché du travail. Curieux et touche-à-tout lié au domaine
              WEB je suis très enthousiaste de démarrer une nouvelle expérience.
            </h2>
            <h2 className="text-2xl mt-10">Hobbies</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">
                Passionner par le Tennis & le Footbal.
              </p>
            </div>

            <div className="mt-20">
              <h2 className="text-5xl mt-12">Skills</h2>
              <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-10 ">
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Typescript"
                    alt="Typescript"
                    src={tslogo}
                  />
                  <p>Typescript</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Git"
                    alt="Git"
                    src={gitlogo}
                  />
                  <p>Git</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-2 mx-2"
                    title="NextJS"
                    alt="NextJS"
                    src={nextlogo}
                  />
                  <p>NextJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600 font-light">
                  <img
                    className="w-20 mb-2"
                    title="ReactJS"
                    alt="ReactJS"
                    src={reactlogo}
                  />
                  <p>ReactJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20 mx-2"
                    title="NodeJS"
                    alt="NodeJS"
                    src={nodelogo}
                  />
                  <p>NodeJS</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="ReactQuery"
                    alt="Reactquery"
                    src={reactquerylogo}
                  />
                  <p>ReactQuery</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="TailwindCSS"
                    alt="TailwindCSS"
                    src={tailwindlogo}
                  />
                  <p>Tailwind</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-24 mb-3"
                    title="MangoDB"
                    alt="MangoDB"
                    src={mangodblogo}
                  />
                  <p>MangoDB</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="PostgreSQL"
                    alt="PostgreSQL"
                    src={postgrelogo}
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="Redux"
                    alt="Redux"
                    src={reduxlogo}
                  />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {sWidth <= 700 && (
        <div className="">
          <div className="font-Cairo ">
            <h2 className="text-xl font-light">
              J'ai 25 ans, je suisnée au Portugal, mais j'ai vécu presque toute
              ma vie en France. Après de nombreuses expériences dans différents
              domaines liés à l'informatique, j'ai décidé de me former au
              developpement web via Ironhack. Après avoir réussi la formation,
              j'ai fais des projects personnels à fin de m'auto-former et tenter
              d'être prêt pour le marché du travail.
            </h2>
            <h2 className=" mt-4">
              Curieux et touche-à-tout lié au domaine WEB je suis très
              enthousiaste de démarrer une nouvelle expérience.
            </h2>
            <h2 className="text-xl mt-8">Hobbies</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-lg font-light ">
                Passionner par le Tennis & le Footbal.
              </p>
            </div>

            <div className="mt-20 tracking-normal  text-sm">
              <h2 className="text-4xl">Skills</h2>
              <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-10 italic ">
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Typescript"
                    alt="Typescript"
                    src={tslogo}
                  />
                  <p>Typescript</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-3 mx-2"
                    title="Git"
                    alt="Git"
                    src={gitlogo}
                  />
                  <p>Git</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-16 mb-2 mx-2"
                    title="NextJS"
                    alt="NextJS"
                    src={nextlogo}
                  />
                  <p>NextJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600 font-light">
                  <img
                    className="w-20 mb-2"
                    title="ReactJS"
                    alt="ReactJS"
                    src={reactlogo}
                  />
                  <p>ReactJS</p>
                </div>

                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20 mx-2"
                    title="NodeJS"
                    alt="NodeJS"
                    src={nodelogo}
                  />
                  <p>NodeJS</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="ReactQuery"
                    alt="Reactquery"
                    src={reactquerylogo}
                  />
                  <p>ReactQuery</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="TailwindCSS"
                    alt="TailwindCSS"
                    src={tailwindlogo}
                  />
                  <p>Tailwind</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-24 mb-3"
                    title="MangoDB"
                    alt="MangoDB"
                    src={mangodblogo}
                  />
                  <p>MangoDB</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="PostgreSQL"
                    alt="PostgreSQL"
                    src={postgrelogo}
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="mb-8 text-center text-neutral-600  font-light">
                  <img
                    className="w-20"
                    title="Redux"
                    alt="Redux"
                    src={reduxlogo}
                  />
                  <p>Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
