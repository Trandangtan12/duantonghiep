import alertify from "alertifyjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Input from "../../../../compornent/admin/input/Input";
import DatePickerForm from "../../../../compornent/datePicker";
import TextArea from "../../../../compornent/textarea";
import firebase from "../../../../firebase";
import {
  actionGetAllBusesTypes,
  actionGetService,
} from "../../../../redux/actions/buses";
import { getAllProvince } from "../../../../redux/actions/province";
import { BusesService } from "../../../../service/productService";
import { ProvinceService } from "../../../../service/provinceService";
import CarTypeSelecect from "./components/CarTypeSelecect";
import LocationSelect from "./components/LocationSelect";
import ServiceSelect from "./components/ServiceSelect";
import { InputNumberStyle } from "./utility";
const EditBusses = () => {
  const [fileName, setFileName] = useState("");
  const { id } = useParams();
  const [infoBusses, setInfoBusses] = useState({});
  const history = useHistory();
  const { city } = useSelector((state) => state.province);
  const [urlImage, setUrlImage] = useState(null);
  const dispatch = useDispatch();
  const { availableService, availableBusesTypes } = useSelector(
    (state) => state.buses
  );
  const [serviceValues, setServiceValues] = useState([]);
  const serviceFilter = availableService.map((service) => {
    return {
      label: service.name,
      value: service.id,
    };
  });
  const busesTypeFilter = availableBusesTypes.map((type) => {
    return {
      label: type.name,
      value: type.id,
    };
  });
  const cartTypeFilter = availableBusesTypes.filter((elt) => {
    if (elt.id === infoBusses.cartype_id) {
      return {
        value: elt.id,
        label: elt.name,
      };
    }
  });
  const carTypeDefault = cartTypeFilter.map((elt) => {
    return {
      value: elt.id,
      label: elt.name,
    };
  });
  const [startCityDefault, setStartCityDefault] = useState([]);
  const [endCityDefault, setEndCityDefault] = useState([]);
  const [districtValue, setdistrictValue] = useState([]);
  const [wardValue, setWardValue] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endPointDistricts, setEndPointDistricts] = useState([]);
  const [endPointWard, setEndPointWard] = useState([]);
  const [startDistrictDefault, setStartDistrictDefault] = useState([]);
  const [startWardDefault, setStartWardDefault] = useState([]);
  const [endDistrictDefault, setEndDistrictDefault] = useState([]);
  const [endWardDefault, setEndWardDefault] = useState([]);
  const handleUploadImageToFirebase = (file, setUrl) => {
    let storeRef = firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then((e) => {
      storeRef.getDownloadURL().then(async (url, e) => {
        setUrl(url);
        setValue("image", url);
      });
    });
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    handleUploadImageToFirebase(file, setUrlImage);
  };
  const handleChangeStartTime = (date) => {
    const startDateConvert = moment(date).format("YYYY-MM-DD");
    const startTime = moment(date).format("H:mm");
    setStartDate(date);
    setValue("date_active", startDateConvert);
    setValue("start_time", startTime);
  };
  const handlechangeTypeCar = (type) => {
    setValue("cartype_id", type.value);
  };
  const handleChangeService = (services) => {
    const serviceFilter = services.map((service) => {
      return service.value;
    });
    setServiceValues(services);
    setValue("service_id", serviceFilter.length !== 0 ? serviceFilter : []);
  };
  const onChangeCity = async (
    pointName,
    pointId,
    original,
    setValueOptions
  ) => {
    setValue(pointId, original.value);
    setValue(pointName, original.label);
    const districtRes = await ProvinceService.getDistrict(original.value);
    if (districtRes.status === 200) {
      const districtFilter = districtRes.data.districts.map((districts) => {
        return {
          value: districts.code,
          label: districts.name,
        };
      });
      setValueOptions(districtFilter);
    }
  };
  const onChangeWard = async (
    original,
    pointName,
    pointId,
    id,
    setValueOptions
  ) => {
    setValue(pointId, original.value);
    setValue(pointName, original.label);
    const wardRes = await ProvinceService.getWard(id);
    if (wardRes.status === 200) {
      const wardFilter = wardRes.data.wards.map((ward) => {
        return {
          value: ward.code,
          label: ward.name,
        };
      });
      setValueOptions(wardFilter);
    }
  };
  const handleChangeDistrict = (
    pointId,
    pointName,
    original,
    setValueOptions
  ) => {
    setValue(pointId, original.value);
    setValue(pointName, original.label);
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
  } = useForm({
    // resolver: yupResolver(validationSchema),
  });
  const handleSubmitForm = (data) => {
    delete data.service;
    const seat_empty = data.seat - infoBusses.seat
    alertify.confirm("Thêm chuyến xe", async function () {
      const newData= {...data, seat_empty : seat_empty < 0 ? 0 : seat_empty}
      const res = await BusesService.updateBusses(id, newData);
      if (res.status === 200) {
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Thêm thành công !");
        history.push("/admin/buses");
      }
    });
  };
  useEffect(() => {
    dispatch(actionGetService());
    dispatch(actionGetAllBusesTypes());
    dispatch(getAllProvince());
    const getInfoBusses = async () => {
      const res = await BusesService.getInfoBuses(id);
      if (res.status === 200) {
        const serviceFiler =
          res.data.service.service !== 0
            ? res.data.service.map((elt) => {
                return { value: elt.id, label: elt.name };
              })
            : [];
        setInfoBusses(res.data);
        setUrlImage(res.data.image);
        setServiceValues(serviceFiler);
        reset(res.data);
        const date = `${res.data.date_active} ${res.data.start_time}`;
        const d = new Date(date);
        setStartDate(d);
        const districtsResStart = await ProvinceService.getDistrict(
          res.data.startPointId
        );
        if (districtsResStart.status === 200) {
          const disrtrictsFilter = districtsResStart.data.districts.map(
            (ward) => {
              return {
                value: ward.code,
                label: ward.name,
              };
            }
          );
          const startDistrictsDefault = disrtrictsFilter.filter(
            (_elt) => _elt.value === res.data.startDisrict_id
          );
          setStartDistrictDefault(startDistrictsDefault);
          setdistrictValue(disrtrictsFilter);
        }
        const districtsResEnd = await ProvinceService.getDistrict(
          res.data.endPointId
        );
        if (districtsResEnd.status === 200) {
          const disrtrictsFilter = districtsResEnd.data.districts.map(
            (ward) => {
              return {
                value: ward.code,
                label: ward.name,
              };
            }
          );
          const endDistrictsDefault = disrtrictsFilter.filter(
            (_elt) => _elt.value === res.data.endDisrict_id
          );
          setEndDistrictDefault(endDistrictsDefault);
          setEndPointDistricts(disrtrictsFilter);
        }
        const wardResStart = await ProvinceService.getWard(
          res.data.startDisrict_id
        );
        if (wardResStart.status === 200) {
          const wardFilter = wardResStart.data.wards.map((ward) => {
            return {
              value: ward.code,
              label: ward.name,
            };
          });
          const startWardDefault = wardFilter.filter(
            (_elt) => _elt.value === res.data.startWard_id
          );
          setStartWardDefault(startWardDefault);
          setWardValue(wardFilter);
        }
        const wardResEnd = await ProvinceService.getWard(
          res.data.endDisrict_id
        );
        if (wardResEnd.status === 200) {
          const wardFilter = wardResEnd.data.wards.map((ward) => {
            return {
              value: ward.code,
              label: ward.name,
            };
          });
          const endWardDefault = wardFilter.filter(
            (_elt) => _elt.value === res.data.endWard_id
          );
          setEndWardDefault(endWardDefault);
          setEndPointWard(wardFilter);
        }
      }
    };
    getInfoBusses();
  }, []);
  useEffect(() => {
    const startCityDefault = provinceFilter.filter((_elt) => {
      return _elt.value === infoBusses.startPointId;
    });
    const endCityDefault = provinceFilter.filter((_elt) => {
      return _elt.value === infoBusses.endPointId;
    });
    setStartCityDefault(startCityDefault);
    setEndCityDefault(endCityDefault);
  }, [infoBusses]);
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
                    <div className="tw-w-full tw-flex tw-flex-wrap">
                      <div className="tw-w-full lg:tw-w-4/12">
                        <img
                          src={`${
                            urlImage !== null
                              ? urlImage
                              : "https://fakeimg.pl/370/"
                          }`}
                          className="tw-h-[339px]"
                        />
                      </div>
                      <div className="lg:tw-w-8/12">
                        <div className="tw-py-20 tw-h-[339px] tw-bg-gray-300 tw-px-2">
                          <div className="tw-max-w-md tw-mx-auto tw-bg-white tw-rounded-lg tw-overflow-hidden md:tw-max-w-lg">
                            <div className="md:tw-flex">
                              <div className="tw-w-full">
                                <div className="tw-p-3">
                                  <div className="tw-mb-2">
                                    {" "}
                                    <div className="tw-relative tw-h-40 tw-rounded-lg tw-border-dashed tw-border-2 tw-border-gray-200 tw-bg-white tw-flex tw-justify-center tw-items-center hover:tw-cursor-pointer">
                                      <div className="tw-absolute">
                                        <div className="tw-flex tw-flex-col tw-items-center ">
                                          {" "}
                                          <span>{fileName}</span>
                                          <i className="fa fa-cloud-upload fa-3x tw-text-gray-200" />{" "}
                                          <span className="tw-block tw-text-blue-400 tw-font-normal">
                                            Tải ảnh lên
                                          </span>{" "}
                                        </div>
                                      </div>{" "}
                                      <input
                                        onChange={handleChangeImage}
                                        type="file"
                                        className="tw-h-full tw-w-full tw-opacity-0"
                                        name
                                      />
                                    </div>
                                    <div className="tw-flex tw-justify-between tw-items-center tw-text-gray-400">
                                      {" "}
                                      <span>
                                        Accepted file type:.img only
                                      </span>{" "}
                                      <span className="tw-flex tw-items-center ">
                                        <i className="fa fa-lock tw-mr-1" />{" "}
                                        secure
                                      </span>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Tên chuyến xe"
                          placeholder="Tên chuyến xe"
                          type="text"
                          register={register}
                          fieldName={"name"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
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
                            errors={errors}
                            required={true}
                            messageErrors={"Vui lòng nhập thông tin"}
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
                            errors={errors}
                            required={true}
                            messageErrors={"Vui lòng nhập thông tin"}
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
                          errors={errors}
                          fieldName={"cartype_id"}
                          defaultValues={carTypeDefault[0]}
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
                          errors={errors}
                          fieldName={"service_id"}
                          values={serviceValues}
                        />
                      </div>
                    </div>
                  </div>
                  <LocationSelect
                    provinceFilter={provinceFilter}
                    onChangeCity={onChangeCity}
                    onChangeWard={onChangeWard}
                    onChangeDistrict={handleChangeDistrict}
                    setdistrictValue={setdistrictValue}
                    districtValue={districtValue}
                    wardValue={wardValue}
                    register={register}
                    pointName={"startPointName"}
                    pointId={"startPointId"}
                    pointDistrictId={"startDisrict_id"}
                    pointDistrictName={"startDistrict_name"}
                    pointWardId={"startWard_id"}
                    pointWardName={"startWard_name"}
                    title="Điểm đi"
                    errors={errors}
                    setWardValue={setWardValue}
                    cityDefault={startCityDefault}
                    districsDefault={startDistrictDefault}
                    wardDefault={startWardDefault}
                    setCityDefault={setStartCityDefault}
                    setDistrictDefault={setStartDistrictDefault}
                    setWardDefault={setStartWardDefault}
                  />
                  <LocationSelect
                    provinceFilter={provinceFilter}
                    onChangeCity={onChangeCity}
                    onChangeWard={onChangeWard}
                    onChangeDistrict={handleChangeDistrict}
                    setdistrictValue={setEndPointDistricts}
                    districtValue={endPointDistricts}
                    wardValue={endPointWard}
                    register={register}
                    title="Điểm đến"
                    pointName={"endPointName"}
                    pointId={"endPointId"}
                    pointDistrictId={"endDisrict_id"}
                    pointDistrictName={"endDistrict_name"}
                    pointWardId={"endWard_id"}
                    pointWardName={"endWard_name"}
                    errors={errors}
                    setWardValue={setEndPointWard}
                    cityDefault={endCityDefault}
                    districsDefault={endDistrictDefault}
                    wardDefault={endWardDefault}
                    setCityDefault={setEndCityDefault}
                    setDistrictDefault={setEndDistrictDefault}
                    setWardDefault={setEndWardDefault}
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
