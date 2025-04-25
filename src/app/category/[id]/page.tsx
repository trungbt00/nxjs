import { getNewsList } from "../../../lib/api";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

interface NewsItem {
  id: string;
  title: string;
  publishDate: string;
  imageRepresent?: string;
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const newsList = await getNewsList();
  const filteredNews: NewsItem[] = (newsList.items || []).filter((item: any) =>
    item.categoriesIds?.includes(id)
  );

  if (filteredNews.length === 0) {
    return (
      <Container className="mt-5">
        <h2>Không có bài viết nào thuộc danh mục này.</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredNews.map((event) => (
          <Col key={event.id}>
            <div className="p-3 ">
              {event.imageRepresent && (
                <div className="mb-2">
                  <img
                    src={
                      event.imageRepresent.startsWith("http")
                        ? event.imageRepresent
                        : `/${event.imageRepresent}`
                    }
                    alt={event.title}
                    className="img-fluid w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
              )}
              <div>
                <h6>
                  <Link
                    href={
                      event.id.includes("articlefn")
                        ? `/articlefn/${event.id}`
                        : event.id.includes("article")
                        ? `/article/${event.id}`
                        : `/news/${event.id}`
                    }
                    className="text-decoration-none text-dark"
                  >
                    <p className="mb-1">{event.title}</p>
                  </Link>
                </h6>
                <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                  {new Date(event.publishDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
