import { Accounting } from "@/src/lib/definitions"
import { formatAmount, formatDate, summarize } from "@/src/lib/utils"
import { BiSolidShow } from "react-icons/bi";
import Link from "next/link"

interface Props {
    account: Accounting
}

export const RowItem = ({ account }: Props) => {
    return (
        <tr className="border-b border-mp-gray-soft">
            <td className="py-1 px-6 text-sm text-mp-green">{account.sellerId}</td>
            <td className="py-1 px-6 text-sm text-mp-dark">{formatDate(account.date)}</td>  
            <td className="py-1 px-6 text-sm text-mp-blue">{formatAmount(summarize(account.incomeRegistries))}</td>
            <td className="py-1 px-6 text-sm text-mp-green">{formatAmount(summarize(account.expenseRegistries))}</td>
            <td className="py-1 px-6 text-sm text-mp-dark">
                <Link href="#" className="rounded py-1 flex items-center justify-center">
                    <BiSolidShow size={20}/>
                </Link>
            </td>
        </tr>
    )
}