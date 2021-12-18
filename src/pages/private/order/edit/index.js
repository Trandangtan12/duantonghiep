import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { BusesService } from "../../../../service/productService";
import { UserApi } from "../../../../service/userService";
import Input from "../../../../compornent/admin/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { actionGetBuses } from "../../../../redux/actions/buses";
import SelectForm from "../../../../compornent/selectForm";
import TextArea from "../../../../compornent/textarea";
import { ACTIVED, ATM, OFFLINE, WAITING_ACTIVE } from "../utility";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DatePickerForm from "../../../../compornent/datePicker";
import moment from "moment";
const EditTicket = () => {
  const { id } = useParams();
  const [ticketInfo, setTicketInfo] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const { user } = UserApi.isAuthenticated();
  const dispatch = useDispatch();
  const [paymentMethodType, setPaymentMethodType] = useState(WAITING_ACTIVE);
  const { availableBuses } = useSelector((state) => state.buses);
  const [ticketDefalt, setTicketDefalt] = useState([]);
  const [valueBusesDefault, setValueBusesDefault] = useState({});
  const [busesSelect, setBusesSelect] = useState();
  const handleChangeBusses = async (date) => {
    setStartDate(date);
    const dateBusses = moment(date).format("YYYY-MM-DD");
    const timeBusses = moment(date).format("HH:mm");
    const resBusses = await BusesService.getBussesByTime(
      ticketInfo.buses.startPointId,
      ticketInfo.buses.endPointId,
      dateBusses,
      timeBusses
    );
    if (resBusses.status === 200) {
      const busesFilter = resBusses.data.filter(elt =>{
        return elt.seat_empty > 0
      })
      const busesArr = busesFilter.map(_elt =>{
        return {
          label : `${_elt.name} - (${_elt?.seat_empty} ghế trống)`,
          value : _elt.id,
          price : _elt.price
        }
      })
      setTicketDefalt(busesArr)
    }
  };
  const validationSchema = Yup.object().shape({
    buses_id: Yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const history = useHistory();
  const handleAddTicket = async (data) => {
    const totalPrice = busesSelect.price * data.quantity;
    const newData = {
      ...data,
      buses_id: busesSelect.value,
      status: paymentMethodType,
      paymentMethod: paymentMethodType === ACTIVED ? ATM : OFFLINE,
      totalPrice: totalPrice,
    };
    const resTicket = await BusesService.updateTicket(id, newData);
    if (resTicket.status === 200) {
      await BusesService.sendEmail(resTicket.data.id);
      history.push("/admin/order");
    }
  };
  useEffect(() => {
    dispatch(actionGetBuses());
    const avaibleBussesSuggesstion = availableBuses.map((_elt) => {
      return {
        label: _elt.name,
        value: _elt.id,
        price: _elt.price,
      };
    });
    setTicketDefalt([]);
    const getInfoTicket = async () => {
      const resInfo = await BusesService.getInfoTicket(id);
      if (resInfo.status === 200) {
        setTicketInfo(resInfo.data);
        setValue("customer_name", resInfo.data.customer_name);
        setValue("description", resInfo.data.description);
        setValue("email", resInfo.data.email);
        setValue("identity_card", resInfo.data.identity_card);
        setValue("phone_number", resInfo.data.phone_number);
        setValue("quantity", resInfo.data.quantity);
        const busesDefault = {
          label : resInfo.data.buses.name,
          value : resInfo.data.buses.id,
          price : resInfo.data.buses.price
        }
        setValueBusesDefault(busesDefault)
      }
    };
    getInfoTicket();
  }, [JSON.stringify(availableBuses)]);
  return (
    <>
      <div>
        <section className="bg-blueGray-50">
          <div className="">
            <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded-lg bg-blueGray-100 tw-border-0">
              <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-px-6 tw-py-6 ">
                <div className="tw-text-center tw-flex tw-justify-between">
                  <span className="tw-uppercase tw-text-2xl">
                    Cập nhật vé xe
                  </span>

                  <button
                    className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => {
                      history.push("/admin/order");
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
                          defaultValues={ticketInfo.customer_name}
                          register={register}
                          fieldName={"customer_name"}
                          errors={errors}
                          // required={true}
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
                          defaultValues={ticketInfo.email}
                          register={register}
                          fieldName={"email"}
                          errors={errors}
                          // required={true}
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
                          defaultValues={ticketInfo.phone_number}
                          errors={errors}
                          // required={true}
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
                          defaultValues={ticketInfo.identity_card}
                          errors={errors}
                          // required={true}
                          messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tw-px-4 tw-mb-2">
                  <label
                          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                          htmlfor="grid-password"
                        >
                         Thời gian bắt đầu
                        </label>
                    <DatePickerForm
                      startDate={startDate}
                      onChange={(date) => {
                        handleChangeBusses(date);
                      }}
                    />
                  </div>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full lg:tw-w-6/12 tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Số lượng"
                          placeholder="Số lượng"
                          defaultValues={ticketInfo.quantity}
                          type="text"
                          register={register}
                          fieldName={"quantity"}
                          errors={errors}
                          // required={true}
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
                        defaultValues={valueBusesDefault}
                          options={ticketDefalt}
                          closeMenuOnSelect={false}
                          onChange={(original) => {
                            setBusesSelect(original);
                            setValue("buses_id", original.value);
                            setValueBusesDefault(original)
                          }}
                          placeholder={"Chọn chuyến xe"}
                          className="tw-border-[1px] tw-rounded-md tw-border-green-600"
                          errors={errors}
                          fieldName={"buses_id"}
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

export default EditTicket;
