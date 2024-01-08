import React from 'react';
import {Container} from "reactstrap";
import {useTranslation} from "react-i18next";

const GalleryComponent = () => {
    const {t} = useTranslation();

    return (
        <div className={"gallery-content text-black"}>
            <Container tag={"section"} id={"gallery"}>
                <h1 className={"text-center"}>{t("gallery.title")}</h1>
            </Container>
        </div>
    );
};

export default GalleryComponent;