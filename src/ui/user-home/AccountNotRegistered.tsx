'use client'

import { useEffect, useState } from "react"
import { BiLeaf } from "react-icons/bi"
import Modal from "../modals/ModalBase"
import { AccountRegistry } from "../modals/AccountRegistry"
import { useRouter } from "next/navigation"
import { initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import { Spinner } from "../shared/Spinner"

export const AccountNotRegistered = () => {
    const [showModal, setShowModal] = useState(false)
    const [loadActiveStatus, setLoadActiveStatus] = useState(initialStatus)
    const router = useRouter()

    useEffect(() => {
        setLoadActiveStatus(pendingRequest)
        const active = axios.get('/api/active-accounts')
            .then((res) => {
                if (res.data.result === null) {
                    setLoadActiveStatus(initialStatus)
                } else {
                    router.push("/")
                }
            })
    }, [])

    if (loadActiveStatus.isPending) {
        return (
            <div className="rounded flex p-8 flex-col justify-center items-center mt-6">
                <Spinner bgBlank={true} />
            </div>
        )
    }

    return (
        <div className="px-6 pb-6 mt-10">
            <div className="bg-mp-white opacity-95 pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg 
                            ring-1 ring-gray-900/10"
            >
                <BiLeaf color="green" className="mt-3" />
                <p className="text-sm leading-6 text-mp-soft-dark">
                    Para poder registrar gastos o las ventas del dia necesitas registrar un nuevo turno.
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button type="button"
                        className="rounded-md bg-mp-green px-3 py-2 text-sm font-semibold text-mp-white 
                                    shadow-sm hover:bg-mp-light-green focus-visible:outline 
                                    focus-visible:outline-2 focus-visible:outline-offset-2 
                                    focus-visible:outline-mp-light-green"
                        onClick={() => setShowModal(true)}
                    >
                        Registrar Turno
                    </button>
                </div>
            </div>

            {showModal &&
                <Modal onClose={() => setShowModal(false)} title="Registro de nuevo turno">
                    <AccountRegistry setShowModal={setShowModal}/>
                </Modal>
            }

        </div>
    )
} 