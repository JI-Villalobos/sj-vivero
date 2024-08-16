import { cookies } from "next/headers"
import { AccessToken } from "../auth/route"
import { getBranchById } from "@/src/lib/branches"

export async function GET(req: Request) {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    try {
        if (userProfile) {
            const profile: AccessToken = JSON.parse(userProfile.value)
            const result = await getBranchById(profile.branchId, profile.token)

            return Response.json({ result })
        }
    } catch (error) {
        return Response.error()
    }
}