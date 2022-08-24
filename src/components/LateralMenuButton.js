import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LateralMenuButton = (props) => {
    return (
        <button className="btn btn-lateral d-flex flex-row text-start mb-1">
            <div className="col-2"><FontAwesomeIcon icon={props.icon} transform="grow-10" /></div>
            <div className="col">{props.buttonLabel}</div>
        </button>
    )
}

export default LateralMenuButton