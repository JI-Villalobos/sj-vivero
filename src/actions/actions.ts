"use server"

import { AuthenticateRequest, login } from "../services/auth/login"

export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    const email = formDataObject["email"].toString()
    const password = formDataObject["password"].toString()
    console.log(email, password);
    
    const re = await login({ email, password})
    console.log(re);
    
}