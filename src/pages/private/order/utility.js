export const ACTIVED = "ACTIVED"
export const WAITING_ACTIVE = "WAITING_ACTIVE"
export const REJECTED = "REJECTED"


export const listFilterStatus = [
    {
        type : ACTIVED , 
        name : "Đã kích hoạt",
    },
    {
        type : WAITING_ACTIVE , 
        name : "Chờ kích hoạt"
    },
    {
        type : REJECTED , 
        name : "Từ chối"
    }
]