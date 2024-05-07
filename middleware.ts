import { auth, clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";


const protectedRoutes = createRouteMatcher([
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)"
]);



export default clerkMiddleware((auth,req) => {
  if (protectedRoutes(req)) auth().protect();
  if("/") auth().redirectToSignIn();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};