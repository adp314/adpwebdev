import { useTranslation } from "react-i18next";
import "../../i18n";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Navbar } from "../../layouts/Navbar";
import { NavbarMobile } from "../../layouts/NavbarMobile";
import { Projects } from "../../components/Projects";
import { Footer } from "../../layouts/Footer";
import { About } from "../../components/About";
import { Links } from "../../components/Links";
import { BsDot } from "react-icons/bs";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function AboutBView() {
  const { t, i18n } = useTranslation();
  const size: Size = useWindowSize();

  let sWidth = 0;
  let sHeight = 0;

  if (size.width && size.height != undefined) {
    sWidth = size.width;
    sHeight = size.height;
  }
  console.log(sWidth);

  return (
    <>
      {sWidth >= 1280 && (
        <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
          <div className=" w-[1265px]">
            <Navbar />
            <div className="flex-col">
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-25" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-90 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="flex justify-between">
                <div className="mt-36">
                  <About />
                </div>
              </div>
            </div>

            <div className="mt-36">
              <Links />
            </div>
            <div className="mt-36">
              <Footer />
            </div>
          </div>
        </div>
      )}
      {sWidth < 1280 && sWidth >= 1024 && (
        <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
          <div className=" w-[1024px] px-4">
            <Navbar />
            <div className="flex-col">
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-25" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-90 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="flex justify-between">
                <div className="mt-36">
                  <About />
                </div>
              </div>
            </div>

            <div className="mt-36">
              <Links />
            </div>
            <div className="mt-36">
              <Footer />
            </div>
          </div>
        </div>
      )}
      {sWidth < 1024 && sWidth > 700 && (
        <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
          <div className=" w-full h-full px-10">
            <Navbar />
            <div className="flex-col">
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-25" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-90 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="flex justify-between">
                <div className="mt-36">
                  <About />
                </div>
              </div>
            </div>

            <div className="mt-36">
              <Links />
            </div>
            <div className="mt-36">
              <Footer />
            </div>
          </div>
        </div>
      )}
      {sWidth <= 700 && (
        <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
          <div className=" w-full h-full px-6">
            <NavbarMobile />
            <div className="flex-col">
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-45 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-12 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-25" />
              <div className="absolute inset-y-16 inset-x-0 w-16 rounded-full rotate-90 bg-gradient-to-b from-pink-800 to-purple-900 blur-3xl mx-auto scale-y-150 animate-gradientSpeed opacity-30" />
              <div className="flex justify-between">
                <div className="mt-24">
                  <About />
                </div>
              </div>
            </div>

            <div className="mt-24">
              <Links />
            </div>
            <div className="mt-36">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
