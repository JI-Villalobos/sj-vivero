import { cookies } from "next/headers";
import { AccessToken } from "../auth/route";
import { getSellerByBranch } from "@/src/lib/sellers";
import { Seller } from "@/src/lib/definitions";

export async function GET() {
    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
    
    if (userProfile) {
        const profile: AccessToken = JSON.parse(userProfile.value);
        const result: Seller = await getSellerByBranch(profile.branchId, profile.token)
    
        
        return Response.json({ result })
    } else {
        
    }
}