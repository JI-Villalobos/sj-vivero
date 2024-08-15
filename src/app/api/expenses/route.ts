import { cookies } from "next/headers"
import { AccessToken } from "../auth/route";
import { createExpense } from "@/src/lib/expenses";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { accountingId, expenseTypeId, description, amount } = await req.json()
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await createExpense(
                { accountingId: accountingId, expenseTypeId: expenseTypeId, description: description, amount: amount },
                profile.token
            ).then((res) => {console.log(res);
            }).catch(() => {return Response.error()})
            
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}