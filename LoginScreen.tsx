import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { User, Lock, Eye, EyeOff, Fingerprint, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function LoginScreen({ onBack, onLoginSuccess }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, you would validate credentials
    onLoginSuccess();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      x: [-3, 3, -3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-400/5 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-16 h-16 rounded-full bg-indigo-400/10 blur-lg"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-purple-400/5 blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="relative z-10 flex items-center justify-between p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          onClick={onBack}
          className="flex items-center text-white/80 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-sm">Trở về</span>
        </motion.button>

        {/* Small logo */}
        <motion.div
          className="flex items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <svg width="40" height="40" viewBox="0 0 120 120" className="mr-2">
            <defs>
              <linearGradient id="logoGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill="url(#logoGradientSmall)" stroke="white" strokeWidth="2" opacity="0.95"/>
            <g transform="translate(60, 60)">
              <rect x="-15" y="-10" width="30" height="20" fill="#1e40af" rx="3" opacity="0.8"/>
              <rect x="-12" y="-7" width="24" height="14" fill="#3b82f6" rx="2"/>
              <circle cx="-8" cy="-3" r="1" fill="white" opacity="0.9"/>
              <circle cx="-3" cy="-3" r="1" fill="white" opacity="0.9"/>
              <circle cx="2" cy="-3" r="1" fill="white" opacity="0.9"/>
              <circle cx="7" cy="-3" r="1" fill="white" opacity="0.9"/>
            </g>
          </svg>
          <span className="text-white text-lg">TV Bank</span>
        </motion.div>

        <div className="w-16"></div> {/* Spacer for centering */}
      </motion.header>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Title */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h1 className="text-white text-3xl mb-2">Chào mừng trở lại!</h1>
            <p className="text-white/70">Đăng nhập để tiếp tục</p>
          </motion.div>

          {/* Login Form */}
          <motion.form className="space-y-6" variants={itemVariants} onSubmit={handleSubmit}>
            {/* Username/Email Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="username" className="text-white/90">
                Tên đăng nhập / Số điện thoại / Email
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-yellow-400 focus:ring-yellow-400/20 backdrop-blur-sm"
                  placeholder="Nhập tên đăng nhập hoặc email"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="password" className="text-white/90">
                Mật khẩu
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-yellow-400 focus:ring-yellow-400/20 backdrop-blur-sm"
                  placeholder="Nhập mật khẩu"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Biometric Login Option */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLoginSuccess}
              >
                <Fingerprint className="w-5 h-5" />
                <span>Đăng nhập bằng vân tay / Face ID</span>
              </motion.button>
            </motion.div>

            {/* Login Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 hover:from-yellow-300 hover:to-yellow-200 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Đăng nhập
              </Button>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              className="flex flex-col space-y-3 text-center"
              variants={itemVariants}
            >
              <motion.button
                type="button"
                className="text-white/60 hover:text-white/80 transition-colors text-sm"
                whileHover={{ scale: 1.02 }}
              >
                Quên mật khẩu?
              </motion.button>
              
              <motion.p
                className="text-white/60 text-sm"
                whileHover={{ scale: 1.02 }}
              >
                Bạn chưa có tài khoản?{" "}
                <button
                  type="button"
                  className="text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  Đăng ký ngay
                </button>
              </motion.p>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          className="mt-8 text-center text-white/40 text-sm"
          variants={itemVariants}
        >
          <p>Bảo mật tuyệt đối với công nghệ AI tiên tiến</p>
        </motion.div>
      </motion.div>
    </div>
  );
}