
import * as icon from '@fortawesome/fontawesome-free-solid'
import * as iconRegular from  '@fortawesome/fontawesome-free-regular'
//tất cả đường dẫn api ở đây
export const API_GET_PROVINCE = "/?depth=2"
//================API=================
export const API_GET_BUSES = '/demos'

export const API_GET_IMAGE = '/image'

const  {faChartArea , faCar , faCertificate, faNewspaper, faBus, faHome, faTicketAlt, faPercent, faAddressCard, faPhone} = icon
const {faAddressBook} = iconRegular
//==============href NAV MENU=============
export const NAV_LINK_LIST = [
    {
        label : "Limousin",
        link : "/new",
        icon: faCar
    },
    {
        label : "Xe 4 chỗ",
        link : "/new",
        icon: faCar
    },
    {
        label : "Xe 16 chỗ",
        href : "/new",
        icon: faBus
    },
    {
        label : "Liên hệ",
        href : "/contact",
        icon: faPhone
    },
    {
        label : "Tin tức",
        href : "/new",
        icon: faNewspaper
    }
]

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