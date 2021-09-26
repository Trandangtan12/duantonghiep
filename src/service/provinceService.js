import ProvinceAPI from "../api/provinceAPI"
import { API_GET_PROVINCE } from "../config"

export const ProvinceService = {
    getAllProvince() {
        return ProvinceAPI.get(API_GET_PROVINCE)
    }
}
