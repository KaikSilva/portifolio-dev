import PropTypes from 'prop-types';

// -- Components
import { Col , Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimateDisplay from "../AnimationDisplay"

// -- Styles
import style from "./style.module.scss"

// -- Json
import technologies from "../../json/technologies.json"


const Technologies = () => {

    return (
        <>
            <Row className={style.technologies}>
                {technologies.map((technology, index) => {
                    return (
                    <Col key={index} className="p-2" sm={4}>
                        <AnimateDisplay className="h-100" key={index} delay={"0."+index} direction="bottom">
                                <motion.div whileHover={{ scale: 1.04 }} className="w-100 h-100 bgPrimary" style={{padding:"24px",borderRadius:"12px"}}>
                                    <Col className="mb-3" sm={12}>
                                        <div style={{background: "#65758529", width: "fit-content", padding: "8px", borderRadius: "10px"}}>
                                            <img width="30px" src={technology.image} />
                                        </div>
                                    </Col>

                                    <Col  style={{lineHeight: "24px",fontSize: "16px",fontWeight: "600"}} className="titleColor mb-2" sm={12}>
                                        {technology.title}
                                    </Col>

                                    <Col style={{fontSize:"14px"}} sm={12}>
                                        {technology.description}
                                    </Col>
                                </motion.div>
                         </AnimateDisplay>
                    </Col>
                    );
                })}
            </Row>
            
            <div className={style.technologiesOnMobile}>
                {technologies.map((technology, index) => {
                    return (
                        <AnimateDisplay key={index} direction="top">
                            <div   className="p-2" style={{
                                width: 'fit-content'
                            }}>
                                <div className="bgPrimary w-100 h-100" style={{
                                padding: '20px',
                                borderRadius: '12px'
                                }}>
                                <div className="col-sm-12" style={{
                                    margin: '0px'
                                }}>
                                    <div style={{
                                    background: 'rgba(101, 117, 133, 0.16)',
                                    width: 'fit-content',
                                    padding: '10px',
                                    borderRadius: '10px'
                                    }}>
                                        <img width="30px" src={technology.image} alt={`${technology.name} Icon`} />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </AnimateDisplay>
                    );
                })}
            </div>

        </>
    );
};


export default Technologies;







//propTypes

Technologies.propTypes = {
    technologies: PropTypes.array.isRequired,
};

