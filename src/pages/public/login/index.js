import React from "react";
import InputNumber from "../../../compornent/InputNumber";

const Login = () => {
  return (
    <div className="lg:tw-flex">
      <div className="lg:tw-w-1/2 xl:tw-max-w-screen-sm">
        <div className="tw-mt-10 tw-px-12 sm:tw-px-24 md:tw-px-48 lg:tw-px-12 lg:tw-mt-16 xl:tw-px-24 xl:tw-max-w-2xl">
          <h2
            className="tw-text-center tw-text-4xl tw-text-green-600 font-display tw-font-semibold lg:tw-text-left xl:tw-text-5xl
                    xl:text-bold"
          >
            Đăng nhập{" "}
          </h2>
          <div className="tw-mt-12">
            <form>
              <div>
                <div className="tw-text-sm tw-font-bold tw-text-gray-700 tw-tracking-wide">
                  Số điện thoại
                </div>
               <InputNumber/>
              </div>
              <div className="tw-mt-10">
                <button
                  className="tw-bg-indigo-500 tw-text-gray-100 tw-p-4 tw-w-full tw-rounded-full tw-tracking-wide
                  tw-font-semibold font-display focus:tw-outline-n focus:tw-shadow-outline hover:tw-bg-indigo-600
                  tw-shadow-lg"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="tw-mt-12 tw-text-sm font-display tw-font-semibold tw-text-gray-700 tw-text-center">
              Bạn chưa có tài khoản ?{" "}
              <a className="tw-cursor-pointer tw-text-indigo-600 hover:tw-text-indigo-800">
                Đăng kí ngay
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-hidden lg:tw-flex tw-items-center tw-justify-center tw-bg-indigo-100 tw-flex-1 tw-h-screen">
        <div className="">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/19/19/17/athens-2659589_960_720.jpg"
            className="tw-max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
