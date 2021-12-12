import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { NewsService } from "../../../../service/news";
import Input from "../../../../compornent/admin/input/Input";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
import TextEditor from "../../../../compornent/textEditor";
import alertify from "alertifyjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../hookFormConfig";
const EditNews = () => {
  const [fileName, setFileName] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [contentDefalut, setContentDefalut] = useState("");
  const [urlImage, setUrlImage] = useState("https://via.placeholder.com/300");
  const handleSubmitForm = async (data) => {
    alertify
      .confirm("Bạn có chắc chắn muốn cập nhật bài viết ?", async function () {
        const res = await NewsService.updateNews(id, data);
        if (res.status === 200) {
          history.push("/admin/news");
          alertify.success("Cập nhật thành công");
        } else {
          alertify.warning("Có lỗi xảy ra");
        }
      })
      .set({ title: "Cập nhật bài viết" })
      .set("movable", false)
      .set("ok", "Alright!")
      .set("notifier", "position", "top-right");
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    let storeRef = firebase.storage().ref(`news/${file.name}`);
    storeRef.put(file).then((e) => {
      storeRef.getDownloadURL().then(async (url, e) => {
        setUrlImage(url);
      });
    });
  };
  useEffect(() => {
    const getInfoNews = async () => {
      const res = await NewsService.getInfoNew(id);
      if (res.status === 200) {
        reset(res.data);
        setUrlImage(res.data.image)
        setContentDefalut(res.data.description);
      }
    };
    getInfoNews();
  }, []);
  return (
    <div>
      <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-py-6 ">
        <div className="tw-text-center tw-flex tw-justify-between tw-px-6">
          <span className="tw-uppercase tw-text-2xl">Cập nhật bài viết</span>
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => {
              history.push("/admin/news");
            }}
          >
            Quay lại
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="tw-mb-2 tw-flex tw-justify-between lg:tw-px-3 tw-px-3 tw-gap-2">
          <div className="tw-w-full tw-flex tw-flex-wrap">
            <div className="tw-w-full lg:tw-w-4/12">
              <img
                src={`${
                  urlImage !== null
                    ? urlImage
                    : "https://via.placeholder.com/300"
                }`}
                className="tw-h-[339px]"
              />
            </div>
            <div className="lg:tw-w-8/12">
              <div className="tw-py-20 tw-h-[339px] tw-bg-gray-300 tw-px-2">
                <div className="tw-max-w-md tw-mx-auto tw-bg-white tw-rounded-lg tw-overflow-hidden md:tw-max-w-lg">
                  <div className="md:tw-flex">
                    <div className="tw-w-full">
                      <div className="tw-p-3">
                        <div className="tw-mb-2">
                          {" "}
                          <div className="tw-relative tw-h-40 tw-rounded-lg tw-border-dashed tw-border-2 tw-border-gray-200 tw-bg-white tw-flex tw-justify-center tw-items-center hover:tw-cursor-pointer">
                            <div className="tw-absolute">
                              <div className="tw-flex tw-flex-col tw-items-center ">
                                {" "}
                                <span>{fileName}</span>
                                <i className="fa fa-cloud-upload fa-3x tw-text-gray-200" />{" "}
                                <span className="tw-block tw-text-blue-400 tw-font-normal">
                                  Tải ảnh lên
                                </span>{" "}
                              </div>
                            </div>{" "}
                            <input
                              onChange={handleChangeImage}
                              type="file"
                              className="tw-h-full tw-w-full tw-opacity-0"
                              name
                            />
                          </div>
                          <div className="tw-flex tw-justify-between tw-items-center tw-text-gray-400">
                            {" "}
                            <span>Accepted file type:.img only</span>{" "}
                            <span className="tw-flex tw-items-center ">
                              <i className="fa fa-lock tw-mr-1" /> secure
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-mb-3 tw-px-6">
          <Input
            lable="Tiêu đề bài viết"
            placeholder="Tiêu đề bài viết"
            type="text"
            register={register}
            fieldName={"name"}
            errors={errors}
            required={true}
            messageErrors={"Vui lòng nhập thông tin"}
          />
        </div>
        <div className="tw-mb-3 tw-px-6">
          <TextEditor
          errors={errors}
            label="Mô tả bài viết"
            setValue={setValue}
            fieldName={"description"}
            defaultValueProps={contentDefalut}
          />
        </div>
        <footer className="">
          <div className="container tw-mx-auto tw-px-4">
            <div className="tw-flex tw-flex-wrap tw-items-center md:tw-justify-end tw-justify-center tw-mb-10 tw-gap-5">
              <button
                type="submit"
                // onClick={() => handleSubmit()}
                className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default EditNews;
