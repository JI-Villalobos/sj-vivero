import { cookies } from "next/headers";
import { AccessToken } from "../../auth/route";
import { updateBranchConfig } from "@/src/lib/branches";

export async function PUT(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        const { id, initialBalance } = await req.json()
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value);
            const result = await updateBranchConfig(
                id,
                {id: id,  branchId: profile.branchId, initialBalance: initialBalance },
                profile.token
            ).then((res) => {console.log(res);
            }).catch(() => {return Response.error()})
            
            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}