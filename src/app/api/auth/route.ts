import { cookies } from "next/headers"
import { urls } from "../../../lib/urls"
import { AuthenticateRequest, handleLogin } from "@/src/lib/login"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export interface AccessToken {
    token: string
    branchId: number
    role: string
}

export async function POST(req: Request) {
    const cookieStore = cookies()

    try {
        const { email, password } = await req.json()

        const result = await handleLogin({ email: email, pass: password }).then((result) => {
            cookieStore.set('user-profile', JSON.stringify(result.data))
        })

        return Response.json({ result })
    } catch (error) {
        console.log(error);
        
    }
}

