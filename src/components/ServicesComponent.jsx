import {Fragment, useState} from 'react';
import {Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {useTranslation} from "react-i18next";
import CarIcon from "../assets/car.png";
import GroupIcon from "../assets/group.png";
import Slider from "react-slick";
import {n1, n2, n3} from "../assets/NivaGallery";

const ServicesComponent = () => {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prevState => !prevState);

    return (
        <div>
            <Container id={"services"} className={"text-center px-sm-5 px-3"}>
                <h1>{t("services.name")}</h1>
                <Row className={"row-cols-lg-2 row-cols-1 justify-content-evenly row-gap-4"}>
                    <Col>
                        <div className={"service-card text-start me-lg-5 mx-md-auto"}>
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
                        <div className={"service-card text-start ms-lg-5 mx-md-auto"}>
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
                <Button onClick={toggle} color={"white"} className={"mt-5 px-5 shadow border-0 rounded-1"} size={"lg"}>
                    {t("services.card.more")}
                </Button>
                <InfoModal toggle={toggle} open={open}/>
            </Container>
        </div>
    );
};

function InfoModal({open, toggle}) {
    const {t} = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        lazy: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <Fragment>
            <Modal isOpen={open} toggle={toggle} size={"xl"} className={"z-top-full"}>
                <ModalHeader toggle={toggle}>
                    Info
                </ModalHeader>
                <ModalBody className={"pb-5"}>
                    <Slider {...settings}>
                        <div style={"width: 100%;"} className={"p-3"}>
                            <img className={"img-fluid rounded object-fit-cover"} src={n1} alt=""/>
                        </div>
                        <div style={"width: 100%;"} className={"p-3"}>
                            <img className={"img-fluid rounded object-fit-cover"} src={n2} alt=""/>
                        </div>
                        <div style={"width: 100%;"} className={"p-3"}>
                            <img className={"img-fluid rounded object-fit-cover"} src={n3} alt=""/>
                        </div>
                    </Slider>
                    <p className={"text-end"}>
                        <a className={'text-black mb-2 d-block'} href="tel:+998998528327">+998 (99) 852-83-27</a>
                        <a className={'text-black mb-2 d-block'} href="tel:+998998528327">+998 (33) 403-49-17</a>
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle} color={"dark"}>{t("services.close")}</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}

export default ServicesComponent;