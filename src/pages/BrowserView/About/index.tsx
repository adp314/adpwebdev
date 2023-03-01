import { useTranslation } from "react-i18next";
import "../../../i18n";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../../layouts/Navbar";
import { Projects } from "../../../components/Projects";
import { Footer } from "../../../layouts/Footer";
import { About } from "../../../components/About";
import { Links } from "../../../components/Links";
import { BsDot } from "react-icons/bs";

export function AboutBView() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full font-Cairo tracking-widest text-white flex flex-col justify-start items-center bg-gradient-to-b from-[#09020a] to-[#11041a]">
      <div className=" w-[1200px]">
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
  );
}
