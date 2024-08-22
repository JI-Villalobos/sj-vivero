import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export const config = {
  matcher: [
    '/((?!login|api|_next/static|_next/image|images|favicon.ico).*)'
  ]
}

export function middleware(request: NextRequest) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('user-profile')
    
    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 