import { faCheck, faTimes, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetTicket } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import { ACTIVED, listFilterStatus, REJECTED, WAITING_ACTIVE } from "./utility";

const Order = () => {
  const { availableOrder } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const dependencies = [availableOrder.length, dispatchDependency];
  const handleApprovalTicket = (id) =>{
    alertify
    .confirm("Bạn có chắc chắn muốn thay đổi trạng thái ?", async function () {
      const res = await BusesService.approvalTicket(id);
      if (res.status === 200) {
        reloadActiveAPI();
        alertify.success("Thay đôỉ thành công");
      } else {
        alertify.warning("Có lỗi xảy ra");
      }
    })
    .set({ title: "Cập nhật vé xe" })
    .set("movable", false)
    .set("ok", "Alright!")
    .set("notifier", "position", "top-right");
  }
  const handleRejectTicket = (id) =>{
    alertify
    .confirm("Bạn có chắc chắn muốn thay đổi trạng thái ?", async function () {
      const res = await BusesService.rejectTicket(id);
      if (res.status === 200 || res.status === 201) {
        reloadActiveAPI();
        alertify.success("Thay đôỉ thành công");
      } else {
        alertify.warning("Có lỗi xảy ra");
      }
    })
    .set({ title: "Cập nhật vé xe" })
    .set("movable", false)
    .set("ok", "Alright!")
    .set("notifier", "position", "top-right");
  }
  const handleDeleteTicket = async (id) =>{
    alertify
      .confirm("Bạn có chắc chắn muốn cập nhật vé xe ?", async function () {
        const res = await BusesService.deleteTicket(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Xoá thành công");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Cập nhật vé " })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  }
  const ExpandableTable = ({ data }) => {
    return (
      <table size='sm' responsive bordered className="tw-bg-green-100 tw-rounded-lg">
        <tbody>
        <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Tên chuyến xe</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.buses.name}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Điêm đi</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.buses.startPointName}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Điểm đến</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.buses.endPointName}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày đặt</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{IsoStringConvert(data.buses.created_at)}</td>
          </tr>
        </tbody>
      </table>
    )
  }
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
      case REJECTED :
        return {
          render: <div>Huỷ vé</div>,
        }

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
      maxWidth: 150,
      accessor: "quantity",
      // filterable: true,
      show: true,
    },
    {
      Header: "Số tiền",
      maxWidth: 150,
      accessor: "totalPrice",
      // filterable: true,
      show: true,
    },
    {
      Header: "Trạng thái",
      maxWidth: 150,
      accessor: "status",
      show: true,
      filterable: true,
      Filter : ({filter, onChange}) =>{
        return (
          <select onChange={(e) => {
            onChange(e.target.value)
          }}
          value={filter ? filter.value : ''}
          >
          <option value=''>Tất cả</option>
            {listFilterStatus.map((elt) =>(
              <option key={elt.type} value={elt.type}>{elt.name}</option>
            ))}
          </select>
        )
      },
      Cell : ({original})=>{
        const status = original.status
        return  getStatus(status).render
      }
    },
    {
      Header: "Hành động",
      maxWidth: 150,
      show: true,
      Cell: ({ original }) => {
        return <div className="tw-flex tw-justify-center tw-gap-3">
          <button><FontAwesomeIcon icon={faTrash} color="red"  onClick={() =>{
            handleDeleteTicket(original.id)
          }}/></button>
        </div>;
      },
    },
  ]);
  const dispatch = useDispatch();
  const { availableBuses } = useSelector((state) => state.buses);
  useEffect(() => {
    dispatch(actionGetTicket());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <div>
      <Table data={availableOrder} columns={columns} ExpandableTable={ExpandableTable} />
    </div>
  );
};

export default Order;
