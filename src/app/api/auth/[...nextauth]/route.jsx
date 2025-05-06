import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";
import { User } from "@/app/models/User";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "email",
          type: "email",
          placeholder: "test@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        const token = jwt.sign({ id: user._id }, "asdfg", {
          expiresIn: 60 * 5,
        });
        console.log("JWT TOKEN DATA : ", token);
        console.log({ passwordOk });
        if (passwordOk) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
