// -- Components
import { Col, Row } from "react-bootstrap";
import { FaCircle, FaGithub , FaEye } from "react-icons/fa";
import { FiCameraOff } from "react-icons/fi";


// -- Styles 
import style from "./style.module.scss" 

// -- JSON
import projects from "./projects.json"
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {

    return (
        <Col className="mb-3" sm={12}>
            <div className={style.projects}>
                {
                    projects.map((project, index) => {
                        return (
                            <Col key={index} className="p-2" sm="4">
                                <motion.div whileHover={{ scale: 1.03 }} className={`bgPrimary ${style.projects__project}`}>
                                    <div className={style.projects__project__header}>
                                        <div>
                                            <FaCircle className={style.projects__project__header__dot} color="#EF5350"/>
                                            <FaCircle className={style.projects__project__header__dot} color="#FFD600"/>
                                            <FaCircle className={style.projects__project__header__dot} color="#4CAF50"/>
                                        </div>
                                        <div className={style.projects__project__header__links}>
                                            <a className={style.projects__project__header__links__item} href="https://github.com/"><FaGithub className="titleColor" size={18}/></a>
                                            <a className={style.projects__project__header__links__item} href="https://github.com/"><FiExternalLink className="titleColor" size={18}/></a>
                                        </div>
                                    </div>
                                    <div className={style.projects__project__body}>

                                        <div className={`titleColor ${style.projects__project__body__title}`}>
                                            {project.title}
                                        </div>

                                        <div className={`titleColor ${style.projects__project__body__description}`}>
                                            {project.description}
                                        </div>

                                        <div className={`titleColor ${style.projects__project__body__languages}`}>
                                            {
                                                project.languages.map((language, key) => {
                                                    return (
                                                        <div className={style.projects__project__body__languages__language} key={key}>
                                                            <div className={style.projects__project__body__languages__language__icon}>
                                                                <img width="25px" src={language.icon} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                    <div className={style.projects__project__footer}>
                                        {
                                            project.preview?(
                                                <>
                                                    <div style={{backgroundImage: `url(${project.preview})`}} className={style.projects__project__footer__preview}>
                                                    </div>
                                                </>
                                            ):(
                                                <>
                                                    <div className={style.projects__project__footer__notpreview}>
                                                        <FiCameraOff />
                                                    </div>
                                                </>
                                            )
                                        }

                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })
                }
            </div>
        </Col>
    )
}

export default Projects;