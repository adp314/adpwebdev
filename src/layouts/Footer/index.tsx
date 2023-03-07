import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function Footer() {
  const size: Size = useWindowSize();

  let sWidth = 0;
  let sHeight = 0;

  if (size.width && size.height != undefined) {
    sWidth = size.width;
    sHeight = size.height;
  }
  return (
    <>
      {sWidth >= 1024 && (
        <footer className="mt-16">
          <div className="h-0.5 w-full bg-gradient-to-l from-[#5a5a5a0e] via-[#77777738] to-[#5a5a5a0e] rounded-full" />
          <div className="flex justify-center items-center py-6">
            <div className="flex justify-start items-center gap-4 text-base font-light text-[#72727275] uppercase ">
              <FaTwitter />
              <FaGithub />
              <FaLinkedinIn />
              <span>///</span>
              <p className="flex justify-start items-center gap-1.5">
                <AiOutlineCopyright />
                André Da Costa Pinto.
              </p>
              <span>///</span>
              <p>andredp314@gmail.com</p>
            </div>
          </div>
        </footer>
      )}
      {sWidth < 1024 && sWidth > 700 && (
        <footer className="mt-16">
          <div className="h-0.5 w-full bg-gradient-to-l from-[#5a5a5a0e] via-[#77777738] to-[#5a5a5a0e] rounded-full" />
          <div className="py-6">
            <div className="flex justify-center items-center ">
              <div className="flex justify-start items-center gap-4 text-base font-light text-[#72727275] uppercase ">
                <FaTwitter />
                <FaGithub />
                <FaLinkedinIn />
                <span>///</span>
                <p>andredp314@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2 text-base font-light text-[#72727275] uppercase">
              <p className="flex justify-start items-center gap-1.5">
               
                <AiOutlineCopyright />
                André Da Costa Pinto.
              </p>
            </div>
          </div>
        </footer>
      )}
      {sWidth <= 700 && (
        <footer className="mt-16">
          <div className="h-0.5 w-full bg-gradient-to-l from-[#5a5a5a0e] via-[#77777738] to-[#5a5a5a0e] rounded-full" />
          <div className="py-6">
            <div className="flex justify-center items-center ">
              <div className="flex justify-start items-center gap-4 text-sm font-light text-[#72727275] uppercase ">
                <FaTwitter />
                <FaGithub />
                <FaLinkedinIn />
                <span>///</span>
                <p>andredp314@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2 text-sm font-light text-[#72727275] uppercase">
              <p className="flex justify-start items-center gap-1.5">
               
                <AiOutlineCopyright />
                André Da Costa Pinto.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
