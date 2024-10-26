import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
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
  pages: {
    signIn: "/auth/login",
  }
})

export { handler as GET, handler as POST }