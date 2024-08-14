import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"

export const config = {
    matcher: [
        '/login/:path*',
    ]
}

export function middleware(request: NextRequest) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('user-profile')?.value
    
    if (accessToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}