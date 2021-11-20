import * as Yup from "yup";
export const initialValues = {
  name: "",
  price: "",
  cartype_id: "",
  seat: "",
  date_active: "",
  start_time: "",
  description: "",
  startPointName: "",
  startPointId: "",
  endPointName: "",
  endPointId: "",
  service_id: [],
  startWard_id: "",
  startWard_name: "",
  startDisrict_id: "",
  startDistrict_name: "",
  endWard_id: "",
  endWard_name: "",
  endDisrict_id: "",
  endDistrict_name: "",
  seat_empty: 0,
};

export const validationSchema = Yup.object().shape({
  name : Yup.string().required(),
  price : Yup.string().required(),
  seat : Yup.string().required(),
  startPointId : Yup.string().required(),
  endPointId : Yup.string().required(),
  cartype_id:  Yup.string().required()
});
