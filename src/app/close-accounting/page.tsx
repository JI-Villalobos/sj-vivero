import { AccountingInfo } from "@/src/ui/shared/AccountInfo";
import { cookies } from "next/headers";
import { AccessToken } from "../api/auth/route";
import { ActiveAccounting } from "@/src/lib/definitions";
import { getCurrentAccounting } from "@/src/lib/active-accounts";
import { redirect } from "next/navigation";
import { TotalBalanceItem } from "@/src/ui/close-accounting/TotalBalanceItem";

export default async function CloseAccounting() {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const active: ActiveAccounting = await getCurrentAccounting(profile.branchId, profile.token).catch(() => redirect('/temp-error'))

    return (
        <div>
            <div className="w-full flex flex-row items-center justify-center">
                <AccountingInfo accountingId={active.accountingId}/>
                <TotalBalanceItem />
            </div>
        </div>
    )
}