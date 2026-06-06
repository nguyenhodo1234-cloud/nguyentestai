import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Tạo JWT token
function signToken(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
}

// POST /api/auth/register
export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { fullName, email, password } = req.body;

    // Kiểm tra email đã tồn tại
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email đã được sử dụng' });
      return;
    }

    // Tạo user mới
    const user = await User.create({ fullName, email, password });
    const token = signToken(user._id as string);

    res.status(201).json({
      message: 'Đăng ký thành công',
      token,
      user: user.toJSON(),
    });
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email đã được sử dụng' });
      return;
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e: any) => e.message);
      res.status(400).json({ message: messages.join('. ') });
      return;
    }
    res.status(500).json({ message: 'Lỗi server' });
  }
}

// POST /api/auth/login
export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    // Tìm user + lấy password (vì field password có select: false)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
      return;
    }

    // So sánh password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
      return;
    }

    const token = signToken(user._id as string);

    res.json({
      message: 'Đăng nhập thành công',
      token,
      user: user.toJSON(),
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}

// GET /api/auth/me — Lấy thông tin user hiện tại (cần auth)
export async function getMe(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req as any;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'Không tìm thấy user' });
      return;
    }
    res.json({ user: user.toJSON() });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}
