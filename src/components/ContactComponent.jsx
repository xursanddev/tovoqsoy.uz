import React from 'react';
import {Col, Container, Form, Row} from "reactstrap";
import {useTranslation} from "react-i18next";
import {YMaps, Map, Clusterer, Placemark} from "@pbe/react-yandex-maps";
import {sendMessage} from "../utils/util.js";

const ContactComponent = () => {
    const {t} = useTranslation();

    const onSubmit = (e) => {
        e.preventDefault();
        let t = e.target;
        const [name, phone, desc] = [t[0], t[1], t[2]];
        sendMessage(name.value, phone.value, desc.value);
    };

    return (
        <div className={"contact"}>
            <Container id={"contact"} className={"text-center px-md-5 px-sm-4 px-3"}>
                <h1>{t("contact.title")}</h1>
                <Row className={"row-cols-md-2 row-cols-1 row-gap-5"}>
                    <Col className={"rounded overflow-hidden"}>
                        <YMaps>
                            <Map
                                width={"100%"}
                                height={"100%"}
                                style={{minHeight: "350px"}}
                                defaultState={{
                                    center: [41.614578, 69.641973],
                                    zoom: 9,
                                }}
                            >
                                <Clusterer
                                    options={{
                                        preset: "islands#yellowStretchyIcon",
                                        groupByCoordinates: false,
                                    }}
                                >
                                    <Placemark geometry={[41.614578, 69.641973]}/>
                                </Clusterer>
                            </Map>
                        </YMaps>;
                    </Col>
                    <Col>
                        <Form onSubmit={onSubmit} className={"form text-start"}>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.firstname")} <br/>
                                    <input className={"mt-1"} type="text" required/>
                                </label>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.phone")}<br/>
                                    <input className={"mt-1"} type="text" required/>
                                </label>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label w-100"}>
                                    {t("contact.desc")}<br/>
                                    <textarea className={"mt-1"} rows={3} required></textarea>
                                </label>
                            </div>
                            <div className={"text-center submit"}>
                                <button>{t("contact.submit")}</button>
                                <p className={"mt-3 tel"}>
                                    {t("contact.call")}
                                    <a className={"text-decoration-none text-black fs-5"} href="tel:+998998528327">+99(899) 852-83-27</a>
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