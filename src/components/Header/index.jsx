// -- Components
import { Col, Container } from "react-bootstrap";
import ToggleTheme from "../ToggleTheme";

// -- Styles
import style from "./style.module.scss";

function Header(){
    return (
        <>
            <Col sm={12} className={`${style.nav}`}>
                <Container>
                    <div className={style.nav__header}>
                        <div className={style.nav__header__list}> 
                            <a className={`${style.nav__header__list__items} titleColor`} href="#technologies">Tecnologias</a>
                            <a className={`${style.nav__header__list__items} titleColor`} href="#">Projetos</a>
                            <a className={`${style.nav__header__list__items} titleColor`} href="#ExperienceAndFormation">Experiência & formações</a>
                            <a className={`${style.nav__header__list__items} titleColor`} href="#contact">Contato</a>
                            <a className={`${style.nav__header__list__items} titleColor`} href="#moreabout">Sobre mim</a>   
                        </div>
                        <div className={style.nav__header__themeOptions}>
                            <ToggleTheme />   
                        </div>
                    </div>
                </Container>
            </Col>
        </>
    )
}


export default Header;
