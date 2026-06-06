import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "../i18n/LanguageContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import PlaceholderPage from "../pages/PlaceholderPage";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";

// Landing page
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import DownloadSection from "../components/sections/DownloadSection";
import SocialProof from "../components/sections/SocialProof";
import Footer from "../components/layout/Footer";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <DownloadSection />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              {/* Landing */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />

              {/* Dashboard — Admin only */}
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route
                    path="orders"
                    element={<PlaceholderPage title="Orders" />}
                  />
                  <Route
                    path="customers"
                    element={<PlaceholderPage title="Customers" />}
                  />
                  <Route
                    path="products"
                    element={<PlaceholderPage title="Products" />}
                  />
                  <Route
                    path="messages"
                    element={<PlaceholderPage title="Messages" />}
                  />
                  <Route
                    path="calendar"
                    element={<PlaceholderPage title="Calendar" />}
                  />
                  <Route
                    path="finance"
                    element={<PlaceholderPage title="Finance" />}
                  />
                  <Route
                    path="reports"
                    element={<PlaceholderPage title="Reports" />}
                  />
                  <Route
                    path="settings"
                    element={<PlaceholderPage title="Settings" />}
                  />
                </Route>
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
