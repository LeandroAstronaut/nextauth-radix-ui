import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions : AuthOptions = {
  providers: [
    CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: "Email", type: "email", placeholder: "user@something.com" },
            password: { label: "Password", type: "password" }
          },
        async authorize(credentials: any, req){

          const { email, password } = credentials;

          const userFoud = await prisma.user.findUnique({
            where:{
              email,
            }
          });

          if (!userFoud) throw Error("Invalid credentials")

          const validPassword = await bcrypt.compare(
            password,
            userFoud.password
          );

          if (!validPassword) throw Error("Invalid credentials")

          return {
            id: userFoud.id + '',
            name: userFoud.name,
            email: userFoud.email,
          }
        }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {

      if (user){
        token.id = user.id;
      }
      return token;
    },

    async session({ session, user, token }) {

      if (token){
        session.user.id = token.sub as string;
      }

      
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }