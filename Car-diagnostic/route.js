import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  { id: 1, email: "test@example.com", password: bcrypt.hashSync("password123", 10) }
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials.email);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, email: user.email };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  { id: 1, email: "owner@example.com", password: bcrypt.hashSync("password123", 10), role: "user" },
  { id: 2, email: "admin@example.com", password: bcrypt.hashSync("admin123", 10), role: "admin" }
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials.email);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, email: user.email, role: user.role };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
