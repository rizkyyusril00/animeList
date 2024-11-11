import NextAuth from "next-auth";
import GithubAuth from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// Next.js app router API route expects `GET` and `POST` handlers as separate functions
export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);