import { useTranslation } from "react-i18next";
import "../../i18n";

export function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="font-Archivo">
      <h2 className="text-5xl">{t("home_about_title")}</h2>
      <div className=" mt-10 flex w-full gap-10">
        <div className="flex flex-col w-[50%] gap-10">
          <div className="flex gap-10">
            <div className=" h-56 w-[50%] bg-gradient-to-b from-[#bdbdbd71] to-[#3d3d3d4f] rounded-3xl p-0.5">
              <div className="w-full h-full bg-gradient-to-b from-blue-900 to-gray-900 rounded-3xl">
                <div className="px-8 py-6 ">
                  <div>
                    <div className="w-14 h-14 bg-blue-400 rounded-2xl"></div>
                    <div className="mt-2">
                      <h2 className="text-2xl">Twitter</h2>
                      <p className="text-base">@adpts_777</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-full mt-3 w-max py-2 px-4 flex justify-start items-center">
                    <p className="text-base text-blue-500">Follow me @ </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-52 w-[50%] bg-gradient-to-b from-[#bdbdbd] to-[#3d3d3d] rounded-3xl p-0.5">
              <div className="w-full h-full bg-gray-700 rounded-3xl"></div>
            </div>
          </div>
          <div className=" h-20 w-full bg-gradient-to-b from-[#bdbdbd] to-[#3d3d3d] rounded-3xl p-0.5">
            <div className="bg-green-700 h-full w-full rounded-3xl border"></div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] gap-10">
          <div className="bg-yellow-500 h-20 w-full rounded-3xl border"></div>
          <div className="bg-blue-700 h-52 w-full rounded-3xl border"></div>
        </div>
      </div>
    </div>
  );
}
