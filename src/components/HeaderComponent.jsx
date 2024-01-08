import React from 'react';
import NavbarComponent from "./NavbarComponent.jsx";
import {Container} from "reactstrap";
import {useTranslation} from "react-i18next";

const HeaderComponent = () => {
    const {t} = useTranslation();

    return (
        <div className={"header d-flex justify-content-center align-items-center text-center"}>
            <NavbarComponent/>
            <Container className={"min-vh-100 d-flex justify-content-center align-items-center z-3"}>
                <div className={"header-content"}>
                    <h1>Tovoqsoy</h1>
                    <p>{t("banner.subtitle")}</p>
                </div>
            </Container>
        </div>
    );
};

export default HeaderComponent;