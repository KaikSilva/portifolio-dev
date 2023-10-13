import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import style from "./style.module.scss";

function Title({title, subTitle}){
    return (
        <div className="d-flex flex-column mb-5  align-items-center">
            <h1 className={`titleColor ${style.title}`}>{title}</h1>
            <Col sm="4" className={`mt-2 ${style.title__sub}`}>{subTitle}</Col>
        </div>
    )
}


Title.propTypes = {
    title: PropTypes.element.isRequired,
    subTitle: PropTypes.element.isRequired,
};

export default Title;