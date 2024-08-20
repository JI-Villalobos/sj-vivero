import { CashWithdrawal } from "@/src/lib/definitions"
import { formatAmount } from "@/src/lib/utils"
import { cookies } from "next/headers"

export const WithdrawalSummary = () => {
    const cookieStore = cookies()
    const data = cookieStore.get('withdrawals')
    console.log(data);
    
    if (data) {
        const withdrawal: CashWithdrawal = JSON.parse(data?.value)

        return (
            <div className="mt-6 w-2/4">
                <p className="text-center text-2xl font-bold text-mp-dark sm:text-xl m-2">Retiros</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 p-1 m-2 shadow-lg text-sm">
                    <div className="text-center text-mp-dark"><span className="text-mp-green">Concepto: </span>{withdrawal?.concept}</div>
                    <div className="text-center text-mp-blue"><span className="text-mp-green">Por: </span>{withdrawal?.sellerName}</div>
                    {
                        withdrawal && <div className="text-center text-mp-error"><span className="text-mp-green">Monto: </span>{formatAmount(withdrawal.amount)}</div>
                    }
                </div>
            </div>
        )
    }


    if (!data) {
        return <></>
    }

    
}