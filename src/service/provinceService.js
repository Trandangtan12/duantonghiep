import ProvinceAPI from "../api/provinceAPI"
import { API_GET_PROVINCE } from "../config"
import { v4 as uuidv4 } from 'uuid';
export const ProvinceService = {
    getAllProvince() {
        return ProvinceAPI.get(API_GET_PROVINCE,{
            params : {
                uuid : uuidv4()
            }
        })
    }
}
