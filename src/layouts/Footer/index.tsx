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
            <div className="flex justify-start items-center gap-4 text-base font-light text-[#72727275] uppercase  ">
              <FaTwitter className="hover:text-white cursor-pointer hover:duration-300" />
              <FaGithub className="hover:text-white cursor-pointer hover:duration-300" />
              <FaLinkedinIn className="hover:text-white cursor-pointer hover:duration-300" />
              <span>///</span>
              <p className="flex justify-start items-center gap-1.5 hover:text-white cursor-pointer hover:duration-300">
                <AiOutlineCopyright />
                André Da Costa Pinto.
              </p>
              <span>///</span>
              <p className="hover:text-white cursor-pointer hover:duration-300">
                andredp314@gmail.com
              </p>
            </div>
          </div>
        </footer>
      )}
      {sWidth < 1024 && sWidth > 700 && (
        <footer className="mt-16">
          <div className="h-0.5 w-full bg-gradient-to-l from-[#5a5a5a0e] via-[#77777738] to-[#5a5a5a0e] rounded-full" />
          <div className="py-6">
            <div className="flex justify-center items-center ">
              <div className="flex justify-start items-center gap-4 text-base font-light text-[#72727275] uppercase">
                <FaTwitter
                  className="hover:text-white cursor-pointer hover:duration-300"
                  onClick={() =>
                    (window.location.href = "https://twitter.com/adp_314")
                  }
                />
                <FaGithub
                  className="hover:text-white cursor-pointer hover:duration-300"
                  onClick={() =>
                    (window.location.href = "https://github.com/adp314")
                  }
                />
                <FaLinkedinIn
                  className="hover:text-white cursor-pointer hover:duration-300"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/adp314/")
                  }
                />
                <span>///</span>
                <p className="hover:text-white cursor-pointer hover:duration-300">
                  andredp314@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2 text-base font-light text-[#72727275] uppercase">
              <p className="flex justify-start items-center gap-1.5 hover:text-white cursor-pointer hover:duration-300 ">
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
              <div className="flex justify-start items-center gap-4 text-sm font-light text-[#72727275] uppercase">
                <FaTwitter className="hover:text-white cursor-pointer hover:duration-300" />
                <FaGithub className="hover:text-white cursor-pointer hover:duration-300" />
                <FaLinkedinIn className="hover:text-white cursor-pointer hover:duration-300" />
                <span>///</span>
                <p className="hover:text-white cursor-pointer hover:duration-300">
                  andredp314@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2 text-sm font-light text-[#72727275] uppercase">
              <p className="flex justify-start items-center gap-1.5 hover:text-white cursor-pointer hover:duration-300">
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
