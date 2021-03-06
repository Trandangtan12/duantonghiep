import { faEdit, faPowerOff, faTrash , faCheck } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert, numberWithCommas } from "../../../config";
import { actionGetBuses } from "../../../redux/actions/buses";
import { BusesService } from "../../../service/productService";
import { BUSES_STATUS_FILTER } from "./utility";
const Buses = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const getStatusBusses = (status) =>{
    switch (status) {
      case "ACTIVED":
        return {
          render: (
            <div className="tw-bg-green-500 tw-text-white">Đang hoạt động</div>
          ),
        };
      case "WAITING_ACTIVE":
        return {
          render: (
            <div className="tw-bg-red-500 tw-text-white">Dừng hoạt động</div>
          ),
        };
      default:
        return null;
    }
  }
  const { availableBuses } = useSelector((state) => state.buses);
  const [dispatchDependency, setDispatchAcitive] = useState(0);

  const handleDeleteBuses = (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn xoá chuyến xe ?", async function () {
        const res = await BusesService.deleteBuses(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Xoá thành công");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Chuyến xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const handleOffBusses = (id) =>{
    alertify
      .confirm("Bạn có chắc chắn muốn dừng hoạt động chuyến xe ?", async function () {
        const res = await BusesService.deActivedBuses(id);
        if (res.status === 200) {
          reloadActiveAPI();
          alertify.success("Thao tác thành công !");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Chuyến xe" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  }
  const handleActivedBuses = (id) =>{
    alertify
    .confirm("Bạn có chắc chắn muốn hoạt động chuyến xe ?", async function () {
      const res = await BusesService.activedBuses(id);
      if (res.status === 200) {
        reloadActiveAPI();
        alertify.success("Thao tác thành công !");
      } else {
        alertify.warning("Có lỗi xảy ra");
      }
    })
    .set({ title: "Chuyến xe" })
    .set("movable", false)
    .set("ok", "Alright!")
    .set("notifier", "position", "top-right");
  }
  const dependencies = [availableBuses.length, dispatchDependency];
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
              Quận/huyện điểm đi
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.startDistrict_name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Xã phường điểm đi
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.startWard_name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Điạ chỉ chi tiết
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.detailAddressStart}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Quận/huyện điểm đến
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.endDistrict_name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Xã/phường điểm đến
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.endWard_name}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Điạ chỉ chi tiết
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {data.detailAddressEnd}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">
              Ngày khởi hành
            </td>
            <td className="twz-w-full lg:tw-w-[500px] tw-px-4">
              {`${data.date_active} ${data.start_time}`}
            </td>
          </tr>
        <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">Thời gian kết thúc</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {`${IsoStringConvert(data.end_time)}`}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">Số ghế</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.seat}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">Số ghế trống</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">{data.seat_empty}</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">Dịch vụ</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {data.service !== null || data.service !== 0
                ? data.service.map((elt) => elt.name).join(", ")
                : null}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4 tw-font-bold">Ngày tạo</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data.created_at)}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
  const [columns, setColumns] = useState([
    {
      Header: "Mã xe",
      accessor: "id",
      maxWidth: 80,
      filterable: true,
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
      maxWidth : 100,
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
      filterable: true,
      show: true,
      Cell: ({ original }) => {
        return <span title={original.name}>{original.name}</span>;
      },
    },
    {
      Header: "Điểm đi",
      accessor: "startPointName",
      maxHeight: 500,
      show: true,
    },
    {
      Header: "Điểm đến",
      accessor: "endPointName",
      maxHeight: 500,
      show: true,
    },
    {
      Header: "Giá (VNĐ)",
      accessor: "price",
      maxHeight: 500,
      show: true,
      Cell: ({ original }) => {
        return <span>{numberWithCommas(original.price)}</span>;
      },
    },
    {
      Header: "Trạng thái",
      accessor: "status",
      maxHeight: 500,
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
            {BUSES_STATUS_FILTER.map((elt) => (
              <option key={elt.type} value={elt.type}>
                {elt.name}
              </option>
            ))}
          </select>
        );
      },
      Cell: ({ original }) => {
        return getStatusBusses(original.status).render
      },
    },
    {
      Header: "Hành động",
      maxWidth: 100,
      Cell: ({ original }) => {
        return (
          <div className="tw-flex tw-justify-center tw-gap-[20px]">
            <button
              onClick={() => history.push(`/admin/buses/edit/${original.id}`)}
            >
              <FontAwesomeIcon icon={faEdit} color="blue" />
            </button>
            {
              original.status === "ACTIVED" ?  <button onClick={() => handleOffBusses(original.id)}>
              <FontAwesomeIcon icon={faPowerOff} color="red" />
            </button> :   <button onClick={() => handleActivedBuses(original.id)}>
              <FontAwesomeIcon icon={faCheck} color="green" />
            </button>
            }
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
      <Table
        data={availableBuses}
        columns={columns}
        ExpandableTable={ExpandableTable}
      />
    </>
  );
};

export default Buses;
