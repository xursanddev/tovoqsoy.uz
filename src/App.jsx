import React, {Fragment, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
// import {Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import NavbarComponent from "./components/NavbarComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import GalleryComponent from "./components/GalleryComponent.jsx";
import ServicesComponent from "./components/ServicesComponent.jsx";
import ContactComponent from "./components/ContactComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

const App = () => {
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState("en");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        changeLng(navigator.language);
    }, []);

    const changeLng = (lng) => {
        setLanguage(lng);
        i18n.changeLanguage(lng).then(r => {});
    };

    return (
        <Fragment>
            <HeaderComponent/>
            <GalleryComponent/>
            <ServicesComponent/>
            <ContactComponent/>
            <FooterComponent/>
        </Fragment>
    );

    // return (
    //     <Container fluid className={"min-vh-100 d-flex justify-content-center align-items-center flex-column"}>
    //         <h2>
    //             {t("greeting.hello")}
    //         </h2>
    //         <span>
    //             Browser language: {language}
    //         </span>
    //         <Dropdown isOpen={dropdownOpen} toggle={toggle} className={"mt-3"}>
    //             <DropdownToggle>{t("lang.change")}</DropdownToggle>
    //             <DropdownMenu>
    //                 <DropdownItem onClick={()=> changeLng("en")}>English</DropdownItem>
    //                 <DropdownItem onClick={()=> changeLng("ru")}>Russian</DropdownItem>
    //                 <DropdownItem onClick={()=> changeLng("uz")}>Uzbek</DropdownItem>
    //             </DropdownMenu>
    //         </Dropdown>
    //     </Container>
    // );
};

export default App;