import { cookies } from "next/headers";
import { AccessToken } from "../auth/route";
import { createActiveAccount } from "@/src/lib/active-accounts";

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