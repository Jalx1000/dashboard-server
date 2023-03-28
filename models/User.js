import mongoose from "mongoose";

const UserSchema = new mongoose.schema(
  {
    name: {
      type: String,
      require: true,
      min: 2,
      max: 100,
    },
    email: {
      type: string,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: string,
      min: 5,
      require: true,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: string,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
