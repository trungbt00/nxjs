'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getCategories } from '../lib/api';
import { useTranslation } from 'react-i18next';

interface Category {
    id: string;
    name: string;
}

const translationMap: { [key: string]: string } = {
    "Tin tức": "news",
    "Thông tin đấu giá": "auction_info",
    "Tin nổi bật": "featured",
    "Hướng dẫn": "guide"
};

export default function NavigationBar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const permissions = useSelector((state: RootState) => state.auth.userPermissions);
    const { t } = useTranslation();

    useEffect(() => {
        getCategories().then(setCategories).catch(console.error);
    }, []);



    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#333192' }} className="py-2">
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Link href="/" className="nav-link text-white">{t('home')}</Link>

                        <NavDropdown title={t('category')} id="basic-nav-dropdown" className="text-white" >
                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.id}`}
                                    className="dropdown-item"
                                >
                                    {t(translationMap[category.name] || category.name)}
                                </Link>
                            ))}
                        </NavDropdown>

                        <Link href="/history" className="nav-link text-white">{t('auction_history')}</Link>

                        {permissions.includes('DangKyGiaHan') && (
                        <Link href="/register" className="nav-link text-white">{t('extension')}</Link>
                        )}
                        {permissions.includes('hoTroKhachHang') && (
                        <Link href="/support" className="nav-link text-white">{t('customer_support')}</Link>
                        )}
                        {permissions.includes('giayToPhapLy') && (
                        <Link href="/legal" className="nav-link text-white">{t('legal_papers')}</Link>
                        )}
                        <Link href="/profile" className="nav-link text-white">{t('profile')}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
