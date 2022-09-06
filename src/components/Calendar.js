import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calendar = () => {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (arg) => {
        setShow(true);
        setDate(arg.dateStr)
    }

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                    { title: 'Total Gasto 25$', date: '2022-08-01' },
                    { title: 'Total Gasto 30$', date: '2022-08-02' }
                ]}
                dateClick={handleShow} />

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Relatório de Gastos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Total Gasto: R$ 000</h5>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Local do Gasto</label>
                                <input type="text" class="form-control" disabled />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Data (AA-MM-DD)</label>
                                <input type="text" class="form-control" disabled value={date} />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Valor R$</label>
                                <input type="text" class="form-control" disabled />
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}


export default Calendar;