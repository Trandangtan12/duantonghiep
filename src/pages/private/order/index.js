import {
  faMoneyCheck,
  faTimes,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import FileSaver from "file-saver";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert, numberWithCommas } from "../../../config";
import { actionGetTicket } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import { TODAY } from "../buses/newBuses/utility";
import "react-datepicker/dist/react-datepicker.css";
import {
  ACTIVED,
  ATM,
  DEPOSIT,
  listFilterStatus,
  OFFLINE,
  REJECTED,
  WAITING_ACTIVE,
} from "./utility";

const Order = () => {
  const history = useHistory();
  const { availableOrder } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const dependencies = [availableOrder.length, dispatchDependency];
  const [startDate, setStartDate] = useState(new Date());
  const handleExportList = async () => {
    const res = await BusesService.exportListTicket();
    if (res.status === 200) {
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      FileSaver.saveAs(blob, `sixleaf_ticket.xlsx`);
    }
  };
  const handleApprovalTicket = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn thanh toán vé xe ?", async function () {
        const res = await BusesService.approvalTicket(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Thanh toán thành công !");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
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
    } else {
      alertify.warning("Có lỗi xảy ra");
    }
  };
  const handleRejectTicket = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn huỷ vé xe ?", async function () {
        const res = await BusesService.rejectTicket(id);
        if (res.status === 200 || res.status === 201) {
          reloadActiveAPI();
          alertify.success("Hủy vé thành công !");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
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
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ngày đặt
            </td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.buses.created_at)}
            </td>
          </tr>
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
        </tbody>
      </table>
    );
  };
  const getStatus = (status) => {
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
      maxWidth: 100,
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
      maxWidth: 100,
      accessor: "quantity",
      // filterable: true,
      show: true,
    },
    {
      Header: "Số tiền",
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
        return getStatus(status).render;
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
      Header: "Hành động",
      maxWidth: 150,
      show: true,
      Cell: ({ original }) => {
        const isActiveTicket = original.status === ACTIVED;
        return (
          <div>
            <div>
              <span
                onClick={() => handleDeleteTicket(original.id)}
                className="tw-cursor-pointer tw-mr-2"
              >
                <FontAwesomeIcon icon={faTrash} color="red" />
              </span>
              <span
                onClick={() => handleRejectTicket(original.id)}
                className="tw-cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} color="red" />
              </span>
              <span className="tw-ml-2">
                {isActiveTicket ? null : (
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetTicket());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <div>
      <div className="tw-flex tw-justify-between">
        <span className="tw-uppercase tw-text-2xl">Quản lý vé xe</span>
        <div>
          <button className="tw-bg-green-600 tw-rounded-md tw-p-1 tw-mb-4 tw-mr-2 tw-text-white">
            Danh sách vé huỷ
          </button>
          {availableOrder.length !== 0 ? (
            <button
              className="tw-bg-green-600 tw-rounded-md tw-p-1 tw-mb-4 tw-mr-2 tw-text-white"
              onClick={() => handleExportList()}
              disabled={availableOrder.length === 0 ? true : false}
            >
              Xuất dữ liệu
            </button>
          ) : null}
          <button
            className="tw-bg-green-600 tw-rounded-md tw-p-1 tw-mb-4 tw-text-white"
            onClick={() => history.push("/admin/order/create")}
          >
            Thêm vé xe
          </button>
        </div>
      </div>
      <div className="tw-flex tw-justify-between">
        <DatePicker
          className="tw-w-full tw-py-2 tw-border-b-2 tw-rounded-sm tw-border-gray-200 tw-font-bold tw-h-[47px]"
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <Table
        data={availableOrder}
        columns={columns}
        ExpandableTable={ExpandableTable}
      />
    </div>
  );
};

export default Order;
