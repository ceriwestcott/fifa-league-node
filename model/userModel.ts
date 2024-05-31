import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

import { Document } from "mongoose";

interface UserDocument extends Document {
  fullName: string;
  email: string;
  hash_password?: string;
  created: Date;
  comparePassword: (password: string) => Promise<boolean>;
}
const UserSchema = new Schema<UserDocument>({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  hash_password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compareSync(password, this.hash_password || "");
};

const User = mongoose.model("User", UserSchema);
export { User };
