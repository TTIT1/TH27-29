const questions = [
    {
        question: "Tiến trình ra quyết định bao gồm mấy phần?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2
    },
    {
        question: "Tiến trình ra quyết định bao gồm ?",
        options: [
            "Phân tích, thiết kế, lựa chọn",
            "Phân tích, thiết kế, lựa chọn, thực thi lựa chọn",
            "Phân tích, thiết kế, hành động",
            "Phân tích, thiết kế"
        ],
        correctAnswer: 0
    },
    {
        question: "Quyết định được xác định theo một trình tự thủ tục xác định được gọi là quyết định .....?",
        options: [
            "Có cấu trúc",
            "Không cấu trúc",
            "Bán cấu trúc",
            "Không tài liệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Tính lương cho công nhân được xếp vào phạm trù ra quyết định .....?",
        options: [
            "Có cấu trúc",
            "Không cấu trúc",
            "Bán cấu trúc",
            "Không tài liệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Ra quyết định là gì?",
        options: [
            "Công việc của các nhà quản trị cấp cao",
            "Lựa chọn 1 giải pháp cho vấn đề đã xác định",
            "Một công việc mang tính nghệ thuật",
            "Tất cả đều sai"
        ],
        correctAnswer: 1
    },
    {
        question: "Ra quyết định là 1 hoạt động?",
        options: [
            "Nhờ vào trực giác",
            "Mang tính khoa học và nghệ thuật",
            "Nhờ vào kinh nghiệm",
            "Tất cả đều chưa chính xác"
        ],
        correctAnswer: 1
    },
    {
        question: "Câu nào là cấu có phát biểu sai trong các câu sau ?",
        options: [
            "Ra quyết định phụ thuộc hoàn toàn vào ý muốn chủ quan của nhà quản trị",
            "Ra quyết định mang tính khoa học và nghệ thuật",
            "Việc ra quyết định rất cần dựa vào kinh nghiệm",
            "Cần nắm vững lí thuyết ra quyết định"
        ],
        correctAnswer: 0
    },
    {
        question: "Ra quyết định quản trị nhằm ?",
        options: [
            "Chọn phương án tốt nhất và ra quyết định",
            "Thảo luận với những người khác và ra quyết định",
            "Giải quyết 1 vấn đề",
            "Tìm phương án để giải quyết vấn đề"
        ],
        correctAnswer: 0
    },
    {
        question: "Quy định ra quyết định gồm ?",
        options: [
            "Xác định vấn đề và ra quyết định",
            "Chọn phương án tốt nhất và ra quyết định",
            "Thảo luận với những người khác và ra quyết định",
            "Nhiều bước khác nhau"
        ],
        correctAnswer: 3
    },
    {
        question: "DDS là viết tắt của hệ thống nào ?",
        options: [
            "Hệ hỗ trợ điều hành",
            "Hệ chuyên gia",
            "Hệ tri thức",
            "Hệ trợ giúp ra quyết định"
        ],
        correctAnswer: 3
    },
    {
        question: "Bước thứ nhất trong tiến trình ra quyết định là ?",
        options: [
            "Chọn phương án tốt nhất và ra quyết định",
            "Xác định mục tiêu",
            "Phân tích, nhận diện vấn đề cần giải quyết",
            "Tìm kiếm các phương án"
        ],
        correctAnswer: 2
    },
    {
        question: "Bước khó nhất của tiến trình ra quyết định là ?",
        options: [
            "Chọn phương án tốt nhất và ra quyết định",
            "Xác định mục tiêu",
            "Phân tích, nhận diện vấn đề cần giải quyết",
            "Tìm kiếm các phương án"
        ],
        correctAnswer: 0
    },
    {
        question: "Bước thứ 2 trong tiến trình ra quyết định là ?",
        options: [
            "Phân tích",
            "Thiết kế",
            "Lựa chọn",
            "Thực thi"
        ],
        correctAnswer: 1
    },
    {
        question: "Bước thứ 3 trong tiến trình ra quyết định là ?",
        options: [
            "Phân tích",
            "Thiết kế",
            "Lựa chọn",
            "Thực thi"
        ],
        correctAnswer: 2
    },
    {
        question: "Quyết định có cấu trúc (Structured Decision) là ?",
        options: [
            "Các quyết định mà người ra quyết định biết chắc chắn đúng",
            "Các quyết định mà người ra quyết định biết là có nhiều câu trả lời gần đúng và không cách nào để tìm ra câu trả lời chính xác nhất",
            "Các quyết định lặp đi lặp",
            "Các quyết định không xảy ra thường xuyên"
        ],
        correctAnswer: 0
    },
    {
        question: "Quyết định không có cấu trúc (NonStructured Decision) là ?",
        options: [
            "Các quyết định mà người ra quyết định biết chắc chắn đúng",
            "Các quyết định mà người ra quyết định biết là có nhiều câu trả lời gần đúng và không có cách nào để tìm ra câu trả lời chính xác nhất",
            "Các quyết định lặp đi lặp lại",
            "Các quyết định không xảy ra thường xuyên"
        ],
        correctAnswer: 1
    },
    {
        question: "Một hệ hỗ trợ quyết định gồm có mấy thành phần chính ?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2
    },
    {
        question: "Một hệ hỗ trợ quyết định gồm có ba thành phần chính là những thành phần nào trong các thành phần sau đây ?",
        options: [
            "Quản lý dữ liệu",
            "Quản lý mô hình",
            "Quản lý giao diện người dùng",
            "Cả 3 thành phần trên"
        ],
        correctAnswer: 3
    },
    {
        question: "TPS-Transaction Processing Systems là ?",
        options: [
            "Hệ thống xử lý tác nghiệp",
            "Hệ thống thông tin quản lý",
            "Hệ thống trợ giúp ra quyết định",
            "Hệ chuyên gia"
        ],
        correctAnswer: 0
    },
    {
        question: "MIS-Management Information Systems là gì ?",
        options: [
            "Hệ thống xử lý tác nghiệp",
            "Hệ thống thông tin quản lý",
            "Hệ thống trợ giúp ra quyết định",
            "Hệ chuyên gia"
        ],
        correctAnswer: 1
    },
    {
        question: "Quản trị dữ liệu là gì ?",
        options: [
            "Bao gồm CSDL chứa dữ liệu liên quan đến một tình huống và được quản lý bởi phần mềm là hệ quản trị CSDL",
            "Cho phép khai thác và quản lý các mô hình định lượng (xử lý) khác nhau, cung cấp khả năng phân tích cho hệ thống. Cung cấp giao diện cho người dùng để liên lạc và ra lệnh cho hệ hỗ trợ quyết định",
            "Hoạt động như 1 thành phần độc lập hoặc có thể trợ giúp cho bất kỳ 1 hệ thống nào trong 3 hệ thống nói trên"
        ],
        correctAnswer: 0
    },
    {
        question: "Quản trị mô hình là gì ?",
        options: [
            "Bao gồm CSDL chứa dữ liệu liên quan đến một tình huống và được quản lý bởi phần mềm là hệ quản trị CSDL",
            "Cho phép khai thác và quản lý các mô hình định lượng (xử lý) khác nhau, cung cấp khả năng phân tích cho hệ thống",
            "Cung cấp giao diện cho người dùng để liên lạc và ra lệnh cho hệ hỗ trợ quyết định",
            "Hoạt động như 1 thành phần độc lập hoặc có thể trợ giúp cho bất kỳ 1 hệ thống nào trong 3 hệ thống nói trên"
        ],
        correctAnswer: 1
    },
    {
        question: "Quản trị đối thoại là gì ?",
        options: [
            "Bao gồm CSDL chứa dữ liệu liên quan đến một tình huống và được quản lý bởi phần mềm là hệ quản trị CSDL",
            "Cho phép khai thác và quản lý các mô hình định lượng (xử lý) khác nhau, cung cấp khả năng phân tích cho hệ thống",
            "Cung cấp giao diện cho người dùng để liên lạc và ra lệnh cho hệ hỗ trợ quyết định",
            "Hoạt động như 1 thành phần độc lập hoặc có thể trợ giúp cho bất kỳ 1 hệ thống nào trong 3 hệ thống nói trên"
        ],
        correctAnswer: 2
    },
    {
        question: "Quản trị tri thức là gì ?",
        options: [
            "Bao gồm CSDL chứa dữ liệu liên quan đến một tình huống và được quản lý bởi phần mềm là hệ quản trị CSDL",
            "Cho phép khai thác và quản lý các mô hình định lượng (xử lý) khác nhau, cung cấp khả năng phân tích cho hệ thống",
            "Cung cấp giao diện cho người dùng để liên lạc và ra lệnh cho hệ hỗ trợ quyết định",
            "Hoạt động như 1 thành phần độc lập hoặc có thể trợ giúp cho bất kỳ 1 hệ thống nào trong 3 hệ thống nói trên"
        ],
        correctAnswer: 3
    },
    {
        question: "Hiệu quả của quyết định phụ thuộc vào ?",
        options: [
            "Nắm vững các bước của quá trình ra quyết định",
            "Vận dụng nhuần nhuyễn các bước của quá trình ra quyết định",
            "Bảo đảm đầy đủ các điều kiện thực hiện quyết định",
            "Tất cả đều đúng"
        ],
        correctAnswer: 3
    },
    {
        question: "Lựa chọn mô hình ra quyết định phụ thuộc vào ?",
        options: [
            "Tính cách nhà quản trị",
            "Ý muốn của đa số nhân viên",
            "Năng lực nhà quản trị",
            "Nhiều yếu tố khác nhau"
        ],
        correctAnswer: 3
    },
    {
        question: "Decision Support Systems có nghĩa là gì ?",
        options: [
            "Hệ chuyên gia",
            "Hệ trợ giúp ra quyết định",
            "Hệ tri thức",
            "Hệ quản trị CSDL"
        ],
        correctAnswer: 1
    },
    {
        question: "Những kỹ năng ra quyết định bao gồm ?",
        options: [
            "Quyết định đúng đắn thẩm quyền",
            "Phải ngắn gọn, kịp thời, chính xác",
            "Phải có tính pháp lý",
            "Tất cả các kỹ năng trên"
        ],
        correctAnswer: 3
    },
    {
        question: "Ra quyết định theo phong cách độc đoán sẽ ?",
        options: [
            "Không có lợi trong mọi trường hợp",
            "Không được cấp dưới ủng hộ khi thực thi quyết định",
            "Gặp sai lầm trong giải quyết vấn đề",
            "Không phát huy được tính sáng tạo của nhân viên trong quá trình ra quyết định"
        ],
        correctAnswer: 3
    },
    {
        question: "Quá trình ra quyết định có mấy giai đoạn ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
    },
    {
        question: "Quá trình ra quyết định- giai đoạn tìm hiểu là ?",
        options: [
            "Phát biểu mô hình, đặt các tiêu chuẩn chọn, tìm các phương án chọn, dự đoán và đo kết quả ra",
            "Các mục tiêu, tập hợp dữ liệu, định hình bài toán, phân loại vấn đề, trình bày bài toán",
            "Tính toán theo mô hình, phân tích độ phù hợp, chọn phương án tốt(nhất), lập kế hoạch thực hiện, thiết kế một hệ thống điều kiển",
            "Tất cả các đáp án trên"
        ],
        correctAnswer: 1
    },
    {
        question: "Quá trình ra quyết định- giai đoạn phân tích là ?",
        options: [
            "Phát biểu mô hình, đặt các tiêu chuẩn chọn, tìm các phương án chọn, dự đoán và đo kết quả ra",
            "Các mục tiêu, tập hợp dữ liệu, định hình bài toán, phân loại vấn đề, trình bày bài toán",
            "Tính toán theo mô hình, phân tích độ phù hợp, chọn phương án tốt(nhất), lập kế hoạch thực hiện, thiết kế một hệ thống điều kiển",
            "Tất cả các đáp án trên"
        ],
        correctAnswer: 0
    },
    {
        question: "Quá trình ra quyết định- giai đoạn lựa chọn là ?",
        options: [
            "Phát biểu mô hình, đặt các tiêu chuẩn chọn, tìm các phương án chọn, dự đoán và đo kết quả ra",
            "Các mục tiêu, tập hợp dữ liệu, định hình bài toán, phân loại vấn đề, trình bày bài toán",
            "Tính toán theo mô hình, phân tích độ phù hợp, chọn phương án tốt(nhất), lập kế hoạch thực hiện, thiết kế một hệ thống điều kiển",
            "Tất cả các đáp án trên"
        ],
        correctAnswer: 2
    },
    {
        question: "Môi trường ra quyết định phụ thuộc vào các yếu tố nào sau đây ?",
        options: [
            "Các yếu tố tác động",
            "Các yếu tố tổ chức",
            "Các yếu tố ngoại cảnh",
            "Tác động- Tổ chức– Ngoại cảnh– Thông tin– Các mục tiêu quản lý"
        ],
        correctAnswer: 3
    },
    {
        question: "Môi trường ra quyết định phụ thuộc vào bao nhiêu yếu tố ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2
    },
    {
        question: "Môi trường ra quyết định– Các yếu tố tác động là ?",
        options: [
            "Trực tiếp, dễ nhìn thấy như: Hạn chế về tài nguyên, điều kiện vật lý và các tham số chức năng ảnh hưởng đến hiệu quả",
            "Điều kiện xã hội, ý thức chấp hành, hành vi văn hóa, thái độ và nhân cách",
            "Pháp luật, các quy định cần tuân thủ",
            "Thông tin tỉ mỉ, tổng hợp, đa dạng"
        ],
        correctAnswer: 0
    },
    {
        question: "Môi trường ra quyết định– các yếu tố tổ chức là ?",
        options: [
            "Chính sách",
            "Con người",
            "Chính sách– Cấu trúc– Hình ảnh– Con người",
            "Tổ chức"
        ],
        correctAnswer: 2
    },
    {
        question: "Môi trường ra quyết định phụ- Các yếu tố ngoại cảnh là ?",
        options: [
            "Pháp luật, các quy luật cần tuân thủ",
            "Pháp luật, các quy định cần tuân thủ- Kinh tế- Môi trường– Thị trường– Đòi hỏi của khách hàng, nhu cầu của khách hàng",
            "Thị trường: Sự cạnh tranh, phát triển của công nghệ mới",
            "Đòi hỏi của khách hàng, nhu cầu của khách hàng"
        ],
        correctAnswer: 1
    },
    {
        question: "Môi trường ra quyết định– Các yếu tố thông tin là ?",
        options: [
            "Khả năng thông tin: Độ bảo mật, khả năng truyền thông, phương tiện lưu trữ, nguồn, kênh thông tin",
            "Độ tin cậy: Độ chính xác– cập nhật– chuẩn mực",
            "Giải pháp: Thông tin tỉ mỉ, tổng hợp và đa dạng",
            "Khả năng thông tin- Độ tin cậy– Giải pháp– Giá cả"
        ],
        correctAnswer: 3
    },
    {
        question: "Môi trường ra quyết định– Các mục tiêu quản lý là ?",
        options: [
            "Sự vận hành: Kinh tế, hiệu quả, chất lượng",
            "Vùng ảnh hưởng: Điều kiện tác nghiệp, truyền đạt trong tổ chức",
            "Giải pháp: Thông tin tỉ mỉ, tổng hợp và đa dạng",
            "Sự vận hành– Vùng ảnh hưởng– Sự giải quyết– Mức độ rõ ràng"
        ],
        correctAnswer: 3
    },
    {
        question: "Đánh giá các phương án chọn trong quá trình ra quyết định phụ thuộc bao nhiêu yếu tố chính ?",
        options: ["2", "3", "4", "Không phụ thuộc vào yếu tố nào cả"],
        correctAnswer: 1
    },
    {
        question: "Đánh giá các phương án chọn trong quá trình ra quyết định phụ thuộc các yếu tố chính nào sau đây ?",
        options: [
            "Cấu trúc và độ phức tạp của hoàn cảnh được phân tích",
            "Đặc trưng của đối tượng (định lượng, chủ quan, rõ, mờ )",
            "Tất cả các đáp án trên",
            "Trạng thái và định lượng của các yếu tố ảnh hưởng"
        ],
        correctAnswer: 2
    },
    {
        question: "Ra quyết định là gì ?",
        options: [
            "Không có đáp án nào chính xác",
            "Ra quyết định là một phương án được lựa chọn trong số các phương án hiện có",
            "Là hành vi sáng tạo của nhà quản trị nhằm định ra chương trình và tính chất hoạt động của tổ chức để giải quyết một vấn đề đã chín muồi, trên cơ sở hiểu biết các quy luật vận động khách quan của hệ thống",
            "Ra quyết định là quá trình cân nhắc dẫn đến việc lựa chọn một phương án thực hiện trong số các phương án hiện có. Với việc đưa ra kết quả này phải dựa trên cơ sở của lý giải. Với quá trình tiến hành phân tích để tìm kiếm các lựa chọn tốt nhất. Được thực hiện với chủ thể có quyền và tác động đến kết quả phản ánh đối với quyết định"
        ],
        correctAnswer: 3
    },
    {
        question: "DGMS-Hệ thống quản trị và tạo sinh hội thoại viết tắt của ?",
        options: [
            "Không có đáp án chính xác",
            "Digital Generation and Management System",
            "Dialog Generation and Management System",
            "Dialog Generation and Management Structure"
        ],
        correctAnswer: 2
    },
    {
        question: "UIMS- Hệ quản trị giao diện người dùng viết tắt của?",
        options: [
            "User Interface Metting System",
            "Không có đáp án chính xác",
            "User Interface Management System",
            "User Information Management System"
        ],
        correctAnswer: 2
    },
    {
        question: "Các chức năng cơ bản của hệ quản trị CSDL",
        options: [
            "Điều khiển",
            "Tìm kiếm",
            "Tất cả các đáp án trên",
            "Lưu trữ"
        ],
        correctAnswer: 2
    },
    {
        question: "CSDL của hệ hỗ trợ quyết định bao gồm:",
        options: [
            "Tất cả các đáp án trên",
            "Dữ liệu trong",
            "Dữ liệu ngoài",
            "Dữ liệu riêng"
        ],
        correctAnswer: 0
    },
    {
        question: "CSDL của hệ hỗ trợ quyết định– dữ liệu riêng là:",
        options: [
            "Dữ liệu của người ra quyết định được sử dụng trong những tình huống cụ thể, xác định các giải pháp khác nhau với cùng một bài toán",
            "Tất cả các đáp án trên",
            "Dữ liệu lấy từ hệ thống và xử lý các công việc của tổ chức, từ các bộ phận nghiệp vụ như tài chính, vật tư, sản xuất",
            "Dữ liệu chuyển vào hệ thống khi sử dụng Hệ hỗ trợ quyết định"
        ],
        correctAnswer: 0
    },
    {
        question: "CSDL của hệ hỗ trợ quyết định– dữ liệu ngoài là:",
        options: [
            "Tất cả các đáp án trên",
            "Dữ liệu của người ra quyết định được sử dụng trong những tình huống cụ thể, xác định các giải pháp khác nhau với cùng một bài toán",
            "Dữ liệu chuyển vào hệ thống khi sử dụng Hệ hỗ trợ quyết định",
            "Dữ liệu lấy từ hệ thống và xử lý các công việc của tổ chức, từ các bộ phận nghiệp vụ như tài chính, vật tư, sản xuất"
        ],
        correctAnswer: 2
    },
    {
        question: "CSDL của hệ hỗ trợ quyết định– dữ liệu trong là:",
        options: [
            "Dữ liệu chuyển vào hệ thống khi sử dụng Hệ hỗ trợ quyết định",
            "Tất cả các đáp án trên",
            "Dữ liệu của người ra quyết định được sử dụng trong những tình huống cụ thể, xác định các giải pháp khác nhau với cùng một bài toán",
            "Dữ liệu lấy từ hệ thống và xử lý các công việc của tổ chức, từ các bộ phận nghiệp vụ như tài chính, vật tư, sản xuất"
        ],
        correctAnswer: 3
    },
    {
        question: "Hệ con quản trị mô hình gồm các thành phần:",
        options: [
            "Cơ sở mô hình- Hệ quản trị cơ sở mô hình- Ngôn ngữ dùng trong mô hình",
            "Cơ sở mô hình- Hệ quản trị cơ sở mô hình- Ngôn ngữ dùng trong mô hình- Danh mục mô hình-Thực hiện, tích hợp và điều khiển mô hình",
            "Không có đáp án nào chính xác",
            "Cơ sở mô hình- Hệ quản trị cơ sở mô hình- Ngôn ngữ dùng trong mô hình- Danh mục mô hình"
        ],
        correctAnswer: 1
    },
    {
        question: "Mô hình chiến lược?",
        options: [
            "Cho mức quản lý trung gian, thời gian 1 tháng đến 2 năm, ở các phòng ban, nhằm trợ giúp xác định và điều phối các nguồn lực của tổ chức, như lập kế hoạch yêu cầu về lao động, quảng cáo, bán sản phẩm",
            "Sử dụng cho phân tích dữ liệu, xác định các giá trị của các biến, các tham số trong mô hình,... như cơ chế sinh ra số ngẫu nhiên, phân tích hồi quy",
            "Trợ giúp lập kế hoạch chiến lược quản lý ở mức cao nhất, phạm vi rộng, thời gian dài như: phát triển các mục tiêu chung, phân tích môi trường, phát triển công nghệ, phần mềm",
            "Trợ giúp những hoạt động thường xuyên của tổ chức như lập thời gian biểu sản xuất, thống kê, bán sản phẩm"
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình chiến thuật?",
        options: [
            "Cho mức quản lý trung gian, thời gian 1 tháng đến 2 năm, ở các phòng ban, nhằm trợ giúp xác định và điều phối các nguồn lực của tổ chức, như lập kế hoạch yêu cầu về lao động, quảng cáo, bán sản phẩm",
            "Trợ giúp những hoạt động thường xuyên của tổ chức như lập thời gian biểu sản xuất, thống kê, bán sản phẩm",
            "Trợ giúp lập kế hoạch chiến lược quản lý ở mức cao nhất, phạm vi rộng, thời gian dài như: phát triển các mục tiêu chung, phân tích môi trường, phát triển công nghệ, phần mềm",
            "Sử dụng cho phân tích dữ liệu, xác định các giá trị của các biến, các tham số trong mô hình,... như cơ chế sinh ra số ngẫu nhiên, phân tích hồi quy"
        ],
        correctAnswer: 0
    },
    {
        question: "Mô hình tác nghiệp ?",
        options: [
            "Cho mức quản lý trung gian, thời gian 1 tháng đến 2 năm, ở các phòng ban, nhằm trợ giúp xác định và điều phối các nguồn lực của tổ chức, như lập kế hoạch yêu cầu về lao động, quảng cáo, bán sản phẩm",
            "Trợ giúp những hoạt động thường xuyên của tổ chức như lập thời gian biểu sản xuất, thống kê, bán sản phẩm",
            "Sử dụng cho phân tích dữ liệu, xác định các giá trị của các biến, các tham số trong mô hình,... như cơ chế sinh ra số ngẫu nhiên, phân tích hồi quy",
            "Trợ giúp lập kế hoạch chiến lược quản lý ở mức cao nhất, phạm vi rộng, thời gian dài như: phát triển các mục tiêu chung, phân tích môi trường, phát triển công nghệ, phần mềm"
        ],
        correctAnswer: 1
    },
    {
        question: "Các khối tạo mô hình và các chương trình con ?",
        options: [
            "Sử dụng cho phân tích dữ liệu, xác định các giá trị của các biến, các tham số trong mô hình,... như cơ chế sinh ra số ngẫu nhiên, phân tích hồi quy",
            "Cho mức quản lý trung gian, thời gian 1 tháng đến 2 năm, ở các phòng ban, nhằm trợ giúp xác định và điều phối các nguồn lực của tổ chức, như lập kế hoạch yêu cầu về lao động, quảng cáo, bán sản phẩm",
            "Trợ giúp những hoạt động thường xuyên của tổ chức như lập thời gian biểu sản xuất, thống kê, bán sản phẩm",
            "Trợ giúp lập kế hoạch chiến lược quản lý ở mức cao nhất, phạm vi rộng, thời gian dài như: phát triển các mục tiêu chung, phân tích môi trường, phát triển công nghệ, phần mềm"
        ],
        correctAnswer: 0
    },
    {
        question: "Có mấy lớp người sử dụng trong hệ hỗ trợ quyết định?",
        options: ["4", "3", "5", "2"],
        correctAnswer: 3
    },
    {
        question: "Các nhà quản lý sử dụng hệ hỗ trợ quyết định mong muốn gì?",
        options: [
            "Muốn hệ thân thiện, quan tâm nhiều đến sự trợ giúp phân tích của hệ",
            "Muốn sử dụng những hệ thống phức tạp, hướng chủ đề, quan tâm đến những khả năng tính toán của hệ HTQĐ",
            "Hệ thân thiện",
            "Muốn sử dụng những hệ thống phức tạp"
        ],
        correctAnswer: 0
    },
    {
        question: "Các nhà chuyên môn sử dụng hệ hỗ trợ quyết định mong muốn gì?",
        options: [
            "Muốn sử dụng những hệ thống phức tạp",
            "Muốn hệ thân thiện, quan tâm nhiều đến sự trợ giúp phân tích của hệ",
            "Hệ thân thiện",
            "Muốn sử dụng những hệ thống phức tạp, hướng chủ đề, quan tâm đến những khả năng tính toán của hệ HTQĐ"
        ],
        correctAnswer: 3
    },
    {
        question: "Hãy trình bày khái niệm về mô hình?",
        options: [
            "Là bản sao vật lý của hệ thống, chỉ khác nhau về tỷ lệ so với nguyên bản",
            "Không hoàn toàn giống thể giới thực, nhưng có dáng điệu giống như hệ thống thực và được xem là một biểu diễn tượng trưng cho thế giới thực",
            "Mô hình là một biểu diễn đơn giản hóa hoặc tóm lược hiện thực"
        ],
        correctAnswer: 2
    },
    {
        question: "Một hộ ở Bát Tràng sản xuất 2 loại sản phẩm là bát và lọ hoa. Để sản xuất một chiếc bát cần 0,5 kg đất cao lanh và một giờ để làm, đem lại mức lãi 4000 đồng; Để sản xuất một lọ hoa cần 1kg đất cao lanh và 0,5 giờ để làm, đem lại mức lãi 3000 đồng. Với lượng nguyên liệu là 50kg và thời gian 70 giờ thì phải sản xuất bao nhiêu chiếc mỗi loại để thu được tổng số tiền lãi cao nhất ?",
        options: [
            "Sản xuất 0 bát , 50 lọ hoa",
            "Sản xuất 0 bát , 0 lọ hoa",
            "Sản xuất 60 bát , 20 lọ hoa",
            "Sản xuất 70 bát , 0 lọ hoa"
        ],
        correctAnswer: 2
    },
    {
        question: "Xí nghiệp ABC ở Gia Lâm sản xuất hai loại sản phẩm bằng da là cặp sách và ba lô. Một chiếc cặp sách sản xuất mất 2 giờ và lãi 20000 đồng; Một chiếc ba lô sản xuất mất 1 giờ và lãi 15000 đồng. Biết xí nghiệp có 125 công nhân, mỗi công nhân làm việc 8 giờ/ngày. Nguyên liệu da đủ để sản xuất 800 sản phẩm mỗi ngày và trong mỗi ngày chỉ có 400 khóa cặp, 700 khóa ba lô. Tìm số sản phẩm mỗi loại phải sản xuất trong 1 ngày để có lãi nhiều nhất?",
        options: [
            "Xí nghiệp cần sản xuất 200 cặp sách và 600 ba lô trong 1 ngày",
            "Xí nghiệp cần sản xuất 100 cặp sách và 700 ba lô trong 1 ngày",
            "Xí nghiệp cần sản xuất 400 cặp sách và 0 ba lô trong 1 ngày",
            "Xí nghiệp cần sản xuất 400 cặp sách và 200 ba lô trong 1 ngày"
        ],
        correctAnswer: 0
    },
    {
        question: "Mô hình động ?",
        options: [
            "Khi giả thiết không chắc chắn, thông tin không đầy đủ thì việc ra quyết định khó khăn. Do đó, cần phải cố gắng tránh sự không chắc chắn",
            "Cần ra quyết định trong 1 tình huống tức thời của hệ thống, với giả định rằng hệ ổn định trong quá trình phân tích",
            "Để đánh giá các kịch bản thay đổi theo thời gian, cho tương lai như giá cả, phí tổn, lợi nhuận trong năm tới",
            "Trong việc ra quyết định với giả thiết chắc chắn, thông tin đầy đủ, có sẵn, người ra quyết định biết chính xác kết quả mỗi quá trình sẽ xảy ra và giả thiết rằng chỉ có 1 kết quả cho mỗi sự lựa chọn"
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình chắc chắn ?",
        options: [
            "Trong việc ra quyết định với giả thiết chắc chắn, thông tin đầy đủ, có sẵn, người ra quyết định biết chính xác kết quả mỗi quá trình sẽ xảy ra và giả thiết rằng chỉ có 1 kết quả cho mỗi sự lựa chọn",
            "Cần ra quyết định trong 1 tình huống tức thời của hệ thống, với giả định rằng hệ ổn định trong quá trình phân tích",
            "Để đánh giá các kịch bản thay đổi theo thời gian, cho tương lai như giá cả, phí tổn, lợi nhuận trong năm tới",
            "Khi giả thiết không chắc chắn, thông tin không đầy đủ thì việc ra quyết định khó khăn. Do đó, cần phải cố gắng tránh sự không chắc chắn"
        ],
        correctAnswer: 0
    },
    {
        question: "Mô hình không chắc chắn ?",
        options: [
            "Trong việc ra quyết định với giả thiết chắc chắn, thông tin đầy đủ, có sẵn, người ra quyết định biết chính xác kết quả mỗi quá trình sẽ xảy ra và giả thiết rằng chỉ có 1 kết quả cho mỗi sự lựa chọn",
            "Cần ra quyết định trong 1 tình huống tức thời của hệ thống, với giả định rằng hệ ổn định trong quá trình phân tích",
            "Để đánh giá các kịch bản thay đổi theo thời gian, cho tương lai như giá cả, phí tổn, lợi nhuận trong năm tới",
            "Khi giả thiết không chắc chắn, thông tin không đầy đủ thì việc ra quyết định khó khăn. Do đó, cần phải cố gắng tránh sự không chắc chắn"
        ],
        correctAnswer: 3
    },
    {
        question: "Mô hình ra quyết định mạo hiểm ?",
        options: [
            "Trong việc ra quyết định với giả thiết chắc chắn, thông tin đầy đủ, có sẵn, người ra quyết định biết chính xác kết quả mỗi quá trình sẽ xảy ra và giả thiết rằng chỉ có 1 kết quả cho mỗi sự lựa chọn",
            "Để đánh giá các kịch bản thay đổi theo thời gian, cho tương lai như giá cả, phí tổn, lợi nhuận trong năm tới",
            "Người ra quyết định phải sử dụng nhiều kỹ thuật để phân tích, đánh giá mức độ mạo hiểm cho mỗi giải pháp (ví dụ trong kinh doanh)",
            "Khi giả thiết không chắc chắn, thông tin không đầy đủ thì việc ra quyết định khó khăn. Do đó, cần phải cố gắng tránh sự không chắc chắn"
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình bảng quyết định, cây quyết định?",
        options: [
            "Tìm giải pháp tốt nhất trong số lớn (vô hạn) các giải pháp, sử dụng quá trình cải tiến từng bước",
            "Tìm giải pháp tốt nhất trong một số bước bằng sử dụng công thức thống kê",
            "Tìm giải pháp tốt nhất trong một số ít các phương án chọn",
            "Tìm giải pháp 'đủ tốt' hoặc tốt nhất trong số các giải pháp được kiểm tra, sử dụng thử nghiệm"
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình quy hoạch toán học, quy hoạch tuyến tính, mô hình mạng?",
        options: [
            "Tìm giải pháp 'đủ tốt' hoặc tốt nhất trong số các giải pháp được kiểm tra, sử dụng thử nghiệm",
            "Tìm giải pháp tốt nhất trong một số ít các phương án chọn",
            "Tìm giải pháp tốt nhất trong số lớn (vô hạn) các giải pháp, sử dụng quá trình cải tiến từng bước",
            "Tìm giải pháp tốt nhất trong một số bước bằng sử dụng công thức thống kê"
        ],
        correctAnswer: 2
    },
    {
        question: "Các mô hình thống kê ?",
        options: [
            "Tìm giải pháp 'đủ tốt' hoặc tốt nhất trong số các giải pháp được kiểm tra, sử dụng thử nghiệm",
            "Tìm giải pháp tốt nhất trong một số ít các phương án chọn",
            "Tìm giải pháp tốt nhất trong số lớn (vô hạn) các giải pháp, sử dụng quá trình cải tiến từng bước",
            "Tìm giải pháp tốt nhất trong một số bước bằng sử dụng công thức thống kê"
        ],
        correctAnswer: 3
    },
    {
        question: "Mô hình mô phỏng ?",
        options: [
            "Tìm giải pháp 'đủ tốt' hoặc tốt nhất trong số các giải pháp được kiểm tra, sử dụng thử nghiệm",
            "Tìm giải pháp tốt nhất trong một số bước bằng sử dụng công thức thống kê",
            "Tìm giải pháp tốt nhất trong một số ít các phương án chọn",
            "Tìm giải pháp tốt nhất trong số lớn (vô hạn) các giải pháp, sử dụng quá trình cải tiến từng bước"
        ],
        correctAnswer: 0
    },
    {
        question: "Các mô hình Heuristic và hệ chuyên gia?",
        options: [
            "Tìm giải pháp tốt nhất trong một số bước bằng sử dụng công thức thống kê",
            "Tìm giải pháp 'đủ tốt' bằng cách sử dụng các luật",
            "Tìm giải pháp tốt nhất trong số lớn (vô hạn) các giải pháp, sử dụng quá trình cải tiến từng bước",
            "Tìm giải pháp 'đủ tốt' hoặc tốt nhất trong số các giải pháp được kiểm tra, sử dụng thử nghiệm"
        ],
        correctAnswer: 1
    },
    {
        question: "Khi nào sử dụng tối ưu tuyến tính?",
        options: [
            "Khi chỉ có một số nhỏ các phương án chọn, có một đích thì có thể biểu diển bài toán dưới dạng bảng hoặc mạng",
            "Ở những Hệ hỗ trợ quyết định có các tình huống nửa cấu trúc, phi cấu trúc thì khó biểu diễn bằng mô hình tối ưu hoặc các mô hình toán học khác",
            "Khi gặp những vấn đề hết sức phức tạp, mà việc tìm ra giải pháp tối ưu là không thể với điều kiện thời gian và kinh phí cho phép, việc mô phỏng cũng kéo dài và phức tạp, có thể nghĩ đến heuristic để tìm ra giải pháp thỏa mãn 'đủ tốt' (90-99%)",
            "Khi số lượng các phương án chọn lớn (có thể vô hạn) thì không thể giải bằng bảng quyết định"
        ],
        correctAnswer: 3
    },
    {
        question: "Khi nào sử dụng mô phỏng?",
        options: [
            "Khi gặp những vấn đề hết sức phức tạp, mà việc tìm ra giải pháp tối ưu là không thể với điều kiện thời gian và kinh phí cho phép, việc mô phỏng cũng kéo dài và phức tạp, có thể nghĩ đến heuristic để tìm ra giải pháp thỏa mãn 'đủ tốt' (90-99%)",
            "Khi chỉ có một số nhỏ các phương án chọn, có một đích thì có thể biểu diển bài toán dưới dạng bảng hoặc mạng",
            "Ở những Hệ hỗ trợ quyết định có các tình huống nửa cấu trúc, phi cấu trúc thì khó biểu diễn bằng mô hình tối ưu hoặc các mô hình toán học khác",
            "Khi số lượng các phương án chọn lớn (có thể vô hạn) thì không thể giải bằng bảng quyết định"
        ],
        correctAnswer: 2
    },
    {
        question: "Khi nào sử dụng Heuristic?",
        options: [
            "Khi gặp những vấn đề hết sức phức tạp, mà việc tìm ra giải pháp tối ưu là không thể với điều kiện thời gian và kinh phí cho phép, việc mô phỏng cũng kéo dài và phức tạp, có thể nghĩ đến heuristic để tìm ra giải pháp thỏa mãn 'đủ tốt' (90-99%)",
            "Ở những Hệ hỗ trợ quyết định có các tình huống nửa cấu trúc, phi cấu trúc thì khó biểu diễn bằng mô hình tối ưu hoặc các mô hình toán học khác",
            "Khi số lượng các phương án chọn lớn (có thể vô hạn) thì không thể giải bằng bảng quyết định",
            "Khi chỉ có một số nhỏ các phương án chọn, có một đích thì có thể biểu diển bài toán dưới dạng bảng hoặc mạng"
        ],
        correctAnswer: 0
    },
    {
        question: "Khi nào sử dụng cây quyết định?",
        options: [
            "Ở những Hệ hỗ trợ quyết định có các tình huống nửa cấu trúc, phi cấu trúc thì khó biểu diễn bằng mô hình tối ưu hoặc các mô hình toán học khác",
            "Khi số lượng các phương án chọn lớn (có thể vô hạn) thì không thể giải bằng bảng quyết định",
            "Khi gặp những vấn đề hết sức phức tạp, mà việc tìm ra giải pháp tối ưu là không thể với điều kiện thời gian và kinh phí cho phép, việc mô phỏng cũng kéo dài và phức tạp, có thể nghĩ đến heuristic để tìm ra giải pháp thỏa mãn 'đủ tốt' (90-99%)",
            "Khi chỉ có một số nhỏ các phương án chọn, có một đích thì có thể biểu diển bài toán dưới dạng bảng hoặc mạng"
        ],
        correctAnswer: 3
    },
    {
        question: "Khi ra quyết định với độ chắc chắn chúng ta chọn mô hình nào?",
        options: [
            "Mô hình bảng quyết định( cây quyết định)",
            "Tất cả các mô hình trên",
            "Mô hình mô phỏng, dự báo, Heuristic",
            "Mô hình tối ưu tuyến tính"
        ],
        correctAnswer: 3
    },
    {
        question: "Khi ra quyết định với sự mạo hiểm chúng ta chọn mô hình nào?",
        options: [
            "Mô hình mô phỏng, dự báo, Heuristic",
            "Tất cả các mô hình trên",
            "Mô hình bảng quyết định( cây quyết định)",
            "Mô hình tối ưu tuyến tính"
        ],
        correctAnswer: 0
    },
    {
        question: "Phương pháp phán đoán là:",
        options: [
            "Phân tích dữ liệu, kết hợp dữ liệu để tìm ra các mối quan hệ tiềm năng (datamining). Phương pháp này phức tạp, có nhiều biến, phải dùng kỹ thuật thống kê",
            "Gồm một số thí nghiệm, khảo sát mẫu nhằm tổng quát hóa toàn bộ hệ thống. Phương pháp này chỉ dựa trên dữ liệu, chủ yếu là dữ liệu quá khứ",
            "Dựa trên các ước tính mục tiêu và các ý kiến chuyên gia hơn là dữ liệu cứng, dùng cho dự báo dài hạn, đặc biệt là nơi các nhân tố ngoài giữ vai trò đáng kể",
            "Dáng điệu hoạt động của hệ thống trong quá khứ giúp ta hiểu dáng điệu trong tương lai (dự báo giá cả, thị trường chứng khoán"
        ],
        correctAnswer: 2
    },
    {
        question: "Phương pháp đếm là?",
        options: [
            "Dáng điệu hoạt động của hệ thống trong quá khứ giúp ta hiểu dáng điệu trong tương lai (dự báo giá cả, thị trường chứng khoán",
            "Gồm một số thí nghiệm, khảo sát mẫu nhằm tổng quát hóa toàn bộ hệ thống. Phương pháp này chỉ dựa trên dữ liệu, chủ yếu là dữ liệu quá khứ",
            "Phân tích dữ liệu, kết hợp dữ liệu để tìm ra các mối quan hệ tiềm năng (datamining). Phương pháp này phức tạp, có nhiều biến, phải dùng kỹ thuật thống kê",
            "Dựa trên các ước tính mục tiêu và các ý kiến chuyên gia hơn là dữ liệu cứng, dùng cho dự báo dài hạn, đặc biệt là nơi các nhân tố ngoài giữ vai trò đáng kể"
        ],
        correctAnswer: 1
    },
    {
        question: "Phương pháp phân tích theo chuỗi thời gian là ?",
        options: [
            "Phân tích dữ liệu, kết hợp dữ liệu để tìm ra các mối quan hệ tiềm năng (datamining). Phương pháp này phức tạp, có nhiều biến, phải dùng kỹ thuật thống kê",
            "Gồm một số thí nghiệm, khảo sát mẫu nhằm tổng quát hóa toàn bộ hệ thống. Phương pháp này chỉ dựa trên dữ liệu, chủ yếu là dữ liệu quá khứ",
            "Dáng điệu hoạt động của hệ thống trong quá khứ giúp ta hiểu dáng điệu trong tương lai (dự báo giá cả, thị trường chứng khoán",
            "Dựa trên các ước tính mục tiêu và các ý kiến chuyên gia hơn là dữ liệu cứng, dùng cho dự báo dài hạn, đặc biệt là nơi các nhân tố ngoài giữ vai trò đáng kể"
        ],
        correctAnswer: 2
    },
    {
        question: "Phương pháp phân tích nhân quả là:",
        options: [
            "Gồm một số thí nghiệm, khảo sát mẫu nhằm tổng quát hóa toàn bộ hệ thống. Phương pháp này chỉ dựa trên dữ liệu, chủ yếu là dữ liệu quá khứ",
            "Phân tích dữ liệu, kết hợp dữ liệu để tìm ra các mối quan hệ tiềm năng (datamining). Phương pháp này phức tạp, có nhiều biến, phải dùng kỹ thuật thống kê",
            "Dáng điệu hoạt động của hệ thống trong quá khứ giúp ta hiểu dáng điệu trong tương lai (dự báo giá cả, thị trường chứng khoán",
            "Dựa trên các ước tính mục tiêu và các ý kiến chuyên gia hơn là dữ liệu cứng, dùng cho dự báo dài hạn, đặc biệt là nơi các nhân tố ngoài giữ vai trò đáng kể"
        ],
        correctAnswer: 1
    },
    {
        question: "Ưu điểm của mô phỏng là:",
        options: [
            "Cho phép quan sát 1 lớp các tình huống, cho phép thử nghiệm theo kiểu thử-sai",
            "Đơn giản, không phụ thuộc vào yếu tố thời gian, có những vấn đề liên quan đến 1 quãng thời gian dài, nhưng máy tính xử lý trong vài phút",
            "Tất cả các ý trên",
            "Giúp cho nhà quản lý hiểu rõ hệ thống, vì được xây dựng theo cách nhìn của nhà quản lý và cấu trúc quyết định của họ, mô phỏng có thể thực hiện với mọi vấn đề, mọi tập giá trị của các biến,.."
        ],
        correctAnswer: 2
    },
    {
        question: "Bất lợi của mô phỏng là:",
        options: [
            "Mô phỏng nhiều khi làm cho nhà quản lý mất trực quan, phương án tối ưu xuất hiện trước mắt nhưng không nhận ra",
            "Tất cả các ý trên",
            "Không đảm bảo giải pháp tối ưu",
            "Không thể dùng để giải các bài toán khác, khó tổng quát hóa",
            "Quá trình mô phỏng chậm, tốn kém"
        ],
        correctAnswer: 1
    },
    {
        question: "AHP là một phương pháp định lượng do ai đề xuất?",
        options: [
            "Được đề xuất bởi Thomas L. Saaty (1980)",
            "Được đề xuất bởi I.M. Makarov",
            "Được đề xuất bởi M.W.Davis",
            "Được đề xuất bởi E. Turban"
        ],
        correctAnswer: 0
    },
    {
        question: "Ưu điểm của Heuristics là:",
        options: [
            "Thường đưa ra lời giải chấp nhận được,..",
            "Làm cho con người sáng tạo hơn, để giải quyết các vấn đề heuristics khác",
            "Đơn giản, dễ hiểu, dễ thực thi",
            "Tất cả các ý trên",
            "Giảm thời gian tính toán, yêu cầu bộ nhớ"
        ],
        correctAnswer: 3
    },
    {
        question: "Phương pháp AHP gồm mấy bước chính",
        options: ["2", "1", "4", "3"],
        correctAnswer: 3
    },
    {
        question: "Đặc điểm của AHP là gì",
        options: [
            "Cả hai ý trên",
            "AHP sử dụng ý kiến chuyên gia",
            "Không cần quá nhiều dữ liệu để phân tích",
            "Tất cả đều sai"
        ],
        correctAnswer: 0
    },
    {
        question: "AHP trả lời các câu hỏi:",
        options: [
            "Nên chọn phương án nào?",
            "Tất cả đều sai",
            "Phương án nào tốt nhất",
            "Cả hai đáp án trên"
        ],
        correctAnswer: 3
    },
    {
        question: "AHP là phương pháp gì:",
        options: [
            "Toán học",
            "Tối ưu",
            "Cây quyết định",
            "Định lượng"
        ],
        correctAnswer: 3
    },
    {
        question: "Giai đoạn thực hiện trong quá trình thiết kế Hệ hỗ trợ quyết định chiếm bao nhiêu %",
        options: ["15%", "5%", "25%", "10%"],
        correctAnswer: 0
    },
    {
        question: "Mô hình tĩnh ?",
        options: [
            "Cần ra quyết định trong 1 tình huống tức thời của hệ thống, với giả định rằng hệ ổn định trong quá trình phân tích",
            "Khi giả thiết không chắc chắn, thông tin không đầy đủ thì việc ra quyết định khó khăn. Do đó, cần phải cố gắng tránh sự không chắc chắn",
            "Để đánh giá các kịch bản thay đổi theo thời gian, cho tương lai như giá cả, phí tổn, lợi nhuận trong năm tới",
            "Trong việc ra quyết định với giả thiết chắc chắn, thông tin đầy đủ, có sẵn, người ra quyết định biết chính xác kết quả mỗi quá trình sẽ xảy ra và giả thiết rằng chỉ có 1 kết quả cho mỗi sự lựa chọn"
        ],
        correctAnswer: 0
    },
    {
        question: "Ngôn ngữ hành động (thao tác) trong Giao diện người dùng nhìn từ 2 phía(người và máy) là:",
        options: [
            "Là các menu, trả lời một câu hỏi, chuyển đổi một cửa sổ màn hình hoặc soạn 1 câu lệnh. Một hay nhiều thiết bị vào được sử dụng để thực hiện hành động đó",
            "Là những thông tin người dùng cần biết để giao tiếp với máy tính. Những kiến thức này người dùng đã có, hoặc có thể trong bảng tham khảo, hoặc là dãy các thông báo khi có yêu cầu",
            "Người dùng diễn giải các hiển thị trên màn hình, xử lý nội dung và lập kế hoạch hành động tiếp",
            "Thông tin đưa ra cho người dùng thông qua các thiết bị ra (màn hình, máy in, loa). Các thông tin này có dạng menu, văn bản, có thể tĩnh hoặc động, kiểu số hoặc ký hiệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Tri thức trong Giao diện người dùng nhìn từ 2 phía(người và máy) là:",
        options: [
            "Có thể là các menu, trả lời một câu hỏi, chuyển đổi một cửa sổ màn hình hoặc soạn 1 câu lệnh. Một hay nhiều thiết bị vào được sử dụng để thực hiện hành động đó",
            "Là những thông tin người dùng cần biết để giao tiếp với máy tính. Những kiến thức này người dùng đã có, hoặc có thể trong bảng tham khảo, hoặc là dãy các thông báo khi có yêu cầu",
            "Người dùng diễn giải các hiển thị trên màn hình, xử lý nội dung và lập kế hoạch hành động tiếp",
            "Thông tin đưa ra cho người dùng thông qua các thiết bị ra (màn hình, máy in, loa). Các thông tin này có dạng menu, văn bản, có thể tĩnh hoặc động, kiểu số hoặc ký hiệu"
        ],
        correctAnswer: 1
    },
    {
        question: "Phản ứng của người dùng trong Giao diện người dùng nhìn từ 2 phía(người và máy) là:",
        options: [
            "Có thể là các menu, trả lời một câu hỏi, chuyển đổi một cửa sổ màn hình hoặc soạn 1 câu lệnh. Một hay nhiều thiết bị vào được sử dụng để thực hiện hành động đó",
            "Là những thông tin người dùng cần biết để giao tiếp với máy tính. Những kiến thức này người dùng đã có, hoặc có thể trong bảng tham khảo, hoặc là dãy các thông báo khi có yêu cầu",
            "Người dùng diễn giải các hiển thị trên màn hình, xử lý nội dung và lập kế hoạch hành động tiếp",
            "Thông tin đưa ra cho người dùng thông qua các thiết bị ra (màn hình, máy in, loa). Các thông tin này có dạng menu, văn bản, có thể tĩnh hoặc động, kiểu số hoặc ký hiệu"
        ],
        correctAnswer: 2
    },
    {
        question: "Máy tính trong Giao diện người dùng nhìn từ 2 phía(người và máy) là:",
        options: [
            "Máy tính diễn dịch đầu vào của người dùng, thực hiện xử lý rồi đưa ra kết quả bằng ngôn ngữ hiển thị (máy tính sinh ra phần hiển thị đầu ra)",
            "Là những thông tin người dùng cần biết để giao tiếp với máy tính. Những kiến thức này người dùng đã có, hoặc có thể trong bảng tham khảo, hoặc là dãy các thông báo khi có yêu cầu",
            "Người dùng diễn giải các hiển thị trên màn hình, xử lý nội dung và lập kế hoạch hành động tiếp",
            "Thông tin đưa ra cho người dùng thông qua các thiết bị ra (màn hình, máy in, loa). Các thông tin này có dạng menu, văn bản, có thể tĩnh hoặc động, kiểu số hoặc ký hiệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Hội thoại trong Giao diện người dùng nhìn từ 2 phía(người và máy) là:",
        options: [
            "Như là 1 dãy các trao đổi hoặc tương tác giữa người và máy tính",
            "Là những thông tin người dùng cần biết để giao tiếp với máy tính. Những kiến thức này người dùng đã có, hoặc có thể trong bảng tham khảo, hoặc là dãy các thông báo khi có yêu cầu",
            "Người dùng diễn giải các hiển thị trên màn hình, xử lý nội dung và lập kế hoạch hành động tiếp",
            "Thông tin đưa ra cho người dùng thông qua các thiết bị ra (màn hình, máy in, loa). Các thông tin này có dạng menu, văn bản, có thể tĩnh hoặc động, kiểu số hoặc ký hiệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Chất lượng của giao diện trong một ứng dụng do ai quyết định",
        options: [
            "Do người dùng quyết định",
            "Do hệ thống quyết định",
            "Do người quản trị quyết định",
            "Người lập trình quyết định"
        ],
        correctAnswer: 0
    },
    {
        question: "Một số yêu cầu quan trọng của giao diện người dùng là:",
        options: [
            "Thiết kế màn hình giao diện người-máy",
            "Sử dụng màu sắc, mật độ thông tin",
            "Sử dụng các biểu tượng và ký hiệu, khuôn dạng hiểu thị thông tin, lựa chọn các thiết bị vào, ra",
            "Tất cả các đáp án trên"
        ],
        correctAnswer: 3
    },
    {
        question: "Phương pháp tương tác menu là:",
        options: [
            "Người dùng chọn chức năng cần thực hiện từ danh sách các menu xuất hiện theo thứ tự logic, bắt đầu từ menu chính đến các menu con...",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 0
    },
    {
        question: "Phương pháp ngôn ngữ lệnh là:",
        options: [
            "Người dùng chọn chức năng cần thực hiện từ danh sách các menu xuất hiện theo thứ tự logic, bắt đầu từ menu chính đến các menu con...",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 1
    },
    {
        question: "Phương pháp hỏi và trả lời là:",
        options: [
            "Người dùng chọn chức năng cần thực hiện từ danh sách các menu xuất hiện theo thứ tự logic, bắt đầu từ menu chính đến các menu con...",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 2
    },
    {
        question: "Phương pháp tương tác bằng biểu mẫu là:",
        options: [
            "Người dùng chọn chức năng cần thực hiện từ danh sách các menu xuất hiện theo thứ tự logic, bắt đầu từ menu chính đến các menu con...",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 3
    },
    {
        question: "Phương pháp ngôn ngữ tự nhiên là:",
        options: [
            "Tương tác người-máy giống như hội thoại giữa con người với nhau. Ngày nay, công việc này được thực hiện chủ yếu bằng bàn phím, trong tương lai sẽ chuyển qua dạng hội thoại. Hạn chế cơ bản là máy tính không hiểu được ngôn ngữ tự nhiên. Tuy nhiên, khi các nghiên cứu trong trí tuệ nhân tạo được đẩy mạnh, thì sẽ nâng cao khả năng hội thoại bằng ngôn ngữ tự nhiên",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 0
    },
    {
        question: "Phương pháp thao tác đối tượng là:",
        options: [
            "Các đối tượng thường được biểu diễn qua các biểu tượng, và người dùng có thể thao tác trực tiếp, ví dụ: di chuyển, phóng to, thu nhỏ, chi tiết hóa chỉ thị...",
            "Người dùng đưa vào các lệnh như RUN, FIND,... bằng bàn phím hoặc các macro",
            "Các câu hỏi có thể xuất hiện dưới dạng mệnh đề hoặc lựa chọn từ các thành phần của menu. Câu trả lời cũng có thể chọn trong 1 menu",
            "Người dùng đưa dữ liệu vào theo 1 biểu mẫu được thiết kế trước, máy tính tính ra kết quả và người dùng lại yêu cầu các biểu mẫu tiếp theo"
        ],
        correctAnswer: 0
    },
    {
        question: "Sử dụng đồ họa trong Hệ hỗ trợ quyết định gồm:",
        options: [
            "Các báo cáo: biểu đồ, đồ thị,...",
            "Các thể hiện: đưa ra thông tin ngắn gọn trong cuộc họp, hội thảo",
            "Quản lý vết trong khi thực hiện: các biểu đồ luồng thông tin, chức năng",
            "Phân tích, lập kế hoạch và lập lịch trình, câu lệnh, điều khiển và kết nối",
            "Tất cả các ý trên"
        ],
        correctAnswer: 4
    },
    {
        question: "Cửa sổ trong giao diện đồ họa người dùng (GUI- Graphical User Interface):",
        options: [
            "Mỗi cửa sổ là một vùng của màn hình máy tính chứa văn bản, đồ họa, hình ảnh, chuyển động, hoặc cửa sổ khác. Nó có thể gối lên nhau, cuộn lại hoặc di chuyển",
            "Là hình ảnh nhỏ đại diện cho 1 cửa sổ đang tạm thời bị đóng lại, hoặc cho một số đối tượng khác. Kích vào biểu tượng thì cửa sổ đó hoạt động",
            "Chứa các thông tin bổ sung cho 1 cửa sổ màn hình, về 1 đối tượng nào đó. Khi đưa con trỏ vào thì đối tượng đó sẽ hoạt động",
            "Trong môi trường này, người dùng làm việc với nhiều cửa sổ xếp chồng lên nhau và các thành phần GUI khác. Người dùng có thể chuyển văn bản, đồ họa giữa các ứng dụng khác nhau. Môi trường này là cơ sở của công cụ xử lý tài liệu"
        ],
        correctAnswer: 0
    },
    {
        question: "Biểu tượng trong giao diện đồ họa người dùng (GUI- Graphical User Interface):",
        options: [
            "Mỗi cửa sổ là một vùng của màn hình máy tính chứa văn bản, đồ họa, hình ảnh, chuyển động, hoặc cửa sổ khác. Nó có thể gối lên nhau, cuộn lại hoặc di chuyển",
            "Là hình ảnh nhỏ đại diện cho 1 cửa sổ đang tạm thời bị đóng lại, hoặc cho một số đối tượng khác. Kích vào biểu tượng thì cửa sổ đó hoạt động",
            "Chứa các thông tin bổ sung cho 1 cửa sổ màn hình, về 1 đối tượng nào đó. Khi đưa con trỏ vào thì đối tượng đó sẽ hoạt động",
            "Trong môi trường này, người dùng làm việc với nhiều cửa sổ xếp chồng lên nhau và các thành phần GUI khác. Người dùng có thể chuyển văn bản, đồ họa giữa các ứng dụng khác nhau. Môi trường này là cơ sở của công cụ xử lý tài liệu"
        ],
        correctAnswer: 1
    },
    {
        question: "Điểm kích hoạt trong giao diện đồ họa người dùng (GUI- Graphical User Interface):",
        options: [
            "Mỗi cửa sổ là một vùng của màn hình máy tính chứa văn bản, đồ họa, hình ảnh, chuyển động, hoặc cửa sổ khác. Nó có thể gối lên nhau, cuộn lại hoặc di chuyển",
            "Là hình ảnh nhỏ đại diện cho 1 cửa sổ đang tạm thời bị đóng lại, hoặc cho một số đối tượng khác. Kích vào biểu tượng thì cửa sổ đó hoạt động",
            "Chứa các thông tin bổ sung cho 1 cửa sổ màn hình, về 1 đối tượng nào đó. Khi đưa con trỏ vào thì đối tượng đó sẽ hoạt động",
            "Trong môi trường này, người dùng làm việc với nhiều cửa sổ xếp chồng lên nhau và các thành phần GUI khác. Người dùng có thể chuyển văn bản, đồ họa giữa các ứng dụng khác nhau. Môi trường này là cơ sở của công cụ xử lý tài liệu"
        ],
        correctAnswer: 2
    },
    {
        question: "Môi trường WYSIWYG trong giao diện đồ họa người dùng (GUI- Graphical User Interface):",
        options: [
            "Mỗi cửa sổ là một vùng của màn hình máy tính chứa văn bản, đồ họa, hình ảnh, chuyển động, hoặc cửa sổ khác. Nó có thể gối lên nhau, cuộn lại hoặc di chuyển",
            "Là hình ảnh nhỏ đại diện cho 1 cửa sổ đang tạm thời bị đóng lại, hoặc cho một số đối tượng khác. Kích vào biểu tượng thì cửa sổ đó hoạt động",
            "Chứa các thông tin bổ sung cho 1 cửa sổ màn hình, về 1 đối tượng nào đó. Khi đưa con trỏ vào thì đối tượng đó sẽ hoạt động",
            "Trong môi trường này, người dùng làm việc với nhiều cửa sổ xếp chồng lên nhau và các thành phần GUI khác. Người dùng có thể chuyển văn bản, đồ họa giữa các ứng dụng khác nhau. Môi trường này là cơ sở của công cụ xử lý tài liệu"
        ],
        correctAnswer: 3
    },
    {
        question: "Đa phương tiện:",
        options: [
            "Sử dụng nhiều phương tiện kết nối với máy tính tạo ra môi trường liên kết người-máy trong các ứng dụng. Ví dụ: CD-ROM, VideoDisc, Image Digitizing, Overhead, Scanner, TV, Microphone,...",
            "Các tài liệu có thể chứa cùng lúc văn bản, đồ họa, audio, video; cho phép các thông tin liên kết với nhau",
            "Cách tiếp cận thông tin văn bản và đồ họa, cho phép người sử dụng đến thẳng chủ đề mà họ muốn xem. Việc đọc và xem thông tin được điều khiển trực tiếp bởi người sử dụng, người sử dụng có thể điều khiển các kiểu thông tin, các mức độ thông tin trên màn hình. Dễ dàng quay lui hoặc chuyển sang chủ đề khác",
            "Tất cả các ý trên"
        ],
        correctAnswer: 0
    },
    {
        question: "Siêu phương tiện:",
        options: [
            "Sử dụng nhiều phương tiện kết nối với máy tính tạo ra môi trường liên kết người-máy trong các ứng dụng. Ví dụ: CD-ROM, VideoDisc, Image Digitizing, Overhead, Scanner, TV, Microphone,...",
            "Các tài liệu có thể chứa cùng lúc văn bản, đồ họa, audio, video; cho phép các thông tin liên kết với nhau",
            "Cách tiếp cận thông tin văn bản và đồ họa, cho phép người sử dụng đến thẳng chủ đề mà họ muốn xem. Việc đọc và xem thông tin được điều khiển trực tiếp bởi người sử dụng, người sử dụng có thể điều khiển các kiểu thông tin, các mức độ thông tin trên màn hình. Dễ dàng quay lui hoặc chuyển sang chủ đề khác",
            "Tất cả các ý trên"
        ],
        correctAnswer: 1
    },
    {
        question: "Siêu văn bản:",
        options: [
            "Sử dụng nhiều phương tiện kết nối với máy tính tạo ra môi trường liên kết người-máy trong các ứng dụng. Ví dụ: CD-ROM, VideoDisc, Image Digitizing, Overhead, Scanner, TV, Microphone,...",
            "Các tài liệu có thể chứa cùng lúc văn bản, đồ họa, audio, video; cho phép các thông tin liên kết với nhau",
            "Cách tiếp cận thông tin văn bản và đồ họa, cho phép người sử dụng đến thẳng chủ đề mà họ muốn xem. Việc đọc và xem thông tin được điều khiển trực tiếp bởi người sử dụng, người sử dụng có thể điều khiển các kiểu thông tin, các mức độ thông tin trên màn hình. Dễ dàng quay lui hoặc chuyển sang chủ đề khác",
            "Tất cả các ý trên"
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình tương tác trực quan (Visual Interactive Modelling):",
        options: [
            "Nhằm đưa ra kết quả (ảnh hưởng, hậu quả) của 1 quyết định quản lý. Do đó cần xây dựng các kỹ thuật mô phỏng: mô phỏng hiện thị.. mà cho phép xem xét kết quả nằm ngoài thời gian quan sát...",
            "Biểu diễn không gian 3 chiều: cho phép sử dụng những kinh nghiệm tự nhiên về tri giác không gian. Thực chất, hiện trên màn hình là 2 chiều, đòi hỏi người sử dụng phải có suy luận hình học về quan hệ không gian",
            "Nhằm xây dựng giao diện thân thiện",
            "Tất cả các ý trên"
        ],
        correctAnswer: 0
    },
    {
        question: "Hiện thực ảo:",
        options: [
            "Nhằm đưa ra kết quả (ảnh hưởng, hậu quả) của 1 quyết định quản lý. Do đó cần xây dựng các kỹ thuật mô phỏng: mô phỏng hiện thị.. mà cho phép xem xét kết quả nằm ngoài thời gian quan sát...",
            "Biểu diễn không gian 3 chiều: cho phép sử dụng những kinh nghiệm tự nhiên về tri giác không gian. Thực chất, hiện trên màn hình là 2 chiều, đòi hỏi người sử dụng phải có suy luận hình học về quan hệ không gian",
            "Nhằm xây dựng giao diện thân thiện",
            "Tất cả các ý trên"
        ],
        correctAnswer: 1
    },
    {
        question: "Người thiết kế Hệ hỗ trợ ra quyết định cần kiến thức gì?",
        options: [
            "Thấu đáo về bài toán và môi trường ra quyết định",
            "Có kiến thức sâu về phân tích hệ thống",
            "Có nhiều kinh nghiệm thực tế (nhiều hơn so với các hệ thống thông tin khác), nắm vững các kiến thức thuộc nhiều lĩnh vực khác nhau như: toán học, khoa học quản lý, thống kê...",
            "Tất cả các ý trên"
        ],
        correctAnswer: 3
    },
    {
        question: "Xây dựng Hệ hỗ trợ quyết định là quá trình phức tạp, chúng ta cần gì?",
        options: [
            "Lựa chọn cấu hình",
            "Lựa chọn giao diện người-máy",
            "Xác định các ảnh hưởng đến cá nhân và nhóm,...",
            "Tất cả các ý trên"
        ],
        correctAnswer: 3
    },
    {
        question: "Quá trình thiết kế Hệ hỗ trợ quyết định trải qua các giai đoạn:",
        options: [
            "Lập kế hoạch",
            "Nghiên cứu khảo sát",
            "Phân tích, thiết kế",
            "Thử nghiệm, cài đặt, bảo hành và đưa vào sử dụng",
            "Tất cả các đáp án trên"
        ],
        correctAnswer: 4
    },
    {
        question: "Giai đoạn lập kế hoạch trong quá trình thiết kế Hệ hỗ trợ quyết định chiếm bao nhiêu %",
        options: ["5%", "15%", "25%", "10%"],
        correctAnswer: 0
    },
    {
        question: "Giai đoạn nghiên cứu khảo sát trong quá trình thiết kế Hệ hỗ trợ quyết định chiếm bao nhiêu %",
        options: ["5%", "15%", "25%", "10%"],
        correctAnswer: 0
    },
    {
        question: "Giai đoạn Phân tích trong quá trình thiết kế Hệ hỗ trợ quyết định chiếm bao nhiêu %",
        options: ["5%", "15%", "25%", "10%"],
        correctAnswer: 1
    },
    {
        question: "Giai đoạn xây dựng trong quá trình thiết kế Hệ hỗ trợ quyết định chiếm bao nhiêu %",
        options: ["5%", "15%", "25%", "10%"],
        correctAnswer: 2
    }
]; 