'use client'

import { Accounting, failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"
import { ErrorLabel } from "../shared/ErrorLabel"


interface Props {
    accountId: number
}

export const AccountDetailView = ({ accountId }: Props) => {
    const [submitStatus, setSubmitStatus] = useState(initialStatus)
    const [accounting, setAccounting] = useState<Accounting>()

    useEffect(() => {
        setSubmitStatus(pendingRequest)
        axios.get(`/api/accounts?id=${accountId}`)
            .then((res) => {
                console.log(res)
                
                setAccounting(res.data.result)
                setSubmitStatus(initialStatus)
            })
            .catch(() => {
                setSubmitStatus(failedRequest)
            })
    }, [])

    return (
        <>
            {
                submitStatus.isPending ?
                    <div className="w-full h-60 flex flex-col items-center justify-center">
                        <Spinner bgBlank />
                    </div>

                : submitStatus.error ?
                    <div className="w-4/4 p-2">
                        <ErrorLabel description="No fue posible realizar la petición" title="Error" />
                    </div>
                :
                    <div className="rounded shadow-lg mt-6 w-full flex flex-col items-center justify-center text-sm p-2">
                        <div className="flex flex-row justify-center w-full">
                            <Image src="/images/sj-vivero.png" width={70} height={45} alt='mp logo' className='m-2' />
                        </div>
                        <p className="text-mp-dark text-sm w-10/12 text-center m-6 border-b-2 border-mp-strong-gray border-opacity-20">Detalle de corte número: <span className="text-mp-blue">{accounting?.id}</span></p>
                        <p className="text-mp-dark mt-2">Timestamp: <span className="text-mp-blue">{accounting?.date}</span></p>
                        <span className="mt-4 border-b-2 border-mp-strong-gray w-1/2"></span>
                        <p className="text-mp-green font-bold">Ingresos:</p>
                        {
                            accounting?.incomeRegistries?.map(income => (<p key={`income-id${income.id}`} className="text-mp-dark mt-1">{income.tag}: ${income.amount}</p>))
                        }
                        <span className="mt-4 border-b-2 border-mp-strong-gray w-1/2"></span>
                        <p className="text-mp-green mt-2 font-bold" >Gastos:</p>
                        {
                            accounting?.expenseRegistries?.map(expense => (<p key={`income-id${expense.id}`} className="text-mp-dark mt-1">{expense.description}: ${expense.amount}</p>))
                        }
                        <div className="mb-8"></div>
                    </div>
            }
        </>
    )
}