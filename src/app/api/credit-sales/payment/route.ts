import { cookies } from "next/headers";
import { AccessToken } from "../../auth/route";
import { createPartial } from "@/src/lib/credit-sales";
import { addPartial } from "@/src/lib/storage";

export async function POST(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const {  creditSaleId, paymentDate, amount } = await req.json()
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await createPartial(
                { creditSaleId: creditSaleId, paymentDate: paymentDate, amount: amount },
                profile.token
            ).then((res) => {
                addPartial(res)
                console.log(res);
            }).catch(() => {return Response.error()})
            
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}