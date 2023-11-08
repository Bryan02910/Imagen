import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://bcamposm:ZhgqrQrX3U3owKs5@cluster0.jy6kmzs.mongodb.net/imgshare";
export const PORT = process.env.PORT || 3200;
