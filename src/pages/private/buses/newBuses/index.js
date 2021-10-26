import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SelectForm from "../../../../compornent/selectForm";
import { getAllProvince } from "../../../../redux/actions/province";
import { BusesService } from "../../../../service/productService";
import { InputNumberStyle } from "./utility";
import imageProduct from "../../../../asset/images/image fake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/fontawesome-free-solid";
import firebase from "../../../../firebase";

const NewBuses = () => {
  const [urlImage, setUrlImage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { province } = useSelector((state) => state.province);
  const provinceFilter = province.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    let storeRef = firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then((e) => {
      storeRef.getDownloadURL().then(async (url, e) => {
        console.log(url);
        setUrlImage(url);
      });
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = (data) => {
    alertify.confirm("Thêm chuyến xe", async function () {
      const newData = {
        ...data,
        image: urlImage,
        cartype_id: 2,
        route_id: 1,
        seat: 21,
        date_active: "2021-10-21",
        start_time: "8h",
        status: 1,
        description: "121328",
      };
      const res = await BusesService.addBuses(newData);
      if (res) {
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Thêm thành công !");
        history.push("/admin/buses");
      }
    });
  };
  useEffect(() => {
    dispatch(getAllProvince());
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
                    Tạo mới chuyến xe
                  </h6>
                  <button
                    className="tw-bg-gray-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
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
                  <div className="tw-mb-2 tw-flex tw-flex-wrap lg:tw-px-3 tw-px-3">
                    <div className="sm:tw-w-full lg:tw-w-6/12">
                      <div>
                        <img src={urlImage} alt="" />
                      </div>
                    </div>
                    <div className="sm:tw-w-full lg:tw-w-6/12">
                      <label class="tw-w-64 tw-flex tw-flex-col tw-items-center tw-py-2 tw-bg-white tw-rounded-md tw-shadow-md tw-tracking-wide tw-uppercase tw-border tw-border-blue tw-cursor-pointer hover:tw-bg-purple-600 hover:tw-text-white tw-text-purple-600 tw-ease-linear tw-transition-all tw-duration-150">
                        <FontAwesomeIcon icon={faUpload} />
                        <span class="tw-mt-2 tw-text-base tw-leading-normal">
                          Chọn ảnh đại diên
                        </span>
                        <input
                          type="file"
                          id="photo-upload"
                          onChange={handleChangeImage}
                          className="tw-hidden"
                        />
                      </label>
                    </div>
                    <div className="lg:tw-w-6/12">
                      <label class="tw-w-64 tw-flex tw-flex-col tw-items-center tw-py-2 tw-bg-white tw-rounded-md tw-shadow-md tw-tracking-wide tw-uppercase tw-border tw-border-blue tw-cursor-pointer hover:tw-bg-purple-600 hover:tw-text-white tw-text-purple-600 tw-ease-linear tw-transition-all tw-duration-150">
                        <FontAwesomeIcon icon={faUpload} />
                        <span class="tw-mt-2 tw-text-base tw-leading-normal">
                          Chọn ảnh mô tả
                        </span>
                        <input type="file" class="tw-hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Tên chuyến xe
                        </label>
                        <input
                          type="text"
                          className="tw-border-[1px] tw-border-gray-500 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
                          defaultValue=""
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Giá
                        </label>
                        <InputNumberStyle>
                          <input
                            type="number"
                            className="tw-border-[1px] tw-border-gray-500 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
                            defaultValue="giá"
                            {...register("description")}
                          />
                        </InputNumberStyle>
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Tỉnh/thành phố
                        </label>
                        <div>
                          <SelectForm
                            options={provinceFilter}
                            placeholder={"Thành phố"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Huyện
                        </label>
                        <SelectForm
                          options={provinceFilter}
                          placeholder={"Huyện"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-12/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Mô tả
                        </label>
                        <textarea
                          type="text"
                          className="tw-border-[1px] tw-border-gray-500 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
                          rows={4}
                          defaultValue={"Mô tả"}
                        />
                      </div>
                    </div>
                  </div>
                  <footer className="">
                    <div className="container tw-mx-auto tw-px-4">
                      <div className="tw-flex tw-flex-wrap tw-items-center md:tw-justify-end tw-justify-center tw-mb-10 tw-gap-5">
                        <button
                          type="submit"
                          className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-gray-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
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

export default NewBuses;
