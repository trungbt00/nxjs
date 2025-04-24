'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useTranslation } from 'react-i18next';
export default function LogoutConfirmModal() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        modalRef.current?.showModal();
    }, []);

    const handleConfirm = () => {
        dispatch(logout());
        modalRef.current?.close();
        router.push('/login');
    };

    const handleCancel = () => {
        modalRef.current?.close();
        router.back();
    };

    return (
        <dialog
            ref={modalRef}
            className="rounded shadow"
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '1.5rem',
                border: 'none',
                width: '100%',
                maxWidth: '400px',
                zIndex: 9999
            }}
        >
            <h5 className="mb-3">{t('ttlogout')}</h5>
            <p>{t('cflogout')}</p>
            <div className="d-flex justify-content-end gap-3 mt-3">
                <button onClick={handleCancel} className="btn btn-secondary">{t('cancel')}</button>
                <button onClick={handleConfirm} className="btn btn-danger">{t('logout')}</button>
            </div>
        </dialog>
    );
}
