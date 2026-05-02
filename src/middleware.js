import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
  const sessionCookie = getSessionCookie(request);
  const protectedRoutes = ["/my-profile", "/update-profile", "/book"];
  const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  if (isProtected && !sessionCookie) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/my-profile/:path*", "/update-profile/:path*", "/book/:path*"] };
