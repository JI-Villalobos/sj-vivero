import { Accounting, Seller } from "@/src/lib/definitions"
import { formatAmount, formatDate, summarize } from "@/src/lib/utils"
import { BiSolidShow } from "react-icons/bi";
import Link from "next/link"
import { cookies } from "next/headers";
import { AccessToken } from "@/src/app/api/auth/route";
import { getSeller } from "@/src/lib/sellers";
import { AccountDetailButton } from "./AccountDetailButton";

interface Props {
    account: Accounting
}

export const RowItem = async ({ account }: Props) => {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    
    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const seller: Seller = await getSeller(account.sellerId, profile.token)

    return (
        <tr className="border-b border-mp-gray-soft">
            <td className="py-1 px-6 text-sm text-mp-green">{seller.fullName}</td>
            <td className="py-1 px-6 text-sm text-mp-dark">{formatDate(account.date)}</td>  
            <td className="py-1 px-6 text-sm text-mp-blue">{formatAmount(summarize(account.incomeRegistries))}</td>
            <td className="py-1 px-6 text-sm text-mp-green">{formatAmount(summarize(account.expenseRegistries))}</td>
            <td className="py-1 px-6 text-sm text-mp-dark">
                <AccountDetailButton accountId={account.id}/>
            </td>
        </tr>
    )
}