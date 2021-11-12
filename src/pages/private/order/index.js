import { faCheck, faTimes, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../compornent/admin/table";
import { actionGetBuses, actionGetTicket } from "../../../redux/actions/buses";
import { ACTIVED, listFilterStatus, WAITING_ACTIVE } from "./utility";

const Order = () => {
  const { availableOrder } = useSelector((state) => state.buses);
  const ExpandableTable = ({ data }) => {
    return (
      <table size='sm' responsive bordered>
        <tbody>
          <tr className="tw-flex tw-flex-wrap">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">shiw</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">show</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">shiw</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">show</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">shiw</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">show</td>
          </tr>
          <tr className="tw-flex tw-flex-wrap">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">shiw</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">show</td>
          </tr>
        </tbody>
      </table>
    )
  }
  const getStatus = (status) => {
    switch (status) {
      case ACTIVED:
        return {
          render: <div>Đã kích hoạt</div>,
        };
      case WAITING_ACTIVE:
        return {
          render: <div>Chờ kích hoạt</div>,
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
      maxWidth: 150,
      accessor: "quantity",
      filterable: true,
      show: true,
    },
    {
      Header: "Số tiền",
      maxWidth: 150,
      accessor: "totalPrice",
      filterable: true,
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
        return getStatus(status).render
      }
    },
    {
      Header: "Hành động",
      maxWidth: 150,
      show: true,
      Cell: ({ original }) => {
        return <div className="tw-flex tw-justify-center tw-gap-3">
          <button><FontAwesomeIcon icon={faCheck} color="green"  onClick={() =>{
            console.log(original.id)
          }}/></button>
          <button><FontAwesomeIcon icon={faTimes} color="red" onClick={() =>{
            console.log(original.id)
          }} /></button>
          <button><FontAwesomeIcon icon={faTrash} color="red"  onClick={() =>{
            console.log(original.id)
          }}/></button>
        </div>;
      },
    },
  ]);
  const dispatch = useDispatch();
  const { availableBuses } = useSelector((state) => state.buses);
  useEffect(() => {
    dispatch(actionGetTicket());
  }, []);
  return (
    <div>
      <Table data={availableOrder} columns={columns} ExpandableTable={ExpandableTable} />
    </div>
  );
};

export default Order;
