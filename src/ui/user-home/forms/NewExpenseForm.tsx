'use client'

import { ActiveAccounting, ExpenseType, failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { Spinner } from "../../shared/Spinner"
import { useRouter } from "next/navigation"

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewExpenseForm = ({ setShowModal }: Props) => {
    const [loadAccountInfoStatus, setLoadAccountInfoStatus] = useState(initialStatus)
    const [loadExpenseTypesStatus, setLoadExpenseTypesStatus] = useState(initialStatus)
    const [activeAccount, setActiveAccount] = useState<ActiveAccounting>()
    const [types, setTypes] = useState<ExpenseType[]>([])
    const [selectedItem, setSelectedItem] = useState<ExpenseType>({ id: 0, type: '' })
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [successSubmit, setSuccessSubmit] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setLoadAccountInfoStatus(pendingRequest)
        setLoadExpenseTypesStatus(pendingRequest)

        axios.get('/api/active-accounts')
            .then((res) => {
                setActiveAccount(res.data.result)
                setLoadAccountInfoStatus(initialStatus)
            })
            .catch(() => {
                setLoadAccountInfoStatus(failedRequest)
            })

        axios.get('/api/expenses/def')
            .then((res) => {
                setTypes(res.data.result)
                setLoadExpenseTypesStatus(initialStatus)
            })
            .catch(() => {
                setLoadExpenseTypesStatus(failedRequest)
            })
    }, [])


    const handleSubmit = async (event: { target: any, preventDefault: () => void }) => {
        setSubmitStatus(pendingRequest)
        const formData = new FormData(event.target)
        event.preventDefault()

        const description = formData.get('description')!.toString()
        const amount = formData.get('amount')!.toString()

        const body = {
            accountingId: activeAccount?.accountingId,
            expenseTypeId: selectedItem.id,
            description: description,
            amount: amount
        }

        await axios.post('/api/expenses', body)
            .then(() => { 
                setSubmitStatus(initialStatus) 
                handleSuccessMessage()
            })
            .catch(() => { setSubmitStatus(failedRequest) })
    }


    const handleSuccessMessage = () => {
        setTimeout(() => {
            setSuccessSubmit(false)
            setShowModal(false)
            router.refresh()    
        }, 2000)
        setSuccessSubmit(true)
    }

    const handleSelectedExpenseType = (id: number) => {
        const expenseType = types.find((type) => type.id == id)
        if (expenseType) {
            setSelectedItem(expenseType)
        }
    }

    return (
        <form action="#" className="mb-0 mt-2 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl font-bold text-mp-blue sm:text-2xl">Registrar Gasto</h1>

            <p className="mx-auto mt-4 max-w-md text-center text-mp-soft-dark">
                Recuerda indicar el tipo de gasto, por favor no combines más de un gasto en un mismo registro
            </p>

            {

                loadAccountInfoStatus.isPending ? <Spinner bgBlank={true} />
                    : loadAccountInfoStatus.error ?
                        <div className="rounded border border-mp-error border-opacity-30 p-3 text-sm text-mp-strong-red">
                            <p>Error al cargar datos del turno actual intentalo más tarde</p>
                        </div>
                        : <div className="flex flex-row p-1 rounded border border-mp-soft-dark border-opacity-35 text-sm">
                            <p className="text-mp-green m-2">Turno: <span className="text-mp-dark">{activeAccount?.accountingId}</span></p>
                            <p className="text-mp-green m-2">Vendedora: <span className="text-mp-dark">{activeAccount?.sellerId}</span></p>
                            <p className="text-mp-green m-2">Sucursal: <span className="text-mp-dark">{activeAccount?.branchId}</span></p>
                        </div>

            }

            <div className="w-full flex justify-center flex-col items-center">
                <label htmlFor="text" className="text-mp-strong-gray">Tipo de gasto</label>
                {
                    loadExpenseTypesStatus.isPending ? <Spinner bgBlank={true} />
                        : loadExpenseTypesStatus.error ?
                            <div className="rounded border border-mp-error border-opacity-30 p-3 text-sm text-mp-strong-red">
                                <p>Error al cargar datos del turno actual intentalo más tarde</p>
                            </div>
                            : <select
                                name="expenseType"
                                id="expenseType"
                                className="rounded-lg border border-mp-gray-soft p-3 text-gray-700 sm:text-sm"
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectedExpenseType(parseInt(e.currentTarget.value))}
                            >
                                <option value="">Seleciona el tipo de gasto</option>
                                {
                                    types.map((expenseType) => <option value={expenseType.id} key={`ex-type-${expenseType.id}`}>{expenseType.type}</option>)
                                }
                            </select>
                }
            </div>

            <div className="w-full flex flex-col justify-center items-center">
                <label htmlFor="text" className="text-mp-strong-gray">Concepto</label>

                <div className="relative">
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="w-full rounded-lg border border-mp-gray-soft p-3 pe-12 text-sm shadow-sm"
                        placeholder="Concepto"
                        defaultValue={selectedItem.type}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-mp-green mr-2">Monto $</p>
                <div className="">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="w-tull rounded-lg border border-mp-gray-soft p-3 pe-12 text-sm text-mp-green shadow-sm"
                        placeholder="0.00"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="block p-3 w-1/2 rounded-lg bg-mp-dark text-mp-gray-soft text-sm font-medium text-white"
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