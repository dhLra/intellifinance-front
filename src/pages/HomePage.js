import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faMoneyBill, faMoneyBillWave, faBurger, faCar, faCartShopping, faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

import Calendar from "../components/Calendar";
import { getUserLocalStorage } from "../services/LoginService";

import '../style/css/home.css';

const HomePage = () => {

    const navigate = useNavigate();
    const userData = getUserLocalStorage()
    //setUser(a.token)

    return (
        <div className="container">
            <h1 className='mt-3 mb-5'>Olá, {userData.name}</h1>
            <div className="row mt-3 d-flex flex-row text-center ">
                <div className="col col-statics col-home">
                    <div className="row">
                        <div className="col-2 ms-1 mt-1 mb-1 col-icon-green d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBill} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4 className="m-0 p-0">Saldo Atual</h4>
                            <hr className="m-0 mb-2 p-0"></hr>
                            <h5>R$ 100.000,00</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-statics col-home me-2 ms-2">
                    <div className="row">
                        <div className="col-2 ms-1 mt-1 mb-1 col-icon-red d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4 className="m-0 p-0">Despesas</h4>
                            <hr className="m-0 mb-2 p-0"></hr>
                            <h5>R$ 10.000,00</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-statics col-home">
                    <div className="row">
                        <div className="col-2 ms-1 mt-1 mb-1 col-icon-blue d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMoneyBillTransfer} transform="grow-10" />
                        </div>
                        <div className="col">
                            <h4 className="m-0 p-0">Diferença</h4>
                            <hr className="m-0 mb-2 p-0"></hr>
                            <h5>R$ 90.000,00</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex text-center">
                <div className="col pb-2 pt-2 col-home mt-4 me-1 col-grafics align-self-center justify-self-center">
                    <h4>Como você usou até agora</h4>
                    <p>O gráfico é referente ao período 22/08/2022. </p>

                    <div className="row mb-2 align-items-center justify-content-center text-center">
                        <div className="col-1">
                            <FontAwesomeIcon icon={faBurger} />
                        </div>
                        <div className="col">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2 align-items-center justify-content-center text-center">
                        <div className="col-1">
                            <FontAwesomeIcon icon={faCar} />
                        </div>
                        <div className="col">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2 align-items-center justify-content-center text-center">
                        <div className="col-1">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <div className="col">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "76%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2 align-items-center justify-content-center text-center">
                        <div className="col-1">
                            <FontAwesomeIcon icon={faBriefcaseMedical} />
                        </div>
                        <div className="col">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "52%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col pb-2 pt-2 col-home mt-4 ms-1 col-calendar">
                    <h4>Escolha a data para filtrar</h4>
                    <p>Escolha uma data para filtrar o gráfico ao lado. </p>
                    <Calendar />
                </div>
            </div>


            <button className="btn btn-primary my-5" onClick={() => navigate("/map")}> map </button>

        </div>
    )
}

export default HomePage;