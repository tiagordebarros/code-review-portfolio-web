import "animate.css";
import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

import "./Banner.css";
import headerImg from "../../assets/img/header-img.png";
import { downloadLocalFile } from "../../helpers/downloadLocalFile";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const memoizedValue = useMemo(() => {
    return ["Web Developer", "Frontend", "Backend", "Full Stack"];
  }, []);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const tick = () => {
        let i = loopNum % memoizedValue.length;
        let fullText = memoizedValue[i];
        let updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
          setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex((prevIndex) => prevIndex - index);
          setDelta(period);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex((prevIndex) => prevIndex + index);
        }
      };
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [index, delta, isDeleting, loopNum, text, memoizedValue]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Olá, eu sou o Tiago!</span>
                  <h1>
                    {` `}{" "}
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Web Developer", "Frontend", "Backend", "Full Stack" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Bem vindo ao meu Portfólio Web! Eu sou Desenvolvedor Web
                    Full Stack. Sou brasileiro nato e resido atualmente no
                    Brasil, mas morei quase quatro anos na Suíça. Minha stack
                    favorita é a MongoDB + Express + React + Node.JS (MERN).
                    Também sou fascinado pelo mundo do WordPress! Sinta-se livre
                    para entrar em contato comigo!
                  </p>
                  <button
                    onClick={() =>
                      downloadLocalFile("tiago-ribeiro-de-barros-curriculo.pdf")
                    }
                  >
                    Download do meu currículo
                    <Download size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
