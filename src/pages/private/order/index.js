import { faMoneyCheck, faTimes } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert, numberWithCommas } from "../../../config";
import { actionGetTicket } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import {
  ACTIVED,
  ATM,
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
        className="tw-bg-green-100 tw-rounded-lg"
      >
        <tbody>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Tên chuyến xe</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Điêm đi</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.startPointName}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Điểm đến</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.buses.endPointName}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày đặt</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.buses.created_at)}
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
          render: <div>Đã thanh toán</div>,
        };
      case WAITING_ACTIVE:
        return {
          render: <div>Chưa thanh toán</div>,
        };
      case REJECTED:
        return {
          render: <div>Huỷ vé</div>,
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
      Header: "ID",
      accessor: "id",
      maxWidth: 60,
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
      Cell : ({original}) =>{
        return numberWithCommas(original.totalPrice)
      }
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
      Cell: ({original}) => {
        return getPaymentMethod(original.paymentMethod).render
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
        <h1 className="tw-text-[2rem] tw-mb-2">Quản lý vé xe</h1>
        <button
          className="tw-bg-green-600 tw-rounded-md tw-p-3 tw-mb-4 tw-text-white"
          onClick={() => history.push("/admin/order/create")}
        >
          Thêm vé xe
        </button>
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
