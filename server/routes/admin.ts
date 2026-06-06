import { Router } from 'express';
import { getAllUsers, updateUserRole, deleteUser, toggleUserStatus } from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { requireRole } from '../middleware/authorize.js';

const router = Router();

// Tất cả route admin đều cần login + role admin
router.use(protect);
router.use(requireRole('admin'));

// GET    /api/admin/users        — Danh sách tất cả users
// PATCH  /api/admin/users/:id    — Cập nhật role / thông tin user
// DELETE /api/admin/users/:id    — Xóa user
router.get('/users', getAllUsers);
router.patch('/users/:id', updateUserRole);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id/toggle', toggleUserStatus);

export default router;
