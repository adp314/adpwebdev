import { useTranslation } from "react-i18next";
import "../../i18n";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BsArrowRight, BsTwitter, BsGithub } from "react-icons/bs";
import { RiFileTextFill } from "react-icons/ri";
import { IoMdOpen } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function Links() {
  const { t, i18n } = useTranslation();
  const size: Size = useWindowSize();

  let sWidth = 0;
  let sHeight = 0;

  if (size.width && size.height != undefined) {
    sWidth = size.width;
    sHeight = size.height;
  }
  return (
    <div className="font-Cairo">
      {sWidth >= 700 && <h2 className="text-5xl">{t("about_contactlinks")}</h2>}
      {sWidth < 700 && <h2 className="text-4xl">{t("about_contactlinks")}</h2>}
      <div className=" mt-20 flex w-full gap-10 p-3 overflow-x-auto">
        <div className="flex flex-col w-max gap-10 mb-8">
          <div className="flex gap-10">
            <div className=" h-56 w-64 bg-gradient-to-b from-[#2a3138] to-[#11141a] rounded-3xl  p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-[#1e2429] to-[#0e1114] rounded-3xl rounded-bl-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-[#383838] rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsGithub className="text-white text-3xl" />
                    </div>
                    <div className="mt-2 ">
                      <h2 className="text-2xl">Github</h2>
                      <p className="text-base font-light text-[#c9c9c9]">
                        @adpinto314
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#2e2e2e] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div
                      className="flex justify-start items-center gap-2 text-[#c9c9c9] hover:text-white hover:duration-200 cursor-pointer drop-shadow-lg"
                      onClick={() =>
                        (window.location.href = "https://github.com/adp314")
                      }
                    >
                      <p className="text-base">{t("links_follow")}</p>
                      <BsArrowRight className="text-lg " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-56 w-64 bg-gradient-to-b from-[#1C294C] to-[#0A0E28] rounded-3xl p-0.5 drop-shadow-lg">
              <div className="w-full h-full bg-gradient-to-b from-[#0c1e3a] to-[#0a0b1d] rounded-3xl ">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-[#0e8fff] rounded-2xl flex justify-center items-center drop-shadow-lg">
                      <BsTwitter className="text-white text-3xl" />
                    </div>
                    <div className="mt-2">
                      <h2 className="text-2xl">Twitter</h2>
                      <p className="text-base font-light text-[#c9c9c9]">
                        @adp_314
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0660af] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div
                      className="flex justify-start items-center gap-2 text-[#c9c9c9] hover:text-white cursor-pointer drop-shadow-lg hover:duration-200"
                      onClick={() =>
                        (window.location.href = "https://twitter.com/adp_314")
                      }
                    >
                      <p className="text-base">{t("links_follow")}</p>
                      <BsArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-24 w-full bg-gradient-to-b from-[#10201d] to-[#173324] rounded-3xl p-0.5 drop-shadow-lg">
            <div
              className="bg-gradient-to-b from-[#12241e] to-[#0e3a27] h-full w-full rounded-3xl cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://res.cloudinary.com/adpinto314/image/upload/v1678364376/personal/Andr%C3%A9_DC._Pinto_qn0jft.jpg")
              }
            >
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-[#0b5737] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <RiFileTextFill className="text-3xl text-white " />
                  </div>
                  <div>
                    <h2 className="text-2xl">Curriculum</h2>
                    <p className="text-lg font-light opacity-50">
                      {t("links_curriculum")}
                    </p>
                  </div>
                </div>
                <div className="w-14 h-14 bg-[#0b5737] rounded-full drop-shadow-lg flex justify-center items-center text-[#bdbdbd] cursor-pointer hover:text-white hover:duration-200">
                  <IoMdOpen className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-max gap-10 ">
          <div className=" h-24 w-full bg-gradient-to-b from-[#412734] to-[#241322] rounded-3xl p-0.5 drop-shadow-lg">
            <div className="bg-gradient-to-b from-[#2C1523] to-[#20091B] h-full w-full rounded-3xl ">
              <div className="w-full h-full flex justify-between items-center px-8">
                <div className="flex justify-start items-center gap-6">
                  <div className="w-14 h-14 bg-[#442a32] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <MdEmail className="text-white text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl">Email</h2>
                    <p className="text-lg font-light text-[#c9c9c9]">
                      andredp314@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-56 w-full bg-gradient-to-b from-[#131520] to-[#171d29] rounded-3xl p-0.5 drop-shadow-lg">
            <div className="w-full h-full bg-gradient-to-b from-[#0E101C] to-[#121824] rounded-3xl ">
              <div className="px-10 py-6 flex justify-between items-center">
                <div>
                  <div className="w-14 h-14 bg-[#143a61] rounded-2xl flex justify-center items-center drop-shadow-lg">
                    <ImLinkedin2 className="text-white text-3xl" />
                  </div>
                  <div className="mt-2 ">
                    <h2 className="text-2xl">Linkedin</h2>
                    <p className="text-base font-light text-[#c9c9c9]">
                      @adpinto314
                    </p>
                  </div>
                  <div className="bg-[#143a61] rounded-full mt-5 w-max py-2 px-4 flex justify-start items-center">
                    <div
                      className="flex justify-start items-center gap-2 text-[#c9c9c9] cursor-pointer hover:text-white hover:duration-200"
                      onClick={() =>
                        (window.location.href =
                          "https://www.linkedin.com/in/adp314/")
                      }
                    >
                      <p className="text-base">{t("links_linkedin")}</p>
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
