
import * as icon from '@fortawesome/fontawesome-free-solid'
import * as iconRegular from  '@fortawesome/fontawesome-free-regular'
//tất cả đường dẫn api ở đây
export const API_GET_PROVINCE = "/?depth=2"
//================API=================
export const API_GET_BUSES = '/products'

export const API_GET_IMAGE = '/image'

const  {faChartArea , faCar , faCertificate} = icon
const {faAddressBook} = iconRegular
//==============href NAV MENU=============
export const NAV_LINK_LIST = [
    {
        label : "Xe Limousin",
        link : "/new",
        icon: faCar
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
        href : "dashboard",
        icon : faCertificate
        
    },
    {
        label : "Quản lý chuyến xe",
        href : "buses",
        icon : faCar
    },
    {
        label : "Thống kê",
        href : "analytics",
        icon : faChartArea
    },
    {
        label : "Đơn hàng",
        href : "order",
        icon : faAddressBook
    },
]