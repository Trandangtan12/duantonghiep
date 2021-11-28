import { faEdit, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import {
  actionGetAllBusesTypes,
  actionGetBuses,
  actionGetService,
} from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
const BusesType = () => {
  const TableStyled = styled.div`
    .rt-th:first-child {
      display: none;
    }
    .rt-td:first-child {
      display: none;
    }
  `;
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const { availableBusesTypes } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const handleDeleteBuses = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn xoá sản phẩm ?", async function () {
        const res = await BusesService.deleteVehicel(id);
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
  const dependencies = [availableBusesTypes.length, dispatchDependency];
  const ExpandableTable = ({ data }) => {
    return (
      <table
        size="sm"
        responsive
        bordered
        className="tw-bg-green-100 tw-rounded-lg"
      >
        <tbody>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày tạo</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.created_at)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const [columns, setColumns] = useState([
    {
      Header: "Số thứ tự",
      accessor: "id",
      maxWidth: 100,
      maxHeight: 500,
      show: true,
      Cell: ({ original }) => {
        console.log(original);
        return <span>{original.id}</span>;
      },
    },
    {
      Header: "Loại xe",
      accessor: "name",
      show: true,
    },
    {
      Header: "Ngày tạo",
      accessor: "created_at",
      show: true,
      Cell : ({original}) =>{
        return <span>{IsoStringConvert(original.created_at)}</span>
      }
    },
    {
      Header: "Ngày cập nhật",
      accessor: "created_at",
      show: true,
      Cell : ({original}) =>{
        return <span>{IsoStringConvert(original.updated_at)}</span>
      }
    },
    {
      Header: "Hành động",
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center tw-gap-[20px]">
            <button
              onClick={() =>
                history.push(`/admin/vehicel-type/edit/${original.id}`)
              }
            >
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
    dispatch(actionGetAllBusesTypes());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <TableStyled>
      <div className="tw-flex tw-justify-between tw-align-middle tw-mb-5">
        <span className="tw-uppercase tw-text-2xl">Quản lý loại xe</span>
        <div>
          <Link to="/admin/vehicel-type/create">
            <button className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150">
              Thêm loại xe
            </button>
          </Link>
        </div>
      </div>
      <Table
        data={availableBusesTypes}
        columns={columns}
        ExpandableTable={ExpandableTable}
      />
    </TableStyled>
  );
};

export default BusesType;
