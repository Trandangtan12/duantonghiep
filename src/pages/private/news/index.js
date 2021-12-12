import { faEdit, faTimes, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../../compornent/admin/table";
import { IsoStringConvert } from "../../../config";
import { actionGetNews } from "../../../redux/actions/news";
import { NewsService } from "../../../service/news";
import {useHistory} from 'react-router-dom'
const News = () => {
  const { news } = useSelector((state) => state.news);
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
  const history = useHistory()
  const handleDelete = async (id) => {
    alertify
      .confirm("Bạn có chắc chắn muốn xoá bài viết ?", async function () {
        const res = await NewsService.deleteNew(id);
        if (res.status === 200) {
          reloadActiveAPI();
        }
      })
      .set({ title: "Quản lý bài viết" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const [columns, setColumns] = useState([
    {
      Header: "Số thứ tự",
      accessor: "id",
      maxWidth: 80,
      maxHeight: 500,
      show: true,
    },
    {
      Header: "Hình ảnh",
      accessor: "image",
      show: true,
      maxHeight: 500,
      Cell : ({original}) =>{
        return <div className="tw-flex tw-justify-center">
           <img src={original.image} width={100} />
        </div>
      }
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
          <div>
            <div>
              <span
                // onClick={() => handleRejectTicket(original.id)}
                className="tw-cursor-pointer tw-mr-2"
              >
                <FontAwesomeIcon icon={faEdit} color="blue" onClick={()=>history.push(`/admin/news/edit/${original.id}`)} />
              </span>
              <span
                // onClick={() => handleDeleteTicket(original.id)}
                className="tw-cursor-pointer "
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  color="red"
                  onClick={() => handleDelete(original.id)}
                />
              </span>
            </div>
          </div>
        );
      },
    },
  ]);
  useEffect(() => {
    dispatch(actionGetNews());
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <>
      <div className="tw-flex tw-justify-between tw-align-middle tw-mb-5">
        <span className="tw-uppercase tw-text-2xl">Quản lý tin tức</span>
        <div>
          <Link to="/admin/news/create">
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
