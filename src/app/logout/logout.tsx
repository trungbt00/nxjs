'use client';

import dynamic from 'next/dynamic';

const LogoutConfirmModal = dynamic(() => import('@/components/LogoutConfirmModal'), { ssr: false });

export default function LogoutPage() {
    return <LogoutConfirmModal />;
}
