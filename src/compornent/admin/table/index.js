import React, { useState } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
const Table = ({data}) => {
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
  return(
    <div>
    <ReactTable
      data={data}
      columns={columns}
    />
    <div>
    </div>
  </div>
  ) 
}
export default Table