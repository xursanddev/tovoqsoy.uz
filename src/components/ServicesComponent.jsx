import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {useTranslation} from "react-i18next";
import CarIcon from "../assets/car.png";
import GroupIcon from "../assets/group.png";

const ServicesComponent = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Container id={"services"} className={"text-center"}>
                <h1>{t("services.name")}</h1>
                <Row className={"row-cols-lg-2 row-cols-1 justify-content-center row-gap-4"}>
                    <Col>
                        <div className={"service-card text-start ms-lg-auto mx-auto"}>
                            <div>
                                <img src={CarIcon} alt=""/>
                            </div>
                            <h1>{t("services.card.title1")}</h1>
                            <p>
                                {t("services.card.text1")}
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className={"service-card text-start ms-lg-auto mx-auto"}>
                            <div>
                                <img src={GroupIcon} alt=""/>
                            </div>
                            <h1>{t("services.card.title2")}</h1>
                            <p>
                                {t("services.card.text2")}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesComponent;