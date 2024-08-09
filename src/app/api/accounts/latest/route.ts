import { cookies } from "next/headers";
import { AccessToken } from "../../auth/route";
import { getLatestRegistries } from "@/src/lib/accounts";

export async function GET() {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    console.log(userProfile);
    

    if (userProfile) {
        const profile: AccessToken = JSON.parse(userProfile.value)
        const result = await getLatestRegistries(profile.branchId, profile.token)

        return Response.json({ result })
    } else {
        return Response.error()
    }
}