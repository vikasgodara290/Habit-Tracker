import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest){
    const {pathname} = req.nextUrl;

    const isLoggedIn = req.cookies.get('token')?.value;

    if (!isLoggedIn && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
