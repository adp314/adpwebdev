import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";
import ironhacklogo from "../../assets/ironhack.png";
import goultarenalogo from "../../assets/goultarenalogo.png";
import { BsArrowRight, BsTwitter, BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export function Projects() {
  const { t, i18n } = useTranslation();
  const [projectOne, setProjectOne] = useState(true);
  const [projectTwo, setProjectTwo] = useState(false);
  const [projectThree, setProjectThree] = useState(false);

  return (
    <div>
      <div className="flex justify-start items-end gap-4">
        <h2 className="text-5xl">{t("home_project_title")}</h2>
        <p className="text-lg text-gray-500 font-light italic">
          load more projects.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div
          className={`${
            projectOne ? "text-white" : "text-gray-400"
          } mt-16 hover:mt-14 hover:duration-300 hover:drop-shadow-xl`}
        >
          <Cards
            cardContainer={
              <div
                className="h-full w-full rounded-3xl"
                onClick={() => {
                  setProjectOne(!projectOne);
                  setProjectTwo(false);
                  setProjectThree(false);
                }}
              >
                <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 hover:text-white hover:duration-300">
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
        </div>
        <div className=" mt-16 hover:mt-14 hover:duration-300 hover:drop-shadow-xl">
          <Cards
            cardContainer={
              <div
                className="h-full w-full rounded-3xl"
                onClick={() => {
                  setProjectOne(false);
                  setProjectTwo(!projectTwo);
                  setProjectThree(false);
                }}
              >
                <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 hover:text-white hover:duration-300">
                  <div className="flex justify-start items-center text-lg font-light">
                    2023/01 /// Goultarena
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={goultarenalogo}
                      alt=""
                      className="h-20 w-20 ml-2"
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
        <div className="mt-16 hover:mt-14 hover:duration-300 hover:drop-shadow-xl">
          <Cards
            cardContainer={
              <div
                className="h-full w-full rounded-3xl "
                onClick={() => {
                  setProjectOne(false);
                  setProjectTwo(false);
                  setProjectThree(!projectThree);
                }}
              >
                <div className="h-full w-full py-2 px-5 rounded-3xl flex flex-col justify-between cursor-pointer text-gray-400 hover:text-white hover:duration-300">
                  <div className="flex justify-start items-center text-lg font-light ">
                    2023/02 /// Adpwebdev
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center text-3xl pb-2 bg-gray-800 rounded-3xl h-16 w-20 text-white">
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
      <div className="bg-black bg-opacity-25 rounded-3xl w-full h-full mt-10">
        {projectOne && (
          <div className=" w-full h-full flex justify-start gap-8 ">
            <div className="w-96 h-48 rounded-3xl bg-gradient-to-b from-[#575757b9] to-[#1b1b1bf3] p-0.5 drop-shadow-lg">
              <div className="w-full h-full rounded-3xl bg-contain bg-no-repeat bg-[url('/src/assets/cinelist_web.jpg')]"></div>
            </div>
            <div className="py-3">
              <div className="flex justify-start items-center gap-4 ">
                <h2 className="text-3xl mr-6 uppercase">Cinelist</h2>
                <span className="text-3xl opacity-50 self-end">//</span>
                <div className="h-full flex gap-2 justify-start items-center text-xl">
                  <BsGithub className="opacity-50 hover:opacity-100 cursor-pointer" />
                  <TbWorld className="opacity-50 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
              <p className="mt-4">description of cinelist, blablabla</p>
            </div>
          </div>
        )}
        {projectTwo && (
          <div className=" w-full h-full mt-10 flex justify-start gap-8">
            <div className="w-96 h-48 rounded-3xl bg-gradient-to-b from-[#f2f2f25d] to-[#40404073] p-0.5 drop-shadow-lg">
              <div className="w-full h-full rounded-3xl bg-contain bg-no-repeat bg-[url('/src/assets/goultarena.png')]"></div>
            </div>
            <div className="py-3">
              <div className="flex justify-start items-center gap-4 ">
                <h2 className="text-3xl mr-6 uppercase">Goultarena</h2>
                <span className="text-3xl opacity-50 self-end">//</span>
                <div className="h-full flex gap-2 justify-start items-center text-xl">
                  <BsGithub className="opacity-50 hover:opacity-100 cursor-pointer" />
                  <TbWorld className="opacity-50 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
              <p className="mt-4">description of goultarena, blablabla</p>
            </div>
          </div>
        )}
        {projectThree && (
          <div className=" w-full h-full mt-10 flex justify-start gap-8">
            <div className="w-96 h-48 rounded-3xl bg-gradient-to-b from-[#f2f2f25d] to-[#40404073] p-0.5 drop-shadow-lg">
              <div className="w-full h-full rounded-3xl bg-cover bg-[url('/src/assets/adpweb.png')]" />
            </div>
            <div className="py-3">
              <div className="flex justify-start items-center gap-4 ">
                <h2 className="text-3xl mr-6 uppercase">Adpwebdev</h2>
                <span className="text-3xl opacity-50 self-end">//</span>
                <div className="h-full flex gap-2 justify-start items-center text-xl">
                  <BsGithub className="opacity-50 hover:opacity-100 cursor-pointer" />
                  <TbWorld className="opacity-50 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
              <p className="mt-4">description of adpwebdev, blablabla</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
