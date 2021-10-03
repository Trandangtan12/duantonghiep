import Icon from '../compornent/Icon';

//tất cả đường dẫn api ở đây
export const API_GET_PROVINCE = "/?depth=2"
//================API=================
export const API_GET_BUSES = '/products'

const user  = Icon.Close

//==============href NAV MENU=============
export const NAV_LINK_LIST = [
    {
        label : "Trang chủ",
        href : "/",
        icon : user
    },
    {
        label : "Xe limousin",
        href : "/new"
    },
    {
        label : "Xe 4 chỗ",
        href : "/new"
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