import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { supabase } from "@/app/comp/supabase";

const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }: any) {
      if (!user.email) return false;

      try {
        // Check if the user already exists
        const { data: existingUser, error: selectError } = await supabase
          .from("clienti")
          .select("id") // Fetch only the ID or any relevant field
          .eq("email", user.email)
          .single();

        if (selectError && selectError.code !== "PGRST116") {
          // Handle unexpected errors (other than no match)
          console.error("Error checking user existence:", selectError);
          return false;
        }

        if (!existingUser) {
          // User doesn't exist, so insert them
          const { data: newUser, error: insertError } = await supabase
            .from("clienti")
            .insert({
              email: user.email,
              name: user.name || profile?.name || "",
            });

          if (insertError) {
            console.error("Error inserting user:", insertError);
            return false;
          }

          console.log("New user created:", newUser);
        } else {
          console.log("User already exists, skipping insertion.");
        }

        return true;
      } catch (error) {
        console.error("Unexpected error during sign-in:", error);
        return false;
      }
    },
  },
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
