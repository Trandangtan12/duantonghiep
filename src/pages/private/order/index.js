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
      .confirm("Bạn có chắc chắn muốn xác thực vé xe ?", async function () {
        const res = await BusesService.inActiveTicket(id);
        if (res.status === 200) {
          sendEmail(id)
          const newBuses = { ...original.buses, status: original.buses.status , seat_empty : original.buses.seat_empty - original.quantity };
          await BusesService.updateBusses(
            original.buses.id,
            newBuses
          );
          reloadActiveAPI();
          alertify.success("Cập nhât vé thành công !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Cập nhật vé xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  }
  const handleApprovalTicket = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn thanh toán vé xe ?", async function () {
        const res = await BusesService.approvalTicket(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Thanh toán thành công !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Cập nhật vé xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const handleDoneTicket = (id) => {
    alertify
      .confirm(
        "Bạn có chắc chắn muốn cập nhật trạng thái vé xe ?",
        async function () {
          const res = await BusesService.doneTicket(id);
          if (res.status === 200) {
            reloadActiveAPI();
            alertify.success("Cập nhật thành công !");
            localStorage.removeItem("ticketLocal")
          } else {
            alertify.warning("Có lỗi xảy ra");
          }
        }
      )
      .set({ title: "Cập nhật vé xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
      
  };
  const handleDeleteTicket = async (id) => {
    const res = await BusesService.deleteTicket(id);
    if (res.status === 200 || res.status === 201) {
      reloadActiveAPI();
      alertify.success("Xoá thành công !");
      localStorage.removeItem("ticketLocal")

    } else {
      alertify.warning("Có lỗi xảy ra");
    }
  };
  const handleRejectTicket = (id, original) => {
    alertify
      .confirm("Bạn có chắc chắn muốn huỷ vé xe ?", async function () {
        const res = await BusesService.rejectTicket(id);
        
        if (res.status === 200) {
          const newBuses = { ...original.buses, status: original.buses.status , seat_empty : original.buses.seat_empty +  original.quantity };
          await BusesService.updateBusses(
            original.buses.id,
            newBuses
          );
          alertify.success("Hủy vé thành công !");
          localStorage.removeItem("ticketLocal")
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
        reloadActiveAPI();
      })
      .set({ title: "Cập nhật vé xe" })
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
              Mã chuyến xe
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.id}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Tên chuyến xe
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Điêm đi
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.startPointName}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Điểm đến
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.endPointName}
            </td>
          </tr>
          {/* <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ngày đặt
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.buses.created_at)}
            </td>
          </tr> */}
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Số CMND
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.identity_card}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ngày khởi hành
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.date_active}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Thời gian khởi hành
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.start_time}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ghi chú
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.description !== null ? data.description : "-"}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ngày đặt trước
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.reservationTime !== null ? data.reservationTime : "-"}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Số tiền đặt cọc
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
            <div className="tw-bg-green-500 tw-text-white">Đã thanh toán</div>
          ),
        };
      case WAITING_ACTIVE:
        return {
          render: (
            <div className="tw-bg-red-500 tw-text-white">Chưa thanh toán</div>
          ),
        };
      case REJECTED:
        return {
          render: <div className="tw-bg-red-500 tw-text-white">Huỷ vé</div>,
        };
      case DEPOSIT:
        return {
          render: (
            <div className="tw-bg-yellow-400 tw-text-white">Đã đặt cọc</div>
          ),
        };
      case DONE:
        return {
          render: (
            <div className="tw-bg-green-600 tw-text-white">Đã hoàn hành</div>
          ),
        };
        case UNCONFIMRED:
          return {
            render: (
              <div className="tw-bg-[#FFE400] tw-text-white">Chờ xác nhận</div>
            ),
          };
          case "RESERVATION":
            return {
              render: (
                <div className="tw-bg-[#FFE400] tw-text-white">Đặt trước {ticket.paymentMethod === ATM ? <FontAwesomeIcon icon={faMoneyCheck} color="#3d8116" /> : null}</div>
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
          render: <div>Thanh toán tại xe</div>,
        };
      default:
        return null;
    }
  };
  const [columns, setColumns] = useState([
    {
      Header: "Mã vé",
      accessor: "ticket_code",
      maxWidth: 70,
      filterable: true,
      show: true,
    },
    {
      Header: "Tên khách hàng",
      accessor: "customer_name",
      maxWidth: 200,
      filterable: true,
      show: true,
    },
    {
      Header: "Số điện thoại",
      maxWidth: 150,
      accessor: "phone_number",
      filterable: true,
      show: true,
    },
    {
      Header: "Số lựơng",
      maxWidth: 70,
      accessor: "quantity",
      // filterable: true,
      show: true,
    },
    {
      Header: "Số tiền (VNĐ)",
      maxWidth: 130,
      accessor: "totalPrice",
      // filterable: true,
      show: true,
      Cell: ({ original }) => {
        return numberWithCommas(original.totalPrice);
      },
    },
    {
      Header: "Trạng thái",
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
            <option value="">Tất cả</option>
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
      Header: "Phương thức",
      maxWidth: 250,
      show: true,
      Cell: ({ original }) => {
        return getPaymentMethod(original.paymentMethod).render;
      },
    },
    {
      Header: "Ngày đặt",
      maxWidth: 280,
      show: true,
      // filterable: true,
      Cell: ({ original }) => {
        return <div>{IsoStringConvert(original.created_at)}</div>
      },
    },
    {
      Header: "Hành động",
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
        <span className="tw-uppercase tw-text-2xl tw-mb-3">Quản lý vé xe</span>
        <div className="tw-mb-4 tw-flex">
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => setIsCancelTicket(!isCancelTicket)}
          >
            {isCancelTicket ? " Danh sách vé" : " Danh sách vé huỷ"}
          </button>
          {availableOrder.length !== 0 ? (
            <button
              className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none foc us:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
              type="button"
              onClick={() => openModal()}
              disabled={availableOrder.length === 0 ? true : false}
            >
              Xuất dữ liệu
            </button>
          ) : null}
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => history.push("/admin/order/create")}
          >
            Thêm vé xe
          </button>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
        <DatePickerForm
        showTime={false}
          className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
          dateFormat="yyyy-MM-dd"
          startDate={startDate}
          placeholderText={"Lọc vé theo ngày"}
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
