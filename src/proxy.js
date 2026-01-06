// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function proxy(request) {
//     const pathname = request.nextUrl.pathname;

//     // Allow /admin/login without token and role check
//     if (pathname === "/admin/login") {
//         return NextResponse.next();
//     }

//     const token = request.cookies.get("token")?.value;

//     // If no token, redirect to login
//     if (!token) {
//         return NextResponse.redirect(new URL("/admin/login", request.url));
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // Check role
//         if (decoded.role !== "admin") {
//             return NextResponse.redirect(new URL("/admin/login", request.url));
//         }

//         // If admin, continue
//         return NextResponse.next();
//     } catch (err) {
//         // Invalid token, redirect to login
//         return NextResponse.redirect(new URL("/admin/login", request.url));
//     }
// }

// export const config = {
//     matcher: "/admin/:path*",
// };


// TEMPORARY - below code allows all admin routes

import { NextResponse } from "next/server";

export function proxy(request) {
    // TEMPORARY: just allow admin routes
    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};
