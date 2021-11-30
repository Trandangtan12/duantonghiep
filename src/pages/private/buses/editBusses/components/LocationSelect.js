import React, { useEffect } from "react";
import SelectForm from "../../../../../compornent/selectForm";
import Input from '../../../../../compornent/admin/input/Input';
const LocationSelect = ({
  provinceFilter,
  onChangeCity,
  onChangeWard,
  onChangeDistrict,
  setdistrictValue,
  districtValue,
  wardValue,
  title,
  pointName,
  pointId,
  pointDistrictId,
  pointDistrictName,
  pointWardId,
  pointWardName,
  errors,
  setWardValue,
  cityDefault,
  districsDefault,
  wardDefault,
  setCityDefault,
  setDistrictDefault,
  setWardDefault,
  register,
  detailAddress
}) => {
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
                  onChangeCity(pointName, pointId, original, setdistrictValue);
                  setCityDefault(original)
                }}
                placeholder={"Thành phố"}
                errors={errors}
                defaultValues={cityDefault[0]}
                fieldName={pointId}
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
                setDistrictDefault(original)
                onChangeWard(
                  original,
                  pointDistrictName,
                  pointDistrictId,
                  original.value,
                  setWardValue
                );
              }}
              errors={errors}
              fieldName={pointWardId}
              defaultValues={districsDefault[0]}
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
              onChange={(original) =>{
                setWardDefault(original)
                onChangeDistrict(pointWardId, pointWardName, original)
              }
              }
              errors={errors}
              fieldName={pointDistrictId}
              defaultValues={wardDefault[0]}
            />
          </div>
        </div>
      </div>
      <div className="tw-px-4 tw-mb-3">
        <Input
          lable="Địa chỉ chi tiết"
          placeholder="Địa chỉ chi tiết"
          type="text"
          register={register}
          fieldName={detailAddress}
          errors={errors}
          required={true}
          messageErrors={"Vui lòng nhập thông tin"}
        />
      </div>
    </div>
  );
};

export default LocationSelect;
