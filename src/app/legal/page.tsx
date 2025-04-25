'use client';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';

export default function RegisterPage() {
    const permissions = useSelector((state: RootState) => state.auth.userPermissions);
    const router = useRouter();

    useEffect(() => {
        if (!permissions.includes('giayToPhapLy')) {
            router.replace('/unauthorized');
        }
    }, [permissions]);

    if (!permissions.includes('giayToPhapLy')) return null;

    return (
        <div>
            <h2>Trang Giấy Tờ Pháp Lý</h2>
        </div>
    );
}
