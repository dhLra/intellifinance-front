import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faMoneyBill, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

import '../style/css/home.css';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h2 className='mt-3'>Olá, Cliente!</h2>
            <div className="row mt-3 d-flex flex-row text-center ">
                <div className="col col-statics">
                    <div className="row">
                        <div className="col-3 col-icon-green d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBill} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4>Saldo Atual</h4>
                            <h5>R$ 100.000,00</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-statics me-2 ms-2">
                    <div className="row">
                        <div className="col-3 col-icon-red d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4>Despesas</h4>
                            <h5>R$ 10.000,00</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-statics">

                    <div className="row">
                        <div className="col-3 col-icon-blue d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBillTransfer} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4>Diferença</h4>
                            <h5>R$ 90.000,00</h5>
                        </div>
                    </div>
                </div>

            </div>

            <button className="btn btn-primary" onClick={() => navigate("/map")}> map </button>
        </div>
    )
}

export default HomePage;