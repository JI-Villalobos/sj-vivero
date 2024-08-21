'use client'

import { useState } from "react"
import { MutationButton } from "../user-home/MutationButton"
import Modal from "../modals/ModalBase"
import { NewCreditSaleForm } from "./forms/NewCreditSaleForm"

export const NewCreditSaleButton = () => {
    const [modal, setModal] = useState(false)

    return(
        <div>
            <MutationButton 
                title="Nuevo apartado" 
                onClick={() => {setModal(true)}}
                className="bg-mp-dark text-mp-white rounded p-2"
            />
            {
                modal && 
                    <Modal onClose={() => setModal(false)}>
                        <NewCreditSaleForm setModal={setModal}/>
                    </Modal>
            }        
        </div>
    )
}