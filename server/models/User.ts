import mongoose, { type Document, type Model } from "mongoose";
import bcrypt from "bcryptjs";

export type UserRole = "admin" | "doctor" | "user";

export const ROLES: Record<UserRole, { label: string; permissions: string[] }> =
  {
    admin: {
      label: "Admin",
      permissions: [
        "manage_users",
        "manage_roles",
        "view_reports",
        "delete_data",
        "full_access",
      ],
    },
    doctor: {
      label: "Bác sĩ",
      permissions: [
        "view_patients",
        "edit_patients",
        "view_reports",
        "write_prescriptions",
      ],
    },
    user: {
      label: "Người dùng",
      permissions: ["view_profile", "edit_profile", "book_appointment"],
    },
  };

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  hasPermission(permission: string): boolean;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "Họ tên là bắt buộc"],
      trim: true,
      minlength: [2, "Họ tên phải có ít nhất 2 ký tự"],
    },
    email: {
      type: String,
      required: [true, "Email là bắt buộc"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Email không hợp lệ"],
    },
    password: {
      type: String,
      required: [true, "Mật khẩu là bắt buộc"],
      minlength: [8, "Mật khẩu phải có ít nhất 8 ký tự"],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "doctor", "user"],
        message: "Role không hợp lệ: {VALUE}",
      },
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

// Hash password trước khi save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// So sánh password
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Kiểm tra permission
userSchema.methods.hasPermission = function (permission: string): boolean {
  const roleDef = ROLES[this.role as UserRole];
  return roleDef?.permissions.includes(permission) ?? false;
};

// Chỉ trả về các field an toàn
userSchema.set("toJSON", {
  transform(_doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
