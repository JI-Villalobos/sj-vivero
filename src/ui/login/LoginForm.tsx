'use client'

import { failedRequest, initialStatus, pendingRequest } from "@/src/lib/definitions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Spinner } from "../shared/Spinner"
import { ErrorLabel } from "../shared/ErrorLabel"

export const LoginForm = () => {
    const [status, setStatus] = useState(initialStatus)
    const router = useRouter()

    const handleSubmit = async (event: {target: any, preventDefault: () => void}) => {
        setStatus(pendingRequest)
        const formData = new FormData(event.target)
        event.preventDefault()

        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()

        const body = {
            email: email,
            password: password
        }
        
        await fetch('/api/auth', {
                method: 'POST',
				headers: { 'Content-Type': 'application/json'  },
				body: JSON.stringify(body)
        }).then((res) => {
            if (res.status == 200) {
                setStatus(initialStatus)
                router.push("/")
            } else {
                setStatus(failedRequest)   
            }
        }).catch(() => {
           setStatus(failedRequest)
        })
    }

    return (
        <form action="" className="w-1/2" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm text-mp-dark"
                >
                    Email Address
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="you@company.com" 
                    className="w-full px-3 py-2 placeholder-mp-gray-soft border border-mp-gray-soft 
                                rounded-md focus:outline-none focus:ring focus:ring-mp-blue
                                focus:border-mp-blue dark:bg-mp-gray-soft dark:mp-white text-center text-mp-dark" 
                />
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label 
                        htmlFor="password" 
                        className="block mb-2 text-sm text-mp-dark"
                    >
                        Password
                    </label>
                </div>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Your Password" 
                    className="w-full px-3 py-2 placeholder-mp-gray-soft border border-mp-gray-soft 
                                rounded-md focus:outline-none focus:ring focus:ring-mp-blue
                                focus:border-mp-blue dark:bg-mp-gray-soft dark:mp-white text-center text-mp-dark" 
                />
            </div>
            <div className="mb-6">
                <button 
                    type="submit" 
                    className="w-full px-3 py-4 text-mp-white bg-mp-green rounded-md focus:bg-mp-light-green 
                                focus:outline-none"
                >
                    {status.isPending ? <Spinner /> : 'Ingresar'}
                </button>
            </div>
            {
                status.error && <ErrorLabel 
                                    title="Error de autenticación" 
                                    description="No fue posible acceder con tus credenciales, 
                                                 revisa que tus datos sean correctos"
                                />
            }
            
        </form>
    )
}