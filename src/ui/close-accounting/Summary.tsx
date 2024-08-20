import { cookies } from "next/headers"
import { IncomeSummary } from "./IncomeSummary"
import { AccessToken } from "@/src/app/api/auth/route"
import { Accounting } from "@/src/lib/definitions"
import { getAccounting } from "@/src/lib/accounts"
import { ExpenseSummary } from "./ExpenseSummary"

interface Props {
    accountingId: number
}

export const Summary = async ({ accountingId }: Props) => {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    const profile: AccessToken = JSON.parse(userProfile?.value!)
    const accounting: Accounting = await getAccounting(accountingId, profile.token)

    return (
        <div className="flex flex-col justify-center items-center">
            <IncomeSummary incomes={accounting.incomeRegistries}/>
            <ExpenseSummary expenses={accounting.expenseRegistries}/>
        </div>
    )
}