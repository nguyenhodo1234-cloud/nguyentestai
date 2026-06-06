import { Request, Response } from 'express';
import User, { ROLES } from '../models/User.js';

// GET /api/admin/users — Lấy danh sách tất cả users
export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const { role, page = '1', limit = '20' } = req.query;

    const filter: any = {};
    if (role && ['admin', 'doctor', 'user'].includes(role as string)) {
      filter.role = role;
    }

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const [users, total] = await Promise.all([
      User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limitNum),
      User.countDocuments(filter),
    ]);

    res.json({
      users,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}

// PATCH /api/admin/users/:id — Cập nhật role
export async function updateUserRole(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role || !['admin', 'doctor', 'user'].includes(role)) {
      res.status(400).json({ message: 'Role không hợp lệ. Chọn: admin, doctor, user' });
      return;
    }

    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      res.status(404).json({ message: 'Không tìm thấy user' });
      return;
    }

    res.json({ message: `Đã cập nhật role thành ${ROLES[role].label}`, user });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}

// DELETE /api/admin/users/:id — Xóa user
export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: 'Không tìm thấy user' });
      return;
    }
    res.json({ message: 'Đã xóa user thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}

// PATCH /api/admin/users/:id/toggle — Vô hiệu / Kích hoạt user
export async function toggleUserStatus(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'Không tìm thấy user' });
      return;
    }

    user.isActive = !user.isActive;
    await user.save();

    res.json({
      message: user.isActive ? 'Đã kích hoạt user' : 'Đã vô hiệu hóa user',
      user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
}
