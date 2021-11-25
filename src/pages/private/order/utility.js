export const ACTIVED = "ACTIVED"
export const WAITING_ACTIVE = "WAITING_ACTIVE"
export const REJECTED = "REJECTED"
export const ATM = "ATM"
export const OFFLINE = "OFFLINE"
export const DEPOSIT = "DEPOSIT"
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
    }
]