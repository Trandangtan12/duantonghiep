import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetNews } from "../../../redux/actions/news";
const News = () => {
  const { news } = useSelector((state) => state.news);
  console.log(news);
  const dispatch = useDispatch();
  const ExpandableTable = ({ data }) => {
    return (
      <table
        size="sm"
        responsive
        bordered
        // className="tw-bg-green-100 tw-border-[1px] tw-border-green-500 tw-rounded-lg"
      >
        <tbody>
          <tr className="tw-flex tw-flex-wrap tw-mb-4 tw-mt-2">
            <span
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            >
              {}
            </span>
          </tr>
        </tbody>
      </table>
    );
  };
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const dependencies = [news.length, dispatchDependency];
  const [columns, setColumns] = useState([
    {
      Header: "Số thứ tự",
      accessor: "id",
      maxWidth: 80,
      maxHeight: 500,
      show: true,
    },
    {
      Header: "Tiêu đề",
      accessor: "name",
      show: true,
      maxHeight: 500,
    },
    {
      Header: "Ngày tạo",
      accessor: "created_at",
      maxHeight: 500,
      show: true,
      Cell: ({ original }) => {
        return (
          <span title={original.created_at}>
            {IsoStringConvert(original.created_at)}
          </span>
        );
      },
    },
    {
      Header: "Hành động",
      accessor: "created_at",
      maxHeight: 500,
      show: true,
      Cell: ({ original }) => {
        return (
          <span title={original.created_at}>
            {IsoStringConvert(original.created_at)}
          </span>
        );
      },
    },
  ]);
  useEffect(() => {
    dispatch(actionGetNews());
  }, [...dependencies]);
  return (
    <>
      <div className="tw-flex tw-justify-between tw-align-middle tw-mb-5">
        <span className="tw-uppercase tw-text-2xl">Quản lý tin tức</span>
        <div>
          <Link to="/admin/buses/create">
            <button className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150">
              Thêm bài viết
            </button>
          </Link>
        </div>
      </div>
      <Table data={news} columns={columns} ExpandableTable={ExpandableTable} />
    </>
  );
};

export default News;
