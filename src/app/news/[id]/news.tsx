'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';

interface Article {
    id: string;
    date: string;
    image: string;
    description: string;
    content: JSX.Element;
}

const articles: Article[] = [
    {
        id: '1-news',
        date: '19/06/2023',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/12/thiet-ke-chua-co-ten-1-1699753247696157879037.gif',
        description: 'Sẽ có gần 290 nghìn biển số xe ô tô trong đợt đấu giá lần 2',
        content: (
            <>
                <h1 className="detail-title" data-role="title">Sẽ có gần 290 nghìn biển số xe ô tô trong đợt đấu giá lần 2</h1>
                <h3 className="detail-sapo" data-role="sapo">SKĐS - Trong phiên đấu giá biển số xe ô tô lần 2, Bộ Công an chính thức phê duyệt danh sách 288.668 biển số xe ô tô được đưa ra đấu giá.</h3>
                <p>Cục Cảnh sát giao thông (CSGT) chính thức thông báo về việc tổ chức phiên đấu giá biển số xe ô tô lần 2 theo Quyết định Số: 4653/QĐ-BCA-CSGT của Bộ Công An.</p>
                <p>Theo đó, phiên đấu giá lần 2 sẽ có sự xuất hiện của 288.668 biển số ô tô tại 63 tỉnh thành, danh sách biển số được đưa ra đấu giá trực tuyến sẽ công bố trên cổng thông tin đấu giá trực tuyến trong thời gian tới.</p>
                <p>Theo thống kê, các biển số đến từ Hà Nội và thành phố Hồ Chí Minh vẫn sẽ chiếm đa số (lần lượt là 49.689 và 41.989 biển số xe) trong phiên đấu giá lần 2, trong khi đó các biển số đến từ Bạc Liêu, Bắc Kạn, Điện Biên, Lai Châu chiếm thiểu số với chỉ dưới 1.000 biển.</p>
                <p>Giống như phiên đấu giá đầu tiên, phiên đấu giá biển số xe ô tô lần 2 vẫn do Công ty Đấu giá hợp Danh Việt Nam tổ chức thực hiện. Giá khởi điểm của 1 biển số xe ô tô đưa ra đấu giá là vẫn là 40.000.000 đồng. Tương tự, tiền đặt trước bằng giá khởi điểm của 1 biển số xe ô tô đưa ra đấu giá và bước giá vẫn sẽ được giữ nguyên.</p>
                <p>Liên quan đến thù lao dịch vụ đấu giá, chi phí đấu giá thanh toán cho tổ chức đấu giá, Cục CSGT cho biết, đối với mỗi biển số xe ô tô đấu giá thành công, thù lao dịch vụ đấu giá thanh toán cho tổ chức đấu giá tài sản được tính bằng 8% giá khởi điểm. Ngoài thù lao dịch vụ đấu giá, chi phí đấu giá thanh toán cho tổ chức đấu giá tài sản là 10.000 đồng trên một biển số xe ô tô đưa ra đấu giá.</p>
                <p>Đơn vị được giao quản lý, giám sát thực hiện việc thực hiện phiên đấu giá biển số xe ô tô lần 2 là Cục Cảnh sát giao thông - Bộ Công an. Trong khi đó, đơn vị được giao kiểm tra, giám sát an ninh, an toàn thông tin, bảo đảm an ninh mạng, chống xâm nhập trong quá trình đấu giá là Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao, Cục Viễn thông và Cơ yếu, Cục Công nghệ thông tin, Cục Kỹ thuật nghiệp vụ - Bộ Công an.</p>
            </>
        ),
    },
    {
        id: '2-news',
        date: '19/06/2023',
        image: 'https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2023/3/17/bien-so-xe-16790378729161515853070.jpg',
        description: 'Bộ Công an đề xuất cấp và quản lý biển số xe theo mã định danh của chủ xe',
        content: (
            <>
                <h1 className="detail-title article-title" data-role="title">Bộ Công an đề xuất cấp và quản lý biển số xe theo mã định danh của chủ xe</h1>
                <h3 className="detail-sapo" data-role="sapo">
                    Trong dự thảo thông tư đang được lấy ý kiến, Bộ Công an đề xuất cấp và quản lý biển số xe máy, ô tô theo mã số định danh của chủ xe.
                </h3>
                <p>Bộ Công an vừa hoàn thành dự thảo thông tư quy định về cấp, thu hồi đăng ký, <a class="link-inline-content" href="https://tuoitre.vn/thi-diem-dau-gia-bien-so-xe-o-to-tu-1-7-2023-2022120108560031.htm" title="Biển số xe" data-rel="follow">biển số xe</a> cơ giới và đăng tải công khai để lấy ý kiến đóng góp của các đơn vị, cá nhân. Dự kiến, thông tư này có hiệu lực từ 1-7, thay thế thông tư 58/2020/TT-BCA.</p>
                <p>Một trong những nội dung mới được quy định trong dự thảo thông tư, chủ xe là tổ chức, cá nhân có trụ sở, nơi cư trú ở đâu thì <a class="VCCTagItemInNews" data-zoneid="0" data-id="0" href="https://tuoitre.vn/dang-ky-xe.html" target="_blank" title="đăng ký xe">đăng ký xe</a> tại cơ quan đăng ký xe thuộc địa phương đó.</p>
                <p>Điểm mới đáng chú ý nhất của dự thảo là biển số sẽ được cấp và quản lý theo mã định danh của chủ xe.</p>
                <p>Cụ thể, chủ xe là người Việt Nam thì biển số được quản lý theo mã định danh cá nhân, hay còn gọi là "biển số định danh". Đối với người nước ngoài thì biển số xe được quản lý theo mã định danh của người nước ngoài</p>
                <p>Với tổ chức, biển số được quản lý theo mã định danh của tổ chức hoặc mã số thuế.</p>
                <p>Trường hợp xe hết niên hạn sử dụng, hư hỏng hoặc chuyển quyền sở hữu xe thì biển số xe đó được cơ quan đăng ký thu hồi và cấp lại khi chủ xe đăng ký xe khác thuộc sở hữu của mình.</p>
                <p> Số biển số định danh này được giữ lại cho chủ xe trong thời hạn 5 năm, quá thời hạn nếu chủ xe không đăng ký, cơ quan chức năng sẽ thu hồi và đưa vào kho số để thực hiện đăng ký xe theo quy định.</p>
                <p>Trường hợp chủ xe chuyển trụ sở, nơi cư trú đi tỉnh, thành phố trực thuộc trung ương khác (thì được giữ lại biển số xe đó.</p>
                <p>Cũng theo dự thảo, mọi thủ tục đăng ký xe đều phải được kê khai trên&nbsp;
                    <a className="link-inline-content" href="https://tuoitre.vn/cong-dich-vu-cong-quoc-gia.html" target="_blank" title="cổng dịch vụ công quốc gia" data-rel="follow">Cổng dịch vụ công quốc gia
                    </a>.
                    Sau khi kê khai thành công, cổng dịch vụ công gửi tin nhắn thông báo mã hồ sơ để chủ xe làm thủ tục đăng ký xe tại cơ quan đăng ký xe có thẩm quyền.
                </p>
                <p>"Trường hợp không thực hiện được trên Cổng dịch vụ công quốc gia, do không có dữ liệu điện tử hoặc lỗi kỹ thuật, thì chủ xe kê khai làm thủ tục trực tiếp tại cơ quan đăng ký xe", dự thảo thông tư quy định.</p>
                <p>So với thông tư 58/2020 đang có hiệu lực, dự thảo bổ sung đơn vị được quyền cấp biển số xe là công an cấp xã, phường. Đơn vị hành chính này sẽ thực hiện cấp biển xe máy. Công an quận, huyện cấp đăng ký cho ô tô.</p>
                <p>Khi đăng ký xe mới, chủ xe sử dụng tài khoản định danh điện tử mức độ 2 để làm thủ tục trên cổng dịch vụ công hoặc xuất trình căn cước công dân cho cán bộ làm thủ tục.</p>
            </>
        ),
    }
];

export default function ArticlePage() {
    const params = useParams();
    const id = params?.id as string;
    const [article, setArticle] = useState<Article | undefined>();

    useEffect(() => {
        const found = articles.find((a) => a.id === id);
        setArticle(found);
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
                            className="img-fluid rounded"
                            style={{ maxHeight: '680px', objectFit: 'cover' }}
                        />
                    </div>
                    <p>Ngày đăng: {article.date}</p>
                    {article.content}
                </Col>
            </Row>
        </Container>
    );
}
