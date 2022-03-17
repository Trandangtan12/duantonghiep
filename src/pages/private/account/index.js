import { faEdit } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetAllUsers } from "../../../redux/actions/user";

const Account = () => {
  const history = useHistory();
  const TableStyled = styled.div`
    .rt-th:first-child {
      display: none;
    }
    .rt-td:first-child {
      display: none;
    }
  `;
  const dispatch = useDispatch();
  const { avaibleUsers } = useSelector((state) => state.auth);
  const [columns, setColumns] = useState([
    {
      Header: "Số tài khoản",
      accessor: "id",
      maxWidth: 60,
      filterable: true,
      show: true,
    },
    {
      Header: "Tên khách hàng",
      accessor: "name",
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
      Header: "Email",
      maxWidth: 250,
      accessor: "email",
      filterable: true,
      show: true,
      Cell: ({ original }) => {
        return <span title={original.email}>{original.email}</span>;
      },
    },
    {
      Header: "Giới tính",
      accessor: "gender",
      // filterable: true,
      show: true,
    },
    {
      Header: "Ngày tạo",
      accessor: "created_at",
      show: true,
      Cell: ({ original }) => {
        return <span>{IsoStringConvert(original.created_at)}</span>;
      },
    },
    {
      Header: "Ngày cập nhật",
      accessor: "created_at",
      show: true,
      Cell: ({ original }) => {
        return <span>{IsoStringConvert(original.updated_at)}</span>;
      },
    },
    {
      Header: "Hành động",
      show: true,
      Cell: ({ original }) => {
        return (
          <div>
            {original.id !== 1 ? (
              <FontAwesomeIcon
                icon={faEdit}
                color="blue"
                className="tw-cursor-pointer"
                onClick={() =>
                  history.push(`/admin/account/permission/${original.id}`)
                }
              />
            ) : null}
          </div>
        );
      },
    },
  ]);
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
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày tạo</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data?.created_at)}
            </td>
          </tr>
          <tr className="tw-flex tw-flex-wrap tw-mb-4">
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">Ngày cập nhật</td>
            <td className="tw-w-full lg:tw-w-[500px] tw-px-4">
              {IsoStringConvert(data?.updated_at)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, []);
  return (
    <TableStyled>
      <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-py-6 ">
        <div className="tw-text-center tw-flex tw-justify-between">
          <span className="tw-uppercase tw-text-2xl">Quản lý tài khoản</span>
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => {
              history.push("/admin/account/permission/create");
            }}
          >
            Thêm phân quyền
          </button>
        </div>
      </div>
      <Table
        data={avaibleUsers}
        columns={columns}
        ExpandableTable={ExpandableTable}
      />
    </TableStyled>
  );
};

export default Account;
