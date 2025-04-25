"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getArticleList } from "../../../lib/api";

interface Article {
  id: string;
  date: string;
  image: string;
  description: string;
  content: string;
}

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleList = await getArticleList();
      const foundArticle = articleList.find((item: any) => item.id === id);
      setArticle(foundArticle);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <Container className="mt-5">
        <h2>Bài viết không tồn tại</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="text-center mb-3">
            <img
              src={article.image}
              alt={article.description}
              className="img-fluid"
              style={{ maxHeight: "680px", objectFit: "cover" }}
            />
          </div>
          <p>Ngày đăng: {article.date}</p>
          <h2>{article.description}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
