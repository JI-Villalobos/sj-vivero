import { cookies } from "next/headers"
import { AccessToken } from "../auth/route";
import { newAccounting } from "@/src/lib/accounts";
import { Accounting } from "@/src/lib/definitions";
import { createActiveAccount } from "@/src/lib/active-accounts";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    
    try {
        const { sellerId, date } = await req.json()
        
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await newAccounting(
                { sellerId: sellerId, branchId: profile.branchId, date: date },
                profile.token
            ).then((res) => {
                cookieStore.set('account', JSON.stringify(res.data))
                const active: Accounting = res.data
                console.log(active);
                createActiveAccount(
                    {sellerId: sellerId, branchId: profile.branchId, accountingId: active.id, isActive: true}, 
                    profile.token
                ).catch(() => {
                    return Response.error()
                })
            })

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}