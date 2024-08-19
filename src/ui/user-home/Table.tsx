import { Accounting } from "@/src/lib/definitions"
import { RowItem } from "./RowItem"
import { cookies } from "next/headers"
import { getLatestRegistries } from "@/src/lib/accounts"
import { AccessToken } from "@/src/app/api/auth/route"

export const Table = async () => {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    
    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const products: Accounting[] = await getLatestRegistries(profile.branchId, profile.token)

    return (
        <div className="flex justify-center w-full">
            <div className="">
                <table className="w-full bg-white shadow-md rounded-xl">
                    <thead>
                        <tr className="bg-mp-soft-dark text-mp-white">
                            <th className="py-2 px-6 text-left text-xs">Vendor</th>
                            <th className="py-2 px-6 text-left text-xs">Fecha</th>
                            <th className="py-2 px-6 text-left text-xs">Ventas</th>
                            <th className="py-2 px-6 text-left text-xs">Gastos</th>
                            <th className="py-2 px-6 text-left text-xs">Detalles</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            products.map((item) => <RowItem account={item} key={`account-id-i-${item.id}`}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}