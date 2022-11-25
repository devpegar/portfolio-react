import { Swiper, SwiperSlide } from "swiper/react";
import { FaCode, FaGithub } from "react-icons/fa";
import { TfiBriefcase } from "react-icons/tfi";
import { projects } from "../data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, Pagination, EffectCoverflow } from "swiper";

function Proyectos() {
  const ultimosProyectos = projects.slice(projects.length - 4);
  const proyectosRestantes = projects.slice(0, projects.length - 4);

  const maxText = (text) => {
    return text.slice(0, 60) + "...";
  };

  const proyectosEnSlider = (slides) => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <a href={slide.sitio} target="_blank" rel="noopener noreferrer">
          <img src={slide.imagen} alt={slide.titulo} />
        </a>
      </SwiperSlide>
    ));
  };

  const proyectosEnLista = (proyectos) => {
    return proyectos.map((proyecto, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-xs min-h-min mobile:max-h-96">
            <a href={proyecto.sitio}>
              <img
                className="rounded-t-lg"
                src={proyecto.imagen}
                alt={proyecto.titulo}
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-base font-medium mb-2">
                {proyecto.titulo}
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                {maxText(proyecto.descripcion)}
              </p>
              <footer className="flex justify-between items-center">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <a
                    href={proyecto.sitio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar sitio
                  </a>
                </button>
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-4xl hover:text-gray-600 transition-colors duration-300" />
                </a>
              </footer>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <section id="proyectos" className="container mx-auto py-5">
      <div className="flex flex-col items-center my-5">
        <TfiBriefcase className="text-6xl text-white" />
        <h1 className="text-white text-4xl text-center font-bold py-2">
          Proyectos terminados
        </h1>
        <p className="w-5/6 text-white text-center italic">
          Durante estos años he tomado varios cursos y desarrollado sitios web
          con html, css y javascript. A continuación podrás ver y visitar esos
          sitios
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="w-full m-auto"
      >
        {proyectosEnSlider(ultimosProyectos)}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="w-full mx-auto my-5 bg-gray-300 rounded-lg p-5"
      >
        {proyectosEnLista(proyectosRestantes)}
      </Swiper>
    </section>
  );
}

export default Proyectos;
