import emailjs from "@emailjs/browser";

import Mailer from "./Mailer";
function Contacto() {
  const imagenContacto = "/contacto.jpg";
  return (
    <section
      id="contact"
      className="laptop:container m-auto laptop:flex laptop:gap-2"
    >
      <div className="w-full m-auto laptop:w-1/2 p-5 laptop:p-10">
        <img className="rounded-3xl" src={imagenContacto} alt="" />
      </div>
      <Mailer />
    </section>
  );
}

export default Contacto;
