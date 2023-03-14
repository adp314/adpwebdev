import { useTranslation } from "react-i18next";
import "../../i18n";
import { useWindowSize } from "../../hooks/useWindowSize";
import tslogo from "../../assets/ts.png";
import nextlogo from "../../assets/nextjs.png";
import reactlogo from "../../assets/reactjs.png";
import nodelogo from "../../assets/node.png";
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
              {t("about_description_1")}
              {t("about_description_2")}
              {t("about_description_3")}
            </h2>
            <h3 className="text-2xl font-light mt-2">
              {t("about_description_4")}
            </h3>
            <h2 className="text-2xl mt-4">{t("about_hobbies")}</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">{t("about_hobbies_1")}</p>
            </div>

            <div className="mt-36">
              <h2 className="text-5xl ">Skills</h2>
              <div className="w-full h-full flex flex-wrap gap-8 items-center mt-16">
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
                    className="w-16 mx-2"
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
              {t("about_description_1")}
              {t("about_description_2")}
              {t("about_description_3")}
            </h2>
            <h3 className="text-2xl font-light mt-2">
              {t("about_description_4")}
            </h3>
            <h2 className="text-2xl mt-4">{t("about_hobbies")}</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">{t("about_hobbies_1")}</p>
            </div>

            <div className="mt-36">
              <h2 className="text-5xl">Skills</h2>
              <div className="w-full h-full flex flex-wrap gap-3 items-center mt-16">
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
                    className="w-16 mx-2"
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
              {t("about_description_1")}
              {t("about_description_2")}
              {t("about_description_3")}
            </h2>
            <h3 className="text-2xl font-light mt-2">
              {t("about_description_4")}
            </h3>
            <h2 className="text-2xl mt-4">{t("about_hobbies")}</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-xl font-light ">{t("about_hobbies_1")}</p>
            </div>

            <div className="mt-36">
              <h2 className="text-5xl">Skills</h2>
              <div className="w-full h-full flex flex-wrap justify-evenly items-center mt-16 ">
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
                    className="w-16 mx-2"
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
              {t("about_description_1")}
              {t("about_description_2")}
              {t("about_description_3")}
            </h2>
            <h3 className="text-lg font-light mt-4">
              {t("about_description_4")}
            </h3>

            <h2 className="text-xl mt-6">{t("about_hobbies")}</h2>
            <div className="w-full h-full rounded-3xl">
              <p className="text-lg font-light ">{t("about_hobbies_1")}</p>
            </div>

            <div className="mt-36 tracking-normal  text-sm">
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
                    className="w-16 mx-2"
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
