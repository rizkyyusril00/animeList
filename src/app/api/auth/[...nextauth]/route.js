import NextAuth from "next-auth";
import GithubAuth from "next-auth/providers/github";

// Define authOptions object
export const authOptions = {
    providers: [
        GithubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
};

// Default handler for NextAuth
const handler = NextAuth(authOptions);

// Export as GET and POST for the Next.js API route
export { handler as GET, handler as POST };
