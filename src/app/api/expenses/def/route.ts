import { ExpenseType } from "@/src/lib/definitions";
import { getExpenseTypes } from "@/src/lib/expenses";
import { cookies } from "next/headers";
import { AccessToken } from "../../auth/route";

export async function GET(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    try {
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result: ExpenseType = await getExpenseTypes(profile.token)

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}