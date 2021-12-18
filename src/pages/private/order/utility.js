export const ACTIVED = "ACTIVED"
export const WAITING_ACTIVE = "WAITING_ACTIVE"
export const REJECTED = "REJECTED"
export const ATM = "ATM"
export const OFFLINE = "OFFLINE"
export const DEPOSIT = "DEPOSIT"
export const DONE = "DONE"
export const UNCONFIMRED = "UNCONFIMRED"
export const listFilterStatus = [
    {
        type : ACTIVED , 
        name : "Đã thanh toán",
    },
    {
        type : WAITING_ACTIVE , 
        name : "Chưa thanh toán"
    },
    {
        type : REJECTED , 
        name : "Huỷ vé"
    },
    {
        type : DEPOSIT , 
        name : "Đã đặt cọc"
    },
    {
        type : DONE , 
        name : "Đã hoành thành"
    },
    {
        type : UNCONFIMRED , 
        name : "Chờ xác nhận"
    }
]

