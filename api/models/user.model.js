import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passward: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/ZXmRUDhLKRexTPZ6IFmRVXwLle_bsYjYL3cN7CjwVDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82NS81Ni91/bmtub3duLXBlcnNv/bi11c2VyLWljb24t/d2l0aC1hLWdpcmwt/dmVjdG9yLTQwMjI2/NTU2LmpwZw",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
