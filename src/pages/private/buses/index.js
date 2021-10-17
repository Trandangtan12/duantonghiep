import {
  faCheck,
  faEdit,
  faInfoCircle,
  faTimes,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../compornent/admin/table";
import { actionGetBuses } from "../../../redux/actions/buses";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { BusesService } from "../../../service/productService";

const Buses = () => {
  const dispatch = useDispatch();
  const { availableBuses } = useSelector((state) => state.buses);
  const [isOpen, setIsOpen] = useState(false);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const handleDeleteBuses = (id) => {
    alertify.confirm("Bạn có chắc chắn muốn xoá sản phẩm ?", async function () {
        const res = await BusesService.deleteBuses(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Xoá thành công");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set(
        { title: "Xoá sản phẩm ?" },
      )
      .set("movable", false).set('ok', 'Alright!').set('notifier','position', 'top-right');
  };
  const dependencies = [availableBuses.length, dispatchDependency];
  const [columns, setColumns] = useState([
    {
      Header: "Số thứ tự",
      accessor: "id",
      show: true,
      Cell : ({original}) => {
        return <span>{original.id}</span>
      }
    },
    {
      Header: "Nội dung",
      accessor: "body",
      show: true,
    },
    {
      Header: "Tiêu đề",
      accessor: "title",
      show: true,
    },
    {
      Header: "Hành động",
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center tw-gap-[20px]">
            <button>
              <FontAwesomeIcon icon={faInfoCircle} color="blue" />
            </button>
            <button>
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
            <button className="tw-bg-gray-800 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150">
              Thêm chuyến xe
            </button>
          </Link>
        </div>
      </div>
      <Table data={availableBuses} columns={columns} />
    </>
  );
};

export default Buses;
