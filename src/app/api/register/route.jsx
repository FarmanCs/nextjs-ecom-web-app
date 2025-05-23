// import { User } from "@/models/User";
import { User } from "@/app/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
  if (!pass?.length || pass.length < 4) {
    new Error("password must be at least 5 characters");
  }

  const notHashedPassword = pass;
  //   const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, 10);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
