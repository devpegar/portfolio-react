import { FaInstagram, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className="flex justify-center space-x-5 mt-10 text-white text-3xl">
      <a
        className="hover:text-fuchsia-400 transition hover:scale-125"
        href="https://instagram.com/devpegar"
      >
        <FaInstagram />
      </a>
      <a
        className="hover:text-cyan-500 transition hover:scale-125"
        href="https://twitter.com/devpegar"
      >
        <FaTwitter />
      </a>
      <a
        className="hover:text-blue-700 transition hover:scale-125"
        href="https://facebook.com/devpegar"
      >
        <FaFacebookF />
      </a>
      <a
        className="hover:text-gray-900 hover:bg-white outline-transparent rounded-full transition hover:scale-125"
        href="https://github.com/devpegar"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;
