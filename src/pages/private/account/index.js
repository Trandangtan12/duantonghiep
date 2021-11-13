import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../../compornent/admin/table';
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
            Header: "Hình ảnh",
            accessor: "image",
            maxWidth: 200,
            filterable: true,
            show: true,
            Cell : ({original}) =>{
                return <div className="tw-flex tw-justify-center"><img src={original.image} /></div>
            }
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
