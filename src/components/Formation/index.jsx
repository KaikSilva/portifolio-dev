import { Col } from "react-bootstrap";
import { FiStar } from "react-icons/fi";

function Formation(){
    return (
        <>
            <Col className="mb-3 d-flex align-items-start" sm={6}>
                <div className="w-100  p-5 bgPrimary">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width={"250px"} src="https://facunicamps.edu.br/wp-content/uploads/2023/03/Fac-Logo.png" alt="" />
                        </div>
                        <div className="text-center">
                            <span className="text-warning" style={{fontSize:"20px"}}>5</span> <br /> <span style={{fontSize:"13px"}}>nota no MAC</span>
                        </div>
                    </div>
                    <div>
                        <p className="mt-4" style={{textAlign:"center"}}>
                        <b>Cursando o 2º semestre de Análise e Desenvolvimento de Sistemas na Faculdade Unicamps</b>, onde estou aprendendo a desenvolver sistemas de software de alta qualidade e a criar soluções de software inovadoras.
                        <br /><br /> 
                        Além disso estou aprendendo a trabalhar em equipe, aprimorando minhas habilidades de comunicação e aprendendo a trabalhar com prazos apertados.
                        <br />
                        </p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Formation;