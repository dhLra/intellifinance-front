import React from "react";
import { faCirclePlus, faCircleMinus, faFileImport, faFileExport } from "@fortawesome/free-solid-svg-icons";

import LateralMenuButton from "./LateralMenuButton";
import LateralMenuDivision from "./LateralMenuDivision";

import '../style/css/lateralmenu.css';

const LateralMenu = (props) => {
    return (
        <div className="lateralmenu text-center justify-content-center"
            style={{ display: props.display }}>

            <div className="row flex-column">
                <h1> Intellifinance </h1>

                <LateralMenuDivision title="Saldo" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Saldo" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Saldo" />

                <LateralMenuDivision title="Dispesas" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Dispesa Mensal" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Dispesa Mensal" />

                <LateralMenuDivision title="CSV" />
                <LateralMenuButton icon={faFileImport} buttonLabel="Exportar CSV" />
                <LateralMenuButton icon={faFileExport} buttonLabel="Importar CSV" />
            </div>
        </div>
    )
}

export default LateralMenu;