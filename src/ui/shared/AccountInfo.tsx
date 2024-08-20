import { AccessToken } from "@/src/app/api/auth/route"
import { getAccounting } from "@/src/lib/accounts"
import { Accounting } from "@/src/lib/definitions"
import { formatDate } from "@/src/lib/utils"
import { cookies } from "next/headers"
import { BiLeaf } from "react-icons/bi"

interface Props {
    accountingId: number
}

export const AccountingInfo = async ({ accountingId }: Props) => {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    
    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const current: Accounting = await getAccounting(accountingId, profile.token)

    return (
        <div className="w-1/4 flex flex-row items-center justify-center m-8 rounded shadow-md bg-mp-gray-soft p-6">
            <div className="w-1/12">
                <BiLeaf color="green" size={30} />
            </div>
            <div className="flex flex-col w-11/12 items-center justify-center">
                <div>
                    <p className="text-mp-green font-semibold">Corte correspondiente al <span className="text-mp-blue">{formatDate(current.date)}</span></p>
                </div>
                <div className="flex flex-row">
                    <p className="text-mp-green font-semibold">Corte: </p>
                    <p className="text-mp-blue">{accountingId}</p>
                </div>
            </div>
        </div>
    )
}