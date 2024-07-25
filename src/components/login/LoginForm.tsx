'use client'

import { handleLogin } from "@/src/actions/actions"

export const LoginForm = () => {
    const handleSubmit = async (event: {target: any, preventDefault: () => void}) => {
        const formData = new FormData(event.target)
        event.preventDefault()
        await handleLogin(formData)
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
                    Ingresar
                </button>
            </div>
        </form>
    )
}