
import * as icon from '@fortawesome/fontawesome-free-solid'
import * as iconRegular from '@fortawesome/fontawesome-free-regular'
//tất cả đường dẫn api ở đây
export const API_GET_ALL_CITY = "/"
export const API_GET_DISTRICTS = "/p"
export const API_GET_WARD = "/d"
//================API=================
export const API_GET_BUSES = '/buses'

export const API_GET_IMAGE = '/image'

export const API_GET_SERVICE = "/services"

export const API_GET_BUSES_TYPE = '/cartypes'

export const API_UPDATE_USER = "/users"

export const API_SEARCH = '/search'

export const API_TICKET = "/ticket"


export const isArrayEmpty = (arr) =>{
    return arr.length === 0
}

const { faChartArea, faCar, faBus  , faCertificate, faNewspaper, faStar ,faHome, faTicketAlt, faPercent, faAddressCard, faPhone , faHandshake , faUserAlt , faSignOutAlt  } = icon
const { faAddressBook } = iconRegular
//==============href NAV MENU=============
export const NAV_LINK_LIST = [
    {
        label: "Limousin",
        link: "/new",
        icon: faCar
    },
    {
        label: "Xe 4 chỗ",
        link: "/new",
        icon: faCar
    },
    {
        label: "Xe 16 chỗ",
        href: "/new",
        icon: faBus
    },
    {
        label: "Liên hệ",
        href: "/contact",
        icon: faPhone
    },
    {
        label: "Tin tức",
        href: "/new",
        icon: faNewspaper
    }
]

export const isEmptyObject = () =>{

}

export const MENU_BOTTOM_LIST = [
    {
        label: "Trang chủ",
        icon: faHome
    },
    {
        label: "Vé của bạn",
        icon: faTicketAlt
    },
    {
        label: "Ưu đãi",
        icon: faPercent
    },
    {
        label: "Hồ sơ",
        icon: faAddressCard
    }
]
export const NAV_LINK_LIST_ADMIN = [
    {
        label: "Dashboard",
        href: "dashboard",
        icon: faCertificate

    },
    {
        label: "Chuyến xe",
        href: "buses",
        icon: faBus
    },
    {
        label: "Loại xe",
        href: "vehicel-type",
        icon: faCar
    },
    {
        label: "Dịch vụ",
        href: "service",
        icon: faHandshake
    },
    {
        label: "Đánh giá",
        href: "review",
        icon: faStar
    },
    {
        label: "Tin tức",
        href: "new",
        icon: faNewspaper
    },
    {
        label: "Thống kê",
        href: "analytics",
        icon: faChartArea
    },
    {
        label: "Vé xe",
        href: "order",
        icon: faTicketAlt
    },
]


export const NAV_LINK_LIST_MY_TICKET = [
    {
        label: "Dashboard",
        href: "Thông tin tài khoản",
        icon: faUserAlt

    },
    {
        label: "Vé của tôi",
        href: "buses",
        icon: faTicketAlt
    },
    {
        label: "Đăng xuất",
        href: "vehicle-type",
        icon: faSignOutAlt
    },
]

