import { FaCheckCircle } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <FiCpu className="text-white text-6xl inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Tecnologias
          </h1>
          <p className="text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            En esta sección he colocado todas las tecnologías y lenguajes de
            programación que he aprendido a lo largo de estos años realizando
            varios cursos y mirando muchos videos. No he puesto porcentajes como
            en otros portfolios ya que me es muy dificil decir cuanto me falta
            aprender de cada tecnología pero de seguro es que con mucha practica
            ire mejorando cada día. Ese es mi objetivo
          </p>
        </div>
        <div className="flex flex-wrap laptop:w-4/5 mobile:mx-auto mobile:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 tablet:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-105 duration-300">
                <FaCheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
