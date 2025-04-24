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
        id: '1-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/Gu-wfOLO02e_Ol2GK_hJu6EhsMo=/zoom/504_336/2024/05/08/screen-shot-2024-05-08-at-205111-1715176287872.png',
        description: 'Bộ Công an đề xuất quy định liên quan đấu giá biển số xe',
        content: (
            <>
                <h1 className="title-page detail">Bộ Công an đề xuất quy định liên quan đấu giá biển số xe</h1>
                <h3 className="singular-sapo">(Dân trí) - Bộ Công an đề xuất số tiền thu được từ đấu giá biển số xe sau khi trừ các khoản chi phí tổ chức đấu giá, chi phí quảng cáo, chi phí quản trị hệ thống đấu giá và chi phí khác, được nộp vào ngân sách.</h3>
                <p>Trong dự án Luật Trật tự an toàn giao thông đường bộ cập nhật ngày 10/4, Bộ Công an đề xuất 21 Điều trong Chương III, quy định về Phương tiện giao thông đường bộ.</p>
                <p>Trong đó, Điều 37 quy định về đấu giá biển số xe. Cụ thể, Bộ Công an đề xuất biển số xe đưa ra đấu giá là số biển số xe ô tô, xe mô tô, xe gắn máy.</p>
                <p>Giá khởi điểm của một biển số ô tô đưa ra đấu giá không thấp hơn 40 triệu; giá khởi điểm một biển số xe mô tô, xe gắn máy đưa ra đấu giá không thấp hơn 5 triệu. Căn cứ điều kiện kinh tế xã hội trong từng thời kỳ, Chính phủ quyết định cụ thể giá khởi điểm của loại biển số xe đưa ra đấu giá.</p>
                <p>Quá trình đấu giá, Bộ Công an đề xuất bước giá bằng 10% giá khởi điểm, đồng thời được thực hiện theo hình thức đấu giá trực tuyến.</p>
                <p>Khi một người trúng đấu giá, họ sẽ có các quyền: Được cấp quyết định xác nhận biển số xe trúng đấu giá sau khi nộp đủ số tiền trúng đấu giá; Được đăng ký biển số xe trúng đấu giá gắn với phương tiện thuộc sở hữu của mình tại cơ quan công an nơi quản lý biển số xe trúng đấu giá hoặc nơi cư trú của cá nhân, trụ sở của tổ chức trúng đấu giá; được chuyển nhượng, trao đổi, tặng cho, để thừa kế xe gắn với biển số xe trúng đấu giá.</p>
                <p>Bên cạnh đó, trong thời hạn 12 tháng kể từ ngày được cấp quyết định xác nhận biển số xe trúng đấu giá, nếu người trúng đấu giá chết nhưng chưa thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá thì người thừa kế theo quy định của pháp luật về thừa kế được nhận số tiền người trúng đấu giá đã nộp, sau khi trừ các khoản chi phí tổ chức đấu giá.</p>
                <p>Ngược lại, người trúng đấu giá có nghĩa vụ phải nộp đủ số tiền trúng đấu giá trong thời hạn 30 ngày kể từ ngày có thông báo kết quả trúng đấu giá; tiền trúng đấu giá không bao gồm lệ phí đăng ký, cấp biển số xe.</p>
                <p>Sau thời hạn quy định, người trúng đấu giá biển số xe không nộp hoặc nộp không đủ tiền trúng đấu giá thì biển số xe trúng đấu giá được đấu giá lại hoặc chuyển vào hệ thống đăng ký, quản lý xe và người trúng đấu giá không được hoàn trả số tiền đặt trước.</p>
                <p>Ngoài ra, người trúng đấu giá phải thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá trong thời hạn 12 tháng kể từ ngày được cấp quyết định xác nhận biển số xe trúng đấu giá. Trường hợp sự kiện bất khả kháng hoặc trở ngại khách quan thì thời hạn này được kéo dài thêm nhưng tối đa không quá 6 tháng.</p>
                <p>Sau thời hạn quy định, người trúng đấu giá biển số xe không thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá thì biển số xe trúng đấu giá được đấu giá lại và người trúng đấu giá không được hoàn trả số tiền trúng đấu giá đã nộp.</p>
                <p>Bộ Công an cũng đề xuất số tiền thu được từ đấu giá biển số xe sau khi trừ các khoản chi phí tổ chức đấu giá, chi phí quảng cáo, chi phí quản trị hệ thống đấu giá và chi phí khác được nộp vào ngân sách trung ương theo quy định của pháp luật về ngân sách nhà nước.</p>
            </>
        ),
    },
    {
        id: '2-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/8xiO4nUR3qG7okZE-UhVido3iTY=/zoom/504_336/2022/07/06/bien-so-dep-1650799528390-1657069465266.jpeg',
        description: '30 năm "đau đáu" ý tưởng đấu giá biển số xe',
        content: (
            <>
                <h3 className="singular-sapo">(Dân trí) - Từ năm 1993, Công an Hải Phòng được giao nghiên cứu, tổ chức thí điểm đăng ký, cấp biển số, thu lệ phí biển số xe tự chọn. 29 năm trước, việc đấu giá biển số xe đã được thực hiện trong 2 tháng...</h3>
                <p>Bộ Tư pháp đang tổ chức thẩm định đề nghị xây dựng Nghị quyết của Quốc hội về thí điểm cấp quyền lựa chọn <a contentEditable="false" href="https://dantri.com.vn/xa-hoi/tai-sao-khong-mo-rong-ap-dung-dau-gia-bien-so-mau-vang-cho-o-to-20220702105549384.htm">sử dụng biển số ô tô thông qua đấu giá.</a> Sau 30 năm, ý tưởng đấu giá biển số xe sắp thành hiện thực?</p>
                <p>Gian nan thí điểm đấu giá biển số đẹp</p>
                <p>Theo Bộ Công an, trong xã hội có rất nhiều người có nhu cầu sở hữu biển số xe theo sở thích, thường gọi là "biển số đẹp" tùy theo quan niệm của từng người.</p>
                <p>Xuất phát từ nhu cầu của người dân, Chính phủ đã hai lần cho phép Bộ Công an tổ chức đấu giá và thu lệ phí cấp biển số tự chọn (năm 1993 và năm 2008).</p>
                <p>Năm 1993, Bộ Công an đã chỉ đạo Công an TP Hải Phòng nghiên cứu và tổ chức thí điểm đăng ký, cấp biển số, thu lệ phí biển số xe tự chọn. Sau 2 tháng triển khai thực hiện đã có 94 trường hợp tự chọn biển số trên tổng số 198 xe đăng ký (đạt 47%).</p>
                <p>Bộ Công an đã tiến hành sơ kết, rút kinh nghiệm và có công văn báo cáo Thủ tướng Chính phủ. Sau khi được Thủ tướng đồng ý cho triển khai việc thu phí biển số xe tự chọn trên toàn quốc, Bộ Công an đã phối hợp với Bộ Tài chính ban hành Thông tư số 88-TT/LB ngày 29/10/1994 quy định chế độ thu, quản lý sử dụng lệ phí đăng ký biển số xe tự chọn.</p>
                <p>"Tuy nhiên, khi chuẩn bị triển khai thực hiện Thông tư số 88-TT/LB thì báo chí và dư luận xã hội còn nhiều ý kiến trái chiều nên Thủ tướng Chính phủ đã yêu cầu không thực hiện việc thu lệ phí cấp biển số xe tự chọn"- Bộ Công an cho hay.</p>
                <p>Đến năm 2008, Công an Bình Dương, Nghệ An, Khánh Hòa, Kiên Giang, Tiền Giang, Bắc Ninh, Sơn La và Hà Nội đã báo cáo Bộ Công an xin ý kiến về việc đấu giá biển số xe.</p>
                <p>Sau khi thống nhất với Bộ Tư pháp, Bộ Tài chính và Bộ Giao thông vận tải, Bộ Công an đã có công văn báo cáo và được Thủ tướng Chính phủ đồng ý cho phép đấu giá biển số xe. Các đơn vị chức năng đã dự thảo thông tư liên Bộ (Tài chính - Công an - Tư pháp) hướng dẫn việc đấu giá quyền sử dụng biển số xe, lấy ý kiến tham gia nhiều lần của các bộ, ngành, địa phương nhưng không được ban hành do vướng mắc về cơ sở pháp lý.</p>
                <p>Đến ngày 12/10/2010, Bộ Công an đã ban hành Thông tư số 36/2010 quy định về đăng ký xe, trong đó có quy định biển số xe 5 số thay thế loại biển 4 số và có dấu chấm (.) ở hàng số thứ 3 nên cũng đã làm thay đổi quan niệm về số đẹp, dãy số đẹp. Ngày 30/9/2011, Bộ Tài chính có công văn báo cáo và được Thủ tướng Chính phủ đồng ý cho tạm dừng việc đấu giá biển số.</p>
                <p>Thế nhưng tới năm 2017, Thủ tướng Chính phủ tiếp tục giao Bộ Công an chủ trì, phối hợp với Bộ Tài chính, Bộ Tư pháp xem xét xây dựng cơ chế đấu giá biển số xe.</p>
                <p>Đầu năm 2018, Bộ Công an có tờ trình báo cáo Thủ tướng Chính phủ về Đề án thí điểm cấp biển số thông qua đấu giá. Tháng 3/2019, Thường trực Chính phủ tổ chức cuộc họp với đại diện lãnh đạo, chuyên viên các Bộ (Công an, Giao thông vận tải, Tư pháp, Tài chính, Kế hoạch và Đầu tư), Văn phòng Chính phủ, UBND TP Hà Nội, TPHCM về đề án này.</p>
                <p>Tháng 4/2019, Văn phòng Chính phủ có văn bản thông báo ý kiến chỉ đạo của Thủ tướng "giao Bộ Công an đề xuất phương án tăng tính khả thi cho Đề án thí điểm cấp biển số thông qua đấu giá theo hướng cho phép người sở hữu biển số được bán, chuyển nhượng, thừa kế".</p>
                <p>Bộ Công an đã tổ chức cuộc họp với các bộ, ngành liên quan để lấy ý kiến về dự thảo đề án. Tuy nhiên, nếu đề án đi theo hướng cho phép người trúng đấu giá biển số được bán, chuyển nhượng, thừa kế thì sẽ phải sửa Luật Giao thông đường bộ, bỏ khoản 22 Điều 8 quy định về cấm mua bán biển số. Do đó, tháng 5/2020 Bộ Công an đã có công văn báo cáo Thủ tướng Chính phủ đề xuất giao Bộ Công an tiếp tục phối hợp các bộ ngành đưa nội dung cấp biển số thông qua đấu giá vào dự thảo Luật Bảo đảm trật tự an toàn giao thông đường bộ, trình Quốc hội để đảm bảo việc triển khai thực hiện đúng quy định pháp luật.</p>
            </>
        ),
    },
    {
        id: '3-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/ILePPzXR7rAVkDB53w2bBLOXPDI=/zoom/504_336/2023/01/11/dang-ky-website-dau-gia-truc-tuyen-2-600x338-crop-1673397022723.jpeg',
        description: 'Bộ Công an đề xuất đấu giá biển số xe trực tuyến',
        content: (
            <>
                <h3 className="singular-sapo">(Dân trí) - Bộ Công an đề xuất đấu giá trực tuyến biển số ô tô hoàn toàn trên mạng internet; đề nghị đưa vào dự thảo Nghị định quy định về tiêu chí lựa chọn tổ chức đấu giá để áp dụng cho đấu giá biển số xe.</h3>
                <p>Ngày 10/1, Bộ Công an đã họp công bố quyết định thành lập Ban soạn thảo và Tổ biên tập xây dựng Nghị định quy định chi tiết một số điều Nghị quyết số 73/2022/QH15 của Quốc hội về thí điểm đấu giá biển số ô tô. Thiếu tướng Nguyễn Văn Long, Thứ trưởng Bộ Công an chủ trì cuộc họp.</p>
                <p>Tham dự cuộc họp có đại diện lãnh đạo: Cục Cảnh sát giao thông (CSGT), Văn phòng Bộ Công an, một số đơn vị thuộc Bộ Tài Chính, Bộ Tư pháp…</p>
                <p>Tại cuộc họp, Thiếu tướng Lê Xuân Đức, Phó Cục trưởng Cục CSGT, Bộ Công an đã công bố quyết định của Bộ trưởng Bộ Công an về việc thành lập Ban soạn thảo và Tổ biên tập xây dựng Nghị định quy định chi tiết một số điều Nghị quyết số 73/2022/QH15 của Quốc hội về thí điểm đấu giá biển số xe ô tô.&nbsp;</p>
                <p>Theo Thiếu tướng Lê Xuân Đức: Ban soạn thảo xây dựng Nghị định gồm 13 thành viên do Thiếu tướng Nguyễn Văn Long, Thứ trưởng Bộ Công an làm Trưởng ban; Thiếu tướng Nguyễn Văn Trung, Cục trưởng Cục CSGT làm Phó Trưởng ban và 11 thành viên thuộc các đơn vị chức năng thuộc Bộ Công an, Văn phòng Chính phủ, Bộ Tư pháp, Bộ Tài chính.&nbsp;</p>
                <p>Tổ Biên tập gồm 19 thành viên do Thiếu tướng Nguyễn Văn Trung, Cục trưởng Cục CSGT làm Tổ trưởng, Thiếu tướng Lê Xuân Đức, Phó Cục trưởng Cục CSGT làm Tổ phó.</p>
                <p>Trong khuôn khổ cuộc họp, Thiếu tướng Lê Xuân&nbsp;Đức&nbsp;đã báo cáo một số nội dung chính của Nghị quyết số 73/2022/QH15; xin ý kiến các đại biểu một số nội dung về trình tự, thủ tục đấu giá; tiêu chí lựa chọn tổ chức đấu giá; quy định giao đơn vị&nbsp;mở tài khoản tạm thu tại tổ chức tín dụng để thu tiền đấu giá biển số xe ô tô…&nbsp;</p>
                <p>Theo đó, Bộ Công an đề xuất đấu giá trực tuyến biển số xe ô tô hoàn toàn trên môi trường Internet; đề nghị đưa vào dự thảo Nghị định quy định về tiêu chí lựa chọn tổ chức đấu giá để áp dụng cho đấu giá biển số xe ô tô.</p>
                <p>Tham gia ý kiến tại cuộc họp, đại diện Văn phòng Chính phủ, Bộ Tư pháp, một số đơn vị thuộc Bộ Tài chính đã nêu ý kiến về các nội dung như: Trình tự, thủ tục đấu giá; quản lý, sử dụng nguồn thu từ đấu giá; kế hoạch tổ chức đấu giá...</p>
                <p>Phát biểu kết luận cuộc họp, Thứ trưởng Nguyễn Văn Long yêu cầu Cục CSGT khẩn trương phối hợp với Bộ Tài chính, Bộ Tư pháp sớm hoàn thiện dự thảo Nghị định để lấy ý kiến người dân và các cơ quan chức năng trước khi trình Chính phủ ban hành.</p>
            </>
        ),
    },
    {
        id: '4-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/DsmBGE2B3ISBZJoo2d9ByLWhk0U=/zoom/504_336/2019/03/26/cuctruongcsgt-1553581899099.jpg',
        description: 'Sẽ trình Chính phủ ra Nghị quyết đấu giá biển số xe',
        content: (
            <>
                <h3 className="singular-sapo">(Dân trí) - Trung tướng Vũ Đỗ Anh Dũng, Cục trưởng Cục CSGT cho biết việc xây dựng đề án đấu giá biển số xe là vấn đề mới, thường trực Chính phủ đã họp và Thủ tướng đã kết luận sẽ trình Chính phủ và ra Nghị quyết.</h3>
                <p>Trả lời báo chí về Đề án đấu giá biển số xe hiện đang được dư luận quan tâm, Trung tướng Vũ Đỗ Anh Dũng, Cục trưởng CSGT Bộ Công an cho biết, vừa qua Thường trực Chính phủ đã họp và Thủ tướng đã kết luận sẽ trình Chính phủ xem xét và ra Nghị quyết.</p>
                <p>Theo Trung tướng Vũ Đỗ Anh Dũng, sau khi có Nghị quyết thì Thủ tướng xem xét phê duyệt đề án đấu giá biển số.</p>
                <p>Trung tướng Dũng mong báo chí và nhân dân sẽ tham gia góp ý về vấn đề này bởi đây là vấn đề rất mới.</p>
                <p>Trước đó, Chính phủ giao Bộ Công an chủ trì phối hợp với các bộ, ngành liên quan nghiên cứu Đề án đấu giá biển số xe, nguồn thu được sẽ nộp ngân sách Nhà nước.</p>
                <p>Liên quan đến vấn đề này, một trong những nội dung gây nhiều tranh cãi là theo quy định của Luật Đấu giá tài sản, để đưa biển số xe ra đấu giá, việc đầu tiên và bắt buộc phải xác định được biển số xe là tài sản.</p>
                <p>Tuy nhiên, quyền tài sản lại bao gồm cả quyền chiếm hữu, sử dụng và định đoạt. Khi đó, biển số sẽ thành tài sản cá nhân, không còn là giấy tờ, tài liệu của cơ quan Nhà nước nên chủ sở hữu có thể cho, tặng, bán biển xe đó cho người khác. Điều này sẽ làm thay đổi nguyên tắc quản lý phương tiện hiện hành.</p>
                <p className="smart-ptt1-p">Liên quan đến tình trạng tài xế sử dụng chất ma tuý trong thời gian vừa qua Cục trưởng CSGT thông tin, Cục CSGT có kế hoạch thực hiện tổng kiểm soát, trong đó tập trung kiểm tra việc lái xe sử dụng ma tuý và nồng độ cồn. Tuy nhiên, kiểm soát việc sử dụng ma túy rất khó khăn, việc tổng kiểm soát ảnh hưởng đến hoạt động bình thường nên CSGT rất hạn chế, chỉ khi nào rất cần thiết mới tiến hành kiểm soát.</p>
                <p>Ông Dũng cho biết, vừa qua, trong vòng 20 ngày chia làm 2 giai đoạn khác nhau, lực lượng CSGT đã phát hiện xử lý 182 trường hợp, qua đó rút ra kiến nghị với cơ quan quản lý Nhà nước và chủ DN quản lý lái xe.</p>
                <p>"Tới đây chúng tôi sẽ tiếp tục tiến hành thường xuyên và đột xuất theo từng đợt, từng chuyên đề. Qua công tác kiểm tra vừa rồi đã có hiệu ứng, tác động tốt khi nâng cao trách nhiệm của chủ doanh nghiệp trong quản lý lái xe", ông Dũng nói.</p>
            </>
        ),
    },
    {
        id: '5-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/X5CF0oUk7jCcSe_Q9I0La1qYZEo=/zoom/504_336/2022/10/31/dau-gia-bien-so-xe-mui-ten-trung-hai-dich-1-crop-1667218041032.jpeg',
        description: 'Đấu giá biển số xe: Vì sao không nên khởi điểm 100 triệu đồng?',
        content: (
            <>
                <p>Việt Nam đã qua hai lần khởi xướng việc đấu giá biển số xe nhưng không thành. Đây là lần thứ ba và hy vọng&nbsp;sẽ thành công, vì nó làm cho các bên đều có lợi ích tăng thêm</p><p>Từ năm 1993, ý tưởng về việc thu phí biển số xe tự chọn đã thành hình. Khi đó, Bộ Công an đã cho phép CATP Hải Phòng thực hiện thí điểm đăng ký, cấp biển số, thu lệ phí biển số tự chọn. Bước đầu việc thí điểm có kết quả tích cực, tuy nhiên do báo chí và dư luận xã hội phản ứng nên kế hoạch triển khai rộng trên toàn quốc bị dừng lại.</p><p>Năm 2008, Bộ Công an tiếp tục trình lên Thủ tướng đề xuất đấu giá biển số xe. Dự thảo thông tư liên bộ hướng dẫn đấu giá biển số cũng đã được Bộ Tài chính soạn thảo nhưng một lần nữa bị dừng lại vì gặp vướng mắc về mặt pháp lý. Theo quy định thì "kho số viễn thông và kho số khác phục vụ quản lý nhà nước" là tài sản công; "kho số quản lý phương tiện giao thông" là kho số phục vụ quản lý nhà nước, nên không được đưa ra đấu giá.</p><p>Khác với Việt Nam, việc đấu giá đã diễn ra phổ biến ở nhiều nơi trên thế giới từ rất lâu. Nguyên tắc đấu giá là để thu được tối đa giá bán diễn ra ở nhiều loại hàng hóa, dịch vụ công khác nhau. Nó giúp người bán khai thác được giá tối đa mà người mua sẵn sàng chi trả. Nếu không đấu giá thì chỉ có mức giá cân bằng, trong khi có người sẵn sàng trả nhiều hơn. Như vậy nghĩa là Nhà nước sẽ thất thoát một khoản.</p><p>Lần này vấn đề đấu giá biển số xe tiếp tục được đưa ra và đã được trình lên Quốc hội. Như đã nêu ở trên, nếu thành công nó sẽ giúp cho các bên đều có lợi ích tăng thêm: Nhà nước thì sẽ không thất thu khoản đáng ra mình có thể thu được&nbsp; trong việc bán biển số xe; người dân thì có cơ hội tiếp cận với biển số xe mà mình mong muốn; nó cũng giúp giảm đi những hiện tượng tiêu cực từ trước đến nay hay bàn tới, ví dụ như vì sao xe sang thường gắn biển số đẹp.</p><p>Nhưng việc tổ chức đấu giá biển số xe như thế nào thì cần phải bàn để đạt được hiệu quả tối ưu nhất và hạn chế tiêu cực ở mức thấp nhất.</p><p>Mấy ngày nay, Quốc hội đã dành thời gian bàn về dự thảo Nghị quyết thí điểm cấp quyền lựa chọn biển số ô tô thông qua đấu giá, với nhiều ý kiến tranh luận khác nhau. Điều khiến các đại biểu Quốc hội lo ngại nhất chính là vấn đề tiêu cực trong đấu giá, nhưng tôi cho rằng, việc hóa giải những tiêu cực này rất đơn giản.</p><p>Tôi nói ví dụ, đại biểu Quốc hội Trần Sỹ Thanh - Chủ tịch TP Hà Nội, đề xuất mức giá khởi điểm áp dụng cho TP Hà Nội là 100 triệu đồng (thay vì 20 triệu đồng hoặc 40 triệu đồng như dự thảo Nghị quyết), với bước giá từ 20 đến 50 triệu.</p><p>Có lẽ Chủ tịch TP Hà Nội muốn đề xuất mức giá khởi điểm cùng với bước giá cao để hạn chế các bên thông đồng với nhau để bán biển số với giá quá thấp, trong khi giá thực tế có thể cao hơn nhiều. Nhưng theo tôi đề xuất này vừa không cần thiết, vừa có rất nhiều hạn chế.</p><p>Mức giá khởi điểm 100 triệu đồng sẽ chỉ phù hợp với các biển số có giá thị trường 1-2 tỷ đồng, nhưng lại ngăn cản cơ hội được tiếp cận của người mua với các biển số mà họ chỉ sẵn sàng trả từ 5 đến 99 triệu đồng. Nên đặt mức giá khởi điểm và bước giá quá cao sẽ làm thất thu ngân sách nhà nước với những biển số có giá trị thấp hơn mức giá đó.</p><p>Thật ra, dựa trên nguyên tắc một cuộc đấu giá công khai, minh bạch thì giá khởi điểm bao nhiêu không quan trọng vì người mua sẽ đấu giá lên cao dần, cho đến mức có người sẵn sàng chi trả cao nhất.</p><p>Bước giá cũng không cần quá cao, hoặc chỉ nên đặt bước giá cao với những tài sản giá trị cao. Vấn đề duy nhất phải làm chính là vấn đề quản trị, quản lý việc đấu giá như thế nào để đảm bảo tính minh bạch trong các cuộc đấu giá công khai. Việc này các nước phương Tây làm rất tốt.</p><p>Nếu ai quan tâm đến lĩnh vực đấu giá thì sẽ biết, từ mấy chục năm trước, khi internet mới xuất hiện, các nền tảng đấu giá trực tuyến đã ra đời, mà Ebay là một ví dụ. Có rất nhiều thứ được đấu giá trên Ebay, từ món đồ vài chục USD đến những tài sản có giá trị lớn vài chục triệu USD. Các tổ chức chuyên đấu giá đồ có giá trị cao trên Ebay không bao giờ lo lắng khi đấu giá món đồ có giá trị hàng triệu USD của mình, bởi vì họ biết rằng, quy trình đấu giá trên Ebay rất chặt chẽ và minh bạch.</p><p>Cho nên thay vì tổ chức các điểm đấu giá mà người mua phải đến tham dự trực tiếp, việc xây dựng một sàn đấu giá online sẽ là lời giải cho những lo ngại về sự minh bạch trong đấu giá biển số xe. Nó cũng phù hợp với mô hình Chính phủ số mà Việt Nam đang theo đuổi.</p><p>Để đảm bảo sự minh bạch, công khai, thì ngoài việc bắt buộc người tham gia đấu giá đặt cọc, đơn vị tổ chức đấu giá biển số xe (Bộ Công an) có thể xây dựng các mã số định danh để cấp cho người tham gia, đảm bảo các bên tham gia không biết nhau, cũng không thể liên lạc, móc nối với nhau, nên dĩ nhiên cũng không có cách nào thông đồng để dìm giá trị biển số xe được đấu.</p><p>Việc xây dựng các web đấu giá công khai sẽ giúp Nhà nước vừa tiết kiệm được chi phí về địa điểm và nhân lực tham gia tổ chức, lại vừa giúp các biển số đẹp tiếp cận được số người có nhu cầu nhiều nhất có thể, trong thời gian ngắn nhất có thể. Nó cũng giúp những người mua có thể dễ dàng tham gia đấu giá dù họ ở bất cứ đâu, đang làm gì.</p><p>Thay vì tổ chức các điểm đấu giá mà người mua phải đến tham dự trực tiếp, việc xây dựng một sàn đấu giá online sẽ là lời giải cho những lo ngại về sự minh bạch trong đấu giá biển số xe, cũng phù hợp với mô hình Chính phủ số mà Việt Nam đang theo đuổi.</p><p>Với năng lực công nghệ thông tin của Việt Nam hiện tại, tôi cho đây là một bài toán không hề khó giải.</p><p><em>Chuyên mục TÂM ĐIỂM mong nhận được ý kiến của bạn đọc về nội dung bài viết. Hãy vào phần Bình luận và chia sẻ suy nghĩ của mình. Xin cảm ơn!</em></p>
            </>
        ),
    },
    {
        id: '6-article',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/tzs6XVe2yhtQqkCNBEsg_vnwR2M=/zoom/504_336/2025/03/06/dau-gia-bien-so-xe-may1-crop-1741237807782.jpeg',
        description: 'Hơn 1,55 triệu biển số xe máy sắp được đưa ra đấu giá',
        content: (
            <>
                <h3 className="singular-sapo">(Dân trí) - Trong phiên đấu giá biển số tới đây, đơn vị tổ chức đấu giá biển số xe sẽ đưa ra hơn 1,55 triệu biển số mô tô, xe gắn máy lên sàn. Gần 625.000 biển số còn lại là biển số ô tô.</h3>
                <p>Ngày 6/3, đơn vị tổ chức đấu giá biển số xe công bố danh sách hơn 2,1 triệu biển số được niêm yết sắp đưa ra đấu giá tại phiên đấu giá thứ 6. Đặc biệt, trong phiên đấu giá thứ 6 này, sẽ có hơn 1,55 triệu biển số mô tô, xe gắn máy được đưa ra đấu giá. Gần 625.000 biển số còn lại là biển số ô tô.</p><p>Hai địa phương có số lượng biển số đưa ra đấu giá nhiều nhất là TP Hà Nội (hơn 217.000 biển số) và TPHCM (hơn 212.000 biển số). Thời gian đấu giá chưa được công bố.</p><p>Theo đơn vị tổ chức đấu giá biển số xe, <strong>giá khởi điểm</strong> của một biển số ô tô là 40 triệu đồng; giá khởi điểm của một biển số xe mô tô, xe gắn máy là 5 triệu đồng.</p><p>Giá khởi điểm của biển số xe có định dạng AAAAA (A&gt;4), ABCDE (A&lt;B&lt;C&lt;D&lt;E, A&gt;4) đưa ra đấu giá lại sau lần thứ hai là 500 triệu đồng đối với biển số ô tô và 50 triệu đồng đối với biển số xe mô tô, xe gắn máy.</p><p><strong>Tiền đặt trước</strong> của một biển số ô tô đưa ra đấu giá là 40 triệu đồng; tiền đặt trước của một biển số xe mô tô, xe gắn máy đưa ra đấu giá là 5 triệu đồng; tiền đặt trước của biển số xe có định dạng AAAAA (A&gt;4), ABCDE (A&lt;B&lt;C&lt;D&lt;E,A&gt;4) đưa ra đấu giá lại sau lần thứ hai là 500 triệu đồng đối với biển số&nbsp; ô tô và 50 triệu đồng đối với biển số xe mô tô, xe gắn máy.</p><p><strong>Bước giá </strong>đối với đấu giá biển số ô tô là 5 triệu đồng; bước giá đối với đấu giá biển số xe mô tô, xe gắn máy là 500.000 đồng.</p><p><strong>Tiền bán hồ sơ tham gia đấu giá </strong>là 100.000 đồng&nbsp;một biển số ô tô; tiền bán hồ sơ tham gia đấu giá một biển số xe mô tô, xe gắn máy là 50.000 đồng.</p><p><strong>Thời gian đấu giá của một biển số xe chi tiết như sau</strong>: thời gian bắt đầu của cuộc đấu giá được quy định chi tiết trong thông báo đấu giá; thời lượng đấu giá của một biển số xe tối thiểu là 25 phút.</p>
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
