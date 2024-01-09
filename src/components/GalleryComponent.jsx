import React from 'react';
import {Container} from "reactstrap";
import {useTranslation} from "react-i18next";
import Slider from "react-slick";
import Images from "../assets/Images";

const GalleryComponent = () => {
    const {t} = useTranslation();

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className={"gallery-content text-black"}>
            <Container fluid={"md"} tag={"section"} id={"gallery"}>
                <h1 className={"text-center"}>{t("gallery.title")}</h1>
                <Slider {...settings}>
                    {
                        Images.map((value, index) => {
                            return (<div key={index} className={"px-4"}>
                                <img className={"my-img rounded object-fit-cover"} src={value} alt={""}/>
                            </div>)
                        })
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default GalleryComponent;