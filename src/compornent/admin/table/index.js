import React, { useState } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
const Table = ({data , columns}) => {
  return(
    <div>
    <ReactTable
      data={data}
      defaultPageSize={10}
      // loading={true}
      columns={columns}
      previousText={'Trang trước'}
      nextText={"Trang tiếp "}
      rowsText={"Bản ghi"}
      pageText={"Trang"}
      ofText={'trên'}
      loadingText={"Đang tải bản ghi"}
      noDataText={"Không có bản ghi"}
    />
    <div>
    </div>
  </div>
  ) 
}
export default Table