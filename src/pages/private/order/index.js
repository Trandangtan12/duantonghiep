import {
  faCheck,
  faCheckCircle,
  faEdit,
  faMoneyCheck,
  faTimes,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Table from "../../../compornent/admin/table";
import DatePickerForm from "../../../compornent/datePicker";
import { IsoStringConvert, numberWithCommas } from "../../../config";
import { actionGetTicket } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import ModalExportTicket from "./ModalExportTicket";
import {
  ACTIVED,
  ATM,
  DEPOSIT,
  DONE,
  listFilterStatus,
  OFFLINE,
  REJECTED,
  RESERVATION,
  UNCONFIMRED,
  WAITING_ACTIVE,
} from "./utility";

const Order = () => {
  const history = useHistory();
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const sendEmail = async (id) =>{
    await BusesService.sendEmail(id)
  }
  const [filterByDateData, setFilterByDateData] = useState([])
  const [filterByDateStatus, setfilterByDateStatus] = useState(false)
  const [isCancelTicket, setIsCancelTicket] = useState(false);
  const { availableOrder } = useSelector((state) => state.buses);
  const [ticketDefault, seTicketDefault] = useState([]);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const dependencies = [
    availableOrder.length,
    ticketDefault.length,
    history.location.pathname,
    dispatchDependency,
  ];
  const [startDate, setStartDate] = useState();
  const listTicketAvailable = filterByDateStatus ? filterByDateData.filter((_elt) => {
    return _elt.status !== REJECTED
  }) :  ticketDefault.filter((_elt) => {
    return _elt.status !== REJECTED
  });
  const listTicketCancel =  filterByDateStatus ? filterByDateData.filter((_elt) => {
    return _elt.status === REJECTED;
  }) : ticketDefault.filter((_elt) => {
    return _elt.status === REJECTED;
  });
  const handleWaitingActiveTicket = (id, original) => {
    alertify
      .confirm("B???n c?? ch???c ch???n mu???n x??c th???c v?? xe ?", async function () {
        const res = await BusesService.inActiveTicket(id);
        if (res.status === 200) {
          sendEmail(id)
          const newBuses = { ...original.buses, status: original.buses.status , seat_empty : original.buses.seat_empty - original.quantity };
          await BusesService.updateBusses(
            original.buses.id,
            newBuses
          );
          reloadActiveAPI();
          alertify.success("C???p nh??t v?? th??nh c??ng !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("C?? l???i x???y ra");
        }
      })
      .set({ title: "C???p nh???t v?? xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  }
  const handleApprovalTicket = (id) => {
    alertify
      .confirm("B???n c?? ch???c ch???n mu???n thanh to??n v?? xe ?", async function () {
        const res = await BusesService.approvalTicket(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Thanh to??n th??nh c??ng !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("C?? l???i x???y ra");
        }
      })
      .set({ title: "C???p nh???t v?? xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const handleDoneTicket = (id) => {
    alertify
      .confirm(
        "B???n c?? ch???c ch???n mu???n c???p nh???t tr???ng th??i v?? xe ?",
        async function () {
          const res = await BusesService.doneTicket(id);
          if (res.status === 200) {
            reloadActiveAPI();
            alertify.success("C???p nh???t th??nh c??ng !");
            localStorage.removeItem("ticketLocal")
          } else {
            alertify.warning("C?? l???i x???y ra");
          }
        }
      )
      .set({ title: "C???p nh???t v?? xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
      
  };
  const handleDeleteTicket = async (id) => {
    const res = await BusesService.deleteTicket(id);
    if (res.status === 200 || res.status === 201) {
      reloadActiveAPI();
      alertify.success("Xo?? th??nh c??ng !");
      localStorage.removeItem("ticketLocal")

    } else {
      alertify.warning("C?? l???i x???y ra");
    }
  };
  const handleRejectTicket = (id, original) => {
    alertify
      .confirm("B???n c?? ch???c ch???n mu???n hu??? v?? xe ?", async function () {
        const res = await BusesService.rejectTicket(id);
        
        if (res.status === 200) {
          const newBuses = { ...original.buses, status: original.buses.status , seat_empty : original.buses.seat_empty +  original.quantity };
          await BusesService.updateBusses(
            original.buses.id,
            newBuses
          );
          alertify.success("H???y v?? th??nh c??ng !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("C?? l???i x???y ra");
        }
        reloadActiveAPI();
      })
      .set({ title: "C???p nh???t v?? xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const ExpandableTable = ({ data }) => {
    return (
      <table
        size="sm"
        responsive
        bordered
        className="tw-bg-green-100 tw-border-[1px] tw-border-green-500 tw-rounded-lg"
      >
        <tbody>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Email
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.email}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              M?? chuy???n xe
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.id}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              T??n chuy???n xe
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              ??i??m ??i
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.startPointName}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              ??i???m ?????n
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.endPointName}
            </td>
          </tr>
          {/* <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ng??y ?????t
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.buses.created_at)}
            </td>
          </tr> */}
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              S??? CMND
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.identity_card}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ng??y kh???i h??nh
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.date_active}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Th???i gian kh???i h??nh
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.start_time}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ghi ch??
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.description !== null ? data.description : "-"}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ng??y ?????t tr?????c
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.reservationTime !== null ? data.reservationTime : "-"}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              S??? ti???n ?????t c???c
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.depositAmount !== null ? data.depositAmount : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const getStatus = (status , ticket) => {
    switch (status) {
      case ACTIVED:
        return {
          render: (
            <div className="tw-bg-green-500 tw-text-white">???? thanh to??n</div>
          ),
        };
      case WAITING_ACTIVE:
        return {
          render: (
            <div className="tw-bg-red-500 tw-text-white">Ch??a thanh to??n</div>
          ),
        };
      case REJECTED:
        return {
          render: <div className="tw-bg-red-500 tw-text-white">Hu??? v??</div>,
        };
      case DEPOSIT:
        return {
          render: (
            <div className="tw-bg-yellow-400 tw-text-white">???? ?????t c???c</div>
          ),
        };
      case DONE:
        return {
          render: (
            <div className="tw-bg-green-600 tw-text-white">???? ho??n h??nh</div>
          ),
        };
        case UNCONFIMRED:
          return {
            render: (
              <div className="tw-bg-[#FFE400] tw-text-white">Ch??? x??c nh???n</div>
            ),
          };
          case "RESERVATION":
            return {
              render: (
                <div className="tw-bg-[#FFE400] tw-text-white">?????t tr?????c {ticket.paymentMethod === ATM ? <FontAwesomeIcon icon={faMoneyCheck} color="#3d8116" /> : null}</div>
              ),
            };
      default:
        return null;
    }
  };
  const getPaymentMethod = (method) => {
    switch (method) {
      case ATM:
        return {
          render: <div>ATM</div>,
        };
      case OFFLINE:
        return {
          render: <div>Thanh to??n t???i xe</div>,
        };
      default:
        return null;
    }
  };
  const [columns, setColumns] = useState([
    {
      Header: "M?? v??",
      accessor: "ticket_code",
      maxWidth: 70,
      filterable: true,
      show: true,
    },
    {
      Header: "T??n kh??ch h??ng",
      accessor: "customer_name",
      maxWidth: 200,
      filterable: true,
      show: true,
    },
    {
      Header: "S??? ??i???n tho???i",
      maxWidth: 150,
      accessor: "phone_number",
      filterable: true,
      show: true,
    },
    {
      Header: "S??? l?????ng",
      maxWidth: 70,
      accessor: "quantity",
      // filterable: true,
      show: true,
    },
    {
      Header: "S??? ti???n (VN??)",
      maxWidth: 130,
      accessor: "totalPrice",
      // filterable: true,
      show: true,
      Cell: ({ original }) => {
        return numberWithCommas(original.totalPrice);
      },
    },
    {
      Header: "Tr???ng th??i",
      maxWidth: 150,
      accessor: "status",
      show: true,
      filterable: true,
      Filter: ({ filter, onChange }) => {
        return (
          <select
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={filter ? filter.value : ""}
          >
            <option value="">T???t c???</option>
            {listFilterStatus.map((elt) => (
              <option key={elt.type} value={elt.type}>
                {elt.name}
              </option>
            ))}
          </select>
        );
      },
      Cell: ({ original }) => {
        const status = original.status;
        return getStatus(status , original).render;
      },
    },
    {
      Header: "Ph????ng th???c",
      maxWidth: 250,
      show: true,
      Cell: ({ original }) => {
        return getPaymentMethod(original.paymentMethod).render;
      },
    },
    {
      Header: "Ng??y ?????t",
      maxWidth: 280,
      show: true,
      // filterable: true,
      Cell: ({ original }) => {
        return <div>{IsoStringConvert(original.created_at)}</div>
      },
    },
    {
      Header: "H??nh ?????ng",
      maxWidth: 200,
      show: true,
      Cell: ({ original }) => {
        const isActiveTicket = original.status === ACTIVED || original.status === DONE || original.status === UNCONFIMRED
        return (
          <div>
            <div>
              <span
                onClick={() => history.push(`/admin/order/edit/${original.id}`)}
                className="tw-cursor-pointer tw-mr-2"
              >
                <FontAwesomeIcon icon={faEdit} color="blue" />
              </span>
              {/* {original.status === REJECTED ? (
                <span
                  onClick={() => handleDeleteTicket(original.id)}
                  className="tw-cursor-pointer tw-mr-2"
                >
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </span>
              ) : null} */}

              {original.status !== DONE &&  original.status !== UNCONFIMRED  &&  original.status !== REJECTED  ? (
                <span
                  onClick={() => handleDoneTicket(original.id)}
                  className="tw-cursor-pointer tw-mr-2"
                >
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </span>
              ) : null}
              {
                original.status === UNCONFIMRED ?  <span
                  onClick={() => handleWaitingActiveTicket(original.id , original)}
                  className="tw-cursor-pointer tw-mr-2"
                >
                  <FontAwesomeIcon icon={faCheck} color="green" />
                </span> : null
              }
              {original.status !== REJECTED ? (
                <span
                  onClick={() => handleRejectTicket(original.id, original)}
                  className="tw-cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTimes} color="red" />
                </span>
              ) : null}
              <span className="tw-ml-2">
                {isActiveTicket || original?.depositAmount === original.totalPrice  ? null : (
                  <span
                    onClick={() => handleApprovalTicket(original.id)}
                    className="tw-cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faMoneyCheck} color="green" />
                  </span>
                )}
              </span>
            </div>
          </div>
        );
      },
    },
  ]);
  const handleFilterTicketByDate = (date) => {
    setfilterByDateStatus(true)
    setStartDate(date);
    const convertDate = moment(date).format("YYYY-MM-DD");
    const ticketFilter = ticketDefault.filter((_elt) => {
      const createDateConvert = moment(_elt.create_at).format("YYYY-MM-DD");
      return createDateConvert === convertDate;
    });
    setFilterByDateData(ticketFilter);
    return
  };
  const dispatch = useDispatch();
  useEffect(() => {
    seTicketDefault(availableOrder);
    dispatch(actionGetTicket());
  }, [...dependencies , JSON.stringify(availableOrder)]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <div>
      <div className="tw-flex tw-flex-wrap tw-justify-between">
        <span className="tw-uppercase tw-text-2xl tw-mb-3">Qu???n l?? v?? xe</span>
        <div className="tw-mb-4 tw-flex">
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => setIsCancelTicket(!isCancelTicket)}
          >
            {isCancelTicket ? " Danh s??ch v??" : " Danh s??ch v?? hu???"}
          </button>
          {availableOrder.length !== 0 ? (
            <button
              className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none foc us:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
              type="button"
              onClick={() => openModal()}
              disabled={availableOrder.length === 0 ? true : false}
            >
              Xu???t d??? li???u
            </button>
          ) : null}
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => history.push("/admin/order/create")}
          >
            Th??m v?? xe
          </button>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <DatePickerForm
        showTime={false}
          className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
          dateFormat="yyyy-MM-dd"
          startDate={startDate}
          placeholderText={"L???c v?? theo ng??y"}
          onChange={handleFilterTicketByDate}
        />
        <div>
        {
        filterByDateStatus ?   <FontAwesomeIcon icon={faTimes} className="tw-text-[2rem] tw-ml-2 tw-cursor-pointer" color="red" onClick={() => setfilterByDateStatus(false)} /> : null
        }
        </div>
      </div>
      {!isCancelTicket ? (
        <Table
          data={listTicketAvailable}
          columns={columns}
          ExpandableTable={ExpandableTable}
        />
      ) : (
        <Table
          data={listTicketCancel}
          columns={columns}
          ExpandableTable={ExpandableTable}
        />
      )}
      <ModalExportTicket isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Order;
