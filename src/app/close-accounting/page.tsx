import { AccountingInfo } from "@/src/ui/shared/AccountInfo";
import { cookies } from "next/headers";
import { AccessToken } from "../api/auth/route";
import { ActiveAccounting } from "@/src/lib/definitions";
import { getCurrentAccounting } from "@/src/lib/active-accounts";
import { redirect } from "next/navigation";
import { TotalBalanceItem } from "@/src/ui/close-accounting/TotalBalanceItem";
import { Summary } from "@/src/ui/close-accounting/Summary";
import { WithdrawalSummary } from "@/src/ui/close-accounting/WithdrawalSummary";
import { CloseAccountingButton } from "@/src/ui/close-accounting/CloseAccountingButton";

export default async function CloseAccounting() {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const active: ActiveAccounting = await getCurrentAccounting(profile.branchId, profile.token).catch(() => redirect('/temp-error'))

    return (
        <div>
            <div className="w-full flex flex-row items-center justify-center">
                <AccountingInfo accountingId={active.accountingId} />
                <TotalBalanceItem />
            </div>
            <Summary accountingId={active.accountingId} />
            <div className="flex justify-center">
                <WithdrawalSummary />
            </div>
            <div className="flex justify-center mt-8 ">
                <CloseAccountingButton />
            </div>
        </div>
    )
}