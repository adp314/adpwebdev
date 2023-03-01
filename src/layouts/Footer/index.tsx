import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/Ai";

export function Footer() {
  return (
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
  );
}
