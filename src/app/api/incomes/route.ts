import { cookies } from "next/headers";
import { AccessToken } from "../auth/route";
import { createIncome } from "@/src/lib/incomes";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { amount, accountingId, incomeTypeId, tag } = await req.json()

        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await createIncome(
                { amount, accountingId, incomeTypeId, tag },
                profile.token
            ).then((res) => {
                console.log(res);
            }).catch(() => {
                return Response.error()
            })
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}