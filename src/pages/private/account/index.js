import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../../compornent/admin/table';
import { IsoStringConvert } from '../../../config';
import { actionGetAllUsers } from '../../../redux/actions/user';

const Account = () => {
    const dispatch = useDispatch()
    const {avaibleUsers} = useSelector(state => state.auth)
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
          maxWidth: 200,
          accessor: "email",
          filterable: true,
          show: true,
        },
        {
          Header: "Giới tính",
          accessor: "gender",
          filterable: true,
          show: true,
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
        )
      }
    useEffect(() => {
        dispatch(actionGetAllUsers())
    }, []);
    return (
        <div>
            <Table data={avaibleUsers} columns={columns} ExpandableTable={ExpandableTable}/>
        </div>
    )
}

export default Account
