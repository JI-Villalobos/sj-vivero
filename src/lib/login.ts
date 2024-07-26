export interface AuthenticateRequest {
    email: string
    pass: string
}

import axios, { AxiosResponse } from "axios"
import { AccessToken } from "../app/api/auth/route"
import { urls } from "./urls"

const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const handleLogin = async (req: AuthenticateRequest) => {
    const response = await axios.post(urls.auth.authenticate, req, options)
    
    return response
}

