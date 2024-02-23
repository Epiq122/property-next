import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      // 1.connet to db
      // 2. check if user exists
      // 3. if not, create user
      // 4. return true if user is allowed to sign in
    },
    // modifes the session object
    async session({ session }) {
      //1. get user from db
      //2. add user id to session
      //3. return the session
    },
  },
};
