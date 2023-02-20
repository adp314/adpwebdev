import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";
import ironhacklogo from "../../assets/ironhack.png";
import goultarenalogo from "../../assets/goultarenalogo.png";

export function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="flex justify-start items-end gap-4">
        <h2 className="text-5xl">{t("home_project_title")}</h2>
        <p className="text-lg text-gray-400 font-light underline">Load more.</p>
      </div>
      <div className=" mt-16 flex justify-between w-full">
        <Cards
          cardContainer={
            <div className="h-full w-full bg-cover bg-center rounded-3xl ">
              <div className="h-full w-full py-2 px-5 rounded-3xl bg-black bg-opacity-90 flex flex-col justify-between cursor-pointer hover:bg-opacity-30 hover:opacity-0 hover:duration-300">
                <div className="flex justify-start items-center text-lg font-light ">
                  2022/11 /// Cinelist
                </div>
                <div className="flex justify-center">
                  <img src={ironhacklogo} alt="" className="h-20 w-20" />
                </div>
                <div className="flex justify-end text-lg font-light text-opacity-10 ">
                  // Bootcamp project
                </div>
              </div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full bg-cover bg-left-top rounded-3xl ">
              <div className="h-full w-full py-2 px-5 rounded-3xl bg-black bg-opacity-80 flex flex-col justify-between cursor-pointer hover:bg-opacity-30 hover:opacity-0 hover:duration-300">
                <div className="flex justify-start items-center text-lg font-light">
                  2022/12 /// Goultarena
                </div>
                <div className="flex justify-center">
                  <img src={goultarenalogo} alt="" className="h-20 w-20 ml-2" />
                </div>
                <div className="flex justify-end text-lg font-light text-opacity-10">
                  // Dofus fansite
                </div>
              </div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full bg-cover bg-left-top rounded-3xl ">
              <div className="h-full w-full py-2 px-5 rounded-3xl bg-black bg-opacity-80 flex flex-col justify-between cursor-pointer hover:bg-opacity-30 hover:opacity-0 hover:duration-300">
                <div className="flex justify-start items-center text-lg font-light ">
                  2023/02 /// Adpwebdev
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-center items-center text-4xl pb-2 rounded-full bg-gradient-to-bl from-[#05010E] to-[#160523] h-20 w-24 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
                    <span className="underline">a</span>
                    <p className="font-bold">dp</p>
                  </div>
                </div>
                <div className="flex justify-end text-lg font-light text-opacity-10 ">
                  // Personal website
                </div>
              </div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full bg-cover bg-left-top rounded-3xl ">
              <div className="h-full w-full py-2 px-5 rounded-3xl bg-black bg-opacity-80 flex flex-col justify-between cursor-pointer hover:bg-opacity-30 hover:opacity-0 hover:duration-300">
                <div className="flex justify-start items-center text-lg font-light ">
                  2023/?? /// ??????
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-center items-center text-4xl pb-2 rounded-full h-20 w-24">
                   
                    <p className="font-bold">?</p>
                  </div>
                </div>
                <div className="flex justify-end text-lg font-light text-opacity-10 ">
                  // Coming soon
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
