import { cookies } from "next/headers";
import { AccessToken } from "../auth/route";
import { createCreditSale, updateCreditSale } from "@/src/lib/credit-sales";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { concept, client, date, amount } = await req.json()
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await createCreditSale(
                { concept: concept, client: client, date: date, amount: amount, branchId: profile.branchId },
                profile.token
            ).then((res) => {console.log(res);
            }).catch(() => {return Response.error()})
            
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}

export async function PUT(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { id, concept, client, date, amount, isPaid } = await req.json()
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await updateCreditSale(
                {id: id, concept: concept, client: client, date: date, amount: amount, branchId: profile.branchId, isPaid: isPaid },
                profile.token
            ).then((res) => {console.log(res);
            }).catch(() => {return Response.error()})
            
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}