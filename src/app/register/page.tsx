'use client';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';

export default function RegisterPage() {
    const permissions = useSelector((state: RootState) => state.auth.userPermissions);
    const router = useRouter();

    useEffect(() => {
        if (!permissions.includes('DangKyGiaHan')) {
            router.replace('/unauthorized');
        }
    }, [permissions]);

    if (!permissions.includes('DangKyGiaHan')) return null;

    return (
        <div>
            <h2>Trang Đăng ký gia hạn</h2>
        </div>
    );
}
