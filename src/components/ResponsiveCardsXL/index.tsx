import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";
import ironhacklogo from "../../assets/ironhack.png";
import goultarenalogo from "../../assets/goultarenalogo.png";
import adplogo from "../../assets/adplogo.png";
import { BsArrowRight } from "react-icons/bs";

export function ResponsiveCardsXL() {
  const { t, i18n } = useTranslation();

  return (
    <div className="font-Cairo">
      <h2 className="text-5xl">{t("work_projects")}</h2>

      <div className="flex justify-between w-full">
        <div className=" mt-4 w-64 h-[500px] flex flex-col justify-between items-start">
          <div
            className="mt-12 hover:mt-10 hover:duration-300"
            onClick={() =>
              (window.location.href = "https://mycinelist.netlify.app/")
            }
          >
            <Cards
              cardContainer={
                <div className="h-full w-full rounded-3xl group">
                  <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300 group-hover:bg-neutral-600 group-hover:bg-opacity-10">
                    <div className="flex justify-start items-center text-sm font-light uppercase">
                      Cinelist /// 2022
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={ironhacklogo}
                        alt=""
                        className="h-20 w-20 opacity-50 group-hover:h-24 group-hover:w-24 group-hover:transform group-hover:-rotate-6 group-hover:opacity-80 group-hover:duration-300"
                      />
                    </div>
                    <div className="flex justify-end text-sm uppercase font-light text-opacity-10 ">
                      /// React
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-4 ml-2.5">
            <div>
              <p className="text-xl uppercase">MyCinelist.app</p>
              <p className="text-base text-neutral-400 font-light tracking-normal mt-2 ">
                {t("work_text_project01")}
              </p>
            </div>
            <div
              className="bg-neutral-800 tracking-normal bg-opacity-80 rounded-full w-max h-max flex justify-start items-center cursor-pointer px-5 py-2 text-lg font-light gap-2 mt-2 drop-shadow-sm"
              onClick={() =>
                (window.location.href = "https://github.com/adp314/cinelist")
              }
            >
              <span className="ml-1">{t("work_viewproject")}</span>
              <BsArrowRight className="text-base" />
            </div>
          </div>
        </div>

        <div className=" mt-4 w-64 h-[500px] flex flex-col justify-between items-start">
          <div
            className="mt-12 hover:mt-10 hover:duration-300"
            onClick={() => (window.location.href = "#")}
          >
            <Cards
              cardContainer={
                <div className="h-full w-full rounded-3xl group">
                  <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300 group-hover:bg-neutral-600 group-hover:bg-opacity-10">
                    <div className="flex justify-start items-center text-sm font-light uppercase">
                      goultarena /// 2023
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={goultarenalogo}
                        alt=""
                        className="h-16 w-16 opacity-50 group-hover:h-20 group-hover:w-20 group-hover:transform group-hover:-rotate-6 group-hover:opacity-80 group-hover:duration-300"
                      />
                    </div>
                    <div className="flex justify-end text-sm uppercase font-light text-opacity-10 ">
                      /// React & Node
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-4 ml-2.5">
            <div>
              <p className="text-xl uppercase">Goultarena.gg</p>
              <p className="text-base text-neutral-400 font-light tracking-normal mt-2">
                {t("work_text_project02")}
              </p>
            </div>
            <div
              className="bg-neutral-800 tracking-normal bg-opacity-80 rounded-full w-max h-max flex justify-start items-center cursor-pointer px-5 py-2 text-lg font-light gap-2 mt-2 drop-shadow-sm"
              onClick={() =>
                (window.location.href =
                  "https://github.com/adp314/goultarena-client")
              }
            >
              <span className="ml-1">{t("work_viewproject")}</span>
              <BsArrowRight className="text-base" />
            </div>
          </div>
        </div>

        <div className=" mt-4 w-64 h-[500px] flex flex-col justify-between items-start">
          <div
            className="mt-12 hover:mt-10 hover:duration-300"
            onClick={() =>
              (window.location.href = "https://www.adpwebdev.com/")
            }
          >
            <Cards
              cardContainer={
                <div className="h-full w-full rounded-3xl group">
                  <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300 group-hover:bg-neutral-600 group-hover:bg-opacity-10">
                    <div className="flex justify-start items-center text-sm font-light uppercase">
                      Adpwebdev /// 2023
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={adplogo}
                        alt=""
                        className="h-16 w-16 opacity-50 rounded-full group-hover:h-20 group-hover:w-20 group-hover:transform group-hover:-rotate-6 group-hover:opacity-80 group-hover:duration-300"
                      />
                    </div>
                    <div className="flex justify-end text-sm uppercase font-light text-opacity-10 ">
                      /// React
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-4 ml-2.5">
            <div>
              <p className="text-xl uppercase">Adpwebdev.com</p>
              <p className="text-base text-neutral-400 font-light tracking-normal mt-2">
                {t("work_text_project03")}
              </p>
            </div>
            <div
              className="bg-neutral-800 tracking-normal bg-opacity-80 rounded-full w-max h-max flex justify-start items-center cursor-pointer px-5 py-2 text-lg font-light gap-2 mt-2 drop-shadow-sm"
              onClick={() =>
                (window.location.href = "https://github.com/adp314/adpwebdev")
              }
            >
              <span className="ml-1">{t("work_viewproject")}</span>
              <BsArrowRight className="text-base" />
            </div>
          </div>
        </div>
        <div className=" mt-4 w-64 h-[500px] flex flex-col justify-between items-start">
          <div className="mt-12 hover:mt-10 hover:duration-300">
            <Cards
              cardContainer={
                <div className="h-full w-full rounded-3xl group">
                  <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300 group-hover:bg-neutral-600 group-hover:bg-opacity-10">
                    <div className="flex justify-start items-center text-sm font-light uppercase">
                      ?????? /// 2023
                    </div>
                    <div className="flex justify-center">
                      <p className="text-3xl">?</p>
                    </div>
                    <div className="flex justify-end text-sm uppercase font-light text-opacity-10 ">
                      /// Next
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-4 ml-2.5">
            <div>
              <p className="text-xl uppercase">??????.???</p>
              <p className="text-base text-neutral-400 font-light tracking-normal mt-2">
                {t("work_text_project04")}
              </p>
            </div>
            <div className="bg-neutral-800 tracking-normal bg-opacity-80 rounded-full w-max h-max flex justify-start items-center cursor-pointer px-5 py-2 text-lg font-light gap-2 mt-2 drop-shadow-sm">
              <span className="ml-1">{t("work_viewproject")}</span>
              <BsArrowRight className="text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
