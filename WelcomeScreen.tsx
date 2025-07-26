import { motion } from "motion/react";
import { Button } from "./ui/button";

interface WelcomeScreenProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function WelcomeScreen({ onLogin, onSignup }: WelcomeScreenProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating abstract elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-400/10 blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "0s" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-indigo-400/15 blur-lg"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-purple-400/10 blur-2xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-blue-300/10 blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
        />
        
        {/* Animated connecting lines/dots pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 1000"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.circle
                cx="50"
                cy="50"
                r="2"
                fill="white"
                opacity="0.3"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  r: [2, 3, 2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
          
          {/* Animated connecting lines */}
          <motion.path
            d="M100,200 Q300,100 500,200 T900,150"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M150,400 Q400,300 650,400 T950,350"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M50,600 Q250,500 450,600 T850,550"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Animated main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Logo with Icon */}
        <motion.div className="mb-8" variants={logoVariants}>
          {/* TV Bank Logo Icon */}
          <motion.div
            className="mb-6"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="mx-auto"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                  "drop-shadow(0 0 30px rgba(255,255,255,0.5))",
                  "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: "#e5e7eb", stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              {/* Main circle background */}
              <circle cx="60" cy="60" r="55" fill="url(#logoGradient)" stroke="white" strokeWidth="2" opacity="0.95"/>
              
              {/* Bank building icon */}
              <g transform="translate(60, 60)">
                {/* Main building structure */}
                <rect x="-25" y="-15" width="50" height="30" fill="url(#buildingGradient)" rx="2"/>
                
                {/* Building columns */}
                <rect x="-20" y="-15" width="4" height="30" fill="white" opacity="0.7"/>
                <rect x="-10" y="-15" width="4" height="30" fill="white" opacity="0.7"/>
                <rect x="0" y="-15" width="4" height="30" fill="white" opacity="0.7"/>
                <rect x="10" y="-15" width="4" height="30" fill="white" opacity="0.7"/>
                
                {/* Roof/triangle top */}
                <polygon points="-30,-15 0,-25 30,-15" fill="url(#buildingGradient)"/>
                
                {/* TV/Screen element */}
                <rect x="-15" y="-10" width="30" height="20" fill="#1e40af" rx="3" opacity="0.8"/>
                <rect x="-12" y="-7" width="24" height="14" fill="#3b82f6" rx="2"/>
                
                {/* Digital elements - dots representing pixels/data */}
                <circle cx="-8" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="-3" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="2" cy="-3" r="1" fill="white" opacity="0.9"/>
                <circle cx="7" cy="-3" r="1" fill="white" opacity="0.9"/>
                
                <circle cx="-8" cy="2" r="1" fill="white" opacity="0.7"/>
                <circle cx="-3" cy="2" r="1" fill="white" opacity="0.7"/>
                <circle cx="2" cy="2" r="1" fill="white" opacity="0.7"/>
                <circle cx="7" cy="2" r="1" fill="white" opacity="0.7"/>
                
                {/* Base foundation */}
                <rect x="-28" y="15" width="56" height="4" fill="url(#logoGradient)" opacity="0.6"/>
              </g>
            </motion.svg>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl text-white mb-2 tracking-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 30px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            TV Bank
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Animated Slogan - Only keeping the second line */}
        <motion.div className="mb-12 max-w-2xl" variants={itemVariants}>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            AI đồng hành, cuộc sống thăng hoa.
          </motion.p>
        </motion.div>

        {/* Animated CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          variants={itemVariants}
        >
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={onLogin}
              className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 transition-all duration-300 py-6 text-lg"
            >
              Đăng nhập
            </Button>
          </motion.div>
          <motion.div
            className="flex-1"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.3), 0 10px 10px -5px rgba(251, 191, 36, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              onClick={onSignup}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 hover:from-yellow-300 hover:to-yellow-200 border-0 transition-all duration-300 py-6 text-lg shadow-lg"
            >
              Đăng ký ngay
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated decorative text */}
        <motion.div
          className="mt-16 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.p
            animate={{
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Trải nghiệm ngân hàng số thế hệ mới
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Animated bottom gradient overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}