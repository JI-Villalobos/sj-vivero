'use client'

import { CreditSale, CreditSaleBalance } from "@/src/lib/definitions"
import { useState } from "react"
import { MutationButton } from "../user-home/MutationButton"
import Modal from "../modals/ModalBase"
import { NewPartialForm } from "./forms/NewPartialForm"
import { SettleCreditSaleForm } from "./forms/SettleCreditSale"

interface Props {
    sale: CreditSale
    balance: CreditSaleBalance
}

export const MutationWrapper = ({ sale, balance }: Props) => {
    const [newPaymentModal, setNewPaymentModal] = useState(false)
    const [finishPaymentsModal, setFinishPaymentsModal] = useState(false)

    console.log(sale);
    

    return (
        <div className="flex flex-row items-center m-2 w-full justify-center">
            <MutationButton 
                title="+ Pago" 
                onClick={() => {setNewPaymentModal(true)}}
                className="bg-mp-dark text-mp-white rounded p-2 m-2 w-20"
            />
            <MutationButton 
                title="Liquidar" 
                onClick={() => {setFinishPaymentsModal(true)}}
                className="bg-mp-green text-mp-white rounded p-2 m-2 w-20"
            />
            {
                newPaymentModal &&
                    <Modal onClose={() => setNewPaymentModal(false)} title="Registro de abono">
                        <NewPartialForm saleId={sale.id} outstandingBalance={balance.outstandingBalance} setModal={setNewPaymentModal}/>
                    </Modal>
            }
            {
                finishPaymentsModal &&
                    <Modal onClose={() => setFinishPaymentsModal(false)} title="Liquidar artículo apartado">
                        <SettleCreditSaleForm sale={sale} outstandingBalance={balance.outstandingBalance} setModal={setFinishPaymentsModal}/>
                    </Modal>
            }
        </div>
    )
}