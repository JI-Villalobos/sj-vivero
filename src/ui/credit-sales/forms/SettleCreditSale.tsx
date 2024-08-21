import { CreditSale, failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { Spinner } from "../../shared/Spinner"

interface Props {
    sale: CreditSale
    outstandingBalance: number
    setModal: Dispatch<SetStateAction<boolean>>
}


export const SettleCreditSaleForm = ({ sale, outstandingBalance, setModal }: Props) => {
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [succesMessage, setSuccessMessage] = useState(false)
    const router = useRouter()

    const handleSuccessMessage = () => {
        setTimeout(() => {
            setSubmitStatus(initialStatus)
            router.push("/credit-sales")
            setModal(false)
        }, 2000)
        setSuccessMessage(true)
    }

    const handleSubmit = async (event: { target: any, preventDefault: () => void }) => {
        setSubmitStatus(pendingRequest)
        const formData = new FormData(event.target)
        event.preventDefault()

        const paymentDate = formData.get('paymentDate')?.toString()
        const amount = formData.get('amount')?.toString()

        const body = {
            creditSaleId: sale.id,
            paymentDate: paymentDate,
            amount: outstandingBalance
        }

        const creditSales: CreditSale = { ...sale, isPaid: true }

        await axios.post('http://localhost:3000/api/credit-sales/payment', body)
            .then(() => {
                axios.put('http://localhost:3000/api/credit-sales', creditSales)
                    .then(() => {handleSuccessMessage()})
                    .catch(() => {setSubmitStatus(failedRequest)})
            })
            .catch(() => {
                setSubmitStatus(failedRequest)
            })

    }

    return (
        <form action="#" className="mb-0 m-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="paymentDate" className="text-xs text-center text-mp-dark">Fecha del Pago</label>

                <div className="relative">
                    <input
                        type="datetime-local"
                        id="paymentDate"
                        name="paymentDate"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft text-mp-soft-dark p-4 pe-12 text-sm shadow-sm"
                        placeholder="Fecha"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="paymentDate" className="text-xs text-center text-mp-dark">Monto</label>

                <div className="relative">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="w-full rounded-lg border-mp-soft-dark bg-mp-gray-soft text-mp-soft-dark p-4 pe-12 text-sm shadow-sm"
                        placeholder="Monto"
                        defaultValue={outstandingBalance}
                        readOnly
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