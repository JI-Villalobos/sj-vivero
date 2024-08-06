'use client'

import { initialStatus } from "@/src/lib/definitions"
import { useRouter } from "next/navigation"
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const AccountRegistry = ({ setShowModal }: Props) => {
    const [status, setStatus] = useState(initialStatus)
    const [sellerLoadStatus, setSellerLoadStatus] = useState(initialStatus)
    const router = useRouter()

    useEffect(() => {
        //should load seller name
    }, [])

    const date = new Date(Date.now())

    const handleNewAccounting = async (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {

    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-sm text-center text-mp-green">
                Registrar nuevo turno con fecha de:
                <span className="text-mp-blue">
                    {date.toISOString()}
                </span>
            </p>
            <button 
                className="bg-mp-dark text-mp-white rounded p-2 m-6"
                onClick={(e) => setShowModal(false)}
            >
                {status.isPending ? <Spinner /> : 'Continuar'}
            </button>
        </div>
    )
}