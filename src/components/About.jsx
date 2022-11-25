import Social from "./Social";
function About() {
  return (
    <section id="about">
      <div className="w-11/12 mx-auto flex px-2 py-10 tablet:flex-row flex-col items-center">
        <div className="lg:flex-grow tablet:w-4/6 lg:pr-24 tablet:pr-16 flex flex-col tablet:items-start tablet:text-left mb-16 tablet:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy DevpegAr{" "}
            <span className="text-white text-xl block">
              Desarrollador web full stack jr
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Siempre estuve ligado a la informatica y me desarrolle como técnico
            en mantenimiento de computadoras. Desde el 2017 trabajo en una
            empresa que brinda acceso a internet de forma inalambrica y por
            fibra óptica. Pero con la pandemia, en el año 2020, comence a
            realizar cursos sobre programación web full stack con python. Este
            año comence a desarrollarme en el lenguaje javascript y aprendiendo
            react js y node js.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contactame
            </a>
            <a
              href="#proyectos"
              className="ml-4 inline-flex items-center justify-center text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 hover:text-white rounded text-lg"
            >
              Mira mis proyectos
            </a>
          </div>
          <Social />
        </div>
        <div className="lg:max-w-lg lg:w-full tablet:w-2/6 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.png"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
