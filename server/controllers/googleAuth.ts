import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Tạo JWT
function signToken(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
}

// POST /api/auth/google — Xử lý Google login
export async function googleAuth(req: Request, res: Response): Promise<void> {
  try {
    const { googleId, email, fullName, avatar } = req.body;

    if (!googleId || !email) {
      res.status(400).json({ message: 'Thiếu thông tin Google' });
      return;
    }

    // Tìm user theo email
    let user = await User.findOne({ email });

    if (user) {
      // User đã tồn tại → đăng nhập
      user.fullName = fullName || user.fullName;
      if (avatar) user.avatar = avatar;
      await user.save();

      const token = signToken(user._id as string);
      res.json({ message: 'Đăng nhập Google thành công', token, user: user.toJSON() });
    } else {
      // User chưa tồn tại → đăng ký mới với password ngẫu nhiên
      const randomPassword = crypto.randomUUID() + crypto.randomUUID();
      user = await User.create({
        fullName,
        email,
        password: randomPassword,
        avatar,
      });

      const token = signToken(user._id as string);
      res.status(201).json({ message: 'Đăng ký Google thành công', token, user: user.toJSON() });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}
