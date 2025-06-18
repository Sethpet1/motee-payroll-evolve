import React, { Suspense, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import CalculatorPage from './pages/Calculator';
import PricingPage from './pages/Pricing';
import NotFound from './pages/NotFound';
import BookDemo from './pages/BookDemo';
import AboutMSLPage from './pages/AboutMSL';
import HrManagement from './pages/HrManagement';
import LeaveAbsence from './pages/LeaveAbsence';
import Payroll from './pages/Payroll';
import TimeAttendance from './pages/TimeAttendance';
import PerformanceManagement from './pages/PerformanceManagement';
import ELearning from './pages/ELearning';
import AssetTracking from './pages/AssetTracking';
import SMEs from './pages/SMEs';
import Enterprise from './pages/Enterprise';
import PublicSector from './pages/PublicSector';

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

// Debug Component
const DebugInfo = () => {
  useEffect(() => {
    console.log('App mounted');
    console.log('React version:', React.version);
    console.log('Environment:', import.meta.env.MODE);
    console.log('Base URL:', import.meta.env.BASE_URL);
    console.log('Current pathname:', window.location.pathname);
  }, []);

  return null;
};

// Simple Test Component
const TestComponent = () => {
  useEffect(() => {
    console.log('Test component mounted');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Test Component</h1>
        <p className="text-gray-600">If you can see this, routing is working!</p>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    console.log('App component rendering');
    // Add dark mode class to body
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ErrorBoundary>
      <DebugInfo />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/test" element={<TestComponent />} />
                <Route path="/" element={<Index />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/about-msl" element={<AboutMSLPage />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/solutions/hr-management" element={<HrManagement />} />
                <Route path="/solutions/leave-absence" element={<LeaveAbsence />} />
                <Route path="/solutions/payroll" element={<Payroll />} />
                <Route path="/solutions/time-attendance" element={<TimeAttendance />} />
                <Route path="/solutions/performance" element={<PerformanceManagement />} />
                <Route path="/solutions/e-learning" element={<ELearning />} />
                <Route path="/hr-pages" element={<AssetTracking />} />
                <Route path="/who-we-help/smes" element={<SMEs />} />
                <Route path="/who-we-help/enterprise" element={<Enterprise />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
