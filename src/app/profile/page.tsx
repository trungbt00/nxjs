'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
    const name = useSelector((state: RootState) => state.auth.userName);
    const email = useSelector((state: RootState) => state.auth.userEmail);
    const phonenumber = useSelector((state: RootState) => state.auth.userPhone);
    const id = useSelector((state: RootState) => state.auth.userId);
    const { t } = useTranslation();

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

                <Col md={9} className="p-4 border rounded bg-white mx-auto">
                    <h3 className="text-center mb-4">{t('acc_info')}</h3>
                    <hr />
                    <Form>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>{t('name')}</Form.Label>
                                    <Form.Control type="text" value={name} disabled />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>{t('phone')}</Form.Label>
                                    <Form.Control type="text" value={phonenumber} disabled />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>{t('id')}</Form.Label>
                                    <Form.Control type="text" value={id} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
