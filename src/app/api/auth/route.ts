import { cookies } from "next/headers"
import { handleLogin } from "@/src/lib/login"

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
        return Response.error()
    }
}

