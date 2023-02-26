// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faNodeJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

import danteAlighieri from "../assets/img/instituto-dante-alighieri-banner.png";
import brasilOrante from "../assets/img/brasil-orante-banner.png";
import sbcLab from "../assets/img/sbc-lab-banner.png";
import rodaLiteraria from "../assets/img/roda-literaria-banner.png";
import brincadeiraDeCrianca from "../assets/img/brincadeira-de-crianca-banner.png";
import sbcProducoes from "../assets/img/sbc-producoes-banner.png";


const professionalProjects = [
  {
    title: "Instituto Dante Alighieri",
    description: "Design & Desenvolvimento",
    imgUrl: danteAlighieri,
    siteUrl: "https://institutodantealighieri.com.br/",
    stacks: [
      faReact, faBootstrap, faNodeJs, faWordpress
    ],
  },
  {
    title: "Brasil Orante",
    description: "Design & Desenvolvimento",
    imgUrl: brasilOrante,
    siteUrl: "https://brasilorante.com/",
  },
  {
    title: "SBC Lab",
    description: "Design & Desenvolvimento",
    imgUrl: sbcLab,
    siteUrl: "",
  },
  {
    title: "Roda Literária",
    description: "Design & Desenvolvimento",
    imgUrl: rodaLiteraria,
  },
  {
    title: "Brincadeira de Criança",
    description: "Design & Desenvolvimento",
    imgUrl: brincadeiraDeCrianca,
  },
  {
    title: "SBC Produções",
    description: "Design & Desenvolvimento",
    imgUrl: sbcProducoes,
  },
];

export default professionalProjects;
