import React from 'react';
import {Button} from "reactstrap";

const ComingSoon = () => {
    return (
        <div className={"d-grid align-items-center min-vh-100 justify-content-center text-center"}>
            <div>
                <h1 className={"display-1 text-warning"}><span className={"text-info"}>C</span>omi<span className={"text-info"}>ng</span> S<span className={'text-info'}>oo</span>n🔥</h1>
                <Button size={"lg"} color={"primary"} className={"px-5 fs-5 rounded-pill mt-3"}>Contact</Button>
            </div>
        </div>
    );
};

export default ComingSoon;