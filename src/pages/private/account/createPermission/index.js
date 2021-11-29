import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SelectForm from "../../../../compornent/selectForm";
import { actionGetAllRole } from "../../../../redux/actions/permission";
import Input from "../../../../compornent/admin/input/Input";
import { PermissionService } from "../../../../service/permissionService";
import alertify from "alertifyjs";
import { useHistory } from "react-router";

const CreatePermission = () => {
  const { availableRole } = useSelector((state) => state.role);
  const history = useHistory()
  const [permissionListSelect, setPermissionListSelect] = useState([]);
  const roleSuggesstion =
    availableRole !== undefined
      ? availableRole.map((_elt) => {
          return {
            label: _elt.display_name,
            value: _elt.id,
          };
        })
      : [];
  const dispatch = useDispatch();
  const handleOnchangeAddPermission = (role) => {
    const roleList = role.map((_elt) => {
      return _elt.value;
    });
    setPermissionListSelect(roleList);
  };
  const handleAddPermission = async (data) => {
    alertify.confirm("Bạn có chắc chắn muốn tạo nhóm quyền ?", async function () {
        const newData = {
          name: data.name,
          display_name: data.name,
          permission_id: permissionListSelect,
        }
        const res = await PermissionService.createRole(newData);
        if (res.stauts === 201) {
          console.log(res.data);
        }
      })
      .set({ title: "Nhóm quyền" })
      .set("movable", false)
      .set("Tiếp tục", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    dispatch(actionGetAllRole());
  }, []);
  return (
    <form onSubmit={handleSubmit(handleAddPermission)} className="tw-px-2">
      <div className="tw-mb-4">
        <span className="tw-uppercase tw-text-2xl">Tạo mới phân quyền</span>
      </div>
      <div>
        <div className="tw-mb-3">
          <Input
            lable="Tên nhóm quyền"
            placeholder="Tên nhóm quyền"
            type="text"
            register={register}
            fieldName={"name"}
            errors={errors}
            required={true}
            messageErrors={"Vui lòng nhập thông tin"}
          />
        </div>
        <div className="tw-mb-2">
          <label
            className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
            htmlfor="grid-password"
          >
            Nhóm quyền
          </label>
          <SelectForm
            options={roleSuggesstion}
            placeholder={"Nhóm quyền"}
            isMulti={true}
            onChange={(original) => {
              handleOnchangeAddPermission(original);
            }}
            errors={errors}
            fieldName={"permission"}
          />
        </div>
        <div className="tw-flex tw-justify-end">
          <button
            type="submit"
            className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg tw-mr-2"
          >
            Tạo mới phân quyền
          </button>
          <button
            className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
            onClick={()=> history.push("/admin/account")}
          >
            Quay lại
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePermission;
