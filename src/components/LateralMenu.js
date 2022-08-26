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
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Saldo" param="addCredit" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Saldo" param="removeCredit" />

                <LateralMenuDivision title="Dispesas" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Dispesa Mensal" param="addSpend" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Dispesa Mensal" param="removeSpend" />

                <LateralMenuDivision title="CSV" />
                <LateralMenuButton icon={faFileImport} buttonLabel="Exportar CSV" />
                <LateralMenuButton icon={faFileExport} buttonLabel="Importar CSV" />



            </div>
        </div>
    )
}

export default LateralMenu;