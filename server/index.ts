import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import googleAuthRoutes from "./routes/googleAuth.js";
import facebookAuthRoutes from "./routes/facebookAuth.js";
import { ROLES } from "./models/User.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

// ── Routes ─────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/auth/google", googleAuthRoutes);
app.use("/api/auth/facebook", facebookAuthRoutes);
app.use("/api/admin", adminRoutes);

// Public: danh sách roles
app.get("/api/roles", (_req, res) => {
  res.json({ roles: ROLES });
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Connect MongoDB + Start Server ─────────────
async function start() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI chưa được cấu hình trong .env");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

start();
