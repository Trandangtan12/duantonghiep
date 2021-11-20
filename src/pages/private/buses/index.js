import {
  faEdit, faTrash
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetBuses } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import Modal from "./Modal";
const TdStyled = styled.td`
`
const Buses = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const { availableBuses } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  
  const handleDeleteBuses = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn xoá sản phẩm ?", async function () {
        const res = await BusesService.deleteBuses(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Xoá thành công");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Xoá sản phẩm ?" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const dependencies = [availableBuses.length, dispatchDependency];
  const ExpandableTable = ({ data }) => {
    return (
      <table size='sm' responsive bordered className="tw-bg-green-100 tw-rounded-lg">
      <tbody>
      <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày khởi hành</td>
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.date_active}</td>
        </tr>
        <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Số ghế</td>
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.seat}</td>
        </tr>
        <tr className="tw-flex tw-flex-wrap tw-mb-4">
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Điêm đi</td>
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.startPointName}</td>
        </tr>
        <tr className="tw-flex tw-flex-wrap tw-mb-4">
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Dịch vụ</td>
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.service !== null || data.service !== 0 ? data.service.map((elt)=> elt.name).join(", ")  :null}</td>
        </tr>
        <tr className="tw-flex tw-flex-wrap tw-mb-4">
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày tạo</td>
          <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{IsoStringConvert(data.created_at)}</td>
        </tr>
      </tbody>
    </table>
    )
  }

  const [columns, setColumns] = useState([
    {
      Header: "Số thứ tự",
      accessor: "id",
      maxWidth: 100,
      maxHeight : 500,
      show: true,
      Cell: ({ original }) => {
        return <span>{original.id}</span>;
      },
    },
    {
      Header: "Hình ảnh",
      accessor: "image",
      show: true,
      maxHeight : 500,
      Cell : ({original}) =>{
       return <div className="tw-flex tw-justify-center">
         <img src={original.image} height="10" width="50"/>
       </div>
      }
    },
    {
      Header: "Tên chuyên xe",
      accessor: "name",
      show: true,
    },
    {
      Header: "Điểm đi",
      accessor: "startPointName",
      maxHeight : 500,
      show: true,
    },
    {
      Header: "Điểm đến",
      accessor: "endPointName",
      maxHeight : 500,
      show: true,
    },
    {
      Header: "Giá",
      accessor: "price",
      maxHeight : 500,
      show: true,
    },
    {
      Header: "Hành động",
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center tw-gap-[20px]">
            <button onClick={() => history.push(`/admin/buses/edit/${original.id}`)}>
              <FontAwesomeIcon icon={faEdit} color="blue" />
            </button>
            <button onClick={() => handleDeleteBuses(original.id)}>
              <FontAwesomeIcon icon={faTrash} color="red" />
            </button>
          </div>
        );
      },
    },
  ]);
  useEffect(() => {
    dispatch(actionGetBuses());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <>
      <div className="tw-flex tw-justify-between tw-align-middle tw-mb-5">
        <span className="tw-uppercase tw-text-2xl">Quản lý chuyến xe</span>
        <div>
          <Link to="/admin/buses/create">
            <button className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150">
              Thêm chuyến xe
            </button>
          </Link>
        </div>
      </div>
      <Table data={availableBuses} columns={columns} ExpandableTable={ExpandableTable}/>
      <Modal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default Buses;
