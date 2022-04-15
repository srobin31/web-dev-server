import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    tuit: String,
    postedBy: {
      username: String,
    },
    verified: Boolean,
    handle: String,
    time: String,
    logoImage: String,
    avatarImage: String,
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
  },
  { collection: "tuits" }
);

export default schema;
