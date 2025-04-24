'use client';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function SupportPage() {
    const permissions = useSelector((state: RootState) => state.auth.userPermissions);
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        if (!permissions.includes('hoTroKhachHang')) {
            router.replace('/unauthorized');
        }
    }, [permissions]);

    if (!permissions.includes('hoTroKhachHang')) return null;

    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} className="p-4">
                    <div className="text-light fw-bold p-2 rounded-top" style={{ backgroundColor: "#0D6EFD" }}>
                        {t('profile')}
                    </div>
                    <Nav className="flex-column border">
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/support" className="text-dark p-2">{t('customer_support')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/faq" className="text-dark p-2">{t('lqa')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-requests" className="text-dark p-2">{t('app_extension')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-list" className="text-dark p-2">{t('list_extension')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/profile/refund-requests" className="text-dark p-2">{t('refund')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col md={9} className="p-2 border rounded bg-light">
                    <h3 className="text-center mt-2">{t('customer_support')}</h3>
                    <hr className="mb-4" />
                    <Form>
                        <Row className="mb-3">
                            <Form.Group controlId="formSubject">
                                <Form.Label>
                                    <h6>{t('title')}</h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formContent">
                                <Form.Label>
                                    <h6>{t('content')}</h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Row>

                        <div className="text-left">
                            <Button type="submit" style={{ backgroundColor: '#2E3192', borderColor: '#2E3192' }}>
                                {t('send')}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
