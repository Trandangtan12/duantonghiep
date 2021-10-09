import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../../compornent/admin/table'
import { actionGetBuses } from '../../../redux/actions/buses'

const Order = () => {
    const [columns, setColumns] = useState([
        {
          Header: 'Số thứ tự',
          accessor: 'id',
          show: true,
        },
        {
          Header: 'Nội dung',
          accessor: 'body',
          show: true
        },
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          show: true
        }
      ])
    const dispatch = useDispatch()
    const {availableBuses} = useSelector(state => state.buses)
    useEffect(() => {
        dispatch(actionGetBuses())
      }, []);
    return (
        
        <div>
            <Table data={availableBuses} columns={columns}/>
        </div>
    )
}

export default Order
