import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserApi } from "../../../../service/userService";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
export const ACTION_LOGIN = "ACTION_LOGIN";
const SignIn = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [redirectToRef, setRedirectToRef] = useState(false);
  const { user } = UserApi.isAuthenticated();
  const onHandleSubmit = async (data, e) => {
    try {
      e.target.reset();
      await UserApi.signin(data).then((dataUser) => {
        dispatch({
          type: ACTION_LOGIN,
          payload: dataUser.data,
        });
        UserApi.authenticated(dataUser.data, () => {
          setRedirectToRef(true);
        });
      });
    } catch (err) {
      setError(err.response.data);
    }
  };
  const redirectUser = () => {
    if (redirectToRef) {
      if (user.role == 1) {
        return <Redirect to="admin/dashboard" />;
      } else {
        return <Redirect to="user/dashboard" />;
      }
    }
  };
  return (
    <div>
      {redirectUser()}
      <div className="tw-flex tw-justify-center tw-bg-gray-100">
        <div className="container tw-w-[30rem] sm:tw-mt-10 sm:tw-mb-10 tw-my-auto tw-max-w-md tw-border-2 tw-border-gray-200 tw-p-3 tw-bg-white tw-rounded-lg tw-shadow-2xl">
          {/* header */}
          <div className="tw-text-center tw-m-6">
            <h1 className="tw-text-3xl tw-font-semibold tw-text-gray-700 tw-mb-2">
              Đăng Nhập
            </h1>
            <div
              style={{ display: error ? "block" : "none" }}
              className="tw-block tw-bg-red-200 tw-text-red-500 tw-border tw-border-red-light tw-w-full tw-p-3 tw-rounded tw-mb-4"
            >
              {error}
            </div>
          </div>
          {/* sign-in */}
          <div className="tw-m-6">
            <form className="tw-mb-4" onSubmit={handleSubmit(onHandleSubmit)}>
              <div className="tw-mb-6">
                <label
                  htmlFor="email"
                  className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  id=""
                  className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                />
              </div>
              <div className="tw-mb-6">
                <label
                  htmlFor="password"
                  className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                >
                  password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id=""
                  className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                />
              </div>
              <div className="tw-mb-6">
                <button
                  type="submit"
                  className="tw-w-full tw-px-3 tw-py-4 tw-text-white tw-bg-green-600 tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none tw-duration-100 tw-ease-in-out"
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="tw-mb-6">
                <p>
                  Bạn khum có tài khoản? Hãy{" "}
                  <Link className="tw-text-green-500" to="/signup">
                    Đăng ký ^^
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;