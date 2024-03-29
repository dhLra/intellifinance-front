import React from "react";
import { faCirclePlus, faCircleMinus, faGear} from "@fortawesome/free-solid-svg-icons";

import LateralMenuButton from "./LateralMenuButton";
import LateralMenuDivision from "./LateralMenuDivision";

import '../style/css/lateralmenu.css';

const LateralMenu = (props) => {

    return (
        <div className="lateralmenu text-center justify-content-center"
            style={{ display: props.display }}>

            <div className="row flex-column mt-3">

                <LateralMenuDivision title="Saldo" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Saldo" param="addCredit" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Saldo" param="removeCredit" />

                <LateralMenuDivision title="Dispesas Pontuais" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Despesa Pontual" param="addOneOffExpense" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Despesa Pontual" param="RemoveOneOffExpense" />

                <LateralMenuDivision title="Dispesas Fixas" />
                <LateralMenuButton icon={faCirclePlus} buttonLabel="Adicionar Despesa Mensal" param="addSpend" />
                <LateralMenuButton icon={faCircleMinus} buttonLabel="Retirar Despesa Mensal" param="removeSpend" />

                {/* <LateralMenuDivision title="CSV" />
                <LateralMenuButton icon={faFileImport} buttonLabel="Exportar CSV" />
                <LateralMenuButton icon={faFileExport} buttonLabel="Importar CSV" />*/}
               

                <LateralMenuDivision title="Configurações" />
                <LateralMenuButton icon={faGear} buttonLabel="Configurações do Usuário" param="userConfig"/>

            </div>
        </div>
    )
}

export default LateralMenu;