import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpenseCategory = (props) => {
    return (
        <>
            <div className="row mb-2 align-items-center justify-content-center text-center">
                <div className="col-1">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div className="col">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseCategory;