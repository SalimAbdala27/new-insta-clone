import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
console.log("TEmporary");
  console.log(process.env);
export default NextAuth({
  // Configure one or more authentication providers
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token}) {
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.uid = token.sub; // user id google
      return session;
    }
  }
})
