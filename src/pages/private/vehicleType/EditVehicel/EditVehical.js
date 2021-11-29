import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Input from "../../../../compornent/admin/input/Input";
import { BusesService } from "../../../../service/productService";

const EditVehical = () => {
    const { id } = useParams();
  const history = useHistory()
  const [serviceInfo, setServiceInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();
  const handleSubmitForm = (data) => {
    alertify.confirm("Bạn có chắc chắn muốn cập nhật loại xe ?", async function () {
      const res = await BusesService.updateVehicel(id,data);
      if (res) {
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Cập nhật thành công !");
        history.push("/admin/vehicel-type");
      }
    }).set({ title: "Loại xe" })
    .set("movable", false)
    .set("ok", "Alright!")
    .set("notifier", "position", "top-right");
  };
  useEffect(() => {
    const getService = async () =>{
        const res = await BusesService.getVehicel(id)
        if(res.status === 200){
            setServiceInfo(res.data)
            reset(res.data)
        }
    }
    getService()
  }, []);
  return (
    <>
      <div>
        <section className="bg-blueGray-50">
          <div className="">
            <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded-lg bg-blueGray-100 tw-border-0">
              <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-px-6 tw-py-6 ">
                <div className="tw-text-center tw-flex tw-justify-between">
                  <span className="tw-uppercase tw-text-2xl">Cập nhật loại xe</span>
                  <button
                    className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button"
                    onClick={() => {
                      history.push("/admin/service");
                    }}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
              <div className=" tw-flex-auto lg:tw-px-3">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                  <div className="tw-flex tw-flex-wrap">
                    <div className="tw-w-full tw-px-4">
                      <div className="tw-relative tw-w-full tw-mb-3">
                        <Input
                          lable="Loại xe"
                            placeholder="Loại xe"
                            type="text"
                            register={register}
                            fieldName={"name"}
                            errors={errors}
                            required={true}
                            messageErrors={"Vui lòng nhập thông tin"}
                        />
                      </div>
                    </div>
                  </div>
                  <footer className="">
                    <div className="container tw-mx-auto tw-px-4">
                      <div className="tw-flex tw-flex-wrap tw-items-center md:tw-justify-end tw-justify-center tw-mb-10 tw-gap-5">
                        <button
                          type="submit"
                          className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
                        >
                         Cập nhật
                        </button>
                      </div>
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EditVehical
