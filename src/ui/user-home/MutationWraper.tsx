'use client'

import { useState } from "react"
import { MutationButton } from "./MutationButton"
import Modal from "../modals/ModalBase"
import { NewExpenseForm } from "./forms/NewExpenseForm"
import { NewCashWithdrawal } from "./forms/NewCashWithdrawal"
import { NewIncomeForm } from "../close-accounting/NewIncomeForm"

export const MutationWraper = () => {
    const [expenseModal, setExpenseModal] = useState(false)
    const [depWithdrawal, setDepWithdrawal] = useState(false)
    const [incomeModal, setIncomeModal] = useState(false)
    return (
        <>
            <div className="flex flex-row items-center m-2 w-full justify-center">
                <MutationButton
                    title="Registrar Gasto"
                    className="text-mp-white m-2 w-36 bg-mp-dark rounded text-sm p-2"
                    onClick={() => setExpenseModal(true)}
                />
                <MutationButton
                    title="Registrar Deposito"
                    className="text-mp-white m-2 w-36 bg-mp-soft-dark rounded text-sm p-2"
                    onClick={() => setDepWithdrawal(true)}
                />
                <MutationButton 
                    title="Cerrar Turno"
                    className="p-2 bg-mp-blue text-mp-white rounded w-1/12 text-sm text-center m-6 hover:bg-mp-soft-dark"
                    onClick={() => setIncomeModal(true)}
                />
            </div>
            {
                expenseModal && 
                    <Modal onClose={() => setExpenseModal(false)}>
                        <NewExpenseForm setShowModal={setExpenseModal}/>
                    </Modal>
            }
            {
                depWithdrawal &&
                    <Modal onClose={() => setDepWithdrawal(false)}>
                        <NewCashWithdrawal setShowModal={setDepWithdrawal}/>
                    </Modal>
            }
            {
                incomeModal &&
                    <Modal onClose={() => setIncomeModal(false)}>
                        <NewIncomeForm setShowModal={setIncomeModal}/>
                    </Modal>
            }
        </>
    )
}