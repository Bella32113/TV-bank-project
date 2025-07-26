import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Menu, 
  Bell, 
  User, 
  Eye, 
  EyeOff, 
  TrendingUp, 
  Target, 
  Gift, 
  ArrowUpRight,
  Send,
  Receipt,
  Smartphone,
  CreditCard,
  Home,
  Package,
  History,
  MessageCircle,
  UserCircle
} from "lucide-react";
import { useState } from "react";

interface HomeScreenProps {
  onBack?: () => void;
  onNavigateToProducts: () => void;
}

export function HomeScreen({ onBack, onNavigateToProducts }: HomeScreenProps) {
  const [hideBalance, setHideBalance] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Get current time greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Chào buổi sáng";
    if (hour < 18) return "Chào buổi chiều";
    return "Chào buổi tối";
  };

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    if (tabKey === "products") {
      onNavigateToProducts();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const quickActions = [
    { icon: Send, label: "Chuyển tiền", color: "bg-blue-500" },
    { icon: Receipt, label: "Thanh toán hóa đơn", color: "bg-green-500" },
    { icon: Smartphone, label: "Nạp điện thoại", color: "bg-purple-500" },
    { icon: CreditCard, label: "Quản lý thẻ", color: "bg-orange-500" },
  ];

  const navItems = [
    { icon: Home, label: "Trang chủ", key: "home" },
    { icon: Package, label: "Sản phẩm", key: "products" },
    { icon: History, label: "Giao dịch", key: "transactions" },
    { icon: MessageCircle, label: "Hỗ trợ", key: "support" },
    { icon: UserCircle, label: "Cá nhân", key: "profile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between p-4">
          {/* Left: Menu or Logo */}
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Center: Logo */}
          <motion.div
            className="flex items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg width="32" height="32" viewBox="0 0 120 120" className="mr-2">
              <defs>
                <linearGradient id="logoGradientHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="55" fill="url(#logoGradientHeader)" stroke="white" strokeWidth="2" opacity="0.95"/>
              <g transform="translate(60, 60)">
                <rect x="-15" y="-10" width="30" height="20" fill="#1e40af" rx="3" opacity="0.8"/>
                <rect x="-12" y="-7" width="24" height="14" fill="#3b82f6" rx="2"/>
                <circle cx="-8" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="-3" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="2" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="7" cy="-3" r="1" fill="white" opacity="0.9"/>
              </g>
            </svg>
            <span className="text-gray-800 text-lg">TV Bank</span>
          </motion.div>

          {/* Right: Notifications and Profile */}
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </motion.button>
            
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="px-4 py-6 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Personalized Greeting */}
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl text-gray-800 mb-1">
            {getGreeting()}, <span className="text-blue-600">Anh Minh!</span>
          </h1>
          <p className="text-gray-600">Hôm nay bạn muốn làm gì?</p>
        </motion.div>

        {/* Account Overview */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Tài khoản chính</CardTitle>
                <motion.button
                  onClick={() => setHideBalance(!hideBalance)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {hideBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </motion.button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl mb-2">
                    {hideBalance ? "••••••••" : "15,420,000 ₫"}
                  </p>
                  <p className="text-blue-100 text-sm">Số dư khả dụng</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-300 mb-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm">+5.2%</span>
                  </div>
                  <p className="text-blue-100 text-xs">So với tháng trước</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Insights Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-800">Gợi ý AI dành riêng cho bạn</h2>
            <Button variant="ghost" size="sm" className="text-blue-600">
              Xem tất cả
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Savings Suggestion Card */}
            <motion.div variants={cardVariants}>
              <Card className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 mb-1">Mục tiêu tài chính của bạn</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        AI gợi ý gói "Đầu tư Tương Lai" với lợi suất 8.5% phù hợp với thu nhập hiện tại và mục tiêu mua nhà của bạn.
                      </p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Tìm hiểu ngay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personalized Offer Card */}
            <motion.div variants={cardVariants}>
              <Card className="border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Gift className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 mb-1">Ưu đãi độc quyền</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Hoàn tiền 5% khi chi tiêu tại Big C với thẻ tín dụng TV Bank Platinum. Áp dụng đến 31/12.
                      </p>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Kích hoạt ngay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl text-gray-800 mb-4">Chức năng nhanh</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm">{action.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeTab === item.key
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}