import React from 'react';
import {Button, Col, Container, Form, Row} from "reactstrap";
import {useTranslation} from "react-i18next";
import MapImage from "../assets/map.png";

const ContactComponent = () => {
    const {t} = useTranslation();

    return (
        <div className={"contact"}>
            <Container id={"contact"} className={"text-center"}>
                <h1>{t("contact.title")}</h1>
                <Row className={"row-cols-md-2 row-cols-1 row-gap-2"}>
                    <Col>
                        <img className={"img-fluid"} src={MapImage} alt=""/>
                    </Col>
                    <Col>
                        <Form className={"form text-start"}>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.firstname")} <br/>
                                    <input className={"mt-1"} type="text"/>
                                </label>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.phone")}<br/>
                                    <input className={"mt-1"} type="text"/>
                                </label>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.desc")}<br/>
                                    <textarea className={"mt-1"} rows={3}></textarea>
                                </label>
                            </div>
                            <div className={"text-center submit"}>
                                <button>{t("contact.submit")}</button>
                                <p className={"mt-2 tel"}>
                                    {t("contact.call")} <a className={"text-decoration-none text-black fs-5"} href="tel:+998998528327">+99(899) 852-83-27</a>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactComponent;