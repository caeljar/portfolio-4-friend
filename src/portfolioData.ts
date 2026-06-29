import custom_tenis from './assets/custom_tenis.webp';
import mickey from './assets/mickey.webp';
import stitch from './assets/stitch.webp';
import shrek from './assets/shrek.webp';
import squidward_plate from './assets/squidward_plate.webp';
import squidward from './assets/squidward.webp';
import profile from './assets/profile.webp';

export const portfolioData = {
  author: {
    name: "Lizeth Cruz",
    role: "Diseñadora Industrial",
    philosophy: '"Creo que un producto debe ser mucho más que un objeto: debe representar una historia, un recuerdo y la personalidad de quien lo recibe."',
    bio: "Soy diseñadora y creadora de regalos personalizados, especializada en transformar ideas en piezas únicas elaboradas completamente a mano. Mi trabajo combina creatividad, diseño y técnicas artesanales para desarrollar productos inspirados en personajes, series, películas y gustos personales.",
    mission: "Diseñar y elaborar regalos personalizados que transformen las ideas de mis clientes en piezas únicas y significativas.",
    vision: "Ser una diseñadora reconocida por la originalidad y calidad de nuestros regalos personalizados, destacando por la innovación en el diseño artesanal y la capacidad de crear piezas exclusivas que transmitan emociones y fortalezcan los momentos especiales de nuestros clientes.",
    picture: profile
  },
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  ],
  skills: [
    "Rhinoceros 3D",
    "AutoCAD",
    "SolidWorks",
    "Fusion 360",
    "Adobe Illustrator",
    "Paquetería Office"
  ],
  projects: [
    {
      id: "project-1",
      title: "Tenis Personalizados",
      description: "Calzado personalizado y exclusivo transformado en arte funcional mediante aerografía de alta calidad adaptada al cliente.",
      image: custom_tenis
    },
    {
      id: "project-2",
      title: "Figura Mickey Mouse Papercraft",
      description: "Figura tridimensional detallada de Mickey Mouse armada con precisión mediante el ensamblaje de piezas cortadas y dobladas de papercraft.",
      image: mickey
    },
    {
      id: "project-3",
      title: "Figura Decorativa de Stitch",
      description: "Escultura artesanal de cerámica inspirada en Stitch (Lilo & Stitch). Modelada totalmente a mano para capturar su expresividad. Es ideal para decorar o coleccionar.",
      image: stitch
    },
    {
      id: "project-4",
      title: "Mini Globos: Serpiente y Rana de Shrek",
      description: "Colección de mini globos decorativos de cerámica artesanal, inspirados en la rana y la serpiente de Shrek. Modelados a mano para capturar la esencia de los personajes, son piezas únicas ideales para decorar o coleccionar.",
      image: shrek
    },
    {
      id: "project-5",
      title: "Plato de Calamardo",
      description: "Este plato artesanal de cerámica, inspirado en Calamardo Tentáculos (Bob Esponja), está modelado y decorado a mano con detalles en relieve. Es una pieza única y funcional que combina creatividad, ideal tanto para servir alimentos como para decorar espacios.",
      image: squidward_plate
    },
    {
      id: "project-6",
      title: "Vaso Casa Calamardo",
      description: "Vaso o decorativo de cerámica 3D inspirado en la casa de Calamardo (Bob Esponja). Ideal para fanáticos y coleccionistas.",
      image: squidward
    }
  ],
  contact: {
    location: "UVM Azcapotzalco, Mexico City",
    email: "viris30pop@gmail.com",
    cellphone: "55-20-71-38-65"
  },
  links: [
    { name: "Inicio", to: "hero" },
    { name: "Curriculum", to: "curriculum" },
    { name: "Proyectos", to: "projects" },
    { name: "Contacto", to: "contact" }
  ]
};
