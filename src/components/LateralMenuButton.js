import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalComponent from "./ModalComponent";


const LateralMenuButton = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [type, setType] = useState()

    const setStates = (param) =>{
        setModalShow(true)
        setType(param)
    }

    return (<>
        <button className="btn btn-lateral d-flex flex-row text-start mb-1 align-items-center justify-content-center" data-bs-toggle="modal" onClick={() => setStates(props.param)}>
            <div className="col-2"><FontAwesomeIcon icon={props.icon} transform="grow-10" /></div>
            <div className="col">{props.buttonLabel}</div>
        </button>


        <ModalComponent
            show={modalShow}
            onHide={() => setModalShow(false)}
            type={type} />
    </>)
}

export default LateralMenuButton