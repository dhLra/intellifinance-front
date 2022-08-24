import React from "react";

const LateralMenuDivision = (props) => {
    return (
        <div className="row">
            <div className="col-1 me-3"><p>{props.title}</p></div>
            <div className="col"><hr></hr></div>
        </div>
    )
}

export default LateralMenuDivision;