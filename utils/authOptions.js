import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

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
    async signIn({ profile }) {
      await connectDB();

      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          username,
          email: profile.email,
          image: profile.picture,
        });
      }

      return true;
    },
    // modifes the session object
    async session({ session }) {
      //1. get user from db
      const user = await User.findOne({ email: session.user.email });
      //2. add user id to session
      session.user.id = user._id.toString();
      //3. return the session
      return session;
    },
  },
};
