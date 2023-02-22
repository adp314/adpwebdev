import { useTranslation } from "react-i18next";
import "../../i18n";
import { BsArrowRight, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { RiFileTextFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { SiBuymeacoffee } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";

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
          travail. Curieux et touche-à-tout lié au domaine WEB je suis très
          enthousiaste de démarrer une nouvelle expérience.
        </p>
        <h2 className="text-2xl mt-6">Hobby</h2>
        <p className="text-xl font-light mt-2">
          Passionner de Football, Tennis & Tech Web.
        </p>
        <h2 className="text-2xl mt-6">Tech Interests</h2>
        <p className="text-xl font-light mt-2">
          Actuellement, je suis et m'auto-forme sur tout ce qui touche de près
          ou de loin à ReactJS, Typescript et ses librairies, ainsi que NodeJS.
          Je commence également l'apprentissage de NextJS.
        </p>
      </div>
      <div className=" mt-20 flex w-full gap-10 ">
        <div className="flex flex-col w-[50%] gap-10">
          <div className="flex gap-10">
            <div className=" h-56 w-64 bg-gradient-to-b from-[#1C294C] to-[#0A0E28] rounded-3xl p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-[#0B1B35] to-[#0D0F26] rounded-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-[#257aca] rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsTwitter className="text-white text-3xl" />
                    </div>
                    <div className="mt-2">
                      <h2 className="text-2xl">Twitter</h2>
                      <p className="text-base font-light opacity-70">
                        @adp_314
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0E244B] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-[#1C92FE] hover:text-white cursor-pointer drop-shadow-lg hover:duration-200">
                      <p className="text-base">Follow me</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-56 w-64 bg-gradient-to-b from-[#2a3138] to-[#101318] rounded-3xl  p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-[#1e2429] to-[#0e1114] rounded-3xl rounded-bl-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-[#000000] rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsGithub className="text-white text-3xl" />
                    </div>
                    <div className="mt-2 ">
                      <h2 className="text-2xl">Github</h2>
                      <p className="text-base font-light opacity-70">
                        @adpinto314
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#30383f] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-[#b1b1b1] hover:text-white hover:duration-200 cursor-pointer drop-shadow-lg">
                      <p className="text-base">Follow me</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-24 w-full bg-gradient-to-b from-[#1D2225] to-[#1B2828] rounded-3xl p-0.5">
            <div className="bg-gradient-to-b from-[#0B1315] to-[#0A1F1A] h-full w-full rounded-3xl ">
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-gradient-to-b from-[#093828] to-[#093B2B] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <RiFileTextFill className="text-[#01F68F] text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl">Curriculum</h2>
                    <p className="text-lg font-light opacity-50">
                      Download my CV here.
                    </p>
                  </div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-b from-[#093828] to-[#093B2B] rounded-full drop-shadow-lg flex justify-center items-center cursor-pointer">
                  <FiDownload className="text-2xl text-[#01F68F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] gap-10">
          <div className=" h-24 w-full bg-gradient-to-b from-[#bdbdbd71] to-[#3d3d3d4f] rounded-3xl p-0.5">
            <div className="bg-gradient-to-b from-[#32075a] to-[#1d0038] h-full w-full rounded-3xl ">
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-[#5a189a] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <MdEmail className="text-white text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl">Send me a email</h2>
                    <p className="text-lg font-light opacity-50">
                      Click here to send me a email!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-56 w-full bg-gradient-to-b from-[#141622] to-[#1d212c] rounded-3xl p-0.5 drop-shadow-lg">
            <div className="w-full h-full bg-gradient-to-b from-[#0E101C] to-[#121824] rounded-3xl ">
              <div className="px-10 py-6 flex justify-between items-center">
                <div>
                  <div className="w-14 h-14 bg-[#153f69] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <ImLinkedin2 className="text-white text-3xl" />
                  </div>
                  <div className="mt-2 ">
                    <h2 className="text-2xl">Linkedin</h2>
                    <p className="text-base font-light opacity-70">
                      @adpinto314
                    </p>
                  </div>
                  <div className="bg-[#1a2033] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 text-[#679DC5] hover:text-white cursor-pointer">
                      <p className="text-base">See my resume</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
                <div className="w-56 h-40 bg-[#111521] border border-[#272a3925] rounded-3xl flex p-6 gap-5">
                  <div className="w-[50%] h-full bg-gradient-to-b from-[#1C2333] to-[#1418242d] rounded-xl"></div>
                  <div className="w-[50%] h-full rounded-xl flex flex-col gap-3">
                    <div className="bg-gradient-to-b from-[#1C2333] to-[#141824] border border-[#262d3d2c] w-full h-8 rounded-lg mt-4"></div>
                    <div className="bg-gradient-to-b from-[#1C2333] to-[#1418242d] w-full h-4 rounded "></div>
                    <div className="bg-gradient-to-b from-[#1C2333] to-[#14182418] w-full h-4 rounded "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
