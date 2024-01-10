import {Fragment, useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {useTranslation} from "react-i18next";

const NavbarComponent = () => {
    const [t] = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <Navbar
                container={"lg"}
                expand={"md"}
                dark
                className={"position-absolute top-0 start-0 end-0 z-top"}
            >
                <NavbarBrand href="/">
                    Tovoqsoy
                </NavbarBrand>
                <NavbarToggler className={`text-white ${isOpen ? "active" : ""}`} onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="#gallery">{t("nav.gallery")}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#services">{t("nav.services")}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">{t("nav.contact")}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    );
};

export default NavbarComponent;