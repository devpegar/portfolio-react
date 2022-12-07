import { FaRegCopyright } from "react-icons/fa";
import Social from "./Social";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-10">
          <Social />
        </div>
        <div className="container mx-auto pb-10 flex flex-col laptop:flex-row justify-center items-center laptop:gap-2 ">
          <p className="flex gap-1 items-center text-white text-lg pb-2 laptop:pb-0">
            Copyright <FaRegCopyright /> 2022 DevpegAr.
          </p>
          <p className="text-white text-lg pb-2 laptop:pb-0">
            Todos los derechos reservados.
          </p>
          <p className="text-white text-lg">
            Designed by{" "}
            <a
              href="https://github.com/devpegar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg italic hover:text-cyan-300 transition-colors duration-300"
            >
              DevpegAr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
