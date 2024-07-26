import { cookies } from "next/headers"
import { AccessToken } from "../auth/route";
import { newAccounting } from "@/src/lib/accounts";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    try {
        const { sellerId, branchId, date } = await req.json()
        
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);

            const result = await newAccounting(
                { sellerId: sellerId, branchId: branchId, date: date },
                profile.token
            )

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}