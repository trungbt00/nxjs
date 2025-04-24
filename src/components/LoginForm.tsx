'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validUsers = [
            { email: 'user@example.com', password: '123456', name: 'Nguyen Van A', phonenumber: '0123456789', id: '1', permissions: ['hoTroKhachHang', 'DangKyGiaHan'] },
            { email: 'admin@example.com', password: 'admin123', name: 'Admin User', phonenumber: '0987654321', id: '2', permissions: ['admin', 'giayToPhapLy', 'hoTroKhachHang'] },
            { email: 'guest@example.com', password: 'guestpass', name: 'Guest User', phonenumber: '0999999999', id: '3', permissions: ['giayToPhapLy'] },
        ];

        const user = validUsers.find(u => u.email === email && u.password === password);

        if (user) {
            dispatch(login({
                isLoggedIn: true,
                userEmail: user.email,
                userName: user.name,
                userPhone: user.phonenumber,
                userId: user.id,
                userPermissions: user.permissions,
            }));

            if (rememberMe) {
                localStorage.setItem('rememberEmail', email);
            } else {
                localStorage.removeItem('rememberEmail');
            }

            router.push('/');
        } else {
            setError( t('msg') );
        }
    };

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberEmail');
        if (savedEmail) setEmail(savedEmail);
    }, []);


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-3">{t('login')}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="me-2" style={{ minWidth: '80px', marginBottom: 0 }}>
                            {t('email')}
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-control form-control-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="password" className="me-2" style={{ minWidth: '80px', marginBottom: 0 }}>
                            {t('password')}
                        </label>
                        <div className="input-group">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="form-control form-control-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ minWidth: '60px' }}
                            >
                                {showPassword ? t('hide') : t('show')}
                            </button>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginBottom: '0.5rem' }}>
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            {t('remember')}
                        </label>
                    </div>

                    {error && <div className="text-danger text-center mb-3">{error}</div>}

                    <div className="text-center mt-3">
                        <button type="submit" className="btn btn-primary btn-sm">
                            {t('login')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
