'use client'

import { failedRequest, initialStatus, pendingRequest, RequestStatus, TotalBalance } from "@/src/lib/definitions"
import { useEffect, useState } from "react"
import { Spinner } from "../shared/Spinner"
import axios from "axios"
import { formatAmount } from "@/src/lib/utils"

export const TotalBalanceItem = () => {
    const [totals, setTotals] = useState<TotalBalance>()
    const [status, setStatus] = useState<RequestStatus>(initialStatus)
  
    useEffect(() => {
      setStatus(pendingRequest)
      axios.get('/api/branch/balance')
        .then((result) => {
          setTotals(result.data.result)
          setStatus(initialStatus)
        }).catch(() => {
          setStatus(failedRequest)
        })
    }, [])
  
    return (
      <div className="flex flex-row p-9 border border-mp-strong-gray rounded justify-center items-center m-6">
        {
          status.error 
            ? <p>No fue posible obtener el saldo en caja</p>
            : status.isPending ? <Spinner bgBlank={true}/>  
            : (
                <>
                  <p className="text-sm text-center text-mp-dark">Saldo en caja:</p>
                  <input value={formatAmount(totals?.totals!)} readOnly className="text-sm text-center text-mp-blue font-bold"/>
                </>
              )
        }
      </div>
    )
}