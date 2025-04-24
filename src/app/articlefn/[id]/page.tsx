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
        id: '1-articlefn',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/X5CF0oUk7jCcSe_Q9I0La1qYZEo=/zoom/504_336/2022/10/31/dau-gia-bien-so-xe-mui-ten-trung-hai-dich-1-crop-1667218041032.jpeg',
        description: 'Dấu ấn một năm thí điểm đấu giá biển số trực tuyến',
        content: (
            <>
                <h3 className="singular-sapo">(Dân trí) - Với hơn 2 triệu biển số đưa ra đấu giá, trên 50.000 biển đấu giá thành công, cùng công nghệ hiện đại, quy trình tinh gọn, Công ty đấu giá hợp danh Việt Nam ghi dấu ấn sau một năm vận hành thí điểm hoạt động này, thu về ngân sách hàng nghìn tỷ đồng.</h3>
                <p>Tháng 9/2023, phiên đấu giá biển số xe trực tuyến đầu tiên được Công ty đấu giá hợp danh Việt Nam (VPA) tổ chức thành công với vai trò là đơn vị duy nhất được Bộ Công an lựa chọn thực hiện đấu giá biển số xe ô tô. Đến nay, sau hơn 1 năm, việc đấu giá biển số ô tô trực tuyến đã mang tới những kết quả ấn tượng, tạo nên cuộc cách mạng trong ngành đấu giá và đóng góp tích cực vào kinh tế - xã hội Việt Nam.</p><p><strong>Đột phá công nghệ, hiệu quả kinh tế</strong></p><p>Đấu giá biển số xe ô tô được đưa ra nhằm đáp ứng nhu cầu, nguyện vọng của người dân đăng ký biển số theo sở thích. Với một thị trường ô tô đang phát triển mạnh như Việt Nam, nhu cầu biển số đẹp của người dân mỗi năm rất lớn. Do đó, áp lực lên đơn vị đấu giá cũng không nhỏ, khi mỗi phiên đấu giá có hàng chục nghìn biển số được đưa lên hệ thống để người dân lựa chọn.</p><p>Để thực hiện hiệu quả hoạt động này, VPA áp dụng nhiều công nghệ hiện đại và liên tục cải tiến quy trình nhằm hỗ trợ người dân thuận lợi khi tham gia đấu giá. Không cần đến trực tiếp, khách hàng từ mọi miền đất nước có thể tham gia chỉ với vài thao tác đơn giản và dễ tiếp cận, xóa bỏ nhiều rào cản từng khiến người dân khó tiếp cận với hoạt động đấu giá chuyên nghiệp. Chính nhờ những công nghệ hiện đại và quy trình chặt chẽ, VPA giúp đưa lĩnh vực đấu giá của Việt Nam có bước tiến vượt bậc, đáp ứng kỳ vọng hiện đại hóa và chuyển đổi số của quốc gia.</p><p>Với bộ máy tinh gọn và thực hiện hoàn toàn online, chi phí cho mỗi phiên đấu giá được tối ưu, mang lại hiệu quả kinh tế cao.</p><p>Theo đại diện VPA, chỉ trong hơn một năm thí điểm, hơn 2 triệu biển số được đấu giá với hơn 50.000 biển số xe được đấu giá thành công, thu về cho ngân sách nhà nước gần 4.500 tỷ đồng. Đây là thành tích ấn tượng với hoạt động chỉ mới thực hiện thí điểm trong vòng hơn 1 năm, tạo ra nguồn thu mới ổn định cho ngân sách, giảm bớt gánh nặng từ các nguồn thu truyền thống, tăng dư địa cho chính sách tài khóa của chính phủ.</p><p><strong>Minh bạch và công khai, bước đệm cho phát triển bền vững</strong></p><p>Ngoài đáp ứng nhu cầu, nguyện vọng của người dân, đấu giá biển số xe còn giúp khai thác có hiệu quả tài sản công là kho biển số nhằm tạo nguồn thu cho ngân sách Nhà nước và công khai, minh bạch trong công tác đăng ký, quản lý xe với tiêu chí cải cách thủ tục hành chính, đo lường sự hài lòng của người dân.</p><p>Trước khi VPA thực hiện phiên đấu giá biển số xe đầu tiên thành công vào ngày 15/9, thị trường biển số xe đẹp tại Việt Nam thường đứng trước câu hỏi về tính minh bạch, công bằng trong cấp, sử dụng và sang tên biển số xe.</p><p>Do đó, việc VPA điều hành thành công hàng chục phiên đấu giá biển số xe không chỉ mang tới ý nghĩa về mặt kinh tế mà còn tạo ra tác động mạnh mẽ về xã hội. Từ đây, người dân vừa được nâng cao nhận thức về tầm quan trọng của việc sở hữu tài sản hợp pháp, vừa xây dựng ý thức tham gia các hoạt động kinh tế minh bạch.</p><p>Ngoài ra, để đảm bảo đúng với luật đấu giá tài sản, VPA đã trang bị công nghệ có tiêu chuẩn cao về bảo mật và minh bạch, không chỉ mang tới những phiên đấu giá công bằng mà còn đảm bảo không xảy ra tranh chấp hay tiêu cực. Quy trình này cho phép cơ quan quản lý có thể áp dụng các biện pháp ngăn chặn tình trạng bỏ cọc, không nộp hoặc nộp không đủ tiền trúng đấu giá, nhằm giúp người dân có nhu cầu thực có thể tiếp cận được biển số yêu thích với mức giá hợp lý, không bị thổi giá.</p><p>Những thành tựu đạt được của VPA sau hơn một năm điều hành hoạt động đấu giá biển số ô tô là kết quả của tầm nhìn chiến lược, sự đầu tư bài bản về cả công nghệ, con người, truyền thông, đặt nền móng cho việc triển khai các quy định mới của Luật Trật tự, An toàn giao thông đường bộ và Nghị định của Chính phủ. Mới đây Bộ Công an ban hành Thông tư số 79 quy định biển số xe trúng đấu giá sẽ được gắn tem nhận diện nền màu đỏ và màu vàng, chữ màu xanh; nhằm phân biệt với biển số thường hoặc biển số xe sử dụng năng lượng sạch.</p><p>Từ thành công của hoạt động đấu giá biển số xe ô tô, biển số xe máy cũng sẽ được đưa vào đấu giá công khai theo thông tin được nêu tại Nghị định 156/2024 quy định về đấu giá biển số xe có hiệu lực từ 1/1/2025. Đây là nghị định quy định chi tiết điều 37 và 38 Luật Trật tự, an toàn giao thông đường bộ 2024 về đấu giá biển số xe.</p><p>Những bước đi tiên phong của VPA đóng góp rất lớn cho mục tiêu phát triển bền vững của lĩnh vực đấu giá biển số nói riêng và ngành đấu giá Việt Nam nói chung, chứng minh năng lực của Việt Nam trong dòng chảy của xu thế quốc tế.</p>
            </>
        ),
    },
    {
        id: '2-articlefn',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/ILePPzXR7rAVkDB53w2bBLOXPDI=/zoom/504_336/2023/01/11/dang-ky-website-dau-gia-truc-tuyen-2-600x338-crop-1673397022723.jpeg',
        description: 'Đấu giá biển số đẹp',
        content: (
            <>
                <p>Một người đàn ông ở Nghệ An vừa bấm trúng biển kiểm soát 999.99 cho chiếc xe Kia Sonet trị giá 700 triệu đồng của mình. Chỉ một ngày sau, chiếc xe gắn biển ngũ quý 9 này được bán lại với giá 1,6 tỷ đồng. Tức là dãy số trên đã khiến giá trị phương tiện tăng thêm 900 triệu đồng so với giá thực tế. Tương tự, chiếc xe vừa được gắn biển 444.44 của một người ở Hà Tĩnh cũng được trả giá cao hơn gấp đôi.</p><p>Những thông tin trên, một lần nữa cho thấy sự quan tâm và nhu cầu thật trong xã hội về vấn đề biển số đẹp.</p><p>Có cầu ắt có cung, và nếu không được quản lý tốt sẽ nảy sinh tiêu cực trước nhu cầu thị trường. Một ví dụ, vừa qua cơ quan chức năng đã khởi tố vụ án "Lợi dụng chức vụ, quyền hạn trong thi hành công vụ" xảy ra tại Phòng Cảnh sát giao thông (Công an tỉnh An Giang), 3 cán bộ bị đình chỉ công tác và nguyên Trưởng phòng CSGT bị khởi tố, bắt giam. Theo thông tin ban đầu, từ năm 2012 đến năm 2021, Phòng CSGT Đường bộ tỉnh An Giang được cài đặt và hướng dẫn sử dụng hệ thống đăng ký, quản lý, cấp biển số bằng hình thức bấm, nhận biển số ngẫu nhiên. Tuy nhiên trong quá trình thực hiện nhiệm vụ, một số cán bộ có dấu hiệu cố tình can thiệp vào phần mềm hệ thống đăng ký, quản lý, cấp biển số phương tiện giao thông sai quy định…</p><p>Theo quan niệm chung, biển số đẹp là biển có các số tuân thủ nguyên tắc trùng lặp, tăng đều, tạo thành cặp, dễ nhớ và những biển số đẹp theo sở thích cá nhân, trùng những ngày đặc biệt liên quan đến bản thân một người nào đó và người thân. Như vậy, biển số đẹp với cá nhân chỉ là sở thích, nhưng nhìn từ góc độ quản lý thì có thể thiết kế chính sách để vừa đáp ứng nhu cầu người dân, vừa tạo sự minh bạch, phòng chống tiêu cực và thêm nguồn lực đóng góp vào ngân sách.</p><p>Từ những năm 2016-2017, trên diễn đàn Quốc hội, đại biểu Nguyễn Văn Cảnh (đoàn Bình Định) đã nêu kiến nghị về việc đấu giá biển số đẹp ô tô. Theo đó, từng nhóm số đẹp sẽ được phân ra để đấu giá và định giá, còn với những số bấm ngẫu nhiên như hiện nay sẽ giữ quy định không thu tiền. Ông Cảnh phân tích, trong mỗi series số, ví dụ từ 30A 000.01 đến 30A 999.99 với 99.999 số sẽ có 12.186 số đẹp, dự đoán khoảng 61.500 chủ phương tiện yêu cầu số theo ngày sinh, ngày cưới, số đặc biệt đối với cá nhân họ. Nếu đấu giá, tổng số tiền thu được cho mỗi series 99.999 số sẽ vào khoảng 1.639 tỷ đồng. Vị đại biểu tính toán rằng, với số lượng xe ô tô bán ra năm 2016 là hơn 300.000, trừ đi số lượng xe công, khi thực hiện đấu giá, định giá thì ngân sách dự kiến thu gần 5.000 tỷ đồng.</p><p>Được biết hiện nay Cục Cảnh sát giao thông đã dự thảo "Đề án thí điểm cấp quyền lựa chọn sử dụng biển số thông qua đấu giá". Theo đó, tất cả biển số xe ô tô nền màu trắng, chữ và số màu đen (biển xe cá nhân) trong kho biển số xe chưa được đăng ký đều có thể đưa ra đấu giá. Tổ chức, cá nhân chỉ được tham gia đấu giá biển số của địa phương nơi đóng trụ sở, nơi đăng ký thường trú và phải tuân thủ các quy định về đấu giá tài sản.</p><p>Đề án đưa ra hai phương án. Phương án một là người trúng đấu giá biển số xe sẽ được sử dụng nhưng cấm mua bán, trao đổi. Phương án này tương tự với cách quản lý hiện nay. Phương án hai, người trúng đấu giá sẽ được sử dụng, chuyển nhượng, thừa kế, cho tặng, thế chấp biển số trúng đấu giá; người sở hữu biển số khi bán phương tiện vẫn có thể giữ lại để đăng ký cho phương tiện khác của mình. Việc quản lý biển số khi đó sẽ khác với hiện nay.</p><p>Trả lời Dân trí, đại biểu Nguyễn Văn Cảnh cho rằng đấu giá biển số trước hết là thỏa mãn nhu cầu có thật của người dân, bên cạnh đó nhà nước thu được thêm ngân sách chứ không phải chuyển chiếc biển số theo hướng hàng hóa. Vì vậy, ông đề xuất cho đấu giá biển số, người trúng có quyền được giữ lại dùng cho xe tiếp theo của mình, song không được bán, cho, tặng...</p><p>Theo ông Cảnh, Luật quản lý tài sản công đã đưa biển số xe vào danh sách các loại tài sản công. Để việc đấu giá được triển khai thì Quốc hội có thể ra Nghị quyết hoặc Luật Giao thông đường bộ (sửa đổi) có điều khoản cho phép đấu giá biển số, tạo căn cứ pháp lý để triển khai.</p><p>Rõ ràng, đấu giá biển số đẹp là chủ trương đúng, cần sớm đưa vào áp dụng trong cuộc sống, phương án được lựa chọn có thể chưa tối ưu thì sẽ điều chỉnh sau khi đánh giá, tổng kết. Không nên để một bản đề án cần thiết nằm lâu trên giấy.</p>
            </>
        ),
    },
    {
        id: '3-articlefn',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/DsmBGE2B3ISBZJoo2d9ByLWhk0U=/zoom/504_336/2019/03/26/cuctruongcsgt-1553581899099.jpg',
        description: 'Nộp ngân sách hơn 2,7 nghìn tỷ đồng tiền đấu giá biển số ô tô',
        content: (
            <>
                <h2 className="singular-sapo">(Dân trí) - Theo Cục CSGT, trải qua 188 ngày đấu giá biển số ô tô, đã có hơn 32.000 biển số được đấu giá thành công, với tổng số tiền nộp ngân sách nhà nước là hơn 2,7 nghìn tỷ đồng.</h2>
                <p>Chiều 2/8, trao đổi với phóng viên <em>Dân trí</em>, đại diện Cục CSGT (Bộ Công an) cho biết, tính đến hết ngày 2/8, việc đấu giá biển số ô tô đã trải qua 188 ngày, đã có hơn 1,1 triệu biển số được đưa ra đấu giá và số biển đấu giá thành công là hơn 32.000 biển số, tổng giá trị tài sản đấu giá thành công là hơn 2,8 nghìn tỷ đồng.</p><p>Theo Cục CSGT, tổng số tiền người trúng đấu giá đã nộp vào tài khoản chuyên thu của Cục CSGT, để nộp ngân sách nhà nước là hơn 2,7 nghìn tỷ đồng.</p><p>Trong đó, một số biển ô tô có số tiền trúng đấu giá cao như: biển số 51K-888.88 hơn 15,2 tỷ đồng, 30K-555.55 gần 14,5 tỷ đồng, 11A-111.11 hơn 8,7 tỷ đồng, 72A-777.77 hơn 6,8 tỷ đồng, 88A-666.66 hơn 6,7 tỷ đồng...</p><p>Cũng theo Cục CSGT, ngày 27/6, Quốc hội thông qua Luật Trật tự an toàn giao thông đường bộ, có hiệu lực từ ngày 1/1/2025, trong đó có nội dung quy định về đấu giá biển số xe. Quy định này sẽ góp phần khai thác có hiệu quả tài sản công là biển số xe, tạo nguồn thu cho ngân sách Nhà nước.</p><p>Luật Trật tự an toàn giao thông đường bộ nêu rõ giao Chính phủ quy định chi tiết một số nội dung về đấu giá biển số xe, trong đó đã bổ sung quy định đấu giá biển số ô tô hoạt động kinh doanh vận tải (nền màu vàng, chữ và số màu trắng) và xe mô tô, xe gắn máy.</p><p>"Bộ Công an đang phối hợp Bộ Tư pháp, Bộ Tài chính để tập trung xây dựng Nghị định trình Chính phủ về đấu giá biển số xe, sau khi Thủ tướng Chính phủ ký ban hành, Bộ Công an sẽ triển khai đấu giá biển số ô tô hoạt động kinh doanh vận tải", đại diện Cục CSGT nói thêm.</p>
            </>
        ),
    },
    {
        id: '4-articlefn',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/X5CF0oUk7jCcSe_Q9I0La1qYZEo=/zoom/504_336/2022/10/31/dau-gia-bien-so-xe-mui-ten-trung-hai-dich-1-crop-1667218041032.jpeg',
        description: 'Bộ Công an đề xuất người bỏ cọc sẽ không được đấu giá biển số 1 năm',
        content: (
            <>
                <h2 className="singular-sapo">(Dân trí) - Bộ Công an đề xuất người trúng đấu giá biển số xe không nộp đủ tiền hoặc không nộp tiền trúng đấu giá theo thời hạn quy định, sẽ không được đăng ký tham gia đấu giá trong thời hạn 12 tháng.</h2>
                <p>Bộ Công an đang lấy ý kiến Dự thảo Nghị định quy định về đấu giá biển số xe.&nbsp;</p><p>Theo Bộ Công an, ngày 27/6, Quốc hội thông qua Luật Trật tự an toàn giao thông đường bộ, có hiệu lực từ ngày 1/1/2025.</p><p>"Việc xây dựng và ban hành Luật Trật tự an toàn giao thông đường bộ, trong đó có nội dung quy định về đấu giá biển số xe góp phần khai thác có hiệu quả tài sản công là biển số xe, tạo nguồn thu cho ngân sách Nhà nước; đầu tư hệ thống cơ sở vật chất cho công tác đăng ký, cấp biển số; cải cách thủ tục hành chính, tạo điều kiện thuận lợi cho nhân dân; đảm bảo việc cấp biển số xe công khai, minh bạch, đúng quy định của pháp luật; mọi người dân đều có quyền bình đẳng trong việc lựa chọn biển số xe ô tô để tham gia đấu giá", Bộ Công an cho biết.</p><p>Từ các cơ sở pháp lý nêu trên, Bộ Công an cho rằng việc xây dựng Nghị định quy định về đấu giá biển số xe là cần thiết và đảm bảo cơ sở pháp lý.</p><p>Theo đó, dự thảo Nghị định quy định về đấu giá biển số xe gồm 4 chương, 30 điều.</p><p>Tại Chương II, Bộ Công an đề xuất mức thù lao dịch vụ đấu giá, chi phí đấu giá là 8% giá khởi điểm cho tổ chức đấu giá tài sản.</p><p>Ngoài mức thù lao, để đảm bảo tổ chức đấu giá tài sản thực hiện các trình tự thủ tục đấu giá, dự thảo Nghị định còn quy định tổ chức đấu giá được thanh toán chi phí thực tế, hợp lý với mức 10.000 đồng/1 biển số xe ô tô, 2.000 đồng/1 biển số xe mô tô, xe máy.</p><p>Về quy định người trúng đấu giá biển số xe không nộp đủ tiền hoặc không nộp tiền trúng đấu giá theo thời hạn quy định, Bộ Công an đề xuất không được đăng ký tham gia đấu giá trong thời hạn 12 tháng.</p><p>Điều này, theo Bộ Công an, nhằm hạn chế tình trạng gây nhiễu loạn, phức tạp cho hoạt động đấu giá trực tuyến và ảnh hưởng không tốt đến hiệu quả của hoạt động thí điểm.</p>
            </>
        ),
    },
    {
        id: '5-articlefn',
        date: '19/06/2023',
        image: 'https://cdnphoto.dantri.com.vn/tzs6XVe2yhtQqkCNBEsg_vnwR2M=/zoom/504_336/2025/03/06/dau-gia-bien-so-xe-may1-crop-1741237807782.jpeg',
        description: 'Người trúng đấu giá biển số 51K-888.88 đã nộp tiền',
        content: (
            <>
                <h2 className="singular-sapo">(Dân trí) - Chủ nhân trúng đấu giá biển số ô tô 51K-888.88 đã nộp tiền, sau khi người này trúng đấu giá biển số trên hôm 21/10, với số tiền hơn 15,2 tỷ đồng.</h2>
                <p>Sáng 3/11, trao đổi với phóng viên <em>Dân trí,</em> đại diện Cục CSGT (Bộ Công an) cho biết, vào chiều hôm qua (2/11), chủ nhân trúng đấu giá biển số ô tô "siêu Vip" 51K-888.88 đã nộp tiền.</p><p>Tại phiên đấu giá hôm 21/10, biển số 51K-888.88 đã được "chốt" với số tiền hơn 15,2 tỷ đồng.</p><p>Trước đó, ngày 21/10, Công ty Đấu giá hợp danh Việt Nam đưa ra đấu giá 409 biển số ô tô, trong số này có biển 51K-888.88, từng bị bỏ cọc trong phiên đấu giá hôm 15/9 với mức trúng kỷ lục hơn 32 tỷ đồng.</p><p>Ngoài trường hợp trên, sáng 29/9, tại trụ sở Cục CSGT (Bộ Công an), anh Nguyễn Thạc Đức (46 tuổi, trú tại huyện Gia Lâm, TP Hà Nội) đã tới nhận biển số ô tô trúng đấu giá "siêu đẹp" 99A-666.66.</p><p>Anh Đức là người trúng đấu giá biển số ô tô kể trên, trong phiên đấu giá hôm 15/9 vừa qua với số tiền trúng đấu giá là 4,27 tỷ đồng.</p>
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
