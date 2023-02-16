import { useTranslation } from "react-i18next";
import "../../i18n";
import { Cards } from "../Cards";

export function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2 className="text-5xl">{t("home_project_title")}</h2>
      <div className=" mt-10 pb-10 flex justify-between">
        <Cards
          cardContainer={
            <div className="h-full w-full flex flex-col justify-between py-2 px-4 cursor-pointer">
              <div className="flex justify-start items-center text-xl">
                2022/10 /// Cinelist
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="h-24 w-24 bg-black rounded"></div>
                </div>
              </div>

              <div className="flex justify-end text-xl">// N°2</div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full flex flex-col justify-between py-2 px-4 cursor-pointer">
              <div className="flex justify-start items-center text-xl">
                2022/10 /// Cinelist
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="h-24 w-24 bg-black rounded"></div>
                </div>
              </div>

              <div className="flex justify-end text-xl">// N°2</div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full flex flex-col justify-between py-2 px-4 cursor-pointer">
              <div className="flex justify-start items-center text-xl">
                2022/10 /// Cinelist
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="h-24 w-24 bg-black rounded"></div>
                </div>
              </div>

              <div className="flex justify-end text-xl">// N°2</div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full flex flex-col justify-between py-2 px-4 cursor-pointer">
              <div className="flex justify-start items-center text-xl">
                2022/10 /// Cinelist
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="h-24 w-24 bg-black rounded"></div>
                </div>
              </div>

              <div className="flex justify-end text-xl">// N°2</div>
            </div>
          }
        />
        <Cards
          cardContainer={
            <div className="h-full w-full flex flex-col justify-between py-2 px-4 cursor-pointer">
              <div className="flex justify-start items-center text-xl">
                2022/10 /// Cinelist
              </div>

              <div className="flex justify-center">
                <div>
                  <div className="h-24 w-24 bg-black rounded"></div>
                </div>
              </div>

              <div className="flex justify-end text-xl">// N°2</div>
            </div>
          }
        />
      </div>
    </div>
  );
}
