import { cookies } from "next/headers"
import { urls } from "../urls"

export interface AccessToken {
    token: string
    branchId: number
    role: string
}

export interface AuthenticateRequest {
    email: string
    password: string
}

export const login = async (req: AuthenticateRequest) => {
    const res = await fetch('http://localhost:8080/jiltsa/api/v1/auth/authenticate',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req),
        }

    )

    
    
    const result = await res.json()
    
    console.log('login action object: ', res);

    return result
}