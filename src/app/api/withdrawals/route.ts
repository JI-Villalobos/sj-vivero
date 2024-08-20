import { cookies } from "next/headers"
import { AccessToken } from "../auth/route";
import { createCashRegistry } from "@/src/lib/cash-withdrawals";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const  { amount, concept, sellerName, branch} = await req.json()
        
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value)
            const result = await createCashRegistry(
                {amount: amount, concept: concept, sellerName: sellerName, branch: branch},
                profile.token
            ).then((res) => {
                console.log(res)
                cookieStore.set('withdrawals', JSON.stringify(res), { expires: Date.now() + 43200000 })
            })
            .catch(() => {return Response.error()})

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}