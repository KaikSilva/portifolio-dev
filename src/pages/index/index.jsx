// -- Components
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Technologies from "../../components/Technologies";
import ProviderToast from "../../components/Toast";

// -- Json
import configPage from "../../json/page.config.json"

// -- Styles
import style from "./style.module.scss";
import ContactForm from "../../components/ContactForm";
import Experience from "../../components/Experience";
import Formation from "../../components/Formation";
import Title from "../../components/Title";
import ButtonToTop from "../../components/ButtonToTop";


function Portifolio(){
    return (
        <>
            <ProviderToast/>

            {/** Header section */}
            <section>
                <Col sm={12}>
                    <Header />
                </Col>
            </section>

            {/** Main section */}
            <section className="pt-5">
                <Container className={style.header}>
                    <Row>
                        <Col  className={`d-flex flex-column justify-content-between ${style.header__boxTitle}`} sm={5}>
                            <h1 className={`${style.header__title__name} titleColor`} style={{fontWeight:"bold"}}>{configPage.presentation}</h1>
                            <h1 className={`${style.header__title} titleColor`} style={{fontWeight:"bold"}}>{configPage.title}</h1>
                            <p className={style.header__title__sub}> A mais de {(new Date().getFullYear()-2020)} anos <span className={style.textGradient}>transformando ideias criativas em  experiências digitais</span>  inovadoras para o mundo <br /> online e além 💫</p>
                            <Col className="mt-4" sm={12}>
                                <Contact />
                            </Col>
                        </Col>
                        <Col sm={3}>
                        </Col>
                        <Col  className="d-flex justify-content-center position-relative" sm={4}>
                            <div className={style["image-logo-bg"]}></div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/** Technologies section */}
            <section id="technologies" className="pb-5">
                <Container className={style.technologies}>
                    <Technologies/>
                </Container>
            </section>
            
            {/** About me section */}
            <section id="moreabout">
                <Container className={style.technologies}>
                    <AboutMe />
                </Container>
            </section>
             
            {/** My Experience and Formation section */}
            <section id="ExperienceAndFormation">
                <Container className={style.technologies}>
                <Title title={"Expêriencias & Formações"} subTitle={"Minhas expêriencia no mercado de trabalho e minhas formações academicas"}/>
                    <Row className="d-flex ">
                        <Experience /> {/** & **/} <Formation />
                    </Row>
                </Container>
            </section>

            {/** Technologies section */}
            <section id="contact" className="pb-5">
                <Container className={style.technologies}>
                    <ContactForm/>
                </Container>
            </section>
            
            {/** Button to top */}
            <ButtonToTop />
             
            <div className={`p-5 ${style.divBackgroundGradient}`} />
        </>
    )
}

export default Portifolio;