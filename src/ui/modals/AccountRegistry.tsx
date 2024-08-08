'use client'

import { failedRequest, initialStatus, pendingRequest, Seller } from "@/src/lib/definitions"
import { useRouter } from "next/navigation"
import { Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"
import axios from "axios"
import { getCurrentDate } from "@/src/lib/utils"

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const AccountRegistry = ({ setShowModal }: Props) => {
    const [status, setStatus] = useState(initialStatus)
    const [sellerLoadStatus, setSellerLoadStatus] = useState(initialStatus)
    const [seller, setSeller] = useState<Seller | undefined>()
    const router = useRouter()

    useEffect(() => {
        setSellerLoadStatus(pendingRequest)
        axios.get('http://localhost:3000/api/seller')
            .then((res) => {
                const sellers: Seller[] = res.data.result
                setSeller(sellers[0])

                setSellerLoadStatus(initialStatus)
            }).catch(() => {
                setSellerLoadStatus(failedRequest)
            })
    }, [])

    const handleNewAccounting = async (event: React.FormEvent<HTMLButtonElement>) => {
        setStatus(pendingRequest)

        const body = {
            sellerId: seller!.id,
            date: getCurrentDate()
        }

        await axios.post('http://localhost:3000/api/accounts', body).then((res) => {
            console.log(res.config.data);
            setStatus(initialStatus)
            router.push("/")
        }).catch((err) => {
            setStatus(failedRequest)
        })
    }

    if (sellerLoadStatus.isPending) {
        return (
            <div className="flex flex-col items-center">
                <div className="rounded bg-mp-dark w-1/3 h-2/3 p-4 m-8 flex items-center justify-center">
                    <Spinner />
                </div>
            </div>
        )
    }

    if (sellerLoadStatus.error || status.error) {
        return (
            <div className="flex flex-col items-center">
                <div className="rounded bg-none w-full h-full p-4 m-8 flex items-center justify-center">
                <p className="text-sm text-center text-mp-strong-red">
                    Un error inesperado provoco que no fuese posible registrar tu turno,
                    porfavor contacta a tu administrador tomado esta captura de pantalla.   
                </p>
                
                <button
                    className="bg-none border border-mp-strong-red text-mp-blue rounded p-2 m-6 w-2/3"
                    onClick={() => setShowModal(false)}
                >
                    Salir
                </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-sm text-center text-mp-green">
                Registrar nuevo turno con fecha de:
                <span className="text-mp-blue">
                    {getCurrentDate()}
                </span>
            </p>
            {sellerLoadStatus.isPending ? '' : <p className="text-mp-dark">Vendedora: <span className="text-mp-green">{seller?.fullName}</span></p>}
            <button
                className="bg-mp-dark text-mp-white rounded p-2 m-6 w-2/3"
                onClick={handleNewAccounting}
            >
                {status.isPending ? <Spinner /> : 'Continuar'}
            </button>
        </div>
    )
}