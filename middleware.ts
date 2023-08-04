import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (
        !request.cookies.has('username') &&
        !request.nextUrl.pathname.startsWith('/login')
    ) {
        return NextResponse.redirect(new URL('/login', request.url));
    } else if (
        request.nextUrl.pathname.startsWith('/login') &&
        request.cookies.has('username')
    ) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
