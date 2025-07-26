import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  CreditCard, 
  PiggyBank, 
  TrendingUp, 
  Shield,
  Star,
  Sparkles,
  CheckCircle,
  Info,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

interface ProductsScreenProps {
  onBack: () => void;
}

export function ProductsScreen({ onBack }: ProductsScreenProps) {
  const [activeTab, setActiveTab] = useState("loan");

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // AI-recommended loan products
  const aiRecommendedProducts = [
    {
      id: 1,
      name: "Vay Mua Nhà Thông Minh",
      interestRate: "7.2% - 8.5%",
      maxAmount: "5 tỷ VNĐ",
      term: "Tối đa 25 năm",
      aiInsight: "Phù hợp cho nhu cầu mua nhà của bạn dựa trên thu nhập và lịch sử giao dịch",
      highlights: ["Không cần thế chấp bổ sung", "Giải ngân nhanh 24h", "Lãi suất ưu đãi"],
      aiScore: 95,
      badge: "Khuyến nghị cao nhất"
    },
    {
      id: 2,
      name: "Vay Tiêu Dùng Linh Hoạt",
      interestRate: "12% - 15%",
      maxAmount: "500 triệu VNĐ", 
      term: "Tối đa 5 năm",
      aiInsight: "Phù hợp cho nhu cầu mua sắm lớn và cải thiện cuộc sống",
      highlights: ["Không cần giấy tờ phức tạp", "Duyệt vay online", "Rút tiền linh hoạt"],
      aiScore: 88,
      badge: "Phù hợp cao"
    },
    {
      id: 3,
      name: "Vay Xe Ô Tô 0% Phí",
      interestRate: "8.5% - 10%",
      maxAmount: "2 tỷ VNĐ",
      term: "Tối đa 8 năm",
      aiInsight: "Dựa trên xu hướng di chuyển và khả năng tài chính của bạn",
      highlights: ["0% phí trước bạ", "Tài trợ 90% giá trị xe", "Bảo hiểm tặng kèm"],
      aiScore: 82,
      badge: "Đáng quan tâm"
    }
  ];

  // Other loan products
  const otherProducts = [
    {
      name: "Vay Tín Chấp Express",
      interestRate: "14% - 18%",
      maxAmount: "200 triệu VNĐ",
      term: "1-3 năm",
      highlights: ["Duyệt trong 30 phút", "Không cần tài sản đảm bảo"]
    },
    {
      name: "Vay Thế Chấp Bất Động Sản",
      interestRate: "6.5% - 8%",
      maxAmount: "20 tỷ VNĐ", 
      term: "Tối đa 30 năm",
      highlights: ["Lãi suất thấp nhất", "Thời hạn vay dài"]
    },
    {
      name: "Vay Kinh Doanh SME",
      interestRate: "9% - 12%",
      maxAmount: "10 tỷ VNĐ",
      term: "Tối đa 10 năm",
      highlights: ["Hỗ trợ doanh nghiệp nhỏ", "Quy trình đơn giản"]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    return "text-orange-600 bg-orange-50";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <Star className="w-4 h-4 fill-current" />;
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    return <Info className="w-4 h-4" />;
  };

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
          <motion.button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          <motion.h1
            className="text-xl text-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sản phẩm & Dịch vụ
          </motion.h1>

          <div className="w-10"></div> {/* Spacer */}
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="px-4 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Product Categories Tabs */}
        <motion.div variants={itemVariants}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="loan" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Vay
              </TabsTrigger>
              <TabsTrigger value="savings">
                <PiggyBank className="w-4 h-4" />
                Tiết kiệm
              </TabsTrigger>
              <TabsTrigger value="cards">
                <CreditCard className="w-4 h-4" />
                Thẻ
              </TabsTrigger>
              <TabsTrigger value="investment">
                <TrendingUp className="w-4 h-4" />
                Đầu tư
              </TabsTrigger>
            </TabsList>

            <TabsContent value="loan" className="space-y-6">
              {/* AI Recommendations Section */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg text-gray-800">Phù hợp nhất với bạn</h2>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Do AI gợi ý
                  </Badge>
                </div>

                <div className="space-y-4">
                  {aiRecommendedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      variants={cardVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
                                <Badge className={`text-xs ${getScoreColor(product.aiScore)}`}>
                                  {getScoreIcon(product.aiScore)}
                                  <span className="ml-1">{product.badge}</span>
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>Lãi suất: <span className="text-blue-600">{product.interestRate}/năm</span></span>
                                <span>Tối đa: <span className="text-green-600">{product.maxAmount}</span></span>
                              </div>
                            </div>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getScoreColor(product.aiScore)}`}>
                              <Sparkles className="w-3 h-3" />
                              <span>{product.aiScore}%</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          {/* AI Insight */}
                          <div className="bg-blue-50 rounded-lg p-3 mb-4">
                            <div className="flex items-start gap-2">
                              <div className="p-1 bg-blue-100 rounded">
                                <Sparkles className="w-3 h-3 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-xs text-blue-700 mb-1">AI Insights:</p>
                                <p className="text-sm text-blue-800">{product.aiInsight}</p>
                              </div>
                            </div>
                          </div>

                          {/* Product Highlights */}
                          <div className="space-y-2 mb-4">
                            {product.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                              Đăng ký ngay
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              Chi tiết
                              <ArrowRight className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Other Products Section */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg text-gray-800 mb-4">Sản phẩm khác</h3>
                <div className="space-y-3">
                  {otherProducts.map((product, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-gray-800">{product.name}</h4>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span>Lãi suất: <span className="text-blue-600">{product.interestRate}/năm</span></span>
                            <span>Tối đa: <span className="text-green-600">{product.maxAmount}</span></span>
                          </div>

                          <div className="space-y-1">
                            {product.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                <span className="text-gray-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Placeholder content for other tabs */}
            <TabsContent value="savings">
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <PiggyBank className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">Sản phẩm tiết kiệm</h3>
                <p className="text-gray-500">Đang cập nhật...</p>
              </motion.div>
            </TabsContent>

            <TabsContent value="cards">
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">Thẻ ngân hàng</h3>
                <p className="text-gray-500">Đang cập nhật...</p>
              </motion.div>
            </TabsContent>

            <TabsContent value="investment">
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">Sản phẩm đầu tư</h3>
                <p className="text-gray-500">Đang cập nhật...</p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}