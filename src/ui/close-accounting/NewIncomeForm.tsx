'use client'

import { ActiveAccounting, failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewIncomeForm = ({ setShowModal }: Props) => {
    const [activeAccounting, setActiveAccounting] = useState<ActiveAccounting>()
    const [loadActiveAccountingstatus, setLoadActiveAccountingStatus] = useState(initialStatus)
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [successSubmit, setSuccessSubmit] = useState(false)


    useEffect(() => {
        setLoadActiveAccountingStatus(pendingRequest)
        axios.get('http://localhost:3000/api/active-accounts')
            .then((res) => {
                setActiveAccounting(res.data.result)
                setLoadActiveAccountingStatus(initialStatus)
            })
            .catch(() => {
                setLoadActiveAccountingStatus(failedRequest)
            })
    }, [])

    if (loadActiveAccountingstatus.isPending) {
        return (
            <div className="rounded flex p-8 flex-col justify-center items-center mt-6">
                <Spinner bgBlank={true} />
            </div>
        )
    }

    if (loadActiveAccountingstatus.error) {
        return (
            <div className="flex flex-col items-center">
                <div className="rounded bg-none w-full h-full p-4 m-8 flex items-center justify-center">
                    <p className="text-sm text-center text-mp-strong-red">
                        Un error inesperado provoco que no fuese posible registrar las ventas,
                        porfavor contacta a tu administrador tomado esta captura de pantalla.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <form action="" className="rounded flex flex-col justify-center items-center mt-2">
            <p className="text-mp-blue font-semibold m-2">Registro de Ventas</p>
            {

                loadActiveAccountingstatus.isPending ? <Spinner bgBlank={true} />
                    : loadActiveAccountingstatus.error ?
                        <div className="rounded border border-mp-error border-opacity-30 p-3 text-sm text-mp-strong-red">
                            <p>Error al cargar datos del turno actual intentalo más tarde</p>
                        </div>
                        : <div className="flex flex-row p-1 rounded border border-mp-soft-dark border-opacity-35 text-sm">
                            <p className="text-mp-green m-2">Turno: <span className="text-mp-dark">{activeAccounting?.accountingId}</span></p>
                            <p className="text-mp-green m-2">Vendedora: <span className="text-mp-dark">{activeAccounting?.sellerId}</span></p>
                            <p className="text-mp-green m-2">Sucursal: <span className="text-mp-dark">{activeAccounting?.branchId}</span></p>
                        </div>

            }
            <div className="w-full flex flex-col justify-center items-center m-8">
                <label htmlFor="text" className="text-mp-strong-gray">Monto</label>

                <div className="relative">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="w-full rounded-lg border border-mp-gray-soft p-3 pe-12 text-sm shadow-sm"
                        placeholder="$0.00"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                    </span>
                </div>
            </div>

            <button
                type="submit"
                className="block p-3 w-1/2 rounded-lg bg-mp-dark text-mp-gray-soft text-sm font-medium text-white mb-6"
            >
                {
                    submitStatus.isPending ? <Spinner /> : 'Registrar'
                }
            </button>
            {
                submitStatus.error &&
                <p className="text-center text-sm text-mp-error p-1">
                    Error al registrar el gasto: Revisa que los datos sean correctos
                </p>
            }
            {
                successSubmit && 
                <p className="text-center text-sm text-mp-green p-1">
                    Registro exitoso!!
                </p>
            }
        </form>
    )
}