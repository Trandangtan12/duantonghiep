import React from "react";
import SelectForm from "../../../../../compornent/selectForm";
const LocationSelect = ({provinceFilter , onChangeCity, onChangeWard , setdistrictValue , districtValue , wardValue , title }) => {
  return (
    <div>
    <div className="tw-w-full tw-px-4 tw-mb-3 tw-uppercase tw-text-lg">
        <h5>{title}</h5>
    </div>
        <div className="tw-flex tw-flex-wrap">
          <div className="tw-w-full lg:tw-w-4/12 tw-px-4">
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
                  onChange={(original) => {
                    setdistrictValue([]);
                    onChangeCity(original.value);
                  }}
                  placeholder={"Thành phố"}
                />
              </div>
            </div>
          </div>
          <div className="tw-w-full lg:tw-w-4/12 tw-px-4">
            <div className="tw-relative tw-w-full tw-mb-3">
              <label
                className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                htmlfor="grid-password"
              >
                Quận/huyện
              </label>
              <SelectForm
                options={districtValue}
                placeholder={"Huyện"}
                onChange={(original) => {
                  onChangeWard(original.value);
                }}
              />
            </div>
          </div>
          <div className="tw-w-full lg:tw-w-4/12 tw-px-4">
            <div className="tw-relative tw-w-full tw-mb-3">
              <label
                className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                htmlfor="grid-password"
              >
                Xã/phường
              </label>
              <SelectForm
                options={wardValue}
                placeholder={"Huyện"}
                onChange={(original) => {
                  console.log(original);
                }}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default LocationSelect;
