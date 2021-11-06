import alertify from "alertifyjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Input from "../../../../compornent/admin/input/Input";
import DatePickerForm from "../../../../compornent/datePicker";
import TextArea from "../../../../compornent/textarea";
import UploadFile from "../../../../compornent/uploadFile";
import firebase from "../../../../firebase";
import { actionGetAllBusesTypes, actionGetService } from "../../../../redux/actions/buses";
import { getAllProvince } from "../../../../redux/actions/province";
import { BusesService } from "../../../../service/productService";
import { ProvinceService } from "../../../../service/provinceService";
import CarTypeSelecect from "./components/CarTypeSelecect";
import LocationSelect from "./components/LocationSelect";
import ServiceSelect from "./components/ServiceSelect";
import { initialValues } from "./hookFormConfig";
import { InputNumberStyle, TIME_TODAY, TODAY } from "./utility";

const EditBusses = () => {
  const { id } = useParams();
  const history = useHistory();
  const { city } = useSelector((state) => state.province);
  const [urlImage, setUrlImage] = useState("");
  const dispatch = useDispatch();
  const [cityValue, setVityValue] = useState([]);
  const {availableService , availableBusesTypes} = useSelector(state => state.buses)
  const [serviceValues, setServiceValues] = useState([]);
  const serviceFilter = availableService.map((service) =>{
    return {
      label : service.name,
      value : service.id
    }
  })
  const busesTypeFilter = availableBusesTypes.map((type) =>{
    return {
      label : type.name,
      value : type.id
    }
  })
  const [districtValue, setdistrictValue] = useState([]);
  const [wardValue, setWardValue] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const handleUploadImageToFirebase = (file, setUrl) => {
    let storeRef = firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then((e) => {
      storeRef.getDownloadURL().then(async (url, e) => {
        setUrl(url);
        setValue('image' , url)
      });
    });
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    handleUploadImageToFirebase(file, setUrlImage);
  };
  const handleChangeDescriptionImage = (e) => {
    for (var i = 0; i < e.target.files.length; i++) {
      var imageFile = e.target.files[i];
      handleUploadImageToFirebase(imageFile);
    }
  };
  const handleChangeStartTime = (date) => {
    const startDateConvert = moment(date).format("YYYY-MM-DD");
    const startTime = moment(date).format('H:mm')
    setStartDate(date);
    setValue("date_active", startDateConvert);
    setValue('start_time', startTime)
  };
  const handlechangeTypeCar = (type) => {
    setValue('cartype_id',type.value)
  };
  const handleChangeService = (services) =>{
    const serviceFilter = services.map(service =>{
      return service.value
    })
    setServiceValues(services)
    setValue('service_id' , serviceFilter)
  }
  const onChangeCity = async (pointName, pointId, original) => {
    setValue(pointId, original.value);
    setValue(pointName, original.label);
    setdistrictValue([]);
    const districtRes = await ProvinceService.getDistrict(original.value);
    if (districtRes.status === 200) {
      const districtFilter = districtRes.data.districts.map((districts) => {
        return {
          value: districts.code,
          label: districts.name,
        };
      });
      setdistrictValue(districtFilter);
    }
  };
  const onChangeWard = async (id) => {
    const wardRes = await ProvinceService.getWard(id);
    if (wardRes.status === 200) {
      const wardFilter = wardRes.data.wards.map((ward) => {
        return {
          value: ward.code,
          label: ward.name,
        };
      });
      setWardValue(wardFilter);
    }
  };
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = (data) => {
    alertify.confirm("Thêm chuyến xe", async function () {
      const res = await BusesService.updateBusses(id,data);
      if (res) {
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Thêm thành công !");
        history.push("/admin/buses");
      }
    });
  };
  const [infoBusses, setInfoBusses] = useState({});
  const  {name , cartype_id, route_id , image , seat , price , status , start_time , description} = infoBusses
  useEffect(() => {
    const getInfoBusses = async () => {
      const res = await BusesService.getInfoBuses(id);
      if (res) {
        setInfoBusses(res.data);
        reset(res.data)
      }
    };
    getInfoBusses();
  }, []);
  return (
    <>
    <div>
      <section className="bg-blueGray-50">
        <div className="">
          <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded-lg bg-blueGray-100 tw-border-0">
            <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-px-6 tw-py-6 ">
              <div className="tw-text-center tw-flex tw-justify-between">
                <h6 className="text-blueGray-700 tw-text-xl tw-font-bold">
                  Cập nhật chuyến xe
                </h6>
                <button
                  className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
                  type="button"
                  onClick={() => {
                    history.push("/admin/buses");
                  }}
                >
                  Quay lại
                </button>
              </div>
            </div>
            <div className=" tw-flex-auto lg:tw-px-3">
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="tw-mb-2 tw-flex tw-justify-between lg:tw-px-3 tw-px-3 tw-gap-2">
                  <div className="sm:tw-w-full lg:tw-w-6/12">
                    <img src={urlImage} alt="" />
                    <UploadFile
                      label={"Ảnh đại diện"}
                      onChange={handleChangeImage}
                      type="file"
                    />
                  </div>
                  <div className="lg:tw-w-6/12">
                    <UploadFile
                      label={"Ảnh mô tả"}
                      onChange={handleChangeDescriptionImage}
                      type="file"
                      multiple={true}
                    />
                  </div>
                </div>
                <div className="tw-flex tw-flex-wrap">
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <Input
                        lable="Tên chuyến xe"
                        placeholder="Tên chuyến xe"
                        type="text"
                        defaultValue=""
                        register={register}
                        fieldName={"name"}
                      />
                    </div>
                  </div>
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <InputNumberStyle>
                        <Input
                          lable="Giá"
                          placeholder="Giá"
                          type="number"
                          register={register}
                          fieldName={"price"}
                        />
                      </InputNumberStyle>
                    </div>
                  </div>
                </div>
                <div className="tw-flex tw-flex-wrap">
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <InputNumberStyle>
                        <Input
                          lable="Số ghế"
                          placeholder="Số ghế"
                          type="number"
                          register={register}
                          fieldName={"seat"}
                        />
                      </InputNumberStyle>
                    </div>
                  </div>
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <label
                        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                        htmlfor="grid-password"
                      >
                        Thời gian xuất phát
                      </label>
                      <DatePickerForm
                        startDate={startDate}
                        onChange={(date) => {
                          handleChangeStartTime(date);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="tw-flex tw-flex-wrap">
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <CarTypeSelecect
                        title="Loại xe"
                        options={busesTypeFilter}
                        placeholder={"loại xe"}
                        handleChange={handlechangeTypeCar}
                      />
                    </div>
                  </div>
                  <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                    <div className="tw-relative tw-w-full tw-mb-3">
                      <ServiceSelect
                        title="Loại dịch vụ "
                        options={serviceFilter}
                        placeholder={"Loại dịch vụ"}
                        handleChange={handleChangeService}
                        values={serviceValues}
                      />
                    </div>
                  </div>
                </div>
                <LocationSelect
                  provinceFilter={provinceFilter}
                  onChangeCity={onChangeCity}
                  onChangeWard={onChangeWard}
                  setdistrictValue={setdistrictValue}
                  districtValue={districtValue}
                  wardValue={wardValue}
                  register={register}
                  pointName={"startPointName"}
                  pointId={"startPointId"}
                  title="Điểm đi"
                />
                <LocationSelect
                  provinceFilter={provinceFilter}
                  onChangeCity={onChangeCity}
                  onChangeWard={onChangeWard}
                  setdistrictValue={setdistrictValue}
                  districtValue={districtValue}
                  wardValue={wardValue}
                  register={register}
                  title="Điểm đến"
                  pointName={"endPointName"}
                  pointId={"endPointId"}
                />
                <TextArea
                  title="Ghi chú"
                  placeholder="Nhập mô tả"
                  fieldName="description"
                  register={register}
                />
                <footer className="">
                  <div className="container tw-mx-auto tw-px-4">
                    <div className="tw-flex tw-flex-wrap tw-items-center md:tw-justify-end tw-justify-center tw-mb-10 tw-gap-5">
                      <button
                        type="submit"
                        className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
                      >
                        Tạo mới
                      </button>
                    </div>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default EditBusses;
