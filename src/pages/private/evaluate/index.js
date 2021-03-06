import { faStar } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Table from "../../../compornent/admin/table";
import { getAllRating } from "../../../redux/actions/rating";
const Evaluate = () => {
  const TableStyled = styled.div`
  .rt-th:first-child {
    display: none;
  }
  .rt-td:first-child {
    display: none;
  }
`;
  const dispatch = useDispatch();
  const { rating } = useSelector((state) => state.rating);
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
        </tbody>
      </table>
    );
  };
  const [columns, setColumns] = useState([
    {
      Header: "Mã xe",
      accessor: "buses_id",
      maxWidth: 100,
      filterable: true,
      show: true,
      Cell : ({original}) =>{
        return  <Link to={`/productdetail/${original.buses_id}`}>
          <span>{original.buses_id}</span>
        </Link>
      }
    },
    {
      Header: "Đánh giá",
      accessor: "rating_point",
      maxWidth: 300,
      filterable: true,
      show: true,
      Cell: ({ original }) => {
        return (
          <span>
            {" "}
            {[...Array(Number(original.rating_point))].map((x, i) => (
              <FontAwesomeIcon icon={faStar} color="#FFCC1D" />
            ))}
          </span>
        );
      },
    },
    {
      Header: "Nội dung",
      accessor: "description",
      maxWidth: 300,
      filterable: true,
      show: true,
    },
    {
      Header: "Tên khách hàng",
      accessor: "user_name",
      maxWidth: 200,
      filterable: true,
      show: true,
    },
    {
      Header: "Thời gian đánh giá",
      accessor: "rating_time",
      maxWidth: 200,
      filterable: true,
      show: true,
    },
  ]);
  useEffect(() => {
    dispatch(getAllRating());
  }, []);
  return (
    <div>
      <div className="tw-mb-4">
        <span className="tw-uppercase tw-text-2xl">Quản lý đánh giá</span>
      </div>
      <TableStyled>
      <Table
        data={rating}
        columns={columns}
        ExpandableTable={ExpandableTable}
      />
      </TableStyled>
      
    </div>
  );
};

export default Evaluate;
