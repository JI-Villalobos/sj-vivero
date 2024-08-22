'use client'

import { ActiveAccounting, failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import { useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"
import { useRouter } from "next/navigation"

export const CloseAccountingButton = () => {
    const [activeAccounting, setActiveAccounting] = useState<ActiveAccounting>()
    const [loadActiveAccounting, setLoadActiveAccounting] = useState(initialStatus)
    const [submitstatus, setSubmitstatus] = useState(initialStatus)
    const router = useRouter()

    useEffect(() => {
        setLoadActiveAccounting(pendingRequest)
        axios.get('/api/active-accounts')
            .then((res) => {
                setActiveAccounting(res.data.result)
                setLoadActiveAccounting(initialStatus)
            })
            .catch(() => {
                setLoadActiveAccounting(failedRequest)
            })
    }, [])


    const handleCloseAccounting = async () => {
        setSubmitstatus(pendingRequest)
        const body = {
            accountingId: activeAccounting?.accountingId
        }
        await axios.patch('/api/active-accounts', body)
            .then(() => {
                setSubmitstatus(initialStatus)
                router.push("/not-account")
            })
            .catch(() => {
                setSubmitstatus(failedRequest)
            })
    }


    if (loadActiveAccounting.isPending) {
        return (
            <div className="rounded flex p-8 flex-col justify-center items-center mt-6">
                <Spinner bgBlank={true} />
            </div>
        )
    }

    if (loadActiveAccounting.error) {
        return (
            <div className="flex flex-col items-center">
                <div className="rounded bg-none w-full h-full p-4 m-8 flex items-center justify-center">
                    <p className="text-sm text-center text-mp-strong-red">
                        Un error inesperado provoco que no fuese posible los datos del turno actual,
                        porfavor contacta a tu administrador tomando esta captura de pantalla.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
            <button className="bg-mp-dark text-mp-white rounded p-2 hover:bg-mp-soft-dark" onClick={handleCloseAccounting}>
                {
                    submitstatus.isPending ? <Spinner /> : 'Terminar'
                }
            </button>
            {
                submitstatus.error &&
                <p className="text-center text-sm text-mp-error p-1">
                    Error al registrar al cerrar el turno: Contacta con tu administrador
                </p>
            }
        </>
    )
}