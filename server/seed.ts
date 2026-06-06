import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const USERS = [
  {
    fullName: 'Admin UltraViewer',
    email: 'admin@ultraviewer.net',
    password: 'admin123456',
    role: 'admin' as const,
    phone: '0900000001',
  },
  {
    fullName: 'Bác sĩ Nguyễn Văn A',
    email: 'doctor@ultraviewer.net',
    password: 'doctor123456',
    role: 'doctor' as const,
    phone: '0900000002',
  },
  {
    fullName: 'Người dùng Test',
    email: 'user@ultraviewer.net',
    password: 'user123456',
    role: 'user' as const,
    phone: '0900000003',
  },
];

async function seed() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI chưa cấu hình');

    await mongoose.connect(uri);
    console.log('✅ MongoDB connected\n');

    for (const u of USERS) {
      const exists = await User.findOne({ email: u.email });
      if (exists) {
        console.log(`⏭️  Đã tồn tại: ${u.email} (${u.role})`);
        continue;
      }
      const user = await User.create(u);
      console.log(`✅ Đã tạo: ${user.email} | Role: ${user.role} | Password: ${u.password}`);
    }

    console.log('\n🎉 Seed hoàn tất!');
    console.log('─────────────────────────────────────────────');
    console.log('  Admin:  admin@ultraviewer.net   / admin123456');
    console.log('  Bác sĩ: doctor@ultraviewer.net  / doctor123456');
    console.log('  User:   user@ultraviewer.net    / user123456');
    console.log('─────────────────────────────────────────────');
  } catch (error) {
    console.error('❌ Seed thất bại:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
