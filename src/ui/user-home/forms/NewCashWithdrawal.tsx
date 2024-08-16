'use client'

import { ActiveAccounting, Branch, failedRequest, initialStatus, pendingRequest, Seller } from "@/src/lib/definitions"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Spinner } from "../../shared/Spinner"
import axios from "axios"
import { conceptList } from "@/src/lib/utils"

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewCashWithdrawal = ({ setShowModal }: Props) => {
    const [loadBranchInfoStatus, setLoadBranchInfoStatus] = useState(initialStatus)
    const [loadSellerNameStatus, setLoadSellerNameStatus] = useState(initialStatus)
    const [loadActiveAccountStatus, setLoadActiveAccountStatus] = useState(initialStatus)
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [successSubmit, setSuccessSubmit] = useState(false)
    const [activeAccount, setActiveAccount] = useState<ActiveAccounting>()
    const [seller, setSeller] = useState<Seller>()
    const [branch, setBranch] = useState<Branch>()

    useEffect(() => {
        setLoadActiveAccountStatus(pendingRequest)
        setLoadSellerNameStatus(pendingRequest)
        setLoadBranchInfoStatus(pendingRequest)
        axios.get('http://localhost:3000/api/active-accounts')
            .then((res) => {
                setActiveAccount(res.data.result)
                setLoadActiveAccountStatus(initialStatus)
            })
            .catch(() => {
                setLoadActiveAccountStatus(failedRequest)
            })
        axios.get('http://localhost:3000/api/seller')
            .then((res) => {
                setSeller(res.data.result[0])
                setLoadSellerNameStatus(initialStatus)
            })
            .catch(() => {
                setLoadSellerNameStatus(failedRequest)
            })
        axios.get('http://localhost:3000/api/branch')
            .then((res) => {
                setBranch(res.data.result)
                setLoadBranchInfoStatus(initialStatus)
            })
            .catch(() => {
                setLoadBranchInfoStatus(failedRequest)
            })
    }, [])

    const handleSuccessMessage = () => {
        setTimeout(() => {
            setSuccessSubmit(false)
            setShowModal(false)    
        }, 2000)
        setSuccessSubmit(true)
    }

    const handleSubmit = async (event: { target: any, preventDefault: () => void }) => {
        setSubmitStatus(pendingRequest)
        const formData = new FormData(event.target)
        event.preventDefault()

        const amount = formData.get('amount')?.toString()
        const concept = formData.get('concept')?.toString()

        const body = {
            amount: amount,
            concept: concept,
            sellerName: seller?.fullName,
            branch: branch?.name
        }

        await axios.post('http://localhost:3000/api/withdrawals', body)
            .then(() => {
                setSubmitStatus(initialStatus)
                handleSuccessMessage()
            })
            .catch(() => {setSubmitStatus(failedRequest)})
        
    }

    if (loadActiveAccountStatus.isPending) {
        return (
            <div className="rounded flex p-8 flex-col justify-center items-center mt-6">
                <Spinner bgBlank={true} />
            </div>
        )
    }

    if (loadActiveAccountStatus.error) {
        return (
            <div className="flex flex-col items-center">
                <div className="rounded bg-none w-full h-full p-4 m-8 flex items-center justify-center">
                    <p className="text-sm text-center text-mp-strong-red">
                        Un error inesperado provoco que no fuese posible registrar el déposito,
                        porfavor contacta a tu administrador tomado esta captura de pantalla.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <form className="rounded flex flex-col justify-center items-center mt-6" onSubmit={handleSubmit}>
            <p className="text-mp-blue font-semibold m-2">Registro de Depositos y Otros Retiros</p>
            {
                loadBranchInfoStatus.isPending ? <Spinner bgBlank /> : <p className="text-mp-green m-2">Sucursal: <span className="text-mp-dark">{branch?.name}</span></p>
            }
            {
                loadSellerNameStatus.isPending ? <Spinner bgBlank /> : <p className="text-mp-green m-2"> Seller: <span className="text-mp-dark">{seller?.fullName}</span></p>
            }
            <div className="m-2 w-2/4">
                <label htmlFor="selection" className="block text-sm font-medium text-mp-strong-gray"> Concepto del retiro </label>

                <select
                    name="concept"
                    id="concept"
                    className="mt-1.5 w-full p-2 rounded-lg border border-mp-gray-soft text-mp-soft-dark sm:text-sm"
                >
                    <option value="">Selecciona el concepto</option>
                    {
                        conceptList.map((concept) => <option value={concept} key={`conc-id-${concept}`}>{concept}</option>)
                    }
                </select>
            </div>

            <input
                id="amount"
                name="amount"
                type="number"
                placeholder="Monto del retiro"
                className="rounded-lg w-2/4 p-2 border border-mp-gray-soft m-2 text-center text-mp-dark"
            />
            {
                loadBranchInfoStatus.error || loadSellerNameStatus.error ? 
                    <p className="text-mp-error text-center w-1/2 m-2"> 
                        No fue posible cargar la información necesaria para registrar un nuevo deposito
                    </p>
                    : (
                        <button className="bg-mp-green rounded text-mp-white text-sm p-3 w-1/3 m-6">
                            {submitStatus.isPending ? <Spinner /> : 'Registrar'}
                        </button>
                    )
            }
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