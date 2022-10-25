import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket, faSun, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../services/LoginService/useAuth";
import LateralMenu from "./LateralMenu";

const Navbar = () => {
    const auth = useAuth();
    const [display, setDisplay] = useState("none");

    const showLateralMenu = () => {
        if (display === "none") {
            setDisplay("flex");
        } else {
            setDisplay("none");
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-1 mb-lh-0" style={{ flex: "1" }}>
                            <li className="nav-item d-flex text-center">
                                <h2 className="ms-4"> Intellifinance </h2>
                                <button className="btn navbar-brand" onClick={showLateralMenu} ><FontAwesomeIcon icon={faAnglesRight} transform="grow-1" /></button>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-3 mb-lh-0">
                            <li className="nav-item ">
                                <a href="https://www.facebook.com/fbrdigital/" className="nav-link" >
                                    <FontAwesomeIcon icon={faUser} transform="grow-1" />
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="https://www.facebook.com/fbrdigital/" className="nav-link" >
                                    <FontAwesomeIcon icon={faSun} transform="grow-1" />
                                </a>
                            </li>
                            <li className="mt-2 me-1 ms-1">
                                <p>|</p>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link btn" onClick={() => auth.logout()} >
                                    <FontAwesomeIcon icon={faRightFromBracket} transform="grow-2" />
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <LateralMenu display={display} />
        </>
    )
}

export default Navbar;
