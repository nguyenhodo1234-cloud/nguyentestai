import { Response, NextFunction } from 'express';
import User from '../models/User.js';
import type { AuthRequest } from './auth.js';
import type { UserRole } from '../models/User.js';

// Middleware: yêu cầu role cụ thể
export function requireRole(...roles: UserRole[]) {
  return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        res.status(404).json({ message: 'Không tìm thấy user' });
        return;
      }

      if (!user.isActive) {
        res.status(403).json({ message: 'Tài khoản đã bị vô hiệu hóa' });
        return;
      }

      if (!roles.includes(user.role)) {
        res.status(403).json({
          message: `Bạn không có quyền truy cập. Yêu cầu role: ${roles.join(' hoặc ')}`,
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server' });
    }
  };
}

// Middleware: yêu cầu permission cụ thể
export function requirePermission(permission: string) {
  return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        res.status(404).json({ message: 'Không tìm thấy user' });
        return;
      }

      if (!user.hasPermission(permission)) {
        res.status(403).json({
          message: `Bạn không có quyền "${permission}"`,
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server' });
    }
  };
}
