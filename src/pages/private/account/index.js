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
    useEffect(() => {
        dispatch(actionGetAllUsers())
    }, []);
    return (
        <div>
            <Table data={avaibleUsers} columns={columns} />
        </div>
    )
}

export default Account
