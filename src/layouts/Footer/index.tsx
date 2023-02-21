import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="h-0.5 w-full bg-gray-400 bg-opacity-10 rounded-full" />
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-start items-center gap-4 text-lg font-light opacity-30">
          <FaTwitter />
          <FaGithub />
          <FaLinkedinIn />
          <span>///</span>
          <p>André DA COSTA PINTO.</p>
          <span>///</span>
          <p>adcp314@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
