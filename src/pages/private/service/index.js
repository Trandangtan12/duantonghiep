import { faEdit, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetBuses, actionGetService } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
const ServiceCarPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const { availableService } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const handleDeleteBuses = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn xoá sản phẩm ?", async function () {
        const res = await BusesService.deleteService(id);
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
  const dependencies = [availableService.length, dispatchDependency];
  const ExpandableTable = ({ data }) => {
    return (
      <table size='sm' responsive bordered className="tw-bg-green-100 tw-rounded-lg">
      <tbody>
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
      maxHeight: 500,
      show: true,
      Cell: ({ original }) => {
        return <span>{original.id}</span>;
      },
    },
    {
      Header: "Hình ảnh",
      accessor: "image",
      show: true,
      maxHeight: 500,
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center">
            <img src={original.image} height="10" width="50" />
          </div>
        );
      },
    },
    {
      Header: "Tên chuyên xe",
      accessor: "name",
      show: true,
    },
    {
      Header: "Ghi chú",
      accessor: "description",
      maxHeight: 500,
      show: true,
    },
    {
      Header: "Hành động",
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center tw-gap-[20px]">
            <button
              onClick={() => history.push(`/admin/service/edit/${original.id}`)}
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
    dispatch(actionGetService());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <>
      <div className="tw-flex tw-justify-between tw-align-middle tw-mb-5">
        <span className="tw-uppercase tw-text-2xl">Quản lý dịch vụ</span>
        <div>
          <Link to="/admin/service/create">
            <button className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150">
              Thêm dịch vụ
            </button>
          </Link>
        </div>
      </div>
      <Table data={availableService} columns={columns} ExpandableTable={ExpandableTable}/>
    </>
  );
};

export default ServiceCarPage;
