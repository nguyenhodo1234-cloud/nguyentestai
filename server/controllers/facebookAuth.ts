import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

function signToken(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
}

// POST /api/auth/facebook — Xử lý Facebook login
export async function facebookAuth(req: Request, res: Response): Promise<void> {
  try {
    const { facebookId, email, fullName, avatar } = req.body;

    if (!facebookId || !email) {
      res.status(400).json({ message: 'Thiếu thông tin Facebook' });
      return;
    }

    // Tìm hoặc tạo user
    let user = await User.findOne({ email });

    if (user) {
      user.fullName = fullName || user.fullName;
      if (avatar) user.avatar = avatar;
      await user.save();

      const token = signToken(user._id as string);
      res.json({ message: 'Đăng nhập Facebook thành công', token, user: user.toJSON() });
    } else {
      const randomPassword = crypto.randomUUID() + crypto.randomUUID();
      user = await User.create({
        fullName,
        email,
        password: randomPassword,
        avatar,
      });

      const token = signToken(user._id as string);
      res.status(201).json({ message: 'Đăng ký Facebook thành công', token, user: user.toJSON() });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}
