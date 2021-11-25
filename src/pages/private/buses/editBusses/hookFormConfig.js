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
  name: Yup.string().required("Vui lòng nhập thông tin").max(100),
  price: Yup.number().required(`Không được để trống`).typeError('Nhập đúng định dạng sô').min(5000, "Giá nhỏ nhất 5000 Vnđ").max(10000000000, 'Giá lớn nhất 10000000000 Vnđ').integer('Vui lòng nhập đúng định dạng'),
  seat: Yup.number().required(`Không được để trống`).typeError('Nhập đúng định dạng sô').min(1,"Số ghế không nhỏ hơn 1").max(30, 'Số ghế không quá 30').integer('Vui lòng nhập đúng định dạng'),
  startPointId: Yup.string().required("Vui lòng nhập thông tin"),
  endPointId: Yup.string().required("Vui lòng nhập thông tin"),
  startWard_id : Yup.string().required("Vui lòng nhập thông tin"),
  service_id: Yup.array().min(1, "Vui lòng chọn dịch vụ").required("Vui lòng nhập thông tin"),
  startDisrict_id: Yup.string().required("Vui lòng nhập thông tin"),
  endWard_id: Yup.string().required("Vui lòng nhập thông tin"),
  endDisrict_id: Yup.string().required("Vui lòng nhập thông tin"),
  cartype_id: Yup.number().typeError('Vui lòng chọn loại xe').required("Vui lòng nhập thông tin"),
});