export const IntroduceList = [
    {
        title: "Đặt vé trực tuyến trên SixLeaf",
        description: "Hầu hết khách du lịch Việt Nam thích đi du lịch đến điểm đến ưa thích của họ bằng đường bộ. Đó là do thực tế là một chuyến đi đường cho phép bạn thưởng thức vẻ đẹp phong cảnh theo tốc độ của riêng bạn. Hơn nữa, sự thoải mái khi đi trên một chiếc xe cùng gia đình và bạn bè của bạn là không gì sánh được. Bạn có thể chọn đặt xe taxi trực tuyến sẽ giúp hành trình của bạn không gặp rắc rối. Bạn chỉ cần truy cập cổng GoIbibo và chọn một chiếc taxi.",
        description1: "Do giao diện dễ sử dụng và các tùy chọn menu nhanh chóng của GoIbibo, việc đặt taxi trực tuyến không phải là một quá trình khó khăn. Trên thực tế, đặt xe taxi đã trở thành một phần trong cuộc sống hàng ngày của chúng ta. Bạn cũng có thể chọn thuê xe liên tỉnh để tham quan các thành phố khác.",
        description2: "Quá trình đặt taxi trực tuyến trên GoIbibo có thể được hoàn tất trong vòng vài phút. Vì vậy, nếu bạn muốn tùy chỉnh gói đặt xe taxi của mình, GoIbibo là trang web truy cập của bạn. Tất cả các dịch vụ đặt xe hiện có trên GoIbibo đều hướng tới việc mang đến cho bạn trải nghiệm tốt nhất có thể khi đặt xe.",
        description3: ""

    },
    {
        title: "Đặt xe trực tuyến",
        description: "Khi bạn chọn chúng tôi cho các yêu cầu đặt xe taxi của bạn, chúng tôi cung cấp cho bạn các dịch vụ cao cấp và quan trọng nhất là độ tin cậy cao. GoIbibo được coi là một trong những nền tảng đặt xe phổ biến nhất. Bên cạnh đó, bạn cũng có thể truy cập trang web để biết vé tàu, chuyến bay, xe buýt. Phần tốt nhất là bạn có thể nhận được những chiếc xe hàng đầu cho điểm đến ưa thích của mình.",
        description1: "Các chuyến đi đường bộ là một trong những cách thú vị nhất để đi du lịch khắp đất nước. Có quá nhiều thứ để trải nghiệm và khám phá. GoIbibo đảm bảo rằng chuyến đi của bạn là một trải nghiệm thú vị.",
        description2: "Quá trình đặt taxi trên GoIbibo khá đơn giản. Bạn chỉ cần đăng nhập vào trang web chính thức của GoIbibo và cung cấp tất cả các thông tin chi tiết được yêu cầu. Để đặt taxi, bạn phải điền thành phố xuất phát, điểm đến, ngày khởi hành và thời gian. Khi tất cả các chi tiết đã được điền, chỉ cần nhấp vào tùy chọn 'Tìm kiếm'.",
        description3: "Trên cổng thông tin, bạn sẽ nhận được một loạt các tùy chọn taxi với các mức giá khác nhau. Giá cả phụ thuộc vào nhiều yếu tố như loại taxi bạn chọn, tiện nghi trên xe được cung cấp, tuyến đường bạn đi cũng như ngày đi của bạn. Bạn có thể chọn một chiếc taxi đáp ứng yêu cầu đi lại của bạn."
    },
    {
        title: "Đặt xe để có một chuyến đi thú vị trên đường",
        description: "Du khách sẽ được tận hưởng vẻ đẹp tuyệt vời của thiên nhiên, những con đường cao tốc êm ả, tìm hiểu các nền văn hóa đa dạng và nếm thử các món ăn địa phương hấp dẫn một lần khi bạn đi nghỉ. Có rất nhiều điều bạn có thể khám phá trong một chuyến đi và GoIbibo sẽ là người bạn đồng hành trong chuyến hành trình của bạn.",
        description1: "Bạn có thể đặt taxi outstation để tham quan các điểm du lịch nổi tiếng như Delhi, Manali, Mumbai và Naintal hoặc những viên ngọc chưa được khám phá như Khajuraho, Alleppey, Alibag và Tranquebar đơn giản bằng cách đặt vé taxi trực tuyến. Lên kế hoạch cho một chuyến đi có thể khá phức tạp, nhưng hãy chọn đặt xe taxi trực tuyến của bạn trên GoIbibo để có quá trình dễ dàng hơn. Bạn có thể lựa chọn một loạt các loại xe taxi như hatchback, sedan, SUV, MPV, v.v. Bạn cũng có thể đặt một chiếc taxi outstation cho chuyến đi một chiều cũng như chuyến đi khứ hồi.",
        description2: "Trong trường hợp bạn có bất kỳ thắc mắc nào liên quan đến việc đặt vé, bạn có thể liên hệ với dịch vụ khách hàng 24/7 của GoIbibo và trao đổi với các chuyên gia về chuyến đi của bạn. Trong khi đặt xe ga với chúng tôi, bạn cũng có thể được hỗ trợ trong việc thảo luận về hành trình và lên kế hoạch cho chuyến đi của mình. Hơn nữa, tùy chọn sử dụng ứng dụng dành cho thiết bị di động sẽ giảm bớt sự phức tạp khi đặt taxi. Tất cả các dịch vụ do GoIbibo cung cấp đều có sẵn chỉ với một cú nhấp chuột. Hơn nữa, bạn cũng có thể nhận được các ưu đãi và chiết khấu hấp dẫn nếu đặt phòng qua GoIbibo.",
        description3: ""
    },
    {
        title: "Chọn SixLeaf để Đặt vé trực tuyến",
        description: "GoIbibo có thể giúp quá trình đặt xe taxi trực tuyến trở nên đơn giản hơn. Dưới đây, chúng tôi đề cập đến một số lý do tại sao mọi người chọn chúng tôi nhiều lần:"
    },
    {
        title: "Làm sạch ô tô",
        description: "Vệ sinh là ưu tiên hàng đầu của GoIbibo. Đó là lý do tại sao, họ đảm bảo rằng chiếc taxi bạn đặt là hoàn toàn sạch sẽ. Xem xét tình huống của Covid-19, chúng tôi đảm bảo rằng mọi chiếc xe đều được vệ sinh trước khi hành trình và tất cả các quy trình an toàn đều được tuân thủ triệt để. Nhiệt độ của tài xế được kiểm tra trước mỗi chuyến đi, và việc đeo khẩu trang là bắt buộc đối với hành khách cũng như tài xế."
    },
    {
        title: "Thanh toán minh bạch",
        description: "Hãy yên tâm, khi bạn chọn GoIbibo cho yêu cầu đặt xe taxi của mình, các dịch vụ được cung cấp ở mức giá hợp lý nhất. Bên cạnh đó, GoIbibo cũng duy trì tính minh bạch trong thanh toán 100%. Vì vậy, không có khoản phí ẩn nào liên quan từ đầu đến cuối cuộc hành trình của bạn. Bạn có thể chọn từ các phương thức thanh toán ưa thích của mình. Một số tùy chọn thanh toán có sẵn trên GoIbibo bao gồm thẻ ghi nợ, thẻ tín dụng, ngân hàng trực tuyến và UPI."
    },
    {
        title: "Dịch vụ đáng tin cậy",
        description: "Mỗi người đang tìm kiếm một trải nghiệm đáng tin cậy, ưu tiên các nhu cầu và mối quan tâm của họ. Đó là lý do tại sao, GoIbibo cung cấp trải nghiệm tuyệt vời cho người dùng khi họ đặt taxi trực tuyến. Bạn có thể kết nối với dịch vụ hỗ trợ khách hàng 24/7 của GoIbibo và giải quyết tất cả các thắc mắc liên quan đến đặt phòng của bạn. Từ việc cung cấp các dịch vụ tốt nhất để đảm bảo một chuyến đi an toàn, GoIbibo đảm bảo rằng chuyến đi của bạn sẽ thú vị."
    },
    {
        title: "Tài xế lịch sự",
        description: "Đối phó với những người bất lịch sự rất khó. Một cuộc chạm trán với một người thô lỗ có thể phá hỏng toàn bộ chuyến đi của chúng ta. Đó là lý do tại sao, GoIbibo đảm bảo rằng tài xế mà bạn nhận được là người lịch sự và hợp tác. Bạn có thể tìm thấy những tài xế được đánh giá cao nhất trên GoIbibo, những người sẽ giúp hành trình của bạn suôn sẻ và chuyến đi của bạn đáng nhớ."
    },
    {
        title: "Chuyên gia về chuyến đi đường bộ",
        description: "GoIbibo biến bạn thành một chuyên gia lập kế hoạch cho các chuyến đi. Việc dễ dàng tiếp cận tất cả các dịch vụ du lịch có thể giúp bạn lập kế hoạch du lịch một cách chính xác. Bạn có thể liên hệ với trung tâm khách hàng của GoIbibo. Nhóm của chúng tôi bao gồm các chuyên gia đưa ra các giải pháp tốt nhất cho các truy vấn của bạn. Do đó, đặt taxi với GoIbibo luôn là một trải nghiệm không có rắc rối. Cho dù đó là cho các chuyến đi tại nhà ga hay đi taxi sân bay , GoIbibo có thể đáp ứng tất cả các yêu cầu đi lại của bạn để bạn có thể đến điểm đến mong muốn một cách an toàn. GoIbibo tin tưởng vào việc đảm bảo an toàn, độ tin cậy và khả năng chi trả cho khách du lịch."
    }

]

