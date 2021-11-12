import React, { useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import styled from "styled-components";
const ReactTableStyled = styled.div`
  .rt-td {
    text-align: center;
    height: 60px;
    line-height: 50px;
  }
`;
const Table = ({ data, columns, ExpandableTable }) => {
  return (
    <ReactTableStyled>
      <ReactTable
        data={data}
        defaultPageSize={10}
        // loading={true}
        columns={columns}
        previousText={"Trang trước"}
        nextText={"Trang tiếp "}
        rowsText={"Bản ghi"}
        pageText={"Trang"}
        ofText={"trên"}
        loadingText={"Đang tải bản ghi"}
        noDataText={"Không có bản ghi"}
        SubComponent={(row) => {
          return (
            <div style={{ padding: "10px" }}>
              <ExpandableTable data={row.original} />
            </div>
          );
        }}
      />
      <div></div>
    </ReactTableStyled>
  );
};
export default Table;
