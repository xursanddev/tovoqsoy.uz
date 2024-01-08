import React, {Fragment, useState} from 'react';
import {Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const FooterComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Fragment>
            <div>
                <Container tag={"footer"} className={"footer d-flex justify-content-between align-items-center"}>
                    <h1 className={"mb-0"}>Tovoqsoy</h1>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle>English</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>English</DropdownItem>
                            <DropdownItem>Uzbek</DropdownItem>
                            <DropdownItem>Russian</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Container>
            </div>
            <div className={"text-center py-2 fw-bold"} style={{background: "#ECF1F0"}}>
                <Container>No rights reserved, Tovoqsoy 2024.</Container>
            </div>
        </Fragment>
    );
};

export default FooterComponent;