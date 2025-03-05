"use client";

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// ダイナミックインポートとssr: falseはクライアントコンポーネントでのみ許可される
const AuthProviderDynamic = dynamic(
  () => import('@/contexts/AuthContext').then((mod) => mod.AuthProvider),
  { ssr: false }
);

export default function AuthProviderClient({ children }: { children: ReactNode }) {
  return <AuthProviderDynamic>{children}</AuthProviderDynamic>;
} 