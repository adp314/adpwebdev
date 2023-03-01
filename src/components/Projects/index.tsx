import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";
import ironhacklogo from "../../assets/ironhack.png";
import goultarenalogo from "../../assets/goultarenalogo.png";
import { BsArrowRight } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <div className="font-Cairo tracking-normal">
      <h2 className="text-5xl">{t("home_project_title")}</h2>

      <div className="flex justify-between w-full">
        <div className=" mt-4 w-64 h-[440px] flex flex-col justify-between items-center">
          <div className="mt-12 hover:mt-10 hover:duration-300">
            <Cards
              cardContainer={
                <div className="h-full w-full rounded-3xl group">
                  <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300 group-hover:bg-neutral-600 group-hover:bg-opacity-5">
                    <div className="flex justify-start items-center text-lg font-light ">
                      2022/11 /// Cinelist
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={ironhacklogo}
                        alt=""
                        className="h-20 w-20 opacity-50 group-hover:h-24 group-hover:w-24 group-hover:rotate-6 group-hover:opacity-80 group-hover:duration-300"
                      />
                    </div>
                    <div className="flex justify-end text-lg font-light text-opacity-10 ">
                      // Bootcamp project
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div>
              <p className="text-xl">Cinelist</p>
              <p className="text-base text-gray-300 font-light">
                On this project of the stage 2 Ironhack, i have worked with 3
                friends, We have made a list webapp with a external API fetchs blabla lbalbla bla just text.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-full w-max h-max flex justify-start items-center cursor-pointer px-4 py-1 text-xl font-light gap-2">
              <span>View project</span>
              <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="mt-16 hover:mt-14 hover:duration-300">
          <Cards
            cardContainer={
              <div className="h-full w-full rounded-3xl group">
                <div className=" h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300">
                  <div className="flex justify-start items-center text-lg font-light">
                    2023/01 /// Goultarena
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={goultarenalogo}
                      alt=""
                      className="h-20 w-20 ml-2 opacity-50 group-hover:opacity-80 group-hover:duration-300"
                    />
                  </div>
                  <div className="flex justify-end text-lg font-light text-opacity-10">
                    // Dofus fansite
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="mt-16 hover:mt-14 hover:duration-300">
          <Cards
            cardContainer={
              <div className="h-full w-full rounded-3xl group">
                <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 group-hover:text-white group-hover:duration-300">
                  <div className="flex justify-start items-center text-lg font-light ">
                    2023/02 /// Adpwebdev
                  </div>
                  <div className="flex justify-center opacity-50 group-hover:opacity-80 group-hover:duration-300">
                    <div className="flex justify-center items-center text-3xl pb-2 bg-gray-900 bg-opacity-70 rounded-2xl h-16 w-20 text-white">
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
        </div>
        <div className="mt-16">
          <Cards
            cardContainer={
              <div className="h-full w-full rounded-3xl ">
                <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between text-gray-400">
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
    </div>
  );
}
