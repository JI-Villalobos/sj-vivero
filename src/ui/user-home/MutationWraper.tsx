'use client'

import { useState } from "react"
import { MutationButton } from "./MutationButton"
import Modal from "../modals/ModalBase"

export const MutationWraper = () => {
    const [expenseModal, setExpenseModal] = useState(false)
    const [depWithdrawal, setDepWithdrawal] = useState(false)
    return (
        <>
            <div className="flex flex-row items-center m-2">
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
            </div>
            {
                expenseModal && 
                    <Modal onClose={() => setExpenseModal(false)} title="Registro de un nuevo gasto">
                        <div></div>
                    </Modal>
            }
            {
                depWithdrawal &&
                    <Modal onClose={() => setDepWithdrawal(false)} title="Registro de un nuevo depósito">
                        <div></div>
                    </Modal>
            }
        </>
    )
}