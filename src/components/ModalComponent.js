import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { addBalance } from "../services/BalanceService/AddBalanceService";
import { removeBalance } from "../services/BalanceService/RemoveBalanceService";
import { addFixedExpense } from "../services/FixedExpenseService/AddFixedExpenseService";
import { getUserLocalStorage } from "../services/LoginService/LoginService";
import { addOneOffExpense } from "../services/OneOffExpenseService/AddOneOffExpenseService";

import { useForm } from "react-hook-form";
import { getModalData } from "../services/ModalService/GetModalData";
import { removeFixedExpense } from "../services/FixedExpenseService/RemoveFixedExpense";


const ModalComponent = (props) => {

    const { register, handleSubmit } = useForm();
    const userData = getUserLocalStorage();
    const [data, setData] = useState([]);

    useEffect(() => {
        getModalData(userData.token).then((res) => {
            setData(res)
            console.log(res.data)
        })
    }, [])


    const Add = (e) => {
        addBalance(userData.token, e.amount)
    }

    const Remove = (e) => {
        removeBalance(userData.token, e.amount)
    }

    const AddOneOffExpense = (e) => {
        addOneOffExpense(
            userData.token,
            e.address,
            e.address_number,
            e.district,
            e.city,
            e.federal_state,
            e.date,
            e.establishment,
            e.amount,
            e.category
        )
    }

    const RemoveOneOffExpense = (e) => {

    }
    const AddFixedExpense = (e) => {
        addFixedExpense(userData.token,
            e.factor,
            e.category,
            e.amount,
            e.expendNumber,
            e.monthStart,
            e.monthEnd)
    }

    const RemoveFixedExpense = (e) => {
        removeFixedExpense(userData.token,
            e.Expend)
    }

    const UserConfig = (e) => {

    }

    const render = () => {
        if (props.type === 'addCredit') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adicionar Saldo
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(Add)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Digite o valor a ser adicionado</label>
                                <input type="text" className="form-control"  {...register("amount")} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal >
            )
        } else if (props.type === 'removeCredit') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Remover Saldo
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(Remove)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label mb-0">Digite o valor a ser retirado</label>
                                <p className="mt-1 "><small>Disponível: {data.current_amount} </small></p>
                                <input type="text" className="form-control" {...register("amount")} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        } else if (props.type === 'addOneOffExpense') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adicionar gasto pontual
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(AddOneOffExpense)}>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-9">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Rua</label>
                                        <input type="text" class="form-control"  {...register("address")} placeholder="Ex: Av. Brasil" />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Numero</label>
                                        <input type="text" class="form-control"  {...register("address_number")} placeholder="Ex: 243" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Bairro</label>
                                        <input type="text" class="form-control" {...register("district")} placeholder="Ex: Boa vista" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Cidade</label>
                                        <input type="text" class="form-control"  {...register("city")} placeholder="Ex: Caruaru" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Estado</label>
                                        <input type="text" class="form-control"  {...register("federal_state")} placeholder="Ex: PE" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Data</label>
                                        <input type="text" class="form-control"  {...register("date")} placeholder="2022-06-26" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome do Estabelecimento</label>
                                        <input type="text" class="form-control" {...register("establishment")} placeholder="Ex: Shopping" />
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Valor</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">R$</span>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" {...register("amount")} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Selecionar categoria da dispesa</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("category")}>
                                            <option selected>Selecione a categoria</option>
                                            <option value="1">Alimentação</option>
                                            <option value="2">Transporte</option>
                                            <option value="3">Medicamentos</option>
                                            <option value="4">Lazer</option>
                                            <option value="5">Mercado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        } else if (props.type === 'RemoveOneOffExpense') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Remover gasto pontual
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(RemoveOneOffExpense)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label mb-0">Selecione o gasto a ser removido</label>
                                <select className="form-select form-select" aria-label=".form-select-sm example" {...register("category")}>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )
        } else if (props.type === 'addSpend') {

            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adicionar Despesa Mensal
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(AddFixedExpense)}>
                        <Modal.Body>
                            <div className="row">

                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Fator da dispesa</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Escola dos filhos; Microondas novo" {...register("factor")} />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Selecionar categoria da dispesa</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("category")}>
                                            <option selected>Selecione a categoria da dispesa</option>
                                            <option value="1">Alimentação</option>
                                            <option value="2">Transporte</option>
                                            <option value="3">Medicamentos</option>
                                            <option value="4">Lazer</option>
                                            <option value="5">Mercado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Valor de uma parcela</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">R$</span>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" {...register("amount")} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Quantidade das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("expendNumber")}>
                                            <option selected>Selecione a quantidade de parcelas</option>
                                            {data.month.map((data, key) => {
                                                return <option key={key} value={data.id_month}>{data.id_month}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Inicio das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("monthStart")}>
                                            <option selected>Selecione o mês de Inicio</option>
                                            {data.month.map((data, key) => {
                                                return <option key={key} value={data.id_month}>{data.id_month}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Fim das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("monthEnd")}>
                                            <option selected>Selecione o mês de Termino</option>
                                            {data.month.map((data, key) => {
                                                return <option key={key} value={data.id_month}>{data.id_month}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        } else if (props.type === 'removeSpend') {

            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Remover Despesa Mensal
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(RemoveFixedExpense)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Digite o valor a ser retirado</label>
                                <select className="form-select form-select" aria-label=".form-select-sm example" {...register("Expend")}>
                                    <option selected>Selecione o mês de Termino</option>
                                    {data.expense.map((data, key) => {
                                        return <option key={key} value={data.id_expend}>{data.factor}</option>
                                    })}
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        } else if (props.type === 'userConfig') {

            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Configurações do Usuário
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(UserConfig)}>
                        <Modal.Body>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome do Usuário</label>
                                        <input type="text" class="form-control" value={userData.name} {...register("userName")} />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Teto de gastos (Em R$)</label>
                                        <input type="text" class="form-control" {...register("userMaxExpense")} />
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        }
    }

    return (
        render()
    )
}

export default ModalComponent