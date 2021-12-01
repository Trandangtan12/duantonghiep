import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { BusesService } from "../../../../service/productService";
import { UserApi } from "../../../../service/userService";
import Input from "../../../../compornent/admin/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { actionGetBuses } from "../../../../redux/actions/buses";
import SelectForm from "../../../../compornent/selectForm";
import TextArea from "../../../../compornent/textarea";
import { ACTIVED, ATM, OFFLINE, WAITING_ACTIVE } from "../utility";
const CreateTicket = () => {
  const { user } = UserApi.isAuthenticated();
  const dispatch = useDispatch();
  const [paymentMethodType, setPaymentMethodType] = useState(WAITING_ACTIVE);
  const { availableBuses } = useSelector((state) => state.buses);
  const [busesSelect, setBusesSelect] = useState();
  const avaibleBussesSuggesstion = availableBuses.map((_elt) => {
    return {
      label: _elt.name,
      value: _elt.id,
      price : _elt.price
    };
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const history = useHistory();
  const handleAddTicket = async (data) => {
    const totalPrice = busesSelect.price * data.quantity 
    const newData = {
      ...data,
      buses_id: busesSelect.value,
      status : paymentMethodType,
      paymentMethod : OFFLINE,
      totalPrice : totalPrice,
    };
    const resTicket = await BusesService.addTicket(newData)   
    if (resTicket.status === 201) {
      await BusesService.sendEmail(resTicket.data.id)
      history.push("/admin/order")
    }
  };
  useEffect(() => {
    dispatch(actionGetBuses());
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
                <form onSubmit={handleSubmit(handleAddTicket)}>
                  <div className="tw-mb-2 tw-flex tw-justify-between lg:tw-px-3 tw-px-3 tw-gap-2"></div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Tên khách hàng"
                          placeholder="Tên khách hàng"
                          type="text"
                          register={register}
                          fieldName={"customer_name"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Email"
                          placeholder="Email"
                          type="text"
                          register={register}
                          fieldName={"email"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Số điện thoại"
                          placeholder="Số điện thoại"
                          type="text"
                          register={register}
                          fieldName={"phone_number"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Số CMND"
                          placeholder="Số CMND"
                          type="text"
                          register={register}
                          fieldName={"identity_card"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Số lượng"
                          placeholder="Số lượng"
                          type="text"
                          defaultValues={"1"}
                          register={register}
                          fieldName={"quantity"}
                          errors={errors}
                          required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                          Chọn chuyến xe
                        </label>
                        <SelectForm
                          options={avaibleBussesSuggesstion}
                          closeMenuOnSelect={false}
                          onChange={(original) => {
                            setBusesSelect(original);
                          }}
                          placeholder={"Chọn chuyến xe"}
                          className="tw-border-[1px] tw-rounded-md tw-border-green-600"
                          errors={errors}
                          fieldName={"busses"}
                        />
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
                          Trạng thái thanh toán
                        </label>
                        <div className="tw-mb-3">
                          <input
                            type="radio"
                            checked={paymentMethodType === WAITING_ACTIVE}
                            onClick={() => {
                              setPaymentMethodType(WAITING_ACTIVE);
                            }}
                          />
                          <span className="tw-ml-2">Chưa thanh toán</span>
                        </div>
                        <div className="tw-mb-3">
                          <input
                            type="radio"
                            checked={paymentMethodType === ACTIVED}
                            onClick={() => {
                              setPaymentMethodType(ACTIVED);
                            }}
                          />
                          <span className="tw-ml-2">Đã thanh toán</span>
                        </div>
                      </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <TextArea
                          title="Ghi chú"
                          placeholder="Nhập ghi chú"
                          fieldName="description"
                          register={register}
                        />
                      </div>
                    </div>
                  </div>
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

export default CreateTicket;
