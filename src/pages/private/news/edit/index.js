import React, { useEffect, useState } from "react";
import { useHistory , useParams } from "react-router";
import { NewsService } from "../../../../service/news";
import Input from "../../../../compornent/admin/input/Input";
import { useForm } from "react-hook-form";
import TextEditor from "../../../../compornent/textEditor";
import alertify from "alertifyjs";
const EditNews = () => {
    const { id } = useParams();
    console.log(id);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();
  const [contentDefalut, setContentDefalut] = useState('');
  const handleSubmitForm = async (data) => {
    alertify
    .confirm("Bạn có chắc chắn muốn cập nhật bài viết ?", async function () {
      const res = await NewsService.updateNews(id,data);
      if (res.status === 200) {
        history.push("/admin/news")
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
  useEffect(() => {
  const getInfoNews = async() =>{
      const res = await NewsService.getInfoNew(id)
      if (res.status === 200) {
        reset(res.data);
        setContentDefalut(res.data.description)
      }
  }
  getInfoNews()
  }, [])
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
                Tạo mới
              </button>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default EditNews;