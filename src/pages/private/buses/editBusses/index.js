import alertify from "alertifyjs";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Input from "../../../../compornent/admin/input/Input";
import DatePickerForm from "../../../../compornent/datePicker";
import TextArea from "../../../../compornent/textarea";
import firebase from "../../../../firebase";
import DatePicker from "react-datepicker";
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
import { ACTIVED, InputNumberStyle } from "./utility";
import { validationSchema } from "./hookFormConfig";
const EditBusses = () => {
  const _currentImage = "https://firebasestorage.googleapis.com/v0/b/headphone-899cc.appspot.com/o/buses%2F15928210953282.jpeg?alt=media&token=549e1411-9155-41a6-a6d3-f8e2e9ebaef8"
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
  const [endDate, setEndDate] = useState(new Date());
  const [inDateActive, setInDateActive] = useState(new Date());
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
    const startTime = moment(date).format("HH:mm");
    setStartDate(date);
    setValue("date_active", startDateConvert);
    setValue("start_time", startTime);
  };
  const handleChangeEndTime = (date) => {
    const endTime = moment(date).utc(true).toISOString();
    setEndDate(date);
    setValue("end_time", endTime);
  };
  const handleChangeInActive = (date) => {
    setInDateActive(date);
    const inDateActive = moment(date).format("YYYY-MM-DD");
    setValue("date_inactive", inDateActive);
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
    resolver: yupResolver(validationSchema),
  });
  const handleSubmitForm = (data) => {
    delete data.service;
    let seat_empty
    if(data.seat > infoBusses.seat){
      seat_empty = data.seat - infoBusses.seat
    }
    if(infoBusses.seat === 0){
      seat_empty = data.seat
    }
    if(data.seat === infoBusses.seat){
      seat_empty = infoBusses.seat_empty
    }
    if(data.seat < infoBusses.seat){
      seat_empty = 0
    }
    alertify
      .confirm("B???n c?? ch???c ch???n mu???n c???p nh???t chuy???n xe ?", async function () {
        const newData = { ...data, seat_empty: seat_empty };
        const res = await BusesService.updateBusses(id, newData);
        if (res.status === 200) {
          alertify.set("notifier", "position", "bottom-right");
          alertify.success("C???p nh???t th??nh c??ng !");
          history.push("/admin/buses");
        }
      })
      .set({ title: "Chuy???n xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
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
        const serviceDefault = res.data.service.map((_elt) => {
          return _elt.id;
        });
        setValue("service_id", serviceDefault);
        setInfoBusses(res.data);
        setUrlImage(res.data.image);
        setServiceValues(serviceFiler);
        reset(res.data);
        const date = `${res.data.date_active} ${res.data.start_time}`;
        const d = new Date(date);
        const endDateConvert = moment(res?.data?.end_time).utc(false).format("YYYY-MM-DD H:mm")
        const endDateInitial = new Date(endDateConvert)
        setStartDate(d);
        setEndDate(endDateInitial)
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
                  <span className="tw-uppercase tw-text-2xl">
                    C???p nh???t chuy???n xe
                  </span>
                  <button
                    className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => {
                      history.push("/admin/buses");
                    }}
                  >
                    Quay l???i
                  </button>
                </div>
              </div>
              <div className=" tw-flex-auto lg:tw-px-3">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                  <div className="tw-mb-2 tw-flex tw-justify-between lg:tw-px-3 tw-px-3 tw-gap-2">
                    <div className="tw-w-full tw-flex tw-flex-wrap">
                      <div className="tw-w-full lg:tw-w-5/12">
                        <img
                          src={`${
                            urlImage !== null
                              ? urlImage
                              : _currentImage
                          }`}
                          className="tw-h-[339px]"
                        />
                      </div>
                      <div className="lg:tw-w-7/12">
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
                                            T???i ???nh l??n
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
                                        T???i l??n t???p tin ?????nh d???ng : .img, .png, jpeg 
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
                          lable="T??n chuy???n xe"
                          placeholder="T??n chuy???n xe"
                          type="text"
                          register={register}
                          fieldName={"name"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui l??ng nh???p th??ng tin"}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <InputNumberStyle>
                          <Input
                            lable="Gi??"
                            placeholder="Gi??"
                            type="number"
                            register={register}
                            fieldName={"price"}
                            errors={errors}
                            required={true}
                            messageErrors={"Vui l??ng nh???p th??ng tin"}
                          />
                        </InputNumberStyle>
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-12/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <InputNumberStyle>
                          <Input
                            lable="S??? gh???"
                            placeholder="S??? gh???"
                            type="number"
                            register={register}
                            fieldName={"seat"}
                            errors={errors}
                            required={true}
                            messageErrors={"Vui l??ng nh???p th??ng tin"}
                          />
                        </InputNumberStyle>
                      </div>
                    </div>
                  </div>
                  {/* =====time ==== */}
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Th???i gian xu???t ph??t
                        </label>
                        <DatePickerForm
                          startDate={startDate}
                          dateFormat="H:mm"
                          showTimeSelectOnly={true}
                          onChange={(date) => {
                            handleChangeStartTime(date);
                          }}
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Th???i gian k???t th??c
                        </label>
                        <DatePickerForm
                          startDate={endDate}
                          showTimeSelectOnly={true}
                          dateFormat="H:mm"
                          onChange={(date) => {
                            handleChangeEndTime(date);
                          }}
                          minDate={startDate}
                        />
                      </div>
                    </div>
                  </div>
                  {/* =====end time ===== */}
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-12/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Ng??y d???ng ho???t ?????ng
                        </label>
                        <DatePicker
                          className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
                          dateFormat="dd/MM/yyyy"
                          onChange={(date) => handleChangeInActive(date)}
                          selected={inDateActive}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <CarTypeSelecect
                          title="Lo???i xe"
                          options={busesTypeFilter}
                          placeholder={"lo???i xe"}
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
                          title="Lo???i d???ch v??? "
                          options={serviceFilter}
                          placeholder={"Lo???i d???ch v???"}
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
                    title="??i???m ??i"
                    errors={errors}
                    setWardValue={setWardValue}
                    cityDefault={startCityDefault}
                    districsDefault={startDistrictDefault}
                    wardDefault={startWardDefault}
                    setCityDefault={setStartCityDefault}
                    setDistrictDefault={setStartDistrictDefault}
                    setWardDefault={setStartWardDefault}
                    register={register}
                    detailAddress={"detailAddressStart"}
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
                    title="??i???m ?????n"
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
                    register={register}
                    detailAddress={"detailAddressEnd"}
                  />
                  <TextArea
                    title="Ghi ch??"
                    placeholder="Nh???p m?? t???"
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
                          C???p nh???t
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
