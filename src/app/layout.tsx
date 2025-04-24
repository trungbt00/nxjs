'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body>
                <Provider store={store}>
                    <I18nextProvider i18n={i18n}>
                        <Header />
                        <Navbar />
                        <main className="container mt-4">
                            {children}
                        </main>
                        <Footer />
                    </I18nextProvider>
                </Provider>
            </body>
        </html>
    );
}
