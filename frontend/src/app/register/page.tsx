'use client';

import { AuthProvider, useAuth } from '@/context/AuthContext';
import RegisterPage from '@/components/RegisterPage';

function RegisterPageContent() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    window.location.href = '/dashboard';
    return null;
  }

  return <RegisterPage />;
}

export default function Register() {
  return (
    <AuthProvider>
      <RegisterPageContent />
    </AuthProvider>
  );
}
