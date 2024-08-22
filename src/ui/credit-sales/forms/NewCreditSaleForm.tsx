'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Spinner } from "../../shared/Spinner"

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>
}

export const NewCreditSaleForm =  ({ setModal }: Props) => {
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [succesMessage, setSuccessMessage] = useState(false)
    const router = useRouter()

    const handleSuccessMessage = () => {
        setTimeout(() => {
            setSubmitStatus(initialStatus)
            router.refresh()
            setModal(false)
        }, 2000)
        setSuccessMessage(true)
    }


    const handleSubmit = async (event: { target: any, preventDefault: () => void }) => {
        setSubmitStatus(pendingRequest)
        const formData = new FormData(event.target)
        event.preventDefault()

        const concept = formData.get('concept')?.toString()
        const client = formData.get('client')?.toString()
        const date = formData.get('date')?.toString()
        const amount = formData.get('amount')?.toString()

        const body = {
            concept: concept,
            client: client,
            date: date,
            amount: amount
        }

        await axios.post('/api/credit-sales', body)
            .then(() => {
                handleSuccessMessage()
            })
            .catch(() => {
                setSubmitStatus(failedRequest)
            })
    }


    return (
        <form action="#" className="mb-0 m-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date" className="text-xs text-center text-mp-dark">Fecha del Apartado</label>

                <div className="relative">
                    <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft text-mp-soft-dark p-4 pe-12 text-sm shadow-sm"
                        placeholder="Fecha"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="date" className="text-xs text-center text-mp-dark">Artículo</label>

                <div className="relative">
                    <input
                        type="text"
                        id="concept"
                        name="concept"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft p-4 pe-12 text-mp-green text-sm shadow-sm"
                        placeholder="Artículo"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="text" className="text-xs text-center text-mp-dark">Cliente y Teléfono</label>

                <div className="relative">
                    <input
                        type="text"
                        id="client"
                        name="client"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft p-4 pe-12 text-mp-green text-sm shadow-sm"
                        placeholder="Clente-Teléfono"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="date" className="text-xs text-center text-mp-dark">Monto</label>

                <div className="relative">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft text-mp-soft-dark p-4 pe-12 text-sm shadow-sm"
                        placeholder="Monto"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="block rounded-lg bg-mp-dark px-5 py-3 text-sm font-medium text-mp-gray-soft w-1/2"
                >
                    {submitStatus.isPending ? <Spinner /> : 'Registrar'}
                </button>
            </div>
            {
                submitStatus.error &&
                <p className="text-center text-sm text-mp-error p-1">
                    Error al registrar el Apartado: Revisa que los datos sean correctos
                </p>
            }
            {
                succesMessage &&
                <p className="text-center text-sm text-mp-green p-1">
                    Registro exitoso!!
                </p>
            }
        </form>
    )
}