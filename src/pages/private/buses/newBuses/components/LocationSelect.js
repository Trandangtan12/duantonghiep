import React from "react";
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
  register,
  detailAddress
}) => {
  return (
    <div>
      <div className="tw-w-full tw-px-4 tw-mb-3 tw-uppercase tw-text-lg">
        <h5 className="tw-text-green-500 tw-font-bold">{title}</h5>
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
                }}
                placeholder={"Thành phố"}
                errors={errors}
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
              onChange={(original) =>
                onChangeDistrict(pointWardId, pointWardName, original)
              }
              errors={errors}
              fieldName={pointDistrictId}
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
