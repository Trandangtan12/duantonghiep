import { ProvinceService } from "../../service/provinceService";

export const ACTION_GET_ALL_PROVINCE = "ACTION_GET_ALL_PROVINCE";

export const getAllProvince = () => {
  return async (dispatch) => {
    const res = await ProvinceService.getAllCity();
    console.log(res);
    if (res.status !== 200) {
      return;
    } else {
    let data = res.data || [];
    dispatch({
        type : ACTION_GET_ALL_PROVINCE , 
        payload : data || []
    })
    }
  };
};
