import { Col, Row } from "react-bootstrap";
import Input from "../Inputs";
import {Form} from "@unform/web";
import * as Yup from "yup";
import { useRef } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import style from "./style.module.scss"
import { Alert } from "../Toast";

function ContactForm(){
    const formRef = useRef(null);

    const handleSubmit = async (data) => {
        try{
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string()
                    .required(),
                email: Yup.string().email()
                    .required(),
                message: Yup.string()
                .required()
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            Alert("Sua mensagem já chegou para mim, entrarei em contato o mais rápido possível!", "success");

        } catch (err) {
            Alert("Preencha todos os campos para continuar", "error");
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    };

    return (
        <>
            <div className="d-flex flex-column mb-5  align-items-center">
                <h1 className={`titleColor ${style.contactForm__title}`}>Entre em contato</h1>
                <Col sm="4" className={`mt-2 ${style.contactForm__title__sub}`}>Será um prazer conversar com você!</Col>
            </div>
            <Row className="d-flex justify-content-center">
                <Col  sm={6}>
                    <div>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome"
                                className="mb-3"
                            >
                                <Input  placeholder={"Nome"} style={{background:"var(--bg-primary-dark)"}} className={"form-control bgPrimary mb-3"} type={"text"} name={"name"}/>
                            </FloatingLabel>
                            
                            <FloatingLabel
                                controlId="floatingInput"
                                label="E-mail"
                                className="mb-3"
                            >
                                <Input  placeholder={"E-mail"} style={{background:"var(--bg-primary-dark)"}} className={"form-control bgPrimary mb-3"} type={"text"} name={"email"}/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Escreva sua mensagem..."
                                className="mb-3"
                            >
                                <Input placeholder="Escreva sua mensagem..." 
                                        style={{background:"var(--bg-primary-dark)",height: '200px'}} 
                                        className="form-control" 
                                        type="textarea"
                                        name="message" id="" 
                                        cols="30" 
                                        rows="10">        
                                </Input>
                            </FloatingLabel>

                            <Col sm={12}>
                                <button type={"submit"} className={`${style.contactForm__form__button}`}>Enviar</button>
                            </Col>
                        </Form>
                    </div>
                </Col>
            </Row>
        </> 
    )
}


export default ContactForm;