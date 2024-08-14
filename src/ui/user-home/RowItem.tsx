import { Accounting } from "@/src/lib/definitions"
import { formatDate } from "@/src/lib/utils"

interface Props {
    account: Accounting
}

export const RowItem = ({ account }: Props) => {
    return (
        <tr className="border-b border-mp-gray-soft">
            <td className="py-2 px-6 text-sm text-mp-green">{account.sellerId}</td>
            <td className="py-2 px-6 text-sm text-mp-dark">{formatDate(account.date)}</td>
            <td className="py-2 px-6 text-sm text-mp-blue">0</td>
            <td className="py-2 px-6 text-sm text-mp-blue">$5025.00</td>
            <td className="py-2 px-6 text-sm text-mp-green">$5025.00</td>
            <td className="py-2 px-6 text-sm text-mp-green">$100</td>
        </tr>
    )
}