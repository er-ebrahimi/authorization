import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("authorization")?.replace("Bearer ", "");
  const publicRoutes = ["/login"];
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute && token && pathname === "/login") {
    const redirectParam = searchParams.get("redirect");
    const redirectTo = redirectParam ? decodeURIComponent(redirectParam) : "/";
    const redirectUrl = new URL(redirectTo, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", encodeURIComponent(pathname));
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
