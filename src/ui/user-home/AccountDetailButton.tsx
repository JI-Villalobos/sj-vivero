'use client'

import { useState } from "react"
import { BiSolidShow } from "react-icons/bi"
import Modal from "../modals/ModalBase"
import { AccountDetailView } from "./AccountDetailView"

interface Props {
    accountId: number
}

export const AccountDetailButton = ({ accountId }: Props) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button 
                className="rounded py-1 flex items-center justify-center hover:text-mp-soft-dark"
                onClick={() => setShowModal(true)}
            >
                <BiSolidShow size={20} />
            </button>
            {
                showModal &&
                <Modal onClose={() => setShowModal(false)} title="Detalle del corte">
                    <AccountDetailView accountId={accountId}/>
                </Modal>
            }
        </>
    )
}