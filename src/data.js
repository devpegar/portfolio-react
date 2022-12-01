import { json } from "react-router-dom";

const projects = [
  {
    imagen: "/slider/1.png",
    titulo: "Tienda de muebles",
    descripcion: "Sitio web desarrollado con html y css responsive",
    sitio: "https://devpeg.ar/proyectos/tiendamueble",
    github: "https://github.com/devpegar/tiendamueble",
  },
  {
    imagen: "/slider/2.png",
    titulo: "TechPro",
    descripcion:
      "Sitio web desarrollado con html y css responsive metodología mobile firts",
    sitio: "https://devpeg.ar/proyectos/techpro",
    github: "https://github.com/devpegar/techpro",
  },
  {
    imagen: "/slider/3.png",
    titulo: "Arquitectura bosque",
    descripcion:
      "Sitio web desarrollado con html y css responsive metodología mobile firts agregando una galeria de imagenes",
    sitio: "https://devpeg.ar/proyectos/arquitecturabosque",
    github: "https://github.com/devpegar/arquitecturabosque",
  },
  {
    imagen: "/slider/4.png",
    titulo: "Nucleus",
    descripcion:
      "Sitio web desarrollado con html y css con BEM,responsivo, mobile first con animaciones y transisiones",
    sitio: "https://devpeg.ar/proyectos/nucleus",
    github: "https://github.com/devpegar/nucleus",
  },
  {
    imagen: "/slider/5.png",
    titulo: "La cafeteria",
    descripcion:
      "Sitio web desarrollado con html y Sass utilizando gulp como compilador. Es responsivo, mobile first, con diferentes páginas y galeria de imagenes",
    sitio: "https://devpeg.ar/proyectos/cafeteria",
    github: "https://github.com/devpegar/cafeteria",
  },
  {
    imagen: "/slider/6.png",
    titulo: "Delivery App",
    descripcion:
      "Sitio web desarrollado con html, BEM y Sass utilizando gulp como compilador. Es responsivo, mobile first, con formularios",
    sitio: "https://devpeg.ar/proyectos/deliveryapp",
    github: "https://github.com/devpegar/DeliveryApp",
  },
  {
    imagen: "/slider/7.png",
    titulo: "Carrito de compras",
    descripcion: "Carrito de compras realizado en javascript",
    sitio: "https://devpeg.ar/proyectos/universidad",
    github: "https://github.com/devpegar/carrito-de-compras-JS",
  },
  {
    imagen: "/slider/8.png",
    titulo: "Cotizador seguro automotor",
    descripcion: "Proyecto realizado con html, Tailwind y javascript",
    sitio: "https://devpeg.ar/proyectos/cotizador-seguro",
    github: "https://github.com/devpegar/cotizador-seguro",
  },
  {
    imagen: "/slider/9.png",
    titulo: "Control Gasto Semanal",
    descripcion: "Proyecto realizado con html, Tailwind y javascript",
    sitio: "https://devpeg.ar/proyectos/gastosemanal",
    github: "https://github.com/devpegar/gastosemanal",
  },
  {
    imagen: "/slider/10.png",
    titulo: "Administrador de citas de veterinaria",
    descripcion:
      "Proyecto realizado con html, Tailwind y javascript con persistencia de datos a través de localstorage",
    sitio: "https://devpeg.ar/proyectos/administradordecitas",
    github: "https://github.com/devpegar/administrador-de-citas",
  },
  {
    imagen: "/slider/11.png",
    titulo: "Consulta el clima",
    descripcion:
      "Proyecto realizado con html, tailwind y javascript consumiendo una api con fetch",
    sitio: "https://clima.devpeg.ar/",
    github: "https://github.com/devpegar/Fetch-api-Clima",
  },
  {
    imagen: "/slider/12.png",
    titulo: "Buscador de imagenes",
    descripcion:
      "Proyecto realizado con html, tailwind y javascript consumiendo una api con fetch",
    sitio: "https://devpeg.ar/proyectos/buscador-imagenes",
    github: "https://github.com/devpegar/buscador-de-imagenes",
  },
  {
    imagen: "/slider/13.png",
    titulo: "Cotizador criptomonedas",
    descripcion:
      "Proyecto realizado con html, tailwind y javascript consumiendo una api con fetch",
    sitio: "https://devpeg.ar/proyectos/criptomonedas",
    github: "https://github.com/devpegar/criptomonedas",
  },
];

const skills = [
  "Html",
  "Css",
  "Sass",
  "Tailwind css",
  "JavaScript",
  "React JS",
  "React Native",
  "Node JS",
  "Python",
  "Django",
];
export { projects, skills };
