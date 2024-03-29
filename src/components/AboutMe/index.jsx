import { Col, Row } from "react-bootstrap";
import Contact from "../Contact";

function AboutMe(){
    return (
        <>
            <Col className="mb-2" sm={5}>
                <div   className="p-5 d-flex align-items-center flex-column bgPrimary" style={{borderRadius:"5px"}}>
                    <img className="mb-4" style={{borderRadius:"100%"}} width="130px" height="130px" src="https://avatars.githubusercontent.com/u/83962112?s=400&u=68b89e941219b3d68dc9c51c0c221ee0bfb85905&v=4" alt="" />
                    <div className="text-center">
                        Sou um desenvolvedor FullStack apaixonado por código, com <b>mais de 4 anos de experiência</b> em criar soluções funcionais.
                        <br /><br />
                        Meu foco é o desenvolvimento de websites, sistemas e API's REST. Tenho habilidades em CSS, Sass e JavaScript, que são essenciais para construir websites modernos e responsivos. 
                        <br /><br />
                        Além disso, estou sempre aprendendo e me mantendo atualizado com as últimas tendências e práticas da indústria. Sou um profissional colaborativo, focado em resultados, capaz de enfrentar desafios complexos e contribuir para o sucesso de projetos futuros.
                        <br /><br />
                        Estou empolgado para continuar aprendendo e crescendo nesse campo em constante evolução. 
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Contact />
                    </div>
                </div>
            </Col>
        </>
    )
}

export default AboutMe;