export const QuestionList = [
    {
        title: "How can I book cheap cabs online?",
        description: "Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website &amp; app on online cab booking to get extra discounts"
    },
    {
        title: "What are the advantages of online taxi booking?",
        description: "Online taxi booking not only helps you with best prices but also helps you with the convenience of paying through multiple payment options (like Debit Card, Credit Card, eWallets etc.). You can easily compare prices and choose various categories of cabs like Hatchback cars, Sedan and SUV."
    },
    {
        title: "Why you should book cabs from Goibibo?",
        description: "From Goibibo you can get confirmed cheap cabs of your choice and budget. Expert and verified drivers will be taken care of your ride. Easy interface of booking with different payment modes available at Goibibo and finally with no hidden charges, Goibibo is the best option for online taxi booking."
    },
    {
        title: "How can I book cheap cabs online?",
        description: "Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website &amp; app on online cab booking to get extra discounts"
    },
    {
        title: "How can I book cheap cabs online?",
        description: "Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website &amp; app on online cab booking to get extra discounts"
    },
    {
        title: "How can I book cheap cabs online?",
        description: "Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website &amp; app on online cab booking to get extra discounts"
    },
    {
        title: "How can I book cheap cabs online?",
        description: "Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website &amp; app on online cab booking to get extra discounts"
    },
]