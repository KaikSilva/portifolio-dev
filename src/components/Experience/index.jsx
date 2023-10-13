import { Col } from "react-bootstrap";

function Experience(){
    return (
        <>
            <Col className="mb-3" sm={6}>
                <div className="w-100  p-5 bgPrimary">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width={"250px"} src="https://www.centrodepesquisa.com.br/wp-content/uploads/2017/07/empresa-de-pesquisa-de-mercado-sao-paulo-sp.png" alt="" />
                        </div>
                        <div className="text-center">
                            <span className="text-warning" style={{fontSize:"20px"}}>+ 4</span> <br /> <span style={{fontSize:"13px"}}>anos de expêriencia</span>
                        </div>
                    </div>
                    <div>
                        <p className="mt-4" style={{textAlign:"center"}}>
                        Durante minha jornada nessa empresa, trabalhei em diversos projetos emocionantes, desde o desenvolvimento de websites de alto desempenho até a criação de sistemas complexos. Tive a oportunidade de aplicar minhas habilidades técnicas e trabalhar com tecnologias de ponta.
                        <br /><br /> 
                        Além disso, a empresa valoriza a aprendizagem contínua e o crescimento profissional. Tive acesso a treinamentos e recursos para aprimorar minhas habilidades e me manter atualizado com as últimas tendências do setor.
                        <br />
                        </p>
                        <div className="text-center">
                                <u>SKILL's:</u>
                                <br /> 
                                <b>
                                    React.js 
                                    · Node.js 
                                    · PHP
                                    · Laravel
                                    · JavaScript
                                    <br /> 
                                    · REST APIs 
                                    · Git 
                                    · Ubuntu & CentOS7
                                    · Mysql 
                                </b>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Experience;