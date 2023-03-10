import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import './Skills.css'
import mongodb from "../../assets/img/mongodb.svg";
import nodejs from "../../assets/img/nodejs.svg";
import react from "../../assets/img/react.svg";
import wordpress from "../../assets/img/wordpress.svg";
import figma from "../../assets/img/figma.svg";
import mysql from "../../assets/img/mysql.svg";
import typescript from "../../assets/img/typescript.svg";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import javascript from "../../assets/img/javascript.svg";
import redux from "../../assets/img/redux.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import python from "../../assets/img/python.svg";
import docker from "../../assets/img/docker.svg";
import git from "../../assets/img/git.svg";
import github from "../../assets/img/github.svg";
import npm from "../../assets/img/npm.svg";
import vscode from "../../assets/img/vscode.svg";
import jwt from "../../assets/img/jwt.svg";
import colorSharp from "../../assets/img/color-sharp.png"

export function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>Abaixo, apresento as principais tecnologias envolvidas na elaboração dos projetos.<br></br>São stacks, libraries, frameworks e outras ferramentas que eu utilizo no dia a dia.</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay swipeable className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={mongodb} alt="MongoDB Logo" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="React Logo" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Node JS Logo" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={wordpress} alt="WordPress Logo" />
                                    <h5>WordPress</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt="Figma Logo" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="MySQL Logo" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="TypeScript Logo" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="HTML5 Logo" />
                                    <h5>HTML 5</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="CSS3 Logo" />
                                    <h5>CSS 3</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="JavaScript Logo" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="Redux Logo" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="Bootstrap Logo" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Python Logo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Docker Logo" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Git Logo" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="GitHub Logo" />
                                    <h5>GitHub</h5>
                                </div>
                                <div className="item">
                                    <img src={npm} alt="NPM Logo" />
                                    <h5>NPM</h5>
                                </div>
                                <div className="item">
                                    <img src={vscode} alt="VS Code Logo" />
                                    <h5>Visual Studio Code</h5>
                                </div>
                                <div className="item">
                                    <img src={jwt} alt="JWT Logo" />
                                    <h5>Json Web Token</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
}
