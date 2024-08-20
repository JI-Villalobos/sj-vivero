import { cookies } from "next/headers";
import { AccessToken } from "../auth/route";
import { closeCurrentAccounting, createActiveAccount, getCurrentAccounting } from "@/src/lib/active-accounts";
import { ActiveAccounting } from "@/src/lib/definitions";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { accountingId, sellerId } = await req.json()

        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await createActiveAccount(
                {sellerId: sellerId, branchId: profile.branchId, accountingId: accountingId, isActive: true},
                profile.token
            ).then((res) => {
                console.info(res);
            })    

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}

export async function GET(req: Request){
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result: ActiveAccounting = await getCurrentAccounting(profile.branchId, profile.token)

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}

export async function PATCH(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { accountingId } = await req.json()

        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await closeCurrentAccounting(
                accountingId,
                profile.token
            ).then((res) => {
                console.info(res);
            })    

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}