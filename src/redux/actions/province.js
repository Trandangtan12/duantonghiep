import { ProvinceService } from "../../service/provinceService";

export const ACTION_GET_ALL_PROVINCE = "ACTION_GET_ALL_PROVINCE";
export const ACTION_GET_ALL_WARD_PROVINCE = "ACTION_GET_ALL_WARD_PROVINCE";


export const getAllProvince = () => {
  return async (dispatch) => {
    const res = await ProvinceService.getAllCity();
    if (res.status !== 200) {
      return;
    } else {
      let data = res.data || [];
      dispatch({
        type: ACTION_GET_ALL_PROVINCE,
        payload: data || []
      })
    }
  };
};

export const getAllWardProvince = () => {
  return async (dispatch) => {
    const res = await ProvinceService.getAllWard();
    if (res.status !== 200) {
      return;
    } else {
      let data = res.data || [];
      dispatch({
        type: ACTION_GET_ALL_WARD_PROVINCE,
        payload: data || []
      })
    }
  };
};
