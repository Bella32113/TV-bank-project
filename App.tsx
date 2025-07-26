import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ProductsScreen } from "./components/ProductsScreen";

type Screen = "welcome" | "login" | "signup" | "home" | "products";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");

  const handleLogin = () => {
    setCurrentScreen("login");
  };

  const handleSignup = () => {
    setCurrentScreen("signup");
  };

  const handleBack = () => {
    setCurrentScreen("welcome");
  };

  const handleLoginSuccess = () => {
    setCurrentScreen("home");
  };

  const handleLogout = () => {
    setCurrentScreen("welcome");
  };

  const handleNavigateToProducts = () => {
    setCurrentScreen("products");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  switch (currentScreen) {
    case "welcome":
      return <WelcomeScreen onLogin={handleLogin} onSignup={handleSignup} />;
    case "login":
      return <LoginScreen onBack={handleBack} onLoginSuccess={handleLoginSuccess} />;
    case "home":
      return <HomeScreen onLogout={handleLogout} onNavigateToProducts={handleNavigateToProducts} />;
    case "products":
      return <ProductsScreen onBack={handleBackToHome} />;
    case "signup":
      // TODO: Implement signup screen
      return <div>Signup screen coming soon...</div>;
    default:
      return <WelcomeScreen onLogin={handleLogin} onSignup={handleSignup} />;
  }
}