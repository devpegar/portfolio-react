import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Alerta from "../tools/Alerta";

function Mailer() {
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [alerta, setAlerta] = useState({});
  const form = useRef();
  const refRecaptcha = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    const datos = Object.values(inputs).some((input) => input === "");
    if (datos) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      setInterval(() => {
        setAlerta({});
      }, 5000);
      return;
    }
    setAlerta({});
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setAlerta({
              msg: "El mensaje ha sido enviado con éxito",
              error: false,
            });
            setInputs({
              user_name: "",
              user_email: "",
              message: "",
            });
            refRecaptcha.current.reset();
            setInterval(() => {
              setAlerta({});
            }, 5000);
          }
        },
        (error) => {
          setAlerta({
            msg: "Hubo un error inesperado. Vuelva a intentarlo más tarde",
            error: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const { msg } = alerta;

  const { user_name, user_email, message } = inputs;

  return (
    <div className="block p-5 laptop:p-10 rounded-lg shadow-lg w-full laptop:w-1/2">
      <h1 className="text-3xl font-bold text-gray-100 text-center">
        Contactame
      </h1>

      <form
        ref={form}
        onSubmit={sendMail}
        className="m-10 justify-self-center self-center"
      >
        <div className="form-group mb-6">
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Nombre"
            value={user_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Correo electrónico"
            value={user_email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="message"
            id="message"
            rows="5"
            placeholder="Mensaje"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>

        <ReCAPTCHA
          ref={refRecaptcha}
          sitekey={import.meta.env.VITE_SITE_KEY}
          className="max-w-lg mx-auto my-5"
        />
        {msg && <Alerta alerta={alerta} />}
        <div className="w-full tablet:w-1/2 tablet:mx-auto my-5">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Mailer;
