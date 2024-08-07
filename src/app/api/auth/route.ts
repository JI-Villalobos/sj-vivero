import { cookies } from "next/headers"
import { handleLogin } from "@/src/lib/login"

export interface AccessToken {
    token: string
    branchId: number
    role: string
}

const milisec = 86400000 

export async function POST(req: Request) {
    const cookieStore = cookies()

    try {
        const { email, password } = await req.json()

        const result = await handleLogin({ email: email, pass: password }).then((result) => {
            cookieStore.set('user-profile', JSON.stringify(result.data), { expires: Date.now() + milisec * 15})
        })
        return Response.json({ result })
    } catch (error) {
        return Response.error()
    }
}

