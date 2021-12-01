import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  actionGetAllRole,
  getAllPermission,
} from "../../../../redux/actions/permission";
import { UserApi } from "../../../../service/userService";
import SelectForm from "../../../../compornent/selectForm";
import Input from "../../../../compornent/admin/input/Input";
import alertify from "alertifyjs";

const Permission = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [rolesDefault, setrolesDefault] = useState([])
  const [roleIdSelect, setRoleIdSelect] = useState([]);
  const { availablePermission } = useSelector((state) => state.role);
  const permissionSuggestion =  availablePermission.map(_elt =>{
      return {
          label : _elt.display_name,
          value : _elt.id
      }
  })
  const handleChangePermission = (original) =>{
      setrolesDefault(original.length !== 0 ? original : [])
      const roleSelect = original.map(_elt =>{
          return _elt.value
      })
      setRoleIdSelect(roleSelect)
  }
  const handlePermissionUser = async () => {
    alertify.confirm("Bạn có chắc chắn muốn cập nhật tài khoản", async function () {
        const newData = {
            ...userInfo , 
            role_id : roleIdSelect
        }
        const res = await UserApi.updateUser(id, newData)
        if (res.status === 200) {
            history.push("/admin/account")
        }
      })
      .set({ title: "Tài khoản" })
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
    const getInfo = async () => {
      dispatch(getAllPermission());
      const res = await UserApi.getInfoUser(id);
      if (res.status === 200) {
        setUserInfo(res.data[0]);
        const permissionDefault = res.data[0].roles.map(_elt =>{
            return {
                label : _elt.display_name,
                value : _elt.id
            }
        })
        setrolesDefault(permissionDefault);
      }
    };
    getInfo();
  }, []);
  return (
    <form onSubmit={handleSubmit(handlePermissionUser)} className="tw-px-2">
      <div className="tw-mb-4">
        <span className="tw-uppercase tw-text-2xl">Tạo mới phân quyền</span>
      </div>
      <div>
        <div className="tw-mb-3">
          <Input
            lable="Tên nhóm quyền"
            placeholder="Tên nhóm quyền"
            type="text"
            disabled
            register={register}
            fieldName={"name"}
            defaultValues={userInfo.name}
            disabled={true}
            errors={errors}
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
            options={permissionSuggestion}
            placeholder={"Nhóm quyền"}
            isMulti={true}
            defaultValues={rolesDefault || []}
            onChange={(original) => {
                handleChangePermission(original)
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
            Cập nhật
          </button>
          <button
            className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
            onClick={() => history.push("/admin/account")}
          >
            Quay lại
          </button>
        </div>
      </div>
    </form>
  );
};

export default Permission;
