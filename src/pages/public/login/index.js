import React from "react";
import InputNumber from "../../../compornent/InputNumber";

const Login = () => {
  return (
    <div>
      <div className="tw-flex tw-justify-center tw-bg-gray-100">
        <div className="container sm:tw-mt-10 sm:tw-mb-10 tw-my-auto tw-max-w-md tw-border-2 tw-border-gray-200 tw-p-3 tw-bg-white tw-rounded-lg tw-shadow-2xl">
          {/* header */}
          <div className="tw-text-center tw-m-6">
            <h1 className="tw-text-3xl tw-font-semibold tw-text-gray-700 tw-mb-2">
            Đăng nhập
            </h1>
            <p className="tw-text-gray-500">
              Nhập số điện thoại để tiếp tục truy cập website
            </p>
          </div>
          {/* sign-in */}
          <div className="tw-m-6">
            <form className="tw-mb-4">
              <div className="tw-mb-6">
                <label
                  htmlFor="email"
                  className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                >
                  Số điện thoại
                </label>
                <InputNumber
                  type="number"
                  name="phomeNumber"
                  id="phomeNumber"
                  placeholder="Nhập số điện thoại"
                  className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                />
              </div>
              <div className="tw-mb-6">
                <button
                  type="button"
                  className="tw-w-full tw-px-3 tw-py-4 tw-text-white tw-bg-green-600 tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none tw-duration-100 tw-ease-in-out"
                >
                  Nhận mã xác thực
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
