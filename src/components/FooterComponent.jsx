import {Fragment, useEffect, useState} from 'react';
import {Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useTranslation} from "react-i18next";

const FooterComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState("English");

    useEffect(() => {
        setLang(i18n?.language === "ru" ? "Russian" : i18n?.language === "uz" ? "Uzbek" : "English");
    }, [i18n.language]);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Fragment>
            <div>
                <Container tag={"footer"} className={"footer d-flex justify-content-between align-items-center"}>
                    <h1 className={"mb-0"}>Tovoqsoy</h1>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle>{lang}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => i18n.changeLanguage("en")}>English</DropdownItem>
                            <DropdownItem onClick={() => i18n.changeLanguage("uz")}>Uzbek</DropdownItem>
                            <DropdownItem onClick={() => i18n.changeLanguage("ru")}>Russian</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Container>
            </div>
            <div className={"text-center py-2 fw-bold"} style={{background: "#ECF1F0"}}>
                <Container>{t("footer.copyright")}{new Date().getFullYear()}.</Container>
            </div>
        </Fragment>
    );
};

export default FooterComponent;