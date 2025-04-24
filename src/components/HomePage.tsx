'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { getNewsList } from '../lib/api';
import { useTranslation } from 'react-i18next';
interface NewsItem {
    id: string;
    title: string;
    publishDate: string;
    description: string;
    imageRepresent?: string;
    categoryName: string;
}

export default function HomePage() {
    const [auctionNews, setAuctionNews] = useState<NewsItem[]>([]);
    const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
    const [generalNews, setGeneralNews] = useState<NewsItem[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        getNewsList().then((data) => {
            const allItems: NewsItem[] = data.items || [];

            setAuctionNews(allItems.filter(item => item.categoryName === "Thông tin đấu giá"));
            setFeaturedNews(allItems.filter(item => item.categoryName === "Tin nổi bật"));
            setGeneralNews(allItems.filter(item => item.categoryName === "Tin tức"));
        });
    }, []);

    return (
        <Container className="mt-4">
            <Row className="d-flex flex-wrap">
                <Col md={3} style={{ backgroundColor: "#FEF7DD" }}>
                    <div className="text-dark fw-bold text-center" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc' }}>
                        {t('auc_info')}
                    </div>
                    <ul className="list-unstyled">
                        {auctionNews.map((news, index) => (
                            <li key={index} className="mb-2 d-flex align-items-center justify-content-between" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc' }}>
                                <div>
                                    <h6>
                                        <Link href={`/article/${news.id}`} className="text-decoration-none text-dark">
                                            <p className="mb-0">{news.title}</p>
                                        </Link>
                                    </h6>
                                    <small className="text-muted">{new Date(news.publishDate).toLocaleDateString()}</small>
                                </div>
                                {news.imageRepresent && (
                                    <div style={{
                                        width: '80px',
                                        minWidth: '80px',
                                        height: '60px',
                                        marginLeft: '10px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={news.imageRepresent}
                                            alt={news.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                        />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </Col>

                <Col md={6}>
                    <ul className="list-unstyled">
                        {generalNews.map((news, index) => (
                            <li key={index} className="d-flex" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', alignItems: 'center' }}>
                                <div>
                                    {index === 0 && news.imageRepresent && (
                                        <div className="mb-3" style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                                            <img
                                                src={news.imageRepresent}
                                                alt={news.title}
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}
                                    <h6>
                                        <Link href={`/news/${news.id}`} className="text-decoration-none text-dark">
                                            {news.title}
                                        </Link>
                                    </h6>
                                    <p className="mb-0 text-muted">{news.description}</p>
                                    <small className="text-muted d-flex justify-content-between">
                                        <span>{new Date(news.publishDate).toLocaleDateString()}</span>
                                        <Link href={`/category/3ebe84fe-5c7f-1289-21a0-3a0b360f757d`} className="text-decoration-none text-primary">
                                            {t('news')}
                                        </Link>
                                        <span style={{ visibility: 'hidden' }}>Placeholder</span>
                                    </small>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>

                <Col md={3}>
                    <div className="text-dark fw-bold text-center" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc' }}>
                        {t('featured_n')}
                    </div>
                    <ul className="list-unstyled">
                        {featuredNews.map((news, index) => (
                            <li key={index} className="mb-2" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc' }}>
                                <div className="fw-bold">
                                    <h6>
                                        <Link href={`/articlefn/${news.id}`} className="text-decoration-none text-dark">
                                            <p className="mb-0">{news.title}</p>
                                        </Link>
                                    </h6>
                                </div>
                                <small className="text-muted">{new Date(news.publishDate).toLocaleDateString()}</small>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
