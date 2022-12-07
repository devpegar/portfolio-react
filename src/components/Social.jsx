import { FaInstagram, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className="flex justify-center items-center space-x-5 my-10 text-white text-3xl">
      <a
        className="hover:text-fuchsia-400 transition hover:scale-125"
        href="https://instagram.com/devpegar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        className="hover:text-cyan-500 transition hover:scale-125"
        href="https://twitter.com/devpeg_ar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="hover:text-blue-600 transition hover:scale-125"
        href="https://facebook.com/devpegar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        className="hover:text-gray-900 hover:bg-white outline-transparent rounded-full transition hover:scale-125"
        href="https://github.com/devpegar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;
