import { useTranslation } from "react-i18next";
import "../../i18n";
import { BsArrowRight, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { RiFileTextFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { SiBuymeacoffee } from "react-icons/si";

export function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="font-Archivo">
      <h2 className="text-5xl">{t("home_about_title")}</h2>
      <div>
        <p className="text-xl font-light mt-10">
          J'ai 25 ans, je suis récemment devenu en décembre 2022 développeur web
          fullstack, je suis née au Portugal, mais j'ai vécu presque toute ma
          vie en France. Après de nombreuses expériences dans différents
          domaines liés à l'informatique, j'ai décidé de me former au
          developpement web via Ironhack São Paulo. Après le Bootcamp Ironhack,
          j'ai fais des missions amicales pour des amis et des projects
          personnels à fin de m'auto-former et être prêt pour le marché du
          travail. Curieux et touche-à-tout lié au domaine WEB autour du
          Javascript/Typescript, je suis très enthousiaste de démarrer une
          nouvelle expérience. Vous pouvez me suivre, ou bien accéder à plus
          d'informations ci-dessous.
        </p>
      </div>
      <div className=" mt-16 flex w-full gap-10 ">
        <div className="flex flex-col w-[50%] gap-10">
          <div className="flex gap-10">
            <div className=" h-56 w-64 bg-gradient-to-b from-[#272149fb] to-[#2d2d2e] rounded-3xl p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-blue-900 to-gray-900 rounded-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-blue-400 rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsTwitter className="text-white text-3xl" />
                    </div>
                    <div className="mt-2">
                      <h2 className="text-2xl">Twitter</h2>
                      <p className="text-base font-light opacity-70">
                        @adp_314
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-blue-500 hover:text-white cursor-pointer">
                      <p className="text-base">Follow me</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-56 w-64 bg-gradient-to-b from-[#bdbdbd42] to-[#3030304f] rounded-3xl  p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-blue-900 to-gray-900 rounded-3xl rounded-bl-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-gray-900 rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsGithub className="text-white text-3xl" />
                    </div>
                    <div className="mt-2 ">
                      <h2 className="text-2xl">Github</h2>
                      <p className="text-base font-light opacity-70">
                        @adpinto314
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-blue-500 hover:text-white cursor-pointer">
                      <p className="text-base">Follow me</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-24 w-full bg-gradient-to-b from-[#bdbdbd71] to-[#3d3d3d4f] rounded-3xl p-0.5">
            <div className="bg-gradient-to-b from-green-900 to-gray-900 h-full w-full rounded-3xl ">
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-green-800 rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <RiFileTextFill className="text-white text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl">Curriculum</h2>
                    <p className="text-lg font-light opacity-50">
                      Download my CV here.
                    </p>
                  </div>
                </div>
                <div className="w-14 h-14 bg-green-800 rounded-full drop-shadow-lg flex justify-center items-center cursor-pointer">
                  <FiDownload className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] gap-10">
          <div className=" h-24 w-full bg-gradient-to-b from-[#bdbdbd71] to-[#3d3d3d4f] rounded-3xl p-0.5">
            <div className="bg-gradient-to-b from-yellow-500 to-gray-900 h-full w-full rounded-3xl ">
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <SiBuymeacoffee className="text-white text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl">Buy me a coffee</h2>
                    <p className="text-lg font-light opacity-50">
                      Your support is highly appreciated!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-56 w-full bg-gradient-to-b from-[#292929a4] to-[#313131d2] rounded-3xl p-0.5 drop-shadow-lg">
            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl ">
              <div className="px-8 py-6 flex justify-between items-center pr-16">
                <div>
                  <div className="w-14 h-14 bg-gray-800 rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <BsLinkedin className="text-white text-3xl" />
                  </div>
                  <div className="mt-2 ">
                    <h2 className="text-2xl">Linkedin</h2>
                    <p className="text-base font-light opacity-70">
                      @adpinto314
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-gray-500 hover:text-white cursor-pointer">
                      <p className="text-base">See my resume</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
                <div className="w-48 h-40 bg-black rounded-3xl bg-opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
