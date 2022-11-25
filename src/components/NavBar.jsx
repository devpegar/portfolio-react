import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const code = <FaCode className="text-4xl m-3" />;
  const menu = <FaBars />;
  const close = <FaTimes />;

  const links = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "#proyectos",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Contacto",
      link: "#contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <header
      className={`sticky top-0 z-10 w-full mx-auto laptop:px-5 px-0 py-5 text-white flex flex-col items-start tablet:flex-row tablet:justify-between tablet:items-center ${
        scroll ? "bg-cyan-700" : "bg-transparent"
      }`}
    >
      <a className="flex justify-center items-center" href="#">
        {code}
        <p className="text-4xl font-logo">DevpegAr</p>
      </a>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-6 top-8 text-3xl cursor-pointer tablet:hidden z-50"
      >
        {open ? close : menu}
      </div>
      <nav
        className={`flex justify-center items-center text-4xl tablet:text-sm absolute w-full h-screen bg-blue-800 tablet:border-b-2 tablet:border-white tablet:pb-2 tablet:top-0 tablet:h-auto tablet:bg-transparent tablet:static tablet:w-auto transition-all duration-500 ${
          open ? "top-0 left-0" : "top-[-900px]"
        }`}
      >
        <ul className="tablet:flex tablet:justify-center tablet:items-center text-white tablet:pb-2">
          {links.map((link, index) => (
            <li key={index} className="text-center p-2">
              <a onClick={() => setOpen(false)} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
