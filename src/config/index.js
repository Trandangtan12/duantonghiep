import Icon from "../compornent/Icon"

//tất cả đường dẫn api ở đây
export const API_GET_PROVINCE = "/?depth=2"
//================API=================
export const API_GET_BUSES = '/products'

const user  = Icon.Close

//==============href NAV MENU=============
export const NAV_LINK_LIST = [
    {
        label : "Xe Limousin",
        link : "/new",
        // icon: "https://static.thenounproject.com/png/511377-200.png"
    },
    {
        label : "Xe 4 chỗ",
        link : "/new",
        // icon: "https://i.pinimg.com/originals/95/69/69/956969895c373bd435ccaf2c2e1de4f2.jpg"
    },
    {
        label : "Xe 16 chỗ",
        href : "/new"
    },
    {
        label : "Liên hệ",
        href : "/contact",
    },
    {
        label : "Tin tức",
        href : "/new"
    }
]

export const MENU_BOTTOM_LIST = [
    {
        label: "Trang chủ"
    },
    {
        label: "Vé của bạn"
    },
    {
        label: "Ưu đãi"
    },
    {
        label: "Hồ sơ"
    }
]
export const NAV_LINK_LIST_ADMIN = [
    {
        label : "Dashboard",
        href : "/",
        icon : user
        
    },
    {
        label : "Quản lý chuyến xe",
        href : "/product",
        icon : user
    },
    {
        label : "Thống kê",
        href : "/contact",
        icon : user
    },
    {
        label : "Đơn hàng",
        href : "/contact",
        icon : user
    },
]