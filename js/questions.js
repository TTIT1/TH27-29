const questions = [
    {
        question: "Dữ liệu của Big Data là loại nào ?",
        options: [
            "Structured Data",
            "Semi-Structured Data", 
            "Unstructured Data",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Đăc trưng nào không phải của Big Data",
        options: [
            "Volume",
            "Variety",
            "Vision",
            "Velocity"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Vision"
    },
    {
        question: "NoSQL là ?",
        options: [
            "Database",
            "Field",
            "Document",
            "Collection"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Database"
    },
    {
        question: "Mục tiêu của NoSQL là gì?",
        options: [
            "NoSQL cung cấp một giải pháp thay thế cho cơ sở dữ liệu SQL để lưu trữ dữ liệu dạng văn bản.",
            "Cơ sở dữ liệu NoSQL cho phép lưu trữ dữ liệu không có cấu trúc.",
            "NoSQL không thích hợp để lưu trữ dữ liệu có cấu trúc.",
            "NoSQL là một định dạng dữ liệu mới để lưu trữ các tập dữ liệu lớn."
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option
    },
    {
        question: "Cloudera phát triển công cụ nào ?",
        options: [
            "HCatalog",
            "Hbase",
            "Imphala",
            "Oozie"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Hbase"
    },
    {
        question: "Loại nào không phải là CSDL NoSQL ?",
        options: [
            "SQL Server",
            "MongoDB",
            "Cassandra",
            "Không có"
        ],
        correctAnswer: 0 // Index 0 corresponds to "SQL Server"
    },
    {
        question: "Đâu là một kiểu của CSDL NoSQL",
        options: [
            "SQL",
            "Document databases",
            "JSON",
            "Tất cả"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Document databases"
    },
    {
        question: "Chọn đúng 5 đặc trưng cho Big Data ?",
        options: [
            "Volume, Velocity, Variety, Veracity, Value",
            "Volume, Videos, Velocity, Variability, Value",
            "Volume, Variability, Veracity, Visualization, Value",
            "Volume, Velocity, Veracity, Visualization, Value"
        ],
        correctAnswer: 0 // Index 0 corresponds to the first option
    },
    {
        question: "Velocity (Tốc độ) là đặc trưng nói về?",
        options: [
            "Tốc độ gia tăng khối lượng dữ liệu lớn",
            "Tốc độ cập nhật dữ liệu lớn",
            "Tốc độ xử lý dữ liệu lớn",
            "Tốc độ lưu trữ dữ liệu lớn"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Tốc độ xử lý dữ liệu lớn"
    },
    {
        question: "Variety (Tính đa dạng) là đặc trưng về ?",
        options: [
            "Kiểu dữ liệu thu thập",
            "Kiểu nội dung dữ liệu",
            "Nguồn thu thập dữ liệu",
            "Phương thức xử lý dữ liệu"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Kiểu dữ liệu thu thập"
    },
    {
        question: "Đặc trưng quan trọng nhất của Big Data?",
        options: [
            "Khối lượng",
            "Tính đa dạng",
            "Tốc độ",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Đâu là đặc trưng quyết việc triển khai Dữ liệu lớn?",
        options: [
            "Khối lượng",
            "Giá trị",
            "Tốc Độ",
            "Tính đa dạng"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Giá trị"
    },
    {
        question: "Tích hợp dữ liệu là quá trình ?",
        options: [
            "Kết hợp các dữ liệu không đồng nhất từ nhiều nguồn khác nhau",
            "Sao chép dữ liệu vào CSDL hệ thống để tiến hành phân tích",
            "Làm sạch các dữ liệu thu thập được từ các hệ thống thành phần",
            "Tăng giá trị từ các tài nguyên dữ liệu đang lưu trữ phân tán"
        ],
        correctAnswer: 0 // Index 0 corresponds to the first option
    },
    {
        question: "Thuật ngữ Thuật ngữ Dữ liệu lớn ra đời năm nào?",
        options: [
            "1997",
            "2000",
            "1998",
            "1941"
        ],
        correctAnswer: 0 // Index 0 corresponds to "1997"
    },
    {
        question: "Các dạng thức khoa học dữ liệu của Jim Gray?",
        options: [
            "Thực nghiệm",
            "Lý thuyết",
            "Tính toán",
            "Tất cả các ý"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả các ý"
    },
    {
        question: "Phát biểu nào không phải dạng thức nghiên cứu Khoa học dữ liệu của Jim Gray?",
        options: [
            "Khai thác dữ liệu",
            "Mô phỏng",
            "Tính toán",
            "Thực nghiệm"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Mô phỏng"
    },
    {
        question: "Đâu không phải là phương thức xử lý dữ liệu lớn?",
        options: [
            "Thu thập (acquire)",
            "Đánh giá (reviews)",
            "Tổ chức (organize)",
            "Phân tích (analyze)"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Đánh giá (reviews)"
    },
    {
        question: "RDBMS là gì ?",
        options: [
            "Relational Database Management System",
            "Relat Data Management System",
            "Relational Database Microsoft System",
            "Tất cả"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Relational Database Management System"
    },
    {
        question: "Thị trường Big Data bao gồm:",
        options: [
            "Phần cứng",
            "Phần Mềm",
            "Tất cả",
            "Dịch vụ"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Tất cả"
    },
    {
        question: "Nhược điểm của tích hợp dữ liệu theo phương pháp Tight Coupling",
        options: [
            "Độ trễ",
            "Phản hồi truy vấn",
            "Phụ thuộc vào nguồn dữ liệu",
            "Tất cả"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Độ trễ"
    },
    {
        question: "Nhược điểm của tích hợp dữ liệu theo phương pháp Loose Coupling",
        options: [
            "Tất cả",
            "Chi phí cao",
            "Độ trễ",
            "Phụ thuộc mạng / băng thông"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Phụ thuộc mạng / băng thông"
    },
    {
        question: "Công cụ nào hỗ trợ tốt NoSQL?",
        options: [
            "SAP Data Services",
            "Oracle Data Integrator",
            "SQL Server Integration Services",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Công cụ tích hợp dữ liệu Boomi là của?",
        options: [
            "Dell",
            "IBM",
            "Microsoft",
            "SAP"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Dell"
    },
    {
        question: "Công cụ SQL Server Integrator do ai phát triển ?",
        options: [
            "Oracle",
            "IBM",
            "Microsoft",
            "SAP"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Microsoft"
    },
    {
        question: "SAP Data Service là công cụ để làm gì ?",
        options: [
            "Lưu trữ dữ liệu",
            "Tích hợp dữ liệu",
            "Phân tích dữ liệu",
            "Tất cả"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Tích hợp dữ liệu"
    },
    {
        question: "Hệ quản trị CSLD DynamoDB là kiểu nào ?",
        options: [
            "Key value",
            "Wide Column based",
            "Document based",
            "Graph based"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Key value"
    },
    {
        question: "Hệ quản trị CSLD MongoDB là kiểu nào ?",
        options: [
            "Document based",
            "Key value",
            "Wide Column based",
            "Graph based"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Document based"
    },
    {
        question: "Hệ quản trị CSLD Neo4J là kiểu nào ?",
        options: [
            "Key value",
            "Wide Column based",
            "Document based",
            "Graph based"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Graph based"
    },
    {
        question: "Hệ quản trị CSLD IBM Graph là kiểu nào ?",
        options: [
            "Key value",
            "Document based",
            "Graph based",
            "Wide Column based"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Graph based"
    },
    {
        question: "Hệ quản trị CSLD Google Big Table là kiểu nào ?",
        options: [
            "Key value",
            "Wide Column based",
            "Document based",
            "Graph based"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Wide Column based"
    },
    {
        question: "Đâu không phải là RDBMS ?",
        options: [
            "IBM DB2",
            "MS SQL Server",
            "MS Access",
            "Cassandra"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Cassandra"
    },
    {
        question: "Loại nào là dữ liệu Bán cấu trúc ?",
        options: [
            "Tất cả",
            "JSON",
            "CSV",
            "XML"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Tất cả"
    },
    {
        question: "Loại nào là dữ liệu Unstructured ?",
        options: [
            "Video",
            "XML",
            "Table",
            "Tất cả"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Video"
    },
    {
        question: "Yếu tố nào quyết định để sử dụng NoSQL",
        options: [
            "Tốc độ gia tăng CSDL",
            "Tính đa dạng của dữ liệu",
            "Tốc độ truy cập dữ liệu",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "CSDL nào không phải kiểu Key-Value:",
        options: [
            "MongoDB",
            "DynamoDB",
            "Redis",
            "Riak"
        ],
        correctAnswer: 0 // Index 0 corresponds to "MongoDB"
    },
    {
        question: "CSDL nào không phải kiểu Document:",
        options: [
            "MongoDB",
            "CouchDB",
            "Elasticsearch",
            "Riak"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Riak"
    },
    {
        question: "CSDL nào không phải kiểu Graph:",
        options: [
            "InfoGrid",
            "Hbase",
            "InfiniteGraph",
            "IBM Graph"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Hbase"
    },
    {
        question: "CSDL nào không phải kiểu Wide-Column:",
        options: [
            "Hbase",
            "Cassandra",
            "BigTable",
            "Dex"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Dex"
    },
    {
        question: "Ưu điểm của hệ thống HDFS là gì ?",
        options: [
            "Lưu trữ phân tán, xử lý song song, khả năng chịu lỗi cao",
            "Lưu trữ song song, xử lý phân tán, tính sẵn sàng cao",
            "Xử lý phân tán song song, khả năng chịu lỗi chấp nhận sai sót",
            "Tất cả"
        ],
        correctAnswer: 0 // Index 0 corresponds to the first option
    },
    {
        question: "Ưu điểm của DFS là gì ?",
        options: [
            "Hệ thống lưu trữ song song nên tránh được ảnh hưởng khi một máy chủ hoặc bộ nhớ bị lỗi",
            "Hệ thống được sao lưu tại Server thứ hai nên đảm bảo việc cung cấp dữ liệu",
            "Khi một máy chủ hoặc bộ nhớ bị lỗi, hệ thống tệp phân tán vẫn đảm bảo có thể cung cấp dữ liệu ổn định",
            "Tất cả"
        ],
        correctAnswer: 2 // Index 2 corresponds to the third option
    },
    {
        question: "Ưu điểm của công nghệ Cluster",
        options: [
            "Tất cả",
            "Hiệu quả chi phí",
            "TÍnh sẵn sàng cao",
            "Khả năng mở rộng linh hoạt"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Tất cả"
    },
    {
        question: "Cluster node có mấy loại ?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 1 // Index 1 corresponds to "2"
    },
    {
        question: "Nguồn của kiến trúc HDFS trong Hadoop có nguồn gốc là",
        options: [
            "Hệ thống tệp phân phối của Google",
            "Hệ thống tệp phân tán của Yahoo",
            "Hệ thống tệp phân tán của Facebook",
            "Hệ thống tệp phân tán Azure"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Hệ thống tệp phân phối của Google"
    },
    {
        question: "Loại dữ liệu mà Hadoop có thể xử lý là",
        options: [
            "Structred (Có cấu trúc)",
            "Semi-structured (Bán cấu trúc)",
            "Unstructured (Không có cấu trúc)",
            "All of the above (Tất cả những điều trên)"
        ],
        correctAnswer: 3 // Index 3 corresponds to "All of the above (Tất cả những điều trên)"
    },
    {
        question: "YARN là viết tắt của",
        options: [
            "Yahoo's another resource name",
            "Yet another resource negotiator",
            "Yahoo's archived Resource names",
            "Yet another resource need."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Yet another resource negotiator"
    },
    {
        question: "Điều nào sau đây không phải là mục tiêu của HDFS?",
        options: [
            "Phát hiện lỗi và khôi phục",
            "Xử lý tập dữ liệu khổng lồ",
            "Ngăn chặn việc xóa dữ liệu",
            "Cung cấp băng thông mạng cao để di chuyển dữ liệu"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Ngăn chặn việc xóa dữ liệu"
    },
    {
        question: "Trong HDFS, các tệp không thể",
        options: [
            "Đọc",
            "Xóa",
            "Thực thi",
            "Lưu trữ"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Thực thi"
    },
    {
        question: "So với RDBMS, Hadoop",
        options: [
            "Có tính toàn vẹn dữ liệu cao hơn.",
            "Có giao dịch ACID không",
            "Thích hợp để đọc và truy vấn nhanh",
            "Hoạt động tốt hơn trên dữ liệu phi cấu trúc và bán cấu trúc."
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option
    },
    {
        question: "Vấn đề chính gặp phải khi đọc và ghi dữ liệu song song từ nhiều đĩa là gì?",
        options: [
            "Xử lý khối lượng lớn dữ liệu nhanh hơn.",
            "Kết hợp dữ liệu từ nhiều đĩa.",
            "Phần mềm cần thiết để thực hiện nhiệm vụ này là cực kỳ tốn kém.",
            "Phần cứng cần thiết để thực hiện tác vụ này là cực kỳ tốn kém."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Kết hợp dữ liệu từ nhiều đĩa."
    },
    {
        question: "Tính năng định vị dữ liệu trong Hadoop có nghĩa là",
        options: [
            "lưu trữ cùng một dữ liệu trên nhiều nút.",
            "chuyển vị trí dữ liệu từ nút này sang nút khác.",
            "đồng định vị dữ liệu với các nút tính toán.",
            "Phân phối dữ liệu trên nhiều nút."
        ],
        correctAnswer: 2 // Index 2 corresponds to "đồng định vị dữ liệu với các nút tính toán."
    },
    {
        question: "Các tệp HDFS được thiết kế cho",
        options: [
            "Nhiều người viết và sửa đổi ở các hiệu số tùy ý.",
            "Chỉ nối vào cuối tệp.",
            "Chỉ ghi thành tệp một lần.",
            "Truy cập dữ liệu có độ trễ thấp."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Chỉ nối vào cuối tệp."
    },
    {
        question: "Hệ thống Apache Hadoop được viết bằng ngôn ngữ nào?",
        options: [
            "C ++",
            "Python",
            "Java",
            "Go"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Java"
    },
    {
        question: "Cái nào không phải là một trong đặc trưng 3Vs của dữ liệu lớn?",
        options: [
            "Vận tốc - Velocity",
            "Tính xác thực - Veracity",
            "Khối lượng - Volume",
            "Đa dạng - Variety"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Tính xác thực - Veracity"
    },
    {
        question: "Điều nào sau đây đúng đối với Hadoop?",
        options: [
            "Đây là một khung phân tán.",
            "Thuật toán chính được sử dụng trong đó là Map Reduce.",
            "Nó chạy có thể thực thi trên hạ tầng Cloud Computing.",
            "Tất cả đều đúng"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả đều đúng"
    },
    {
        question: "Loại nào sau đây lưu trữ dữ liệu?",
        options: [
            "Name node",
            "Data node",
            "Master node",
            "Không có"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Data node"
    },
    {
        question: "Node nào sau đây quản lý các nút khác?",
        options: [
            "Name node",
            "Data node",
            "Slave node",
            "Tất cả"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Name node"
    },
    {
        question: "Hadoop xử lý khối lượng lớn dữ liệu như thế nào?",
        options: [
            "Hadoop sử dụng song song rất nhiều máy. Điều này tối ưu hóa việc xử lý dữ liệu.",
            "Hadoop được thiết kế đặc biệt để xử lý lượng lớn dữ liệu bằng cách tận dụng phần cứng MPP.",
            "Hadoop gửi mã đến dữ liệu thay vì gửi dữ liệu đến mã.",
            "Hadoop sử dụng các kỹ thuật bộ nhớ đệm phức tạp trên NameNode để tăng tốc độ xử lý dữ liệu."
        ],
        correctAnswer: 2 // Index 2 corresponds to the third option
    },
    {
        question: "MapReduce do công ty nào phát triển ?",
        options: [
            "Apache",
            "Google",
            "IBM",
            "Amazon"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Google"
    },
    {
        question: "Dịch vụ đám mây nào hỗ trợ tốt cho Big Data ?",
        options: [
            "Amazon AWS",
            "Google Cloud",
            "Tất cả",
            "Microsoft Azure"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Tất cả"
    },
    {
        question: "Nhược điểm khi triển khai Big Data trên nền tảng Cloud Computing là?",
        options: [
            "Nhiều rủi ro cho hệ thống",
            "Không có ý đúng",
            "Tốc độ xử lý không đảm bảo",
            "Phân tích theo thời gian thực kém"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Không có ý đúng"
    },
    {
        question: "Mô hình Điện toán đám mây IaaS ?",
        options: [
            "Cơ sở hạ tầng dưới dạng dịch vụ",
            "Nền tảng dưới dạng dịch vụ",
            "Phần mềm dưới dạng dịch vụ",
            "Internet dưới dạng dịch vụ"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Cơ sở hạ tầng dưới dạng dịch vụ"
    },
    {
        question: "Mô hình Điện toán đám mây PaaS ?",
        options: [
            "Cơ sở hạ tầng dưới dạng dịch vụ",
            "Nền tảng dưới dạng dịch vụ",
            "Phần mềm dưới dạng dịch vụ",
            "Internet dưới dạng dịch vụ"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Nền tảng dưới dạng dịch vụ"
    },
    {
        question: "Mô hình Điện toán đám mây SaaS ?",
        options: [
            "Cơ sở hạ tầng dưới dạng dịch vụ",
            "Nền tảng dưới dạng dịch vụ",
            "Phần mềm dưới dạng dịch vụ",
            "Internet dưới dạng dịch vụ"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Phần mềm dưới dạng dịch vụ"
    },
    {
        question: "Lợi ích của Cloud Computing với Big Data là ?",
        options: [
            "Triển khai hạ tầng nhanh chóng",
            "Phân tích theo thời gian thực",
            "Tối ưu chi phí duy trì hoạt động",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Lợi ích vượt trội của Cloud Computing với Big Data là ?",
        options: [
            "Hạn chế đầu tư máy móc",
            "Phân tích theo thời gian thực",
            "Tối ưu chi phí duy trì hoạt động",
            "Tất cả"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Phân tích theo thời gian thực"
    },
    {
        question: "Dịch vụ lưu trữ dữ của Amazon – AWS là?",
        options: [
            "Amazon S3",
            "Amazon RDS",
            "Amazon Lambda",
            "EC2"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Amazon S3"
    },
    {
        question: "Dịch vụ lưu trữ của Microsoft Azure là ?",
        options: [
            "Virtual Machines",
            "Azure Function",
            "Azure Disk Storage",
            "Azure Cosmos DB"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Azure Disk Storage"
    },
    {
        question: "Dịch vụ lưu trữ của Google Cloud Platfom là?",
        options: [
            "Google Driver",
            "Goolge Functions",
            "Google Cloud Storage",
            "Google Cloud Datastore"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Google Cloud Storage"
    },
    {
        question: "Đám mây AWS cung cấp dịch vụ NoSQL Database",
        options: [
            "Amazon RDS",
            "Amazon EC2",
            "Amazon DynamoDB",
            "Amazon Container Service"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Amazon DynamoDB"
    },
    {
        question: "Đám mây Microsoft Azure cung cấp dịch vụ NoSQL Database",
        options: [
            "Table Storage",
            "SQL DB",
            "Azure Functions",
            "Cloud Service"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Table Storage"
    },
    {
        question: "Dịch vụ tích hợp dữ liệu trên đám mây trên Google Cloud Platform",
        options: [
            "Google Cloud Dataprep",
            "Google Cloud Data Fusion",
            "Google Data Catalog",
            "Google BigQuery"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Google Cloud Data Fusion"
    },
    {
        question: "Dịch vụ thông minh giúp khái phá, làm sạch dữ liệu trên Google Cloud Platform",
        options: [
            "Goolge Functions",
            "Google BigQuery",
            "Google Cloud Dataprep",
            "Google Data Catalog"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Google Cloud Dataprep"
    },
    {
        question: "Trên Google Cloud Platform dịch vụ nào quản lý CSDL NoQuery",
        options: [
            "Google Cloud Dataprep",
            "Google Data Catalog",
            "Google BigQuery",
            "Cloud Bigtable"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Cloud Bigtable"
    },
    {
        question: "Trên Google Cloud Platform dịch vụ nào quản lý danh mục dữ liệu",
        options: [
            "Google Data Catalog",
            "Google Cloud Dataprep",
            "Google Data Catalog",
            "Google BigQuery"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Google Data Catalog"
    },
    {
        question: "Trên Google Cloud Platform dịch vụ phân tích dữ liệu được cung cấp",
        options: [
            "Google Data Catalog",
            "Google BigQuery",
            "Google Cloud Dataprep",
            "Goolge Functions"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Google BigQuery"
    },
    {
        question: "Nền tảng Cloudera hỗ trợ hệ CSDL quan hệ nào?",
        options: [
            "MySQL",
            "Oracle",
            "PostgreSQL",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Hệ CSDL NoSQL trên nền tảng Cloudera là ?",
        options: [
            "Apache Accumulo",
            "DynamoDB",
            "AppEngine Datastore",
            "Table Storage"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Apache Accumulo"
    },
    {
        question: "Dich vụ phân tích dữ liệu lớn Cloudera cung cấp là?",
        options: [
            "Hadoop",
            "BigQuery",
            "Elastic MapReduce",
            "Không có"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Elastic MapReduce"
    },
    {
        question: "Cloudera Enterprise có thể được triển khai trên đám mây nào",
        options: [
            "Google Cloud",
            "Amazon AWS",
            "Tất cả",
            "Microsoft Azure"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Tất cả"
    },
    {
        question: "Công cụ trên Google Cloud Platform chuyển đổi dữ liệu hỗ trợ quyết định",
        options: [
            "Google Cloud",
            "Google Data Catalog",
            "Google Data Studio",
            "Goolge Functions"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Google Data Studio"
    },
    {
        question: "Mô hình chính dành cho Điện toán đám mây ?",
        options: [
            "Cơ sở hạ tầng dưới dạng dịch vụ (IaaS)",
            "Tất cả",
            "Nền tảng dưới dạng dịch vụ (PaaS)",
            "Phần mềm dưới dạng dịch vụ (SaaS)"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Tất cả"
    },
    {
        question: "Kiểu phân tích dữ liệu nào cho ta biết điều gì đã xảy ra ?",
        options: [
            "Descriptive Analysis",
            "Diagnostic Analysis",
            "Predictive Analysis",
            "Prescriptive Analysis"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Descriptive Analysis"
    },
    {
        question: "Kiểu phân tích dữ liệu nào chuẩn đoán lý do cho kết quả ?",
        options: [
            "Descriptive Analysis",
            "Diagnostic Analysis",
            "Predictive Analysis",
            "Prescriptive Analysis"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Diagnostic Analysis"
    },
    {
        question: "Kiểu phân tích dữ liệu nào dự đoán điều sẽ xảy ra ?",
        options: [
            "Descriptive Analysis",
            "Diagnostic Analysis",
            "Predictive Analysis",
            "Prescriptive Analysis"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Predictive Analysis"
    },
    {
        question: "Kiểu phân tích nào để hỗ trợ đưa ra quyết định ?",
        options: [
            "Descriptive Analysis",
            "Diagnostic Analysis",
            "Predictive Analysis",
            "Prescriptive Analysis"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Prescriptive Analysis"
    },
    {
        question: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết điều gì đã xảy ra ?",
        options: [
            "Phân tích mô tả",
            "Phân tích chuẩn đoán",
            "Phân tích dự đoán",
            "Phân tích đề xuất"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Phân tích mô tả"
    },
    {
        question: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết tại sao điều đó xảy ra ?",
        options: [
            "Phân tích mô tả",
            "Phân tích chuẩn đoán",
            "Phân tích dự đoán",
            "Phân tích đề xuất"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Phân tích chuẩn đoán"
    },
    {
        question: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết điều gì sẽ xảy ra ?",
        options: [
            "Phân tích mô tả",
            "Phân tích chuẩn đoán",
            "Phân tích dự đoán",
            "Phân tích đề xuất"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Phân tích dự đoán"
    },
    {
        question: "Loại phân tích dữ liệu nào kết quả thu được cho ta biết làm thể nào để nó xảy ra",
        options: [
            "Phân tích mô tả",
            "Phân tích chuẩn đoán",
            "Phân tích dự đoán",
            "Phân tích đề xuất"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Phân tích đề xuất"
    },
    {
        question: "Mục tiêu đúng nhất của phân tích dữ liệu lớn là gì ?",
        options: [
            "Biến dữ liệu thành thông tin chi tiết hữu ích",
            "Sắp xếp dữ liệu có ích để sử dụng",
            "Tạo ra các dữ liệu phù hợp nhất với hệ thống",
            "Xây dựng hệ thống để quản lý dữ liệu lớn"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Biến dữ liệu thành thông tin chi tiết hữu ích"
    },
    {
        question: "Hoạt động của Map Reduce bao gồm:",
        options: [
            "Trộn & sắp xếp - Map - Reduce",
            "Map - Trộn & sắp xếp – Reduce",
            "Reduce - Map - Trộn & sắp xếp",
            "Sắp xếp - Trộn & Map – Reduce"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Map - Trộn & sắp xếp – Reduce"
    },
    {
        question: "Phân tích chuẩn đoán sử dụng kỹ thuật nào ?",
        options: [
            "Lấy mẫu dữ liệu",
            "Tương quan phân bổ",
            "Thu tập dữ liệu",
            "Khai phá dữ liệu"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Khai phá dữ liệu"
    },
    {
        question: "Phân tích chuẩn đoán sử dụng kỹ thuật nào ?",
        options: [
            "Lấy mẫu mô tả",
            "Tương quan phân bổ",
            "Khôi phục dữ liệu",
            "Thu tập dữ liệu"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Khôi phục dữ liệu"
    },
    {
        question: "Phân tích mô tả không phù hợp sử dụng để ?",
        options: [
            "Xây dựng các báo cáo",
            "Lập bảng số liệu truyền thông",
            "Mô hình hoá dữ liệu quá khứ",
            "Phân tích tương quan"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Phân tích tương quan"
    },
    {
        question: "Đâu là phân tích chuẩn đoán ?",
        options: [
            "Mô tả tương quan dữ liệu",
            "Cung cấp cái nhinh sâu sắc về vấn đề",
            "Phân tích sự bất thường từ dữ liệu lưu trữ",
            "Mô hình hoá dữ liệu theo điều kiện"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Cung cấp cái nhinh sâu sắc về vấn đề"
    },
    {
        question: "Trong MapReduce loại nào sau đây theo dõi quá trình tiêu thụ tài nguyên trên Cluster Node?",
        options: [
            "Name node",
            "Master node",
            "Single Master",
            "Slave node"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Master node"
    },
    {
        question: "Trong MapReduce loại nào sau đây thực thi các tác vụ và cung cấp thông tin trạng thái tác vụ?",
        options: [
            "Name node",
            "Master node",
            "Single Master",
            "Slave node"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Slave node"
    },
    {
        question: "Trong MapReduce loại nào sau đây được cung cấp task-status?",
        options: [
            "Name node",
            "JobTracker",
            "Single Master",
            "Slave node"
        ],
        correctAnswer: 1 // Index 1 corresponds to "JobTracker"
    },
    {
        question: "Mô hình MapReduce có thể chạy trên số lượng máy chủ?",
        options: [
            "Vài máy",
            "Hàng nghìn máy",
            "Hàng trăm máy",
            "Một máy chủ Master"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Hàng nghìn máy"
    },
    {
        question: "Mô hình MapReduce thuộc lớp nào ?",
        options: [
            "Lớp lưu trữ dữ liệu",
            "Lớp thu thập dữ liệu",
            "Lớp xử lý dữ liệu",
            "Lớp phân tích dữ liệu"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Lớp xử lý dữ liệu"
    },
    {
        question: "Lợi ích từ Phân tích dữ liệu lớn là ?",
        options: [
            "Tất cả",
            "Ra quyết định nhanh hơn, tốt hơn",
            "Giảm chi phí và tăng hiệu quả hoạt động",
            "Cải tiến theo định hướng dữ liệu cho thị trường"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Tất cả"
    },
    {
        question: "Các ứng dụng phân tích dữ liệu lớn cho Lĩnh vực bán lẻ",
        options: [
            "Dự đoán hành vi mua sắm của khách hàng",
            "Xây dựng mô hình chi tiêu cho từng khách hàng",
            "Phân tích hành trình của khách hàng",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Ứng dụng phân tích dữ liệu lớn hỗ trợ ngành Y tế",
        options: [
            "Tăng việc khai thác tối ưu hoá máy móc",
            "Tăng doanh thu từ phần mềm y tế",
            "Tăng tinh chính xác của chẩn đoán",
            "Tất cả"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Tăng tinh chính xác của chẩn đoán"
    },
    {
        question: "Trong kiến trúc Apache Hadoop MapReduce là",
        options: [
            "Lớp lưu trữ",
            "Lớp truyền tải",
            "Lớp quản lý tài nguyên",
            "Lớp xử lý dữ liệu"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Lớp xử lý dữ liệu"
    },
    {
        question: "Kiến trúc Hadoop hỗ trợ những ngôn ngữ nào",
        options: [
            "Java",
            "Tất cả",
            "C++",
            "Python"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Tất cả"
    },
    {
        question: "Spark được Apache Software Foundation phát triển từ năm nào",
        options: [
            "1993",
            "2013",
            "2009",
            "2007"
        ],
        correctAnswer: 1 // Index 1 corresponds to "2013"
    },
    {
        question: "Apache Kafka là công cụ hỗ trợ ?",
        options: [
            "Xử lý phân tán",
            "Lưu trữ phân tán",
            "Hệ quản trị CSDL",
            "Thu tập dữ liệu"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Xử lý phân tán"
    },
    {
        question: "Apache Storm là công cụ hỗ trợ?",
        options: [
            "Xử lý phân tán",
            "Lưu trữ phân tán",
            "Phân tích dữ liệu",
            "Thu tập dữ liệu"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Phân tích dữ liệu"
    },
    {
        question: "Đâu không phải là chế độ hoạt động của Hadoop?",
        options: [
            "Chế độ phân phối giả",
            "Chế độ phân phối toàn cầu",
            "Chế độ độc lập",
            "Chế độ phân phối hoàn toàn"
        ],
        correctAnswer: 1 // Index 1 corresponds to "Chế độ phân phối toàn cầu"
    },
    {
        question: "Các tệp HDFS được thiết kế cho",
        options: [
            "Nhiều người viết và sửa đổi ở các hiệu số tùy ý.",
            "Chỉ nối vào cuối tệp",
            "Chỉ ghi thành tệp một lần.",
            "Truy cập dữ liệu có độ trễ thấp."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Chỉ nối vào cuối tệp"
    },
    {
        question: "Tính năng định vị dữ liệu trong Hadoop có nghĩa là",
        options: [
            "Lưu trữ cùng một dữ liệu trên nhiều nút.",
            "Chuyển vị trí dữ liệu từ nút này sang nút khác.",
            "Đồng định vị dữ liệu với các nút tính toán.",
            "Phân phối dữ liệu trên nhiều nút."
        ],
        correctAnswer: 2 // Index 2 corresponds to "Đồng định vị dữ liệu với các nút tính toán."
    },
    {
        question: "Khó khăn khi đọc và ghi dữ liệu song song từ nhiều nguồn là gì?",
        options: [
            "Xử lý khối lượng lớn dữ liệu nhanh hơn.",
            "Kết hợp dữ liệu từ nhiều nguồn.",
            "Phần mềm cần thiết để thực hiện nhiệm vụ này là cực kỳ tốn kém.",
            "Phần cứng cần thiết để thực hiện tác vụ này là cực kỳ tốn kém."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Kết hợp dữ liệu từ nhiều nguồn."
    },
    {
        question: "So với RDBMS, Hadoop",
        options: [
            "Có tính toàn vẹn dữ liệu cao hơn.",
            "Có giao dịch ACID không",
            "Nó thích hợp để đọc và viết nhiều lần",
            "Hoạt động tốt hơn trên dữ liệu phi cấu trúc và bán cấu trúc."
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option
    },
    {
        question: "Yếu tố giới hạn hiện tại đối với kích thước của một cụm hadoop là",
        options: [
            "Nhiệt lượng dư thừa tạo ra trong trung tâm dữ liệu",
            "Giới hạn trên của băng thông mạng",
            "Giới hạn trên của RAM trong NameNode",
            "4000 datanode"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Giới hạn trên của RAM trong NameNode"
    },
    {
        question: "Trong HDFS, các tệp không thể",
        options: [
            "Đọc",
            "Xoá",
            "Thực thi",
            "Lưu trữ"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Thực thi"
    },
    {
        question: "Điều nào sau đây không phải là mục tiêu của HDFS?",
        options: [
            "Phát hiện lỗi và khôi phục",
            "Xử lý tập dữ liệu khổng lồ",
            "Ngăn chặn việc xóa dữ liệu",
            "Cung cấp băng thông mạng cao để di chuyển dữ liệu"
        ],
        correctAnswer: 2 // Index 2 corresponds to "Ngăn chặn việc xóa dữ liệu"
    },
    {
        question: "YARN là viết tắt của",
        options: [
            "Yahoo's another resource name",
            "Yet another resource negotiator",
            "Yahoo's archived Resource names",
            "Yet another resource need."
        ],
        correctAnswer: 1 // Index 1 corresponds to "Yet another resource negotiator"
    },
    {
        question: "Kiến trúc HDFS trong Hadoop có nguồn gốc là",
        options: [
            "Hệ thống tệp phân phối của Google",
            "Hệ thống tệp phân tán của Yahoo",
            "Hệ thống tệp phân tán của Facebook",
            "Hệ thống tệp phân tán của Azure"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Hệ thống tệp phân phối của Google"
    },
    {
        question: "HDFS là viết tắt của",
        options: [
            "Hệ thống tệp phân tán cao. (Highly distributed file system.)",
            "Hệ thống tệp được hướng dẫn Hadoop. (Hadoop directed file system)",
            "Hệ tệp phân tán cao. (Highly distributed file shell)",
            "Hệ thống tệp phân tán Hadoop. (Hadoop distributed file system)"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Hệ thống tệp phân tán Hadoop. (Hadoop distributed file system)"
    },
    {
        question: "Thành phân nào không thuộc Hadoop?",
        options: [
            "YARN",
            "HDFS",
            "MapReduce",
            "GFS"
        ],
        correctAnswer: 3 // Index 3 corresponds to "GFS"
    },
    {
        question: "Thành phần chính của hệ thống Hadoop là ?",
        options: [
            "MapReduce",
            "HDFS",
            "YARN",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    },
    {
        question: "Apache Kafka là nền tảng mở được phát triển bởi ?",
        options: [
            "Linkedln",
            "Facebook",
            "Google",
            "IBM"
        ],
        correctAnswer: 0 // Index 0 corresponds to "Linkedln"
    },
    {
        question: "Công cụ nào hỗ trợ tích hợp dữ liệu",
        options: [
            "Dell Boomi",
            "Snaplogic",
            "SAP Data Services",
            "Tất cả"
        ],
        correctAnswer: 3 // Index 3 corresponds to "Tất cả"
    }
];

// Export the questions array
window.questions = questions